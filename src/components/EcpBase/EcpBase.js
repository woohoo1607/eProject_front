import React from 'react';
import UserCard from './UserCard/UserCard';
import EcpBaseSearch from './EcpBaseSearch';


let EcpBase = (props) => {

    let newNameElement = React.createRef();

    return (
            <div>
                <EcpBaseSearch searchEmployee={props.searchEmployee}/>
                                {
                    props.ecpBase.employeesData
                            .map(employee => <UserCard key={employee._id} _id={employee._id} surname={employee.surname} name={employee.name} 
                            patronymic={employee.patronymic} department={employee.department} code={employee.code} 
                            keyword={employee.keyword} isResponsible={employee.isResponsible} birthday={employee.birthday}
                            password={employee.password} fired={employee.fired} transported={employee.transported} 
                            expirationDateSertificate={employee.expirationDateSertificate} 
                                    
                            isActiveEdit={props.isActiveEdit}
                            deactiveteEdit={props.deactiveteEdit}        
                            activeteEdit={props.activeteEdit}
                            updateEmployee={props.updateEmployee}
                            isFetching={props.ecpBase.isFetching}
                            
                        />)}
                        
                <div className="clr"></div>
            </div>

                )

};


export default EcpBase;
