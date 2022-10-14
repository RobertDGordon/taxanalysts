# Tax Notes Search Form
This application is a client search form that connects to the TaxNotes.com sandbox API. See: https://apidocs.taxnotes.com/

# Authorization using OAuth 2.0
Authorization is automatically generated upon clicking "Create New Token", using environment variables, and storing the auth token in the browser's local storage.

Upon an error, the button will be shown again to generate a new token.

## .env configuration
```
REACT_APP_CREATE_TOKEN = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

You must request a token from a Tax Notes representative.

See: https://apidocs.taxnotes.com/#section/Introduction/OAuth-2.0-Overview

## Run Local
NodeJS must be installed. See: https://nodejs.org/en/download/

From the command line:
```
npm install
```

Then run the client:
```
npm start
```

Server may then be accessed at:
```
localhost:3000/
```