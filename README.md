# Asthmapp-by-Glitch
# Asthmapp-by-Glitch

All the code is in the FrontEnd Folder. This is where npm is run

## Most Pages follow this structure:

Page.html : gives the architechture of the page
Page.css : styles the page
Page.js : gives the code to be run in each page : functions, variables, etc
PageNav.js : gives the navigation event listeners and functions to allow the navigation between one page and another

## Here are all the pages:

### Setting up

- Loading : is not used but could serve as a loading page to load the App content
- SignIn : allows for existing users to log into their accounts and use their dedicated database space
- SignUp : creates new users and dedicated database space
- ForgotPassword : allows to send an email to existing user to reset a password
- ForgotPassword2 : is not used, in stead we use a built-in Firebase feature
- Settings : allows to Input emergency contacts and the area of London the user lives in, also allows to change log-in information
- Home : Quick view of every section

### Emergency section

- Emergency1 : call emergency contacts and preview crisis steps
- Emergency2 : full crisis steps with video
- Emergency3 : allows to add crisis and view charts with statistics
- AddCrisis : input a new crisis to the database

### Inhaler section

- MyInhaler : view information about all the inhalers in the database
- MyUsageLog : view previous "puff" intake of the inhaler
- AddInhalerPopup : adds a fully custumisable inhaler to the database
- AddIntakePopup : adds a fully custumisable "puff" intake of the inhaler to the database
- QuickIntakePopup : adds 2 quick "puff" intake of the favourite inhaler

### AirQuality section

- AirQuality01 : displays infomation about the Air Quality for selected London Borough
- ChangeLocation : change the borough for wich the information is displayed
- AirQuality2 : see an interactive map of the london map with colors representing the score for each pollutant
- AirQuality3 : Not done yet, would be the same as AirQuality01 and AirQuality2 but for countries

## Other files

- Other files have been added to complete the functionalities, see relevant comments to understant the file's use
- The dist file allows for a module bundling

