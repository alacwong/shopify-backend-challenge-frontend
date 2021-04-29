import React from 'react';
import styles from './nav.module.scss';

import icon from './icon.svg';

export default function Nav() {
    return (
        <div className={styles.NavBar}>
            <div className={styles.Left}>
                <a href={'/#'}>About</a>
                <a href={'/#'}>Store</a>
            </div>
            <div className={styles.Right}>
                <a href={'/#'} >Gmail</a>
                <a href={'/#'} >Images</a>
                <img src={icon} alt="icon" className={styles.icon} />
                <a href={'/#'} className={styles.button}>Sign in</a>
            </div>
        </div>
    );
};
