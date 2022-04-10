import styles from './index.module.scss'

export default function Overflow(props) {
    return (
        <div className={styles.overlay}>
        <div className={styles.drawer}>
            <img onClick={props.onClose} className={styles.close} src="\img\x.svg" alt='close'></img>
            <nav className={styles.options}>
                <p className={styles.navigation}>ПАРКОВКА</p>
                <p className={styles.navigation}>СТРАХОВКА</p>
                <p className={styles.navigation}>БЕНЗИН</p>
                <p className={styles.navigation}>ОБСЛУЖИВАНИЕ</p>
                <div>
                    <img className={styles.social} src="\img\TelegramWhite.svg" alt="Telegram"></img>
                    <img className={styles.social} src="\img\FacebookWhite.svg" alt="Facebook"></img>
                    <img className={styles.social} src="\img\InstagramWhite.svg" alt="Instagram"></img>
                </div>
            </nav>
        </div>
        </div>
    );
}

