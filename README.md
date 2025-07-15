# Noctua Platform App 🎮

A mobile platform for playing H5 games without downloading individual game apps. Built with [Expo](https://expo.dev) and React Native.

## About Noctua Platform

Noctua Platform is a mobile application that allows users to play HTML5 (H5) games directly within the app using a WebView player, eliminating the need to download individual game applications. The platform features:

- A curated collection of H5 games
- Game browsing by genre and popularity
- Game details including thumbnails, descriptions, and genres
- Guest play without requiring user registration or login
- Seamless WebView integration for smooth gameplay

## Features

- **Game Library**: Browse and search through a collection of H5 games
- **Game Categories**: Filter games by genre, popularity, and more
- **WebView Player**: Play games directly within the app without downloads
- **Guest Access**: Play games without creating an account
- **Game Details**: View game information including thumbnails and descriptions

## Getting Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a:

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go)

This project uses [Expo Router](https://docs.expo.dev/router/introduction) with file-based routing in the **app** directory.

## Project Structure

The Noctua Platform App is organized as follows:

- **app/**: Main application code with Expo Router file-based routing
  - **index.tsx**: Home screen with game categories and featured games
  - **game/[id].tsx**: Dynamic route for individual game details and WebView player
  - **components/**: Reusable UI components
  - **hooks/**: Custom React hooks
  - **services/**: API and game data services
  - **types/**: TypeScript interfaces and types
  - **utils/**: Helper functions and utilities

## Development

To modify the app:

1. Edit files in the **app** directory
2. Use `npx expo start` to preview changes
3. Test on multiple devices to ensure responsive design

## Technical Implementation

The Noctua Platform App leverages several key technologies:

- **React Native & Expo**: Core framework for cross-platform mobile development
- **TypeScript**: For type-safe code and better developer experience
- **Expo Router**: For navigation and routing between screens
- **WebView**: To render and play H5 games within the app
- **Zustand**: For state management
- **TanStack Query**: For data fetching and caching
- **Styled Components**: For component styling

## Game Integration

H5 games are integrated into the platform through:

1. A curated list of game URLs and metadata
2. A WebView component that loads the game URL
3. Communication between the game and the app using postMessage

## Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native WebView](https://github.com/react-native-webview/react-native-webview)
- [Zustand State Management](https://zustand.docs.pmnd.rs/)
- [TanStack Query](https://tanstack.com/query/latest)

## License

This project is proprietary software. All rights reserved.
