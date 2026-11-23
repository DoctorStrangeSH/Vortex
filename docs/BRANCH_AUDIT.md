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