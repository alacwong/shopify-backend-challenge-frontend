/* eslint-disable jsx-a11y/no-autofocus */
import React, {useState}from 'react';
import styles from '../search/search.module.scss';

import logo from '../search/logo.svg';
import mic from '../search/mic.svg';

export default function SearchBar(props) {

    const api = 'http://127.0.0.1:5000/images/search/'

    const handleChange = (e) => {
        props.setTerm(e.target.value);
    }

    const fetchData = () => {
        fetch(`${api}?pokemon=${props.term}`).then(res => res.json()).then(
            data => {
                if (data.images.length > 0) {
                    props.setPhotos(data.images.map(image => {
                        return {
                            src: image.url,
                            width: 4,
                            height: 3
                        }
                    }))
                } else {
                    props.setPhotos([]);
                }
            }
        );
    }

    const onEnter = (e) => {
        if (e.key === 'Enter') {
            fetchData();
        }
    }

    return (
        <div className={styles.searchContainer}>
            <input
                autoFocus
                className={styles.searchBar}
                value={props.term}
                onChange={handleChange}
                onKeyPress={onEnter}
            />
            <img src={mic} className={styles.mic} alt="mic" />
            <img src={logo} className={styles.svg} alt="logo" onClick={fetchData} />
        </div>
    );
};
