import React from 'react';
import styles from './search.module.scss';

import logo from './logo.svg';
import mic from './mic.svg';


export default function Search(props) {

    const handleChange = (e) => {
        props.setTerm(e.target.value);
    }

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            props.setShowHome(false);
        }
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
                value={props.term}
                onKeyPress={onKeyPress}
                onChange={handleChange}
            />
            <img src={mic} className={styles.mic} alt="mic" />
        </div>
    );
};