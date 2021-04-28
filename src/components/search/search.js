import React, { useState} from 'react';
import styles from './search.module.scss';

import logo from './logo.svg';
import mic from './mic.svg';


export default function Search() {

    const [term, setTerm] = useState('');

    const handleChange = (e) => {
        setTerm(e.target.value);
    }

    return (
        <div
            className={
                [styles.searchContainer].join(' ')
            }
        >
            <img src={logo} className={styles.svg} alt="logo" />
            <input
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                className={styles.searchBar}
                value={term}
                onChange={handleChange}
            />
            <img src={mic} className={styles.mic} alt="mic" />
        </div>
    );
};