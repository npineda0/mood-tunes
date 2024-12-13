import "../../styles/globals.scss";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
//import AuthProvider from "./api/auth/userAuth";
import Nav from "../components/Nav";
// import AuthProvider from './components/AuthProvider'
// import SpotifyContextProvider from '@/context/SpotifyContextProvider'
import AuthProvider from '../components/AuthProvider';
import SpotifyContextProvider from '../context/SpotifyContextProvider';
//import SpotifyContextProvider from '../context/SpotifyContextProvider';

export const metadata = {
  title: "MoodTunes",
  description: "Capstone Project 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
            <AuthProvider>
              <SpotifyContextProvider>
              <Nav/>
              {children}
              </SpotifyContextProvider>
            </AuthProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
