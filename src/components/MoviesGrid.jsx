import { MoviesCard } from './MoviesCard';
import styles from './css/MoviesGrid.module.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { getAPI } from '../utils/httpClient';
import { Spinner } from './Spinner';
import { useQuery } from '../hooks/useQuery';

export function MoviesGrid() {

    const [movie, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const query = useQuery();
    const search = query.get("search");

    useEffect(() => {
        setIsLoading(true);
        const searchUrl = search ? "/search/movie?query=" + search : "/discover/movie"
        getAPI(searchUrl).then((data) => {
            setMovies(data.results);
            setIsLoading(false);
        });
    }, [search]);

    if (isLoading) {
        return <Spinner />
    }

    return (
        <ul className={styles.moviesGrid}>
            {movie.map((movie) => {
                return <MoviesCard key={movie.id} movie={movie} />
            })}
        </ul>
    );
}