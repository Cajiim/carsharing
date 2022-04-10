
import styles from './index.module.scss'


export default function Navigation(props) {
    console.log(props)
    return (
        <div className={styles.burgerMenu}>
            <svg onClick={props.onClickBurger} width="32" height="32" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg" className={styles.burgerImg}>
                <path d="M4 16H28" /* stroke="white" */ strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={styles.svgColor}/>
                <path d="M4 8H28" /* stroke="white" */ strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={styles.svgColor} />
                <path d="M4 24H28" /* stroke="white" */ strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={styles.svgColor} />
            </svg>
            <p className={styles.language}>Eng</p>
        </div>
    );
}