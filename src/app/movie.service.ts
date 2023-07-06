import { Injectable } from '@angular/core';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [];

  constructor() {
    
    this.movies.push({
      title: 'Inception',
      synopsis: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
      watched: true,
      liked: true,
      comment: "This movie is definitely among my favorites."
    });
  }


  getMovies(): Movie[] {
    return this.movies;
  }

  addMovie(movie: Movie): void {
    this.movies.push(movie);
  }

  removeMovie(movie: Movie): void {
    const index = this.movies.indexOf(movie);
    if (index !== -1) {
      this.movies.splice(index, 1);
    }
  }

  saveComment(movie: Movie, comment: string): void {
    movie.comment = comment;
  }
}
