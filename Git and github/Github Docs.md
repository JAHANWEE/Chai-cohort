# Chai-cohort :organized by Hitesh Choudhary and Piyush Garg.
## Kickstart your Development journey with Git and Github

## Table of Contents

- [Basics of Git and GitHub](#basics-of-git-and-github)
- [Installation and Setup](#installation-and-setup)
- [Getting Started](#getting-started)
- [Features](#features)
- [Installation](#installation)
- [Commit practices](#commit-standards)
- [Best Practices](#best-practices)
- [License](#license)

## Basics of Git and GitHub:
[Git:](https://docs.github.com/en/get-started/start-your-journey/about-github-and-git#about-git) 
- Is a VCS [Version Control System ](https://www.geeksforgeeks.org/version-control-systems/)
- Allows developers to track changes in code, collaborate, and ensure them to see history of their work.
- It ensures that teams can work on the same project without overwriting each other's contributions.

[Github:](https://docs.github.com/en/get-started/start-your-journey/about-github-and-git#about-github
)
- An online platform that integrates Git to host , store , share , collaborate , make pull and push requests , handle issue tracking , review code and do much more.


## Installation and Setup:
To install the project, follow these steps:
1. Clone the repository.
2. Open the project directory.

#### 1. [Install Git](https://docs.github.com/en/get-started/getting-started-with-git/set-up-git#using-git)

**Windows:**

[Git's official website](https://git-scm.com/)
```bash
# Download from git-scm.com and run installer
git --version  # Verify installation
```

**macOS:**

```bash
brew install git
```

**Linux:**

```bash
sudo apt-get update
sudo apt-get install git
```

#### 2. Configure Git

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@chaicode.com"
```

# Setting Up GitHub
 1. [Create a GitHub Account](https://github.com/)
 2. [Generate an SSH Key ](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)

 ```bash
 ssh-keygen -t rsa -b 4096 -C "youremail@example.com"
 ```
 3. Clone Repository

```bash
git clone https://github.com/username/repository.git
```
## Basic Git Commands

Here are the commands you'll use daily:

```bash
#Initialize a Repository
git init

#Clone an existing repository from GitHub.
git clone <repository_url>

# Check status
git status

# Stage changes
git add .

# Commit changes
git commit -m "type: description"

# Push changes
git push origin branch-name

# Get updates
git pull origin branch-name

#View the commit history
git log

```
# Working with Pull Requests
1. Create a Branch:
```bash
git checkout -b feature-branch
```
2. Make Changes and Commit:
```bash
git add .
git commit -m "Implemented feature"
```
3. Push Changes:
```bash
git push origin feature-branch
```

# Issue Tracking
Use GitHub Issues to track bugs, tasks, and feature requests. To create an issue:

1. Go to the Issues tab of your repository.
2. Click on New Issue, fill in the title and description, and submit it.
3. You can assign issues to team members, label them, or create milestones.

## Commit Standards

We follow the Conventional Commits specification:

```
<type>: <description>
```

## Best Practices

- **Commit Regularly**: Save your progress frequently by committing your changes. This ensures a clear history of your work and helps in tracking issues if they arise.

- **Use Descriptive Commit Messages**: Write clear and meaningful commit messages that explain *what* and *why* changes were made. This improves collaboration and code review processes.

- **Pull Updates Regularly**: Always pull the latest changes before starting new work to stay updated with the team's progress and minimize merge conflicts.

### For more info : Visit [Github's official Documentation](https://docs.github.com/en/get-started/start-your-journey/about-github-and-git)
