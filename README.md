## Video App

Save and manage videos from YouTube and Vimeo.

### Installation

To clone and install the project run:

```
git clone https://github.com/tomek-ch/video-app
cd video-app
yarn
```

### Environment variables

To run the app you need to create a `.env` file with YouTube and Vimeo API keys in the root directory:

```
REACT_APP_YT_API_KEY=<your youtube api key>
REACT_APP_VIMEO_API_KEY=<your vimeo api key>
```

Note that, in order for Vimeo view counts to be displayed, your API key needs appropriate scopes, as explained [here](https://github.com/vimeo/vimeo.php/issues/209#issuecomment-617482744).

### Running locally

To launch the app on `localhost:3000`, run the following command from the root directory:

```
yarn start
```
