>[!WARNING]
>This package is still in development and is not yet ready for production use.

# react-playlist-player

A flexible playlist react component

## Description
This package centers around the ListPlayer component which is a react component that provides a user interface to control playback of a list of media items. 

ListPlayer is fully responsive, and will, by default, adapt to the size of its container element. It also comes with several built-in sizes that the component can "snap" to or smoothly switched between. 

The main reason behind not including some form of media player is to avoid limiting the use cases to those attached to specific media types or sources. A playlist can be a list of videos, a list of songs, a list of sound clips, or a mix of everything, for example. 

Another reason is that developers may prefer to use their own media player component, or may want to use a different media player component for different media types.

ListPlayer also has a headless mode where only the interactive playlist rendered; the included playback controls (play/pause, prev/next, mute/unmute) are removed. This allows developers to use their own separate playback controls. This allows for more flexibility in the design of the user interface. Many sites for example, have a fixed playback control bar at the bottom of the page, and a separate playlist component elsewhere on the page.

## Installation

This package is not yet published to npm. You can install it directly from GitHub using the following command:

```bash
npm install bouzidanas/react-playlist-player
```
>[!NOTE]
>I am currently in the process of transitioning from using tailwindcss to pure css. 

The current version of the package uses tailwindcss. To get the components to appear properly, you need to have tailwind installed in the project where you will be using react-playlist-player components. See [tailwindCSS documentation](https://tailwindcss.com/docs/installation) for installation instructions. 

After installing tailwindCSS, you need to add the following string to the content array in your projects `tailwind.config.js` file:
```js
"./node_modules/react-playlist-player/**/*.{js,ts,jsx,tsx}"
```
This will allow tailwind to scan the react-playlist-player components for classes that you can use in your project. Your `tailwind.config.js` file should look something like this:

```diff
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
+    "./node_modules/react-playlist-player/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Usage

Below is a basic skeleton of how to use the ListPlayer component. 

```tsx
import { useState } from 'react';
import { ListPlayer } from './ListPlayer'
import { ListPlayerContext } from './ListPlayerContext';

function App() {
  const [selectedTrack, setSelectedTrack] = useState(-1);   // -1 means no track is selected
  const [isPlaying, setIsPlaying] = useState(false);        // play/pause
  const [isMuted, setIsMuted] = useState(false);            // mute/unmute

  return (
    <ListPlayerContext.Provider value={{selectedTrack, setSelectedTrack, isPlaying, setIsPlaying, isMuted, setIsMuted}}>
      <div className='container-for-sizing-player'>
        <ListPlayer playerMode={playerMode} noControls={replaceHeader} noHeader={headLess}>
          <MyCustomHeader /> 
        </ListPlayer>
      </div>
    </ListPlayerContext.Provider>
  )
}

```
The `<ListPlayer/>` component will respond to changes in the three shared context variables: `selectedTrack`, `isPlaying`, and `isMuted`. If the value of selectedTrack is -1, this means no track is selected. This is usually the case when the playlist is first rendered. If you change the value of selectedTrack to a valid index, the playlist will automatically scroll to that track and play it. 


## License

[![Static Badge](https://img.shields.io/badge/License-MIT-415a77?style=for-the-badge)](https://github.com/bouzidanas/react-playlist-player/blob/master/LICENSE)