# Vortex — historical branch audit

**Проверено:** 23.11.2026  
**Default branch:** `main`  
**Результат:** inventory complete for the current GitHub branch listing; deletion audit remains open.

## 1. Snapshot

- GitHub API returned 157 branch refs across two pages (`per_page=100`): 155 non-default refs plus `main` and `gh-pages`.
- No open pull requests were returned by the current repository query.
- `main` currently reports `protected: false`; no required status checks are configured. Direct pushes can bypass the Quality workflow.
- Branch refs are not protected by default; this does not establish whether a branch is obsolete or safe to delete.

## 2. Cleanup decision

No branch was deleted in this audit. A branch may contain unique commits, unfinished work, or an unmerged fix even when its PR is closed or absent. Deleting by age/name alone would risk losing work.

Before deletion, compare each non-default branch with `main` and classify it:
- **Merged / redundant:** all commits are reachable from `main`, or its changes are demonstrably superseded.
- **Open work:** unique commits remain and the branch is tied to an active requirement; open or create a PR.
- **Historical reference:** unique commits are not required for 1.0 but may be useful for recovery; archive/tag or retain until owner-approved cleanup.
- **Unknown:** cannot prove safety; retain.

## 3. Required repository guard

Enable GitHub branch protection or a repository ruleset for `main` in GitHub Settings:
- Require a pull request before merging (at least one approval may be waived for a single-owner repository, but do not permit bypass by automation without intent).
- Require the `test-build` job from Quality checks.
- Require branches to be up to date before merge, if practical.
- Block force pushes and branch deletion.
- Keep GitHub Pages deployment as a post-merge workflow, not a required pre-merge check.

The connected GitHub capability used for this audit can read branch protection but does not expose a branch-protection mutation action. Therefore settings were not changed here. Until protection is enabled, treat `main` as unprotected and avoid direct runtime-code changes.

## 4. Next safe cleanup pass

1. Export the complete branch list and compare each branch head against `main` (ahead/behind and changed files).
2. Cross-check each branch with closed/merged PRs and current requirements in `docs/PROJECT_SPEC.md`.
3. Produce a proposed deletion list with evidence; do not delete unknown refs.
4. Obtain owner approval for the final deletion batch.

**No Firebase project, Production data, Firestore Rules, billing, or application runtime code was changed by this audit.**
## 5. Exact reconciliation against closed pull requests (23.11.2026)

Branch refs were joined to the two pages of closed PR metadata by exact `head.ref` and exact `head.sha`. Result:

- 155 non-default refs were listed.
- 139 refs exactly match the head SHA of a merged PR. These are **high-confidence deletion candidates**: the corresponding PR is merged and its exact branch head is recorded in GitHub. The commits remain preserved in Git history/PR metadata.
- 16 refs do not match a merged PR head. They were individually compared with `main`; each has unique commits, so none is safe to delete merely because it is old.

### 5.1. Merged-PR branch candidates

All 139 exact matches are candidates for deletion after the owner reviews the list. The authoritative evidence is the closed merged PR's `head.ref`, `head.sha`, and `merged_at`; this audit intentionally avoids duplicating a 139-row table. Use the GitHub closed PR list and compare it with the current branch inventory. Exact branch/PR mapping was verified during this audit.

### 5.2. The 16 refs that need a separate decision

