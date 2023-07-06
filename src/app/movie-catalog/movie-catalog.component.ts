import { Component } from '@angular/core';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-catalog',
  templateUrl: './movie-catalog.component.html',
  styleUrls: ['./movie-catalog.component.css']
})
export class MovieCatalogComponent {
  movies: Movie[];
  selectedMovie: Movie | null = null;

  constructor(private movieService: MovieService) {
    this.movies = movieService.getMovies();
    this.sortMovies();
  }

  addMovie(title: string, synopsis: string): void {
    const movie: Movie = {
      title,
      synopsis,
      watched: false,
      liked: false,
      comment: ""
    };
    this.movieService.addMovie(movie);
    this.sortMovies();
  }

  removeMovie(movie: Movie): void {
    this.movieService.removeMovie(movie);
    this.sortMovies();
  }

  showCommentForm(movie: Movie): void {
    this.selectedMovie = movie;
  }

  saveComment(commentInput: string): void {
    if (this.selectedMovie && this.selectedMovie.comment !== undefined) {
      this.movieService.saveComment(this.selectedMovie, commentInput);
      this.selectedMovie = null;
    }
    this.sortMovies();
  }

  updateWatched(movie: Movie): void {
    this.sortMovies();
  }
  

  private sortMovies(): void {
    this.movies.sort((a, b) => {
      if (!a.watched && b.watched) {
        return -1;
      } else if (a.watched && !b.watched) {
        return 1;
      }
      return a.title.localeCompare(b.title);
    });
  }
}
