# movieApp

## Deploying via Netlify
#### 1. using netlify account
    - After logging in to account, click on  new site from git
    - in the create new site page under continuous deployment chose gitHub(need to log into the github account prior to this step)
    - then search you repository and select
    - then click deploy site
    - site will be live in few seconds.

#### 2. netlify + terminal
    - in the VS code terminal, go into your directory and run ```npm run build```. this will create build folder in the directory
    - then in login to netlify account and click on ```site``` on the menu bar
    - go to hte directory using file explorer and drag and drop the build folder in the are that say ```Want to deploy a new site without connecting to Git?
Drag and drop your site folder here```
    - site will be deployed in seconds

#### 3. manual deploy in terminal
    - in teh vs code terminal, run ```npm run build```
    - then run ```npm install netlify-cli -g```
    - then run ```netlify deploy```
        - using up and down arrow select ```create & configure a new site``` and Enter
        - then choose your name tem then press Enter
        - for site name press Enter for random site name(we can change it later in the netlify account or we can give a name here)
        - for directory delete ```(.)``` and type ```./build``` and press Enter
    - run ```netlify deploy - prod``` 
    - then for publish directory again delete ```(.)``` and type ```./build``` and press Enter
    - site is deployed check in the netlify account




## Deploying via Github pages.
### Steps
1. In package.json
    - 1st give a property called ```"homepage": "https://username.github.io/repositoryName"``` before dependencies.
    - Then in "scripts" add two properties as ```"predeploy": "npm run build"``` & ```"deploy": "gh-pages -d -build"``` 
2. In the VS code terminal:
    - Stop the localhost server if running
    - In the terminal run command "```git remote add origin https://github.com/username/repositoryName```" if not already not aded to origin then run command "```git remote set-url origin https://github.com/repositoryName/repositoryName```"
    - Then run command "```npm run build```" (if error occurs as gh-pages not recognized -> run command "```npm install gh-pages --save-dev```" )
    - then "```npm run deploy```" 
    - it will notify deployed
