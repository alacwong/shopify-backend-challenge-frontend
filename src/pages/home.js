/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import FadeIn from 'react-fade-in';
import styles from './home.module.scss';

import Search from '../components/search/search';
import Nav from '../components/nav/nav';

import logo from './google.png';
import Image from "./images/images";

export default function Home () {
    const [term, setTerm] = useState('');
    const [showHome, setShowHome] = useState(true);

    return (
        showHome ?
        <div className={styles.main}>
            <Nav />
            <FadeIn>
                <div className={styles.container}>
                    <div>
                        <img src={logo} alt="google logo" className={styles.img} />
                    </div>
                    <div
                        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                    >
                        <Search setTerm={setTerm} setShowHome={setShowHome} term={term}/>
                    </div>
                </div>
                <div className={styles.ButtonContainer}>
                    <div>
                        <button className={styles.Button}>Google Search</button>
                    </div>
                    <button className={styles.Button}>I'm feeling lucky</button>
                </div>
                <p>
                    Google offered in: <a>Français</a>
                </p>
            </FadeIn>
        </div> : <Image term={term}/>
    );
};