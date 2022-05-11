# MusicGalaxy Application
This react native mobile application is built for the music lovers who wants to listen their favourite music in a single place and to see the information regarding the music videos like Title, Genre, Artist and Release Year.
Consuming the api's, this application is able to provide you the easiest and quickest way to find the music videos with simple and attractive UI interfaces.

<br>

## Major Screens:
- Home Screen with Category Carousels and embedded search and filters in it
- Music Video List of specific categories of Genre

<br>

## Major Libraries used in the project:

- React (`17.0.2`)
- React Navigation (`5.x`)
- React Native image Viewing (`0.2.2`)
- Jest Testing Library (`26.6.3`)
- Redux (`4.0.5`)
- Styled Components (`5.3.5`)
- Reanimatted (`2.4.1`)
- Axios (`0.26.0`)
- React Native Fast Image (`8.5.11`)

<br>

## Main Features of this app:
- User can view the list of music videos based on the genre category
- All Videos related to any category can also be seen in a seperate screen
- User can search for a faviourite video (title, artist) by typing in the input field and tapping enter.
- Also user can search records based on other filter options like Genres and Release year.

<br>

## Running locally

As others projects, you will need some requirements to run:

<br>

## Requirements
- Node.js 
- React Native cli
- Yarn
- Android and IOS setup on machine
- Cocapods (For IOS only)

<br>

## How to run

Clone the repo using this command by pasting this in the terminal: <br>
- git clone https://github.com/MuhammadMattiullah/musicgalaxy.git
<br> 
### Run on IOS:
- `yarn`
- `yarn pod`
-  `yarn ios`

### Run on Android:

- `yarn`
- `yarn android` (For Android)

<br>

## Commands:

All the scripts are written in `package.json`

- `yarn ios` to run on iOS simulator
- `yarn android` to run on Android simulator
- `yarn start:clean` to run metro with cache clean
- `yarn test` to to run the test
- `yarn test:collect-coverage` to gather the test report 
- `yarn pod` to install the cocapods

<br>

## Project Design:
To make the architecture easy to understand and make it clear and comfortable to acess and putting all the related stuff in the same level of herierchy.

- `src` folder contains all the sub folders including components, navigation, redux, screens and utils etc.
- All the sub components defined under the screen folder have their own components that are useable under that particular screens.
- Components that are useable all over the app kept under the root of src folder in `component` folder.
- `__tests__` folder contains unit tests of common components like `TextInput`, `ListCarousel`, `ListCarouselItem` and `FallbackUI`.
- `assets` folder contains all the local assets required.

<br>

## Unit Test 
<br>

![Loading ..](/demo/test.png?raw=true)

![Loading ..](/demo/coverage.png?raw=true)

<br>

## Attaching Screenshots of the application:

<br>

- ![Loading ..](/demo/splash.jpeg?raw=true)

- ![Loading ..](/demo/on1.png?raw=true)

- ![Loading ..](/demo/on2.png?raw=true)

- ![Loading ..](/demo/on3.png?raw=true)

- ![Loading ..](/demo/loading.png?raw=true)

- ![Loading ..](/demo/1.png?raw=true) 

- ![Loading ..](/demo/2.png?raw=true) 

- ![Loading ..](/demo/3.png?raw=true) 

- ![Loading ..](/demo/4.png?raw=true) 

- ![Loading ..](/demo/5.png?raw=true) 

- ![Loading ..](/demo/6.png?raw=true) 

- ![Loading ..](/demo/7.png?raw=true) 

- ![Loading ..](/demo/8.png?raw=true) 

- ![Loading ..](/demo/9.png?raw=true) 

- ![Loading ..](/demo/10.png?raw=true) 

- ![Loading ..](/demo/11.png?raw=true) 

- ![Loading ..](/demo/12.png?raw=true) 

- ![Loading ..](/demo/13.png?raw=true) 
