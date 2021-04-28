/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import FadeIn from 'react-fade-in';
import styles from 'home.scss';

import Search from '../components/search/search';
import Nav from '../components/nav/nav';

import logo from './google.png';

export default function Home () {

    return (
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
                        <Search />
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
        </div>
    );
};