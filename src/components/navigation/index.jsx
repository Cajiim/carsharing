import styles from './index.module.scss';
import React from 'react';
import Menu from '../Menu';

import { useState } from 'react';

function Navigation() {



    const [menuActive, setMenuActive] = useState(false);



    return (
        <div className={styles.aside}>
            <div className={styles.aside__content}>
                <div className={menuActive ? 'containerBurg active' : 'containerBurg'} onClick={() => { setMenuActive(!menuActive); console.log(123) }}>
                    <span>
                    </span>
                </div>
                <p className={styles.aside__content__language}>Eng</p>
            </div>
            <Menu active={menuActive} setActive={setMenuActive} />
        </div>
    );
}


export default Navigation;

