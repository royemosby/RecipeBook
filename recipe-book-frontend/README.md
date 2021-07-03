# REACT front-end readme

*A readme covering the application as a whole can be found in the root directory*

## TOC

- about
- installation
- operation

## About

The front-end of RecipeBook is authored in React. Under the hood, it was installed using Create-React-App so comes with all the goodies that the scaffold provides. RecipeBook uses Redux for most state and relies on Thunk for API calls to synchronize the state with the back-end. There is some state in the application but it's for form field interaction and other transient, isolated UI interactions. RecipeBook also employs Router to achieve stateful routing inside the browser.

## Front-end Installation

*The back end has separate installation instructions and can be found in the [api direcory.](.../../../recipe-book-api/README.md)*

1. Point your terminal to the recipe-book-frontend directory
2. Run `npm -i`

## Operation

*This application was designed to have the back-end run on port 3000.*

This is same as the default port that Webpack will want to run the front-end. You can either start it and manually configure the port to be other than 3000 or you can start the back end First. Node is clever enough to ask to run on a different port if something is already running on it.

1. Start front-end in another terminal session.
2. In the terminal pointed at the front-end, run `npm run start`
3. When asked if you want to change the port for startup, confirm by hitting `Y` or just hitting enter (it defaults you `Y` anyways).
4. After the development server starts, it should try to open a new tab in your default browser. If it does not, navigate to `localhost:3001` or whatever port number displays in the terminal.
