# movieApp


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
