import { Link } from 'react-router-dom';
import styles from './css/MoviesCard.module.css';

export function MoviesCard({ movie }) {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        <li className={styles.movieCard}>
            <Link to={'/movies/' + movie.id}>
                <img src={imageUrl} alt={movie.title} className={styles.movieImage} width={230} height={345} />
                <div>
                    {movie.title}
                </div>
            </Link>
        </li>
    );
}