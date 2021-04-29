/* eslint-disable jsx-a11y/no-autofocus */
import React, {useRef, useState} from 'react';
import styles from '../search/search.module.scss';

import logo from '../search/logo.svg';
import mic from '../search/mic.svg';
import camera from '../search/camera.png'
import axios from "axios";

export default function SearchBar(props) {

    const api = 'http://127.0.0.1:5000/images/search/'

    const handleChange = (e) => {
        props.setTerm(e.target.value);
    }

    const fetchData = () => {
        props.setLoading(true);
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

                props.setLoading(false);
            }
        );

        props.setFile(null);
    }

    const onEnter = (e) => {
        if (e.key === 'Enter') {
            fetchData();
        }
    }

    const inputFile = useRef(null);

    const reverseImageSearch = (event) => {

        event.stopPropagation();
        event.preventDefault();
        const file = event.target.files[0];

        const data = new FormData();
        data.append('file', file);
        let url = "http://127.0.0.1:5000/images/reverse_search/";
        props.setFile(file);
        props.setLoading(true);
        axios.post(url, data, {})
            .then(res => {
                if (res.data.images.length > 0) {
                    props.setPhotos(res.data.images.map(image => {
                        return {
                            src: image.url,
                            width: 4,
                            height: 3
                        }
                    }))
                } else {
                    props.setPhotos([]);
                }
                props.setLoading(false);
            });
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
            <img src={camera} className={styles.mic} alt="mic" onClick={() => {inputFile.current.click()}} />
            <img src={mic} className={styles.mic} alt="mic" />
            <input type='file' id='file' ref={inputFile} style={{display: 'none'}} onChange={reverseImageSearch}/>
        </div>
    );
};
