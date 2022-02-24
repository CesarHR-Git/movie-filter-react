/* Components */
import styles from './css/App.module.css'
import { MovieDetails } from '../pages/MovieDetails';
import { HomePage } from '../pages/HomePage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export function App() {
    return (
        <Router>
            <header>
                <Link to='/'>
                    <h1 className={styles.title}>Movies</h1>
                </Link>
            </header>
            <main>
                <Switch>
                    <Route path='/movies/:movieId'>
                        <MovieDetails />
                    </Route>
                    <Route path='/'>
                        <HomePage />
                    </Route>
                </Switch>
            </main>
        </Router>
    )
}