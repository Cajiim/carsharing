import styles from './index.module.scss';

export default function Generalhead() {
    return (
        <div className={styles.container}> 
            <div className={styles.title}>
                <h1 className="title__name">
                    Need for drive
                </h1>
                <ul className={styles.clear}>
                <li >
                    <img className={styles.geologo} src="\img\Group.svg" alt="Геолокация"></img>
                    <span>Ульяновск</span>
                </li>
                </ul>
            </div>
            <nav className="">
                <ul className={styles.clear}>
                    <li className="clear">
                        <span>Местоположение</span>
                        <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0L6 4.03L0 8V0Z" fill="#999999" />
                        </svg>
                    </li>
                    <li className="clear">
                        <span>Модель</span>
                        <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0L6 4.03L0 8V0Z" fill="#999999" />
                        </svg>
                    </li>
                    <li className="clear">
                        <span>Дополнительно</span>
                        <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0L6 4.03L0 8V0Z" fill="#999999" />
                        </svg>
                    </li>
                    <li className="clear">
                        <span>Итого</span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

