import { MoviesGrid } from '../components/MoviesGrid';
import { Search } from '../components/Search';
import '../index.module.css';

export function HomePage() {
    return (
        <div>
            <Search />
            <MoviesGrid />
        </div>
    );
}