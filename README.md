# Group Git

### Objectives
*After this lesson students will be able to*
- Describe the different layers of the data model git exposes to the user
- Explain basic git commands in terms of this model, e.g., commit, add, log
- Safely work on a feature branch and merge it back to the master branch
- Be aware of a few pitfalls when working with git in a Group

### Review
First, let's call to mind some of the `git` commands we've already seen.

What does each one do?  Are there similarities in basic functionality and code/objects handled by each command?

### The Golden Rule

*__Don't change what's been shared__*

![shalt_not](imgs/shalt_not.jpg)

It's not the end of the world if it happens, but it's on you to make the world right

![cleanup](imgs/cleanup.jpg)

We'll fill in the gaps as we go, but if you remember anything from this lecture it should be these maxims.

- Do not (accidentally) change committed history that has been pushed to `origin`

- If you do, make sure to either undo the change or ensure that all team members have a consistent history before proceeding

### Git's Data Model for Users

![junio](imgs/junio.jpg)

Thank the guy on the right, but don't forget the guy on the left.

*From wikipedia*
> Torvalds cited an example of a source-control management system needing 30 seconds to apply a patch and update all associated metadata, and noted that this would not scale to the needs of Linux kernel development, where syncing with fellow maintainers could require 250 such actions at once. For his design criteria, he specified that patching should take no more than three seconds, and added three more points:

> Take Concurrent Versions System (CVS) as an example of what not to do; if in doubt, make the exact opposite decision

> Support a distributed, BitKeeper-like workflow

> Include very strong safeguards against corruption, either accidental or malicious

> The development of Git began on 3 April 2005. Torvalds announced the project on 6 April; it became self-hosting as of 7 April. The first merge of multiple branches took place on 18 April. Torvalds achieved his performance goals; on 29 April, the nascent Git was benchmarked recording patches to the Linux kernel tree at the rate of 6.7 patches per second. On 16 June Git managed the kernel 2.6.12 release.

> Torvalds turned over maintenance on 26 July 2005 to Junio Hamano, a major contributor to the project. Hamano was responsible for the 1.0 release on 21 December 2005, and remains the project's maintainer.

Data Layer | Description
---- | ----
Working Directory | Local file system (your computer's files like normal)
Staging Area | Changes that have been `add`ed and are ready to commit
History | Changes that have been committed in a series of commits uniquely identified by a `SHA1` hash
Remote | An associated version of the repository on a remote host accessible via networking
Reflog | All branch checkouts, stashes, and commits, as well as other events in the repo *within about the past month*
Stash | Changes that have been `stashed` and can be retrieved later, similar to a stack of pseudo-commits

The first three layers are ones we've seen before.  The working directory is the normal files on your machine; the staging area are files that will be included in the next commit; history denotes all committed changes.

We've also been working with `remote`s when cloning/pushing from github.

The other two layers are utility areas that git exposes, mostly as a view into its inner workings and as a hail-mary toolkit when things get rough or when a quick and dirty transition is helpful.  Generally speaking, the `reflog` should not be trusted as a reliable layer to work with and is mostly there to get you out of a jam; the `stash` can be used for quickly stowing away a few simple changes and getting them back later.

### Git Command Review

Now let's go over some `git` commands in light of this data model.  Each command will typically either be used to inspect the changes at a particular layer(s) or it will transition a set of changes from one layer to another.

Command | Function | Data Layer(s)
----- | ----- | -----
add | move changes | WD -> Staging
commit | move changes | Staging -> History
status | inspect changes | WD/Staging/History (via what commit is the last one)
show | inspect changes | WD/History (if `SHA1` is given)
branch | inspect | WD/History (via what branch is current)
diff | inspect changes | WD<-->History (by default other possibilities exist but this is the main one)
log | inspect | History
push | move changes/sync | Local History -> Remote History
pull | move changes/sync | Remote History -> Local History/WD/Current Branch
fetch | move changes/sync | Local History -> Local History(background)
checkout | move index | WD (moves WD reference to a different HEAD of History)
merge | move changes | applies new changes from one branch to the HEAD of the current branch
rebase | move changes | applies changes from a different branch's history underneath the current branch's history
reset | un-set changes | History -> Staging/WD/Null depending on what flag is set

### __Zoinks__

Let's look at an example and outline the steps up to committing and pushing to origin:

#### (I Do): Feature Branching + Merging

#### Main branch
- Init repo
- Touch `hello.js`
- write `helloWorld()`
- Add the changes
- Commit
- Create remote
- Push to origin

What story can we tell using the model of git's data layers from above?

#### Feature Branch
- `checkout -b` bye
- Write `bye()` in `bye.js`
- Commit
- Add `convo.js`
- Commit + run
- `checkout` master + fix
- `checkout` bye + merge changes from master
- `checkout` master and merge in `bye`

#### Conflict Resolution
- `touch` stringly.js
- `checkout -b` toUpper
- add `function toUpper()` + commit
- `checkout -b` toLower + commit
- add `function toLower()`
- Merge both back into `master`
- Resolve conflict

### (You Do) Local Conflict Resolution
Go [here](local_lab.md) and follow the instructions

- Init a new repository
- Make an `init` commit before making any changes
- Add a file `index.js` with very skeletal html, i.e., just an opening and closing `html` tag, `head`, and `body`
- Commit
- Create a new repo on github
- Add remote origin to your local repo
- Push to origin

What story could we tell in light of the data model described above?  What commands could we use to inspect the work we've done so far?  

We can inspect the changes on origin by prefacing a branch or `SHA1` with `origin/`.  Try it with `show` or `log`

__NOTE:__ `git log --oneline --decorate --graph --all` is your friend

#### Feature Branches

As a project grows, it can help substantially to break out sets of changes into their own branches which are subsequently merged back in to the `master` branch.  As you know, these branches can also be pushed to github.

Let's check out two feature branches and merge them back in to master

- `git checkout -b nav`
- Add a few commits to make a nav
- `git checkout master`; `git checkout -b main`
- Add a few commits to make a main container
- `git checkout master`
  - How can we view all of the changes we've just made and their relation to one another?
- `git merge nav`
  - Inspect history and the current branch at this point
- `git merge main`
  - What happened?  How do we get back on track?

## Extra Resources
- [An Incredible Git Tutorial](http://gitimmersion.com/) probably the second most helpful git thing I've ever come across . . .by our friend `Jim Weirich`

- [a nice set of cheat sheets](https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet) from Atlassian

- [A more in depth and practical look at git rebase](https://dev.to/maxwell_dev/the-git-rebase-introduction-i-wish-id-had) Helpful to strengthen your rebase sorcery

- [Linus Torvalds nerding out about git](https://www.youtube.com/watch?v=4XpnKHJAok8) Buckle up

- [Obligatory Junio Hamano interview](https://www.youtube.com/watch?v=qs_xS1Y6nGc)
