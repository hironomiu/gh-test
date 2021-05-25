# gh-test

GitHub Client & Actions 練習用レポ

## 設定

コマンド補完について

[Homebrew Shell Completion](https://docs.brew.sh/Shell-Completion)

bash

```
if type brew &>/dev/null; then
  HOMEBREW_PREFIX="$(brew --prefix)"
  if [[ -r "${HOMEBREW_PREFIX}/etc/profile.d/bash_completion.sh" ]]; then
    source "${HOMEBREW_PREFIX}/etc/profile.d/bash_completion.sh"
  else
    for COMPLETION in "${HOMEBREW_PREFIX}/etc/bash_completion.d/"*; do
      [[ -r "$COMPLETION" ]] && source "$COMPLETION"
    done
  fi
fi
```

zsh

```
if type brew &>/dev/null; then
  FPATH=$(brew --prefix)/share/zsh/site-functions:$FPATH

  autoload -Uz compinit
  compinit
fi
```

## issue

create

```
$ gh issue create
```

## Actions

[node.js.yml](./.github/workflows/node.js.yml)

## 動作確認コード

### setup

```
$ yarn install
```

### test

```
$ yarn test
```
