# [ INIT ]
Copyright 2017 SDCO Partners

1. Getting Started 
  * Folder Structure
  * Starting with [INIT]
  * Initializing New Project
  * Editing Current Project
  * Deploying To Server
  * Updates
  * Feature Documentation
2. Dev Environment
  * Gulp config
  * SASS
  * Javascript 
  * Components & Subcomponents
  * Functions.PHP
3. Known Bugs 
4. Team


## Getting Started

### Folder Structer

```
|--/[ INIT ]/
|  |
|  |--/assets/
|  |
|  |--/components/
|  |
|  |--/prod/
|  |  |-- script.js
|  |  └-- styles.css
|  |
|  └--/src/
|     | 
|     |--/js/
|     |
|     └--/sass/

```

### Starting With A Blank Repo [ INIT ]
1. Create a blank repository
  * [x]  Create new blank repo. Do NOT initiate with a README file.
  * [x]  `git clone` new repo to local environment 

2. Move into new repo folder, create a remote for INIT repo and pull it down
  * [x]  Run `git remote add init` + INIT repo url
  * [x]  Run `git pull init master`

3. Pull down Wordpress Submodule
  * [x]  Run `git submodule update --init`


### Initializing New Repo
Follow these steps to configure your install to your specific project.

1. WP-CONFIG.PHP
  * [x]  set `$local_path` on line 91

2. LOCAL-CONFIG-EXAMPLE.PHP
  * [x]  remove '-example' from end of filepath
  * [x]  set DB_NAME, DB_USER and DB_PASSWORD

3. Set up dummy DB
  * [x]  create db and user in phpMyAdmin
  * [x]  import dummy wordpress db

4. PACKAGE.JSON
  * [x]  set necessary items ('name', 'description', &c.) 

5. GULPFILE.JS
  * [x]  set `var uri` in line 16

6. Theme Files & Folders
  * [x]  rename the theme folder from 'INIT' to your theme name
  * [x]  set 'Theme Name' and 'Theme URI' in STYLE.CSS
  
7. Install Dependencies
  * [x]  Run `npm install`

8. Navigate to your local site path (wht you specified in Step 1)
  * [x]  Set up Wordpress
  + [x]  Login, go to the 'Appearance' tab and activate your theme

9. Push your first commit
  * [x]  Run `git status` to see a status
  * [x]  Run `git add .`
  * [x]  Run `git commit -m"[ YOUR_COMMIT_MESSAGE ]"` 
  * [x]  Run `git push origin master` to push your commit to Github

10. Starting your project
  * [x]  Run `gulp`
  * [x]  Refresh your page, start writing code ...
 

### Editing Current Project
Follow these steps to edit a current project. This will set up the repository and compile your JS and Sass files for your.

1. In Terminal ...
  * [ ]  Run `git clone` + your repo url
  * [ ]  Run `git submodule update --init`
  * [ ]  Run `npm install` 
  * [ ]  Run `gulp`

2. Get config files/folders from server
  * [ ]  Download `wp-config.php`
  * [ ]  Download `local-config.php`
  * [ ]  Download `config.php`

3. Setup Local Server DB 
  * [ ]  create db and user

5. Install Wordpress
  * [ ]  Follow prompts 

4. Use Migrate DB to fetch content from server
  * [ ]  Follow prompts 

### Deploying to Server
1. In Liquid Web ...
  * [ ]  Create account for new site

2. Connect to Server
  * [ ]  Upload folder `/wordpress/` to `/public_html/`
  * [ ]  Upload folder `/content/` to `/public_html/`
  * [ ]  Upload file `wp-config.php` to `/public_html/`
  * [ ]  Upload file `local-config.php` to `/public_html/`
  * [ ]  Upload file `index.php` to `/public_html/`
  * [ ]  Upload file `README.md` to `/public_html/`

3. Adjust Database
  * [ ]  Make a copy of the local site db 
  * [ ]  IF USING DATED MYSQL -> Convert to UTF8
  * [ ]  Find and replace local path to server path

4. In cPanel ...
  * [ ]  Create new db
  * [ ]  Create new user 
  * [ ]  Add user to db
  * [ ]  Upload adjusted local site db to server db

5. Update config files
  * [ ]  Update db credentials in `local-config.php`
  * [ ]  Set var $local_path to new path in `wp-config.php`
  * [ ]  Turn off debugger in `wp-config.php`

If you choose not to follow these steps, you will be unable to keep the repository up-to-date, and you will have to deal with minified and uglified JS and CSS files. See notes under DEV ENVIRONMENT for more info.


### Updates

If updating SASS files ...
  * Compile files using GULP.
  * Replace the `styles.css` file on server with your compiled file.

If updating JS files ...
  * Compile files using GULP.
  * Replace the `scripts.js` file on server with your compiled file.

For All other files ...
  * Replace server file with your changed file.
  * Git commit and git push to server


### Feature Documentation


## Known Bugs


## Team 
  
  * PROJECT MANAGER   :   
  * UX/UI DESIGNER    :   
  * DEVELOPER         :   

