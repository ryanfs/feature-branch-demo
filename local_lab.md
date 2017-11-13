## Mini-Lab: Resolving Local conflicts

### Init a new repository
- `mkdir conflict_repo`
- `cd conflict repo`
- `git init`

### Create a source code file
- `touch convo.js`
- `git add .` and `git commit -m "init"`
- open `convo.js` and add the following function:
  ```javascript
  function hello() {
    return 'Hello World';
  }
  ```
- view the current change with `git diff`
- add/commit the change, make sure you are on the master branch
- take a moment and use `git log`, `git status`, and `git show HEAD` to view the committed change

### Implement a feature using a feature branch
- `git checkout -b bye`
- Add a `goodbye` function to `convo.js`
  ```javascript
  function goodbye() {
    return 'Goodbye World';
  }
  ```
- Commit this change on the `bye` branch **But Do Not Merge it Back to Master Yet**

### Implement another feature on a separate branch
- `git checkout master` *important*
  - You must switch back to master before checking out a new feature branch.  Note that checking out a new branch always includes all commits from its parent.

- `git checkout -b example`
  - Observe that our changes from `bye` are not present


- Amend `convo.js` as follows:
  ```javascript
  function hello() {
    return 'Hello World';
  }

  const greeting = hello();
  console.log(greeting);
  ```
- Commit the change on `example`

### Merge both features into master and resolve conflicts
- `git checkout master`
- `git merge bye` --this should not cause any issues
- `git merge example` -- this should cause a conflict
- Resolve the conflict either by removing the added lines from git and organizing the code or by just deleting one of the offending changes
- `git add convo.js` once the conflict has been resolved
- `git commit`

*__NOTE:__* `git status` and `git branch` will be helpful while resolving conflicts  
