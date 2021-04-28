import React from 'react';
import styles from './SearchBar.module.scss';

import logo from './logo.svg';
import mic from './mic.svg';


export default function Search() {
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
                readOnly
                className={styles.searchBar}
                value={state.currentInput}
            />
            <img src={mic} className={styles.mic} alt="mic" />
        </div>
    );
};