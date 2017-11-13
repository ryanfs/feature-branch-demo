# Group Git practice

## Practice

### Setup

* **Clone** this repo
* create a new repo on github called `LAB_U03_D08_Group-Git`
* `cd` into your local repo and change the origin remote `git remote set-url origin YOUR-GIT-URL`


All of your work will happen in your new repo.  You are **not** making any PRs to the original repo

### Creating new branches

For the following steps please pick **one** team member's repo and do all the work there.  The purpose of this exercise is to work with git/github as a team.  You can either all clone from one member's repo in a separate directory or adjust the remote origin url with `set-url` like from above.

Make sure at least one person reviews each PR.

#### Step 1 (as a team)
* Checkout a branch called `add-people`
* On the bottom of `person.js`, add `var people = [];`
* Create a PR for this branch, review it, and merge it

#### Step 2 (each member)

Each member must do work on his/her own branch but help each other out as a team!  (This means no touching anyone else's keyboard)

* Then, each person on your team should check out their own branch from master
  - eg: `git checkout add-stacey-to-people`
  - Create yourself and add yourself to the array
  - Make a PR for your branch
* Once everyone has made a PR, review each one and merge.  After the first, everyone will have to rebase their branch!

#### Step 3 (each member)
* Check out a branch to give your name a [prefix](http://departments.weber.edu/qsupport&training/Data_Standards/Name.htm#PREFIX) or [suffix](http://departments.weber.edu/qsupport&training/Data_Standards/Name.htm#SUFFIX)
  - eg: `git checkout change-stacey-to-capt-stacey`
  - Make a PR but **do not yet merge**

#### Step 4 (as a team)
* Checkout a branch called `rename-person-to-student`
* Rename the `Person` class to `Student`
* Create a PR for this branch, review it, and merge it

#### Step 5 (each member)
* Each remaining PR should now have a conflict with master
* `pull` down master on each local machine, merge in master to each branch, and notice the resulting conflict
* Resolve these conflicts and push your branch back up
* Have someone review it, then merge it

#### Step 6 (as a team)

Give your code-base one final check

* Each PR should be merged
* You should have an array of `Student` instances (from step 4)
* Each student should have a prefix or suffix  (from step 3 and 5)


example of final code:

```javascript
var stacey = new Student({name: 'Capt Stacey Winnatour IV', age: 30, gender: 'female'});
// ...

var students = [stacey, tracey, lacey, macey];
```
