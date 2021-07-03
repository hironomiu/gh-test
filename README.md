# gh-test

GitHub Client & Actions 練習用レポ

## 公式サイト
[GitHub CLI ](https://cli.github.com/)

## Install

```
brew install gh
```

GitHubとの認証

```
% gh auth login
? What account do you want to log into? GitHub.com
? What is your preferred protocol for Git operations? SSH
? Generate a new SSH key to add to your GitHub account? No
? How would you like to authenticate GitHub CLI? Login with a web browser
```

ブラウザで未ログインの場合はログインする
![gh-01](./images/gh-01.png)

```
! First copy your one-time code: XXXX-XXXX <- ブラウザに入力する
```

XXXX-XXXX(実際に表示された値)を入力する

![gh-02](./images/gh-02.png)

```
- Press Enter to open github.com in your browser... 
✓ Authentication complete. Press Enter to continue...

- gh config set -h github.com git_protocol ssh
✓ Configured git protocol
✓ Logged in as hironomiu
```
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
