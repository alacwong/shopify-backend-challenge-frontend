import React, {useEffect, useState} from 'react';
import styles from './style.module.scss'
import SearchPageBar from '../../components/pagebar/SearchPageBar';
import logo from '../../pages/google.png';
import FadeIn from "react-fade-in";
import dots from './dots.svg';
import PhotoGallery from "../../components/gallery/gallery";
import axios from "axios";

export default function Image() {

    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(0);
    const api = 'http://127.0.0.1:5000/images/search/'
    const [term, setTerm] = useState('');
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const prev = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    }

    const next = () => {
        setPage(page + 1);
    }

    const fetchData = () => {
        setLoading(true);
        fetch(`${api}?pokemon=${term}&page=${page}`).then(res => res.json()).then(
            data => {
                if ( data.images) {
                    setPhotos(data.images.map(image => {
                        return {
                            src: image.url,
                            width: 4,
                            height: 3
                        }
                    }))
                } else {
                    setPhotos([]);
                }

                setLoading(false);
            }
        );
    }

    const fetchDataReverse = () => {
        const data = new FormData();
        data.append('file', file);
        let url = `http://127.0.0.1:5000/images/reverse_search/?page=${page}`;
        setLoading(true);
        axios.post(url, data, {})
            .then(res => {
                if (res.data.images.length > 0) {
                    setPhotos(res.data.images.map(image => {
                        return {
                            src: image.url,
                            width: 4,
                            height: 3
                        }
                    }))
                } else {
                    setPhotos([]);
                }
                setLoading(false);
            });
    }

    useEffect(
        () => {
            if (file === null) {
                fetchData();
            } else {
                fetchDataReverse();
            }
        }, [page]
    )

    return (
        <div>
            <div className={styles.Container}>
                <FadeIn>
                    <div className={styles.top}>
                        <FadeIn delay={320}>
                            <div>
                                <img src={logo} className={styles.logo} alt="logo" />
                            </div>
                        </FadeIn>
                        <FadeIn delay={120}>
                            <div className={styles.searchContainer}>
                                <SearchPageBar
                                    setPhotos={setPhotos}
                                    term={term}
                                    setTerm={setTerm}
                                    setFile={setFile}
                                    setLoading={setLoading}
                                />
                            </div>
                        </FadeIn>
                        <div className={styles.right}>
                            <FadeIn>
                                <button style={{marginRight: '25px'}} className={styles.Button} onClick={prev}>
                                    Prev
                                </button>
                            </FadeIn>
                            <FadeIn>
                                <button style={{marginRight: '25px'}} className={styles.Button} onClick={next}>
                                    Next
                                </button>
                            </FadeIn>
                            <FadeIn delay={180}>
                                <img src={dots} className={styles.dots} alt="menu" />
                            </FadeIn>
                            <FadeIn delay={280}>
                                <button className={styles.Button}>Sign In</button>
                            </FadeIn>
                        </div>
                    </div>
                </FadeIn>
            </div>
            <PhotoGallery photos={photos} loading={loading}/>
        </div>
    );
};

