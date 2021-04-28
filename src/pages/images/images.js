import React, {useState} from 'react';
import styles from './style.module.scss'
import SearchPageBar from '../../components/pagebar/SearchPageBar';
import logo from '../../pages/google.png';
import FadeIn from "react-fade-in";
import dots from './dots.svg';
import PhotoGallery from "../../components/gallery/gallery";

export default function Image() {

    const [photos, setPhotos] = useState([]);

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
                                <SearchPageBar setPhotos={setPhotos}/>
                            </div>
                        </FadeIn>
                        <div className={styles.right}>
                            <FadeIn>
                                <button style={{marginRight: '25px'}} className={styles.Button}>Prev</button>
                            </FadeIn>
                            <FadeIn>
                                <button style={{marginRight: '25px'}} className={styles.Button}>Next</button>
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
            <PhotoGallery photos={photos}/>
        </div>
    );
};

