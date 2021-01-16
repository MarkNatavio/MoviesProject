# MoviesProject
```
Description:
```
This is a react application that gives movie recommendations based on genre. It filters movie titles based on information provided and contains a search bar to find movies related to the inputted word.

```
Features:
```
- Provides user with a list of movies and shows based on genre inputted
- Provides information on the movie/show (genres, overview, rlease date, runtime, budget, cast, and similar movies)

```
Methods:
```
- Use the Movie Database API to get movie data from IMDb to find movies of a specific genre
- React App

```
How to run?
```
$ cd MoviesProject
$ npm start

```
Testing
```
After running the application, the user will be welcomed with an empty page. In order to see movies, 
the user must either select a specific genre or a key word in the search bar and click the 'Enter' button.

```
How does it work?
```
This is a React application that accesses the the Movie Database API in order to gain access to movie data.
The data gathered from the API is all done by the 'service/index.js' file. 

There are 2 jsx files (Home and MovieInfo)
> Home contains functions that manage the data from TMDb API to display data on the Home page
  - The data includes the Movie titles and overall ratings
  - The functions create and dispaly a list of genres, movies by genre, and movies searched by keyword

> MovieInfo contains functions that manage the data from TMDb API to display data regarding the movie selected
 - The data includes title, genre, overview, ratings, date of release, trailer, posters, budget, cast memebers, and more.
 - Additionally, similar movies are also displayed in case the user is interested

```
In Progress:
```
- Incorporate API that provides streaming services where movie is availble (need to find API)
