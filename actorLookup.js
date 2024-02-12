// actorLookup.js

// Sample data: actor and movie information
const actors = [
    { name: 'Actor1', movies: ['Movie1', 'Movie2', 'Movie3'] },
    { name: 'Actor2', movies: ['Movie2', 'Movie4'] },
    { name: 'Actor3', movies: ['Movie1', 'Movie3', 'Movie5'] },
    { name: 'Actor4', movies: ['Movie3', 'Movie4', 'Movie5'] },
    { name: 'Actor5', movies: ['Movie1', 'Movie4'] }
  ];
  
  // Method to find actors by movie name
  function findActorByMoviesName(movieName) {
    if (!movieName || typeof movieName !== 'string') {
      throw new Error('Invalid input: Please provide a valid movie name.');
    }
  
    const matchingActors = actors.filter(actor => actor.movies.includes(movieName)).map(actor => actor.name);
  
    if (matchingActors.length === 0) {
      console.log(`No actors found for the movie: ${movieName}`);
    } else {
      console.log(`Actors found for the movie ${movieName}: ${matchingActors.join(', ')}`);
    }
  
    return matchingActors;
  }
  
  // Method to find movies by actor name
  function findMoviesByActorName(actorName) {
    if (!actorName || typeof actorName !== 'string') {
      throw new Error('Invalid input: Please provide a valid actor name.');
    }
  
    const actor = actors.find(actor => actor.name === actorName);
  
    if (!actor) {
      console.log(`No movies found for the actor: ${actorName}`);
      return [];
    }
  
    console.log(`Movies found for the actor ${actorName}: ${actor.movies.join(', ')}`);
    return actor.movies;
  }
  
  // Example usage:
  try {
    findActorByMoviesName('Movie1');
    findMoviesByActorName('Actor2');
  } catch (error) {
    console.error(error.message);
  }
  
  // Exporting the methods for external use
  module.exports = { findActorByMoviesName, findMoviesByActorName };
  