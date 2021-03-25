/* 

$ git init // Initialize local Git Repository
$ git add <file> // add file(s) to staging area (many times)
$ git status // chechk status of working tree
$ git commit // commit changes to local repository
$ git push // Push to remote repository

*******
cd ~/Desktop/Coding
cd .. // go to parent folrde
mkdir test_repo
cd test_repo
git init
git add style.css // to staging area
git add .
git status
git ls // to see the files in curretn repository
git commit -m "creted style.css" // -m = message
$ git checkout -b newbranch // create new branch
git add .
git commit -m ""
:wq // for entering additional message
git checkout master/newbranch // change between branches
git merge master // merge with newbranch


*******
Files that has already git. included
$ git remote show origin
git remote
git remote -v //  origin	https://github.com/schacon/ticgit (fetch)
git status
git add -a/ git add .
git status
git push -u origin main
git status // changes to be commited
git commit -m ""






// cd - chnage directory
// mkdir - make new directory

1.
miki1@DESKTOP-NTIIL5S MINGW64 ~/Desktop
$ cd Coding

2.
miki1@DESKTOP-NTIIL5S MINGW64 ~/Desktop/Coding
$ mkdir test_repo

3.
miki1@DESKTOP-NTIIL5S MINGW64 ~/Desktop/Coding
$ cd test_repo   // ~/Desktop/Coding/test_repo

4.
miki1@DESKTOP-NTIIL5S MINGW64 ~/Desktop/Coding/test_repo
$ git init
Initialized empty Git repository in C:/Users/miki1/Desktop/Coding/test_repo/.git/

6.
miki1@DESKTOP-NTIIL5S MINGW64 ~/Desktop/Coding/test_repo (master)
$ git add style.css

7.
miki1@DESKTOP-NTIIL5S MINGW64 ~/Desktop/Coding/test_repo (master)
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   style.css


miki1@DESKTOP-NTIIL5S MINGW64 ~/Desktop/Coding/test_repo (master)
$


///////////////////////////////////////////////////////////////
miki1@DESKTOP-NTIIL5S MINGW64 ~/Desktop/Coding/test_repo (master)
$ git config --global user.name "misavojtova"

miki1@DESKTOP-NTIIL5S MINGW64 ~/Desktop/Coding/test_repo (master)
$ git config --global user.email miki16.12@seznam.cz
/////////////////////////////////////////////////////////////////

8. 
miki1@DESKTOP-NTIIL5S MINGW64 ~/Desktop/Coding/test_repo (master)
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   style.css


miki1@DESKTOP-NTIIL5S MINGW64 ~/Desktop/Coding/test_repo (master)

9.
$ git commit -m "creted style.css"
[master (root-commit) 8ab431a] creted style.css
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 style.css

10.
miki1@DESKTOP-NTIIL5S MINGW64 ~/Desktop/Coding/test_repo (master)
$ git status
On branch master
nothing to commit, working tree clean

11.
miki1@DESKTOP-NTIIL5S MINGW64 ~/Desktop/Coding/test_repo (master)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   style.css

no changes added to commit (use "git add" and/or "git commit -a")

12. // add all to staging area
miki1@DESKTOP-NTIIL5S MINGW64 ~/Desktop/Coding/test_repo (master)
$  git add .

miki1@DESKTOP-NTIIL5S MINGW64 ~/Desktop/Coding/test_repo (master)
$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   style.css


miki1@DESKTOP-NTIIL5S MINGW64 ~/Desktop/Coding/test_repo (master)
$




















*/
