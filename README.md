### Title

MoodTunes

### Web App Link

https://mood-tunes-flax.vercel.app/

### Project Summary

This web app allows users to create their own custom playlist by incorpating Spotify's API. Users need to have a
Spotify account to login and access the sites features. Once they login, they can search for songs and and add them to their playlist. For interactivity, users can click a "Change me!" modal in the navigation to change the
background color of their site to match their mood. There's also an account page where the user can logout and 
an about page providing further information about the app and developer. 

### Web App Structure 

1. **Navigation**

   - Description: The main navigation contains three sections: the hamburger navigation, logo, and "Change me!"
   modal. The hamburger navigation transitions to an "x" for the user to exit out and contains two links: account and about. The logo redirects the user back to the home page. The "Change me!" modal has 10 background color
   options the user can choose from. 

2. **Home Page**

   - Description: The main landing page of the application. When users are logged out, a description of the site
   along with a login button are displayed. When logged in, the screen then displays the create playlist features.
   The create playlist features are a search box, results container and playlist container. Users can search songs
   by name and they will be displayed in the results container. The songs can then be added or removed from the 
   playlist container. In the playlist container users can edit the name of their playlist and save it to their
   spotify account. 

3. **Account Page**

   - Description: Users are welcomed to the site and and two buttons are displayed: logout and create playlist.

4. **About Page**

   - Description: Where users can view information about the site and developer. 

### Sources Cited

- [ Spotify for Developers ](https://developer.spotify.com/documentation/web-api)
- [ User Authorization ](https://github.com/spotify/web-api-examples/tree/master/authorization/authorization_code)
- [ User Authentication ](https://next-auth.js.org/)
- [ CSS Gradient ](https://www.css-gradient.com/)
- [ MUI Library ](https://mui.com/)

