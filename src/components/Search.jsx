import { useState } from 'react';
import { useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import styles from './css/Search.module.css';
import { useQuery } from '../hooks/useQuery';

export function Search() {

    const query = useQuery();
    const search = query.get("search");
    const [searchText, setSearchText] = useState("");
    const history = useHistory();

    useEffect(() => {
        setSearchText(search || "");
    }, [search]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        history.push("/?search=" + searchText);
    }

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input type="text" placeholder="Search a movie" className={styles.searchInput}
                    value={searchText}
                    onChange={(evt) => setSearchText(evt.target.value)}
                />
                <button type="submit" className={styles.searchButton}>
                    <FaSearch size={20} />
                </button>
            </div>
        </form>
    )
}