| Branch | Comparison with main | Finding / action |
| --- | --- | --- |
| `chore/repository-hygiene-audit-2026-11-20` | 3 unique commits; docs/PROJECT_SPEC.md | PR #63 closed unmerged; superseded by merged consolidation PR #65. Candidate after confirming no unique doc correction is needed. |
| `docs/audit-group-callables-spark-blocker-2026-11-20` | 1 unique commit; docs/PROJECT_SPEC.md | PR #69 closed unmerged; audit note is historical. Retain until its conclusion is confirmed in current spec. |
| `docs/audit-offline-queue-2026-11-20` | 1 unique commit; docs/PROJECT_SPEC.md | PR #70 closed unmerged; offline audit was later consolidated. Candidate after checking the exact note is represented in current docs. |
| `docs/close-self-destruct-audit-2026-11-20` | 1 unique commit; docs/PROJECT_SPEC.md | PR #68 closed unmerged; likely superseded by merged scope cleanup PR #67. Verify checklist status before deletion. |
| `docs/roadmap-concurrent-send-pass` | 1 unique commit; ROADMAP.md | PR #148 closed unmerged; newer merged PRs #147, #149 and #150 cover the concurrent send/idempotency work. Candidate after verifying no unique acceptance note remains. |
| `docs/security-review-current-state` | 1 unique commit; docs/FIREBASE_SECURITY_REVIEW.md | PR #40 closed unmerged; superseded by merged refresh PR #42. Candidate. |
| `docs/update-vortex-a11y-progress` | 1 unique commit; docs/PROJECT_SPEC.md | PR #105 closed unmerged; superseded by merged final progress PR #106. Candidate. |
| `feat/client-group-membership-callables` | 14 unique commits; Functions, Firebase config and client | Related callable implementation; Spark/Blaze dependency is out of 1.0. Do not merge. Keep as historical reference until final owner-approved deletion. |
| `feat/client-group-membership-callables-main` | 11 unique commits; Rules and client | Related callable implementation; PR #32 closed unmerged and explicitly blocked by Spark/Blaze. Do not merge. |
| `feat/client-group-membership-callables-v2` | 15 unique commits; Functions, Firebase config and client | Related callable implementation; PR #31 closed unmerged and explicitly blocked by Spark/Blaze. Do not merge. |
| `fix/auth-tabs-keyboard-accessibility` | 4 unique commits; AuthScreen/authTabs | No matching closed PR. Compared AuthScreen against `main`: no differing source lines remain; the final merged branch `fix/auth-tabs-keyboard-accessibility-final` (PR #101) carries the current implementation. Redundant candidate. |
| `fix/virtual-feed-programmatic-scroll-state` | 1 unique commit; VirtualMessageList | PR #52 closed unmerged; later merged PR #53 fixes the same historical scroll-state issue. The current implementation includes the programmatic navigation bottom-state update. Redundant candidate. |
| `security/restrict-client-group-deletion` | 2 unique commits; firestore.rules/tests | No matching closed PR. Both the `type != 'group'` delete guard and its regression test are already present on `main`; no branch-only behavior was found in the two changed files. Redundant candidate after owner review. |
| `test/browser-responsive-dialogs` | 11 unique commits; package/styles/browser fixture | PR #133 closed unmerged; later merged PRs #134/#135 added the final viewport regression matrix. Candidate only after confirming all test assertions are in main. |
| `test/delegated-group-admin-removal-2026-11-21` | 1 unique commit; Rules tests | PR #87 closed unmerged; later merged PR #88 covers delegated admin boundaries. Candidate after confirming exact test cases. |
| `test/offline-queue-browser-process-restart` | 2 unique commits; ChatWindow/browser fixture | No matching closed PR; later merged PR #78 is the v2 process-restart test. The branch's ChatWindow has the pre-PR #144 presence/typing subscriptions and lacks the merged listener cleanup; do not merge. The restart fixture is superseded; redundant candidate after owner review. |

## 6. Tooling limitation and execution state

- The GitHub connector exposes branch listing, compare, create/update ref, PR, and file operations, but no branch-ref deletion operation. No refs were deleted or rewritten.
- A safe deletion list is now evidence-backed: 139 exact merged-PR refs are candidates; 16 refs remain under review. A user with repository admin access can delete candidates in GitHub after review, or use `git push origin --delete <branch>` for each approved name.
- Current `main` remains unprotected. Configure required Quality checks and block force-push/deletion in GitHub Settings before the next multi-branch development cycle.
- Quality checks and GitHub Pages deployment both passed on current `main` SHA `1751c3e22032daf0b310c9ab8874ca3e56992051` (23.11.2026).

**Decision:** do not merge the 16 unresolved refs into `main`. No code is waiting to be merged from the 139 merged-PR candidates. Keep the three callable branches outside 1.0 due to the Spark constraint; review the two security/ChatWindow-related unassociated branches before cleanup.

## 7. Массовая очистка подтверждённых merged refs

- Подготовлен полный машиночитаемый список из **139** веток: `docs/branch-cleanup-manifest.json`. Каждая запись содержит имя ветки, ожидаемый SHA, номер merged PR и дату объединения.
- Добавлен `scripts/cleanup-merged-branches.ps1`: проверяет репозиторий `origin`, обновляет refs, сверяет фактический SHA каждой ветки с manifest и удаляет только точные совпадения через `--force-with-lease`. Если ветка изменилась после аудита — она автоматически пропускается.
- `main` и `gh-pages` явно исключены. Скрипт запрашивает одно общее подтверждение, поэтому вручную выбирать/удалять ветки по одной не нужно.
- Предварительный просмотр: `powershell -ExecutionPolicy Bypass -File .\\scripts\\cleanup-merged-branches.ps1 -WhatIf`.
- Массовое удаление: `powershell -ExecutionPolicy Bypass -File .\\scripts\\cleanup-merged-branches.ps1`, затем ввести `yes`.
- Удаление refs не выполнялось этим аудитом: доступная GitHub-интеграция не предоставляет delete-ref операцию. Скрипт подготовлен для однократного запуска в локальном clone с правом push.
