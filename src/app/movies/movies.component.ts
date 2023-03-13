import { Component } from "@angular/core";
import { Movie } from "../movie";
import { MovieService } from "../movie.service";

@Component({

    templateUrl: 'movies.component.html',
    selector: 'movies'
})

export class MoviesComponent {
    title = 'Movies List'
    movies!: Movie[];
    selectedMovie: Movie = new Movie;


    constructor(private movieService: MovieService) { }

    ngOnInit(): void {
        this.getMovies();
    }

    onSelect(movie: Movie): void {
        this.selectedMovie = movie;
    }

    getMovies(): void {
        this.movieService.getMovies().subscribe(movies => {
            this.movies = movies;
        });
    }

}