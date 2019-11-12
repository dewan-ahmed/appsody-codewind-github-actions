# demo-github-actions

* Fork this repository 
* From your GitHub, find this forked repository and go to Settings --> Secrets
* Add these two parameters:
  * DOCKER_HUB: Add your docker hub username
  * DOCKER_HUB_SECRET: Add your docker hub password
* Edit lines 22 & 24 of .github/workflows/actions-nodejs.yml file to reflect your own image repository info
* Click on Actions tab on your repo and create a new workflow
* Commit a change to your master branch and watch the CI build kick-in!
