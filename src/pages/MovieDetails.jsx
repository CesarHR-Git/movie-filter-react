import styles from './css/MovieDetails.module.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getAPI } from '../utils/httpClient';
import { useState } from 'react';
import { Spinner } from '../components/Spinner';

export function MovieDetails() {

    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        getAPI("/movie/" + movieId).then((data) => {
            setMovie(data);
            setIsLoading(false);
        })
    }, [movieId]);

    if (isLoading) {
        return <Spinner />
    }

    /* if (!movie) {
        return null;
    } */

    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

    return (
        <div className={styles.detailsMovie}>
            <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title} />
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p className={styles.firstItem}>
                    <strong>Title:</strong> {movie.title}
                </p>
                <p>
                    <strong>Genre:</strong> {movie.genres.map(genre => genre.name).join(', ')}
                </p>
                <p>
                    <strong>Description:</strong> {movie.overview}
                </p>
            </div>
        </div>
    );
}