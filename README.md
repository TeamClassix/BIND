[![CircleCI](https://circleci.com/gh/TeamClassix/BIND.svg?style=shield)](https://circleci.com/gh/TeamClassix/BIND)

# BIND Online - An Immersive E-Commerce Experience

### Project Description
BIND is Team Classix's product for our Frontend Capstone project, as part of Hack Reactor San Francisco's SWE Bootcamp; and serves as a precursor to the System Design Capstone project later in the program. The FEC is the first project within the senior-phase curriculum, and allows us, as a team of 4, to work modularly and to some extent independently, towards creating a cohesive web application with a number of specifications provided by our "client".

While an external API was provided by the client, we implemented a local server in order to serve the frontend files, as well as to proxy the requests to the client's API. Aside from this, aspects and control of the backend have been abstracted, and the scope of the project remains almost entirely frontend.
____________
### Initialization

In order to compile the application and create the bundle:
1. Run `npm install` to install application depencies,
2. Use the command `npm run build-dev` to bundle the source files with Webpack,
3. Make a copy of the `example.env` file, renaming the copy to `.env`,
4. Paste your GitHub User Token into the applicable line in the `.env` file,
5. Start the server, using the command `npm run server-dev`. You can now access the site at http://localhost:5000.
__________
### Testing
WIP
__________
### Technologies
**React**, for frontend work\
└ **Webpack + Babel**, for React compilation and bundling\
**Express.JS**, for serving frontend files
