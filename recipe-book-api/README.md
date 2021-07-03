# Ruby on Rails as api readme

*A readme covering the application as a whole can be found in the root directory*

## TOC

- about
- installation
- operation

## About

The back-end for RecipeBook is Ruby on Rails as an API. Active Model Serializers assists with JSON creation. UUID is used for keys in the schema instead of an incremented integer. Bcrypt and JWT assist in authentication to the system during the user's session. At this time, the JWT is not saved to the browser's storage so a user has to log on every time they close out and re-open, or manually refresh a browser window. *RACK-CORS is configured to be wide open. For security reasons, it needs to be modified if hosted anywhere other than a local machine.*

## API Installation

*The front-end has separate installation instructions and can be found in the [frontent direcory.](.../../../recipe-book-frontend/README.md)*

1. In your terminal open the recipe-book-api directory
2. Run `bundle install`
3. If you run into any Ruby versioning issues, you may have to install a compatible version in order to run this application. I use RVM as a Ruby version manager but RBENV is popular as well. Managing versions of Ruby is beyond the scope of this README but 'RVM' and 'RBENV' are two decent search springboards. If you need assistance, please reach out [via email](mailto:roy.e.mosby@gmail.com)

## Operation

*This application was designed to have the back-end run on port 3000.*

The front-end expects the api to be found on port 3000. This is the default port for both Rails Server and Webpack. You're going to want to start the back-end first and then start up the front end.

1. With the terminal opened at the api, type `rails serve`
2. In another terminal session, follow the instructions found in the front-end it start it up.
