param([ValidateSet('dev', 'start', 'build', 'lint', 'test')][string]$Mode = 'dev')
$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot
$nodeCommand = Get-Command node -ErrorAction SilentlyContinue
$runtimeNode = if ($nodeCommand) { $nodeCommand.Source } else { Join-Path $env:USERPROFILE '.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' }
if (-not (Test-Path -LiteralPath $runtimeNode)) { throw 'Install Node.js 20.9+ with npm, then run npm install.' }
if (-not (Test-Path -LiteralPath 'node_modules/next')) { throw 'Dependencies are missing. Run npm ci using a Node.js installation with npm.' }
switch ($Mode) {
  'dev' { & $runtimeNode 'node_modules/next/dist/bin/next' dev --hostname 127.0.0.1 --port 3000 }
  'start' { & $runtimeNode 'node_modules/next/dist/bin/next' start --hostname 127.0.0.1 --port 3000 }
  'build' { & $runtimeNode 'node_modules/next/dist/bin/next' build }
  'lint' { & $runtimeNode 'node_modules/eslint/bin/eslint.js' . }
  'test' {
    & $runtimeNode 'node_modules/typescript/bin/tsc' -p tsconfig.test.json
    if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
    & $runtimeNode --test '.test-output/tests/logic.test.js'
  }
}
exit $LASTEXITCODE
