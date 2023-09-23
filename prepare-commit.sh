# A script to prepare files for syncing to github

mkdir upload
mkdir upload/test

cp -r .dtfw/. upload
cp prepare-commit.sh upload

cp main.ts upload/test
cp package.json upload/test
