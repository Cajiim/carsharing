import classNames from 'classnames';
import styles from './index.scss';



function slideContainer (props) {

return (
    
    

<div className='slideContainer'>
    <h3 className='slideH'>{props.title}</h3>
    <p className='slideText'>{props.text}</p>
    <button className={classNames('information', [props.buttonStyle] )}>{props.buttonText}</button>
</div>

);
}

export default slideContainer;
