# Windows Python Install

## Non-Admin PowerShell
```
Set-ExecutionPolicy RemoteSigned -Scope LocalMachine -Force; $v='3.10.11'; $u='https://raw.githubusercontent.com/pyenv-win/pyenv-win/master/pyenv-win/install-pyenv-win.ps1'; $p="$env:TEMP\install-pyenv-win.ps1"; iwr -UseBasicParsing $u -OutFile $p; & $p; $r="$env:USERPROFILE\.pyenv\pyenv-win"; $env:PYENV=$r; $env:PYENV_ROOT=$r; $env:PYENV_HOME=$r; $env:Path="$r\bin;$r\shims;$([Environment]::GetEnvironmentVariable('Path','User'));$([Environment]::GetEnvironmentVariable('Path','Machine'))"; if(-not((& "$r\bin\pyenv.bat" versions --bare) -contains $v)){& "$r\bin\pyenv.bat" install $v}; & "$r\bin\pyenv.bat" global $v; & "$r\bin\pyenv.bat" rehash; '@echo off`r`n"%PYENV_ROOT%\bin\pyenv.bat" exec python %*' | Set-Content -Encoding ASCII "$r\shims\python3.bat"; python3 --version​
```

## Admin PowerShell

```
$code='Set-ExecutionPolicy RemoteSigned -Scope LocalMachine -Force; $v="3.10.11"; $u="https://raw.githubusercontent.com/pyenv-win/pyenv-win/master/pyenv-win/install-pyenv-win.ps1"; $p="$env:TEMP\install-pyenv-win.ps1"; iwr -UseBasicParsing $u -OutFile $p; & $p; $r="$env:USERPROFILE\.pyenv\pyenv-win"; $env:PYENV=$r; $env:PYENV_ROOT=$r; $env:PYENV_HOME=$r; $env:Path="$r\bin;$r\shims;$([Environment]::GetEnvironmentVariable(''Path'',''User''));$([Environment]::GetEnvironmentVariable(''Path'',''Machine''))"; if(-not((& "$r\bin\pyenv.bat" versions --bare) -contains $v)){& "$r\bin\pyenv.bat" install $v}; & "$r\bin\pyenv.bat" global $v; & "$r\bin\pyenv.bat" rehash; "@echo off`r`n""%PYENV_ROOT%\bin\pyenv.bat"" exec python %*" | Set-Content -Encoding ASCII "$r\shims\python3.bat"; python3 --version; pause'; $f="$env:TEMP\setup-pyenv-python310.ps1"; $code | Set-Content -Encoding UTF8 $f; Start-Process powershell -Verb RunAs -ArgumentList "-NoProfile -ExecutionPolicy Bypass -File `"$f`""
```