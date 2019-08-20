import React from 'react';
import CardInfo from './CardInfo';
import CardBody from './CardBody';
import styles from './UserCard.module.css'


const UserCard = (props) => {

    return (
            <div className={styles.card}>
                <CardInfo fired={props.fired} transported={props.transported}/>  
                <CardBody id={props.id} surname={props.surname} name={props.name} birthday={props.birthday} 
                  patronymic={props.patronymic} department={props.department} code={props.code} isResponsible={props.isResponsible}
                  keyword={props.keyword} password={props.password} transported={props.transported} fired={props.fired} 
                  expirationDateSertificate={props.expirationDateSertificate}
                
                    isActiveEdit={props.isActiveEdit}
                    deactiveteEdit={props.deactiveteEdit}        
                    activeteEdit={props.activeteEdit}        
                />
            </div>
            )
}

export default UserCard;
