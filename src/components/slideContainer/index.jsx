import styles from './index.module.scss';



function slideContainer (props) {

return (

<div className={styles.slideContainer}>
    <h3 className={styles.slideH}>{props.title}</h3>
    <p className={styles.slideText}>{props.text}</p>
    <button className={styles.informationOne}>{props.buttonText}</button>
</div>

);
}

export default slideContainer;
