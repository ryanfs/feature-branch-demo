## Figuring where you at

* [`git log`](https://git-scm.com/docs/git-log) - show all commits
* [`git branch`](https://git-scm.com/docs/git-branch) - shows current branch
* [`git status`](https://git-scm.com/docs/git-status) - show files with changes
  - `git st` is a common alias

## Looking at changes

* [`git diff`](https://git-scm.com/docs/git-diff) - the diff since last commit
* `git diff SOMESHA` - the diff since `SOMESHA`
* `git diff BRANCH-NAME` - the diff from another branch
* [`git show`](https://git-scm.com/docs/git-show) - show the diff of last commit
* `git show SOMESHA` - show the diff of `SOMESHA`

## Staging changes

Use [`git add`](https://git-scm.com/docs/git-add)

* `git add -A`/`git add .`/`git add -a`
  - Don't use these. (except maybe your first commit)
* `git add FILENAME_OR_DIR`, this is better
* `git add -p`
  - stages in _hunks_
  - allows you to see each line of diff while deciding what to include
* [`git reset`](https://git-scm.com/docs/git-reset) to un-stage your changes

## Committing changes

If you have staged your changed properly all you need is
* [`git commit`](https://git-scm.com/docs/git-commit)
  - ex `git commit -m 'add person.js'`
  - use **present tense** for your messages
* `git commit --amend` to add to previous commit
  - Use this if you forgot to add something to your last commit
  - If you have pushed before doing this, you will need force-push

## Pulling

* [`git fetch`](https://git-scm.com/docs/git-fetch) - don't use this
  - gets the changes of a branch/branches
* [`git pull`](https://git-scm.com/docs/git-pull) - use this
  - gets the changes _and_ updates your branches accordingly

## Pushing

Use [`git push`](https://git-scm.com/docs/git-push)

* `git push origin BRANCH-NAME`
* `git pushf origin BRANCH-NAME`
  - add the alias `pushf = push --force-with-lease` to `.gitconfig` if you don't have it
  - Never `pushf` if you don't need to
  - Always make sure you know what you are overriding! `git diff origin/BRANCH-NAME`


## Debugging history

One of the many great things about `git` is it makes diagnosing issues easy.

Check these out !!

* [`git blame`](https://git-scm.com/docs/git-blame)
  - `git blame FILENAME` - see history of file chages
  - add alias `praise = blame` for positivity!
* [`git bisect`](https://git-scm.com/docs/git-bisect)
  - This is effectively a _binary search_ to find a commit that broke something



## Checking out branches

Use [`git checkout`](https://git-scm.com/docs/git-checkout)

* `git checkout BRANCH-NAME`
* `git checkout -` go back to last branch
* `git co` is a common alias


## Merging and rebasing branches

### merging

[`git merge`](https://git-scm.com/docs/git-merge)

Typically branches, should be _merged_ into master.  **This should be done from Github**.  Merging takes every commit and along with a merge-commit from the branch and adds that to the target branch (usually `master`)

**Ex**: From `master`: `git merge BRANCH-NAME` takes all the commits from `BRANCH-NAME` and a merge-commit and adds those to master.


### rebasing

[`git rebase`](https://git-scm.com/docs/git-rebase)

Rebasing rewrites history.  This adds the commits from another branch and puts your commits on top of your branch.  (Actually it puts _new copies_ of your commits on top). Typically, we rebase `master` from another branch.  This does not add an extra merge-commit.

**Ex**: From some branch: `git rebase master` will take anything that was added to master since branched off (or last rebased) and put those commits _before yours_.  Your commits are then added on top of your branch.


## Adding a feature

* Do NOT commit directly to master
* Check out a branch from master `git checkout my-new-feature`
  - where `my-new-feature` is the branch name
* Add your code and commit `git commit -m 'add my new feature'`
* Push your branch to GitHub `git push origin my-new-feature`
* Make a PR on GitHub
* Review the changes
* Make requested updates, commit again
* Merge PR into master from github

## If there are conflicts

* From the new branch, `git rebase master`
* You will see an error like `CONFLICT (content): Merge conflict in FILENAME`
* Manually resolve the conflicts.  Use your human mind.
  - Git cannot tell you what to do here.  Figure out what changed since you branched off of master
  - What is the goal of your changes?  Why did they touch the same or adjacent lines?
* Once the conflicts are resolved:
  - `git add FILENAME`, `git rebase --continue`
* If there are more conflicts, you must resolve those too
* Finally you can push the rebased branch back up to github `git pushf origin my-new-feature`
  * You will have to force-push since you are re-writing history
* Now you should be able to merge from github
* If you mess up the rebase along the way you can always `git rebase --abort` and start over


## Things to remember

To make sure you don't lose your work always keep these things in mind

* Commit often - keep your commits small
* Push often - once every few commits
* Look at the diff from origin before force-pushing
* Do not push to master. Make a PR
* **Look at [the docs](https://git-scm.com/docs/)**.  Do not just copy-paste from Stack Overflow without knowing what it does
