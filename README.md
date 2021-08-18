## Video App

Save and manage videos from YouTube and Vimeo. Try it out [here](https://hopeful-feynman-055449.netlify.app).

### Features

- Add videos using YouTube and Vimeo urls and ids
- Watch videos directly from the app
- Mark videos as favorite
- Load demo videos
- Delete all videos at once
- Sort by newest or oldest
- Show only videos marked as favorite
- Toggle between list and grid view

### About the app

This is a refactor of my [last project](https://github.com/tomek-ch/video-app). It uses Redux for state management and only uses React state for local component state - modal toggles. Redux Thunk is used for handling asynchronous logic.

Instead of relying on environment variables for storing API keys, and handling all the video fetching logic client-side, the app is connected to a [Node.js API](https://github.com/tomek-ch/video-api) that I have created. This allows for deployment of the app without compromising sensitive data.

### Running locally

#### API setup

To run the app on your own machine, you first need to set up the API. Follow the instructions in the [readme](https://github.com/tomek-ch/video-api#readme) and use `http://localhost:3000` as the client url. Note that YouTube and Vimeo API keys are required.

#### Installation

To clone and install the project, run:

```
git clone https://github.com/tomek-ch/video-app-redux
cd video-app-redux
yarn
```

#### Environment variables

You also need to provide an API url to the app. Create a `.env` file in the root directory and set `REACT_APP_API_URL` to `http://localhost:4000`. This is the url on which the API runs by default.

```
touch .env
echo "REACT_APP_API_URL=http://localhost:4000" >> .env
```

#### Running the project

Once you're all set up, you can launch the project on `http://localhost:3000`, by running:

```
yarn start
```
