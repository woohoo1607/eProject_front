import React from 'react';
import styles from './UserCard.module.css';


const CardInfo = (props) => {
    return (
            <div className={
                !props.transported ? !props.fired ? styles.cardInfo : styles.cardInfoFired 
                : styles.cardInfoTransported}>
                {!props.fired ? "Worked" : "Fired"}
            </div>

            )
}

export default CardInfo;
