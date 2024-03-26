#!/usr/bin/env sh

CleanUp() {
  rm -rf .husky
}

Install() {
  yarn husky install
}

PreCommit() {
  yarn husky add .husky/pre-commit "yarn lint-staged"
  yarn husky add .husky/pre-commit "git status"
}

CommitMessage() {
  yarn husky add .husky/commit-msg "yarn commitlint --config ./config/commitlint.config.js --edit $1"
}

PrePush() {
  yarn husky add .husky/pre-push "yarn test:coverage"
  yarn husky add .husky/pre-push "git status"
}

Setup() {
  CleanUp
  Install
  PreCommit
  CommitMessage
  PrePush
}

if [ "$CI" = true ]
then
  echo "Skipping husky setup, since env is set to CI=true"
else
  Setup
fi
