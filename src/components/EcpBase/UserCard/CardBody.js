import React from 'react';
import Avatar from "./avatar.png";
import styles from './UserCard.module.css';
import EditCard from './EditCard';

class CardBody extends React.Component {
    
    state = {
        editMode: false,
        data: {
            id: this.props.id,
            surname: this.props.surname,
            name: this.props.name,
            patronymic: this.props.patronymic,
            birthday: this.props.birthday,
            department: this.props.department,
            code: this.props.code,
            password: this.props.password,
            fired: this.props.fired,
            transported: this.props.transported,
            expirationDateSertificate: this.props.expirationDateSertificate,
            keyword: this.props.keyword,
            isResponsible: this.props.isResponsible
        }
    }
    
    activatedEditMode = () => {
        if (!this.props.isActiveEdit) {
            this.props.activeteEdit();
            this.setState( {
                editMode: true
            });
        }
    }
    
    deactivatedEditMode = () => {
        this.props.deactiveteEdit();
        this.setState( {
            editMode: false
        });
    }
    
        
    render () {
    return (
            <div className={
                !this.props.transported ? !this.props.fired ? styles.cardBodyBack : styles.cardBodyBackFired
                : styles.cardBodyBackTransported}
                onDoubleClick={this.activatedEditMode}
            >
                <div className={styles.cardBody}>
                    <div className={styles.avatar}>
                        <img src={Avatar} width="100" alt="avatar"/>
                    </div>
                    
                    {this.state.editMode && <EditCard data={this.state.data} deactivated={this.deactivatedEditMode}/>}
                    
                    {!this.state.editMode &&
                    <>
                        <div className={styles.userInfo}>
                            <h3>{this.props.surname} {this.props.name} {this.props.patronymic}</h3>
                            <p className={styles.birthday}>{this.props.birthday}</p>
                            <p className={styles.departament}>{this.props.department}</p>
                        </div>                    
                        <div className="clr"></div>
                        <p>code: {this.props.code}</p>
                        <p>password: {this.props.password}</p>
                        <p>keyword: {this.props.keyword}</p>
                        <p>expiration date sertificate: {this.props.expirationDateSertificate}</p>
                        {(this.props.isResponsible) ? <p><b>ВІДПОВІДАЛЬНА ОСОБА</b></p> : null}
                    </>            
                    }
                </div>
            </div>

            )
    }
}

export default CardBody;
