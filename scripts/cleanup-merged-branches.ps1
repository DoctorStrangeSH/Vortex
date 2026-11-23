[CmdletBinding()]
param([switch]$WhatIf)

$ErrorActionPreference = 'Stop'
$repo = 'DoctorStrangeSH/Vortex'
$manifestPath = Join-Path $PSScriptRoot '..\docs\branch-cleanup-manifest.json'

if (-not (Get-Command git -ErrorAction SilentlyContinue)) { throw 'Git не найден. Установите Git for Windows.' }
$root = (& git rev-parse --show-toplevel 2>$null)
if ($LASTEXITCODE -ne 0 -or -not $root) { throw 'Запустите скрипт из клонированного репозитория Vortex.' }
$root = $root.Trim()
$remote = (& git -C $root remote get-url origin 2>$null)
if ($LASTEXITCODE -ne 0 -or $remote -notmatch 'github\.com[:/]DoctorStrangeSH/Vortex(?:\.git)?$') {
    throw "Remote origin не указывает на $repo. Найдено: $remote"
}
if (-not (Test-Path $manifestPath)) { throw "Не найден manifest: $manifestPath" }
$manifest = Get-Content -Raw -Path $manifestPath | ConvertFrom-Json
if ($manifest.repository -ne $repo -or $manifest.count -ne 139) { throw 'Manifest не прошёл проверку. Удаление отменено.' }

Write-Host "Репозиторий: $repo" -ForegroundColor Cyan
Write-Host "Кандидатов: $($manifest.count). Каждая ветка будет сверена с SHA." -ForegroundColor Yellow
if (-not $WhatIf) {
    $answer = Read-Host 'Удалить только эти 139 веток при полном совпадении SHA? (yes/no)'
    if ($answer -cne 'yes') { Write-Host 'Отменено. Ничего не удалено.'; exit 0 }
} else {
    Write-Host 'WhatIf: будет только предварительная проверка, без удаления.' -ForegroundColor Yellow
}

& git -C $root fetch origin --prune
if ($LASTEXITCODE -ne 0) { throw 'Не удалось обновить remote refs. Удаление отменено.' }

$deleted = 0; $skipped = 0; $failed = 0
foreach ($item in $manifest.branches) {
    $branch = [string]$item.branch
    $expected = [string]$item.expected_sha
    if ([string]::IsNullOrWhiteSpace($branch) -or $branch -in @('main','gh-pages') -or $expected -notmatch '^[0-9a-f]{40}$') {
        Write-Warning "Пропущена некорректная/защищённая запись: $branch"; $skipped++; continue
    }
    $ref = "refs/heads/$branch"
    $remoteLine = @(& git -C $root ls-remote --heads origin $ref)
    if ($LASTEXITCODE -ne 0) { Write-Warning "Не удалось проверить $branch"; $failed++; continue }
    if ($remoteLine.Count -eq 0) { Write-Host "Уже отсутствует: $branch"; $skipped++; continue }
    $actual = (($remoteLine[0] -split '\s+')[0]).Trim()
    if ($actual -ne $expected) {
        Write-Warning "SHA изменился, оставляю ветку: $branch"; $skipped++; continue
    }
    if ($WhatIf) { Write-Host "[WhatIf] $branch (PR #$($item.pull_request))"; continue }

    $lease = '--force-with-lease=' + $ref + ':' + $expected
    & git -C $root push $lease origin ":$ref"
    if ($LASTEXITCODE -eq 0) { Write-Host "Удалена: $branch" -ForegroundColor Green; $deleted++ }
    else { Write-Warning "GitHub отклонил удаление: $branch"; $failed++ }
}
Write-Host ''
Write-Host "Итог — удалено: $deleted; пропущено: $skipped; ошибок: $failed."
Write-Host 'main и gh-pages защищены и не входят в manifest.'
if ($WhatIf) { Write-Host 'Предпросмотр завершён. Для удаления запустите скрипт без -WhatIf.' }
