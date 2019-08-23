import React from 'react';
import EcpBase from './EcpBase';
import {addEmployee, updateNewEmployeeName, setEmployees, setCurrentPage, getEmployees, updateEmployee, searchEmployee} from "../../reducers/ecpBaseReducer";
import {connect} from "react-redux";
import Preloader from "../Preloader";

class EcpBaseContainer extends React.Component {
    componentDidMount() {
        this.props.getEmployees();
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    state = {
        isActiveEdit: false         //для запрета активации редактирование двух карточек
    };
    
    activeteEdit = () => {
        this.setState( {
            isActiveEdit: true
        });
    }
    
    deactiveteEdit = () => {
        this.setState( {
            isActiveEdit: false
        });
    }
   
   
    handleScroll = (e) => {
        let clientHeight = e.srcElement.scrollingElement.clientHeight;
        let scrollTop = e.srcElement.scrollingElement.scrollTop;
        let offsetHeight = e.srcElement.scrollingElement.offsetHeight;
        let scrollButtom = offsetHeight-(clientHeight+scrollTop);
        let goAjax = 200;

        if (scrollButtom<=goAjax) {
            //если сейчас нету запроса на сервер, то посылаем его
            if (!this.props.ecpBase.isFetching) {
                let newCurrentPage = this.props.ecpBase.currentPage+1;
                let allPage = Math.ceil(this.props.ecpBase.employeeCount/this.props.ecpBase.pageSize); //считаем сколько всего страниц может быть
                if (newCurrentPage<=allPage) {
                    this.props.setCurrentPage(newCurrentPage);
                    this.props.getEmployees(newCurrentPage);
                    
                };
            };
        }
    }
    
    onAddEmployee = () => {
        this.props.addEmployee();
    }
    onNameChange = (name) => {
        this.props.updateNewEmployeeName(name);
    }

    render() {
        return (
                <>
                <EcpBase ecpBase={this.props.ecpBase}
                         onAddEmployee={this.onAddEmployee}
                         onNameChange={this.onNameChange}
                         activeteEdit={this.activeteEdit}
                         deactiveteEdit={this.deactiveteEdit}
                         isActiveEdit={this.state.isActiveEdit}
                         updateEmployee={this.props.updateEmployee}
                         searchEmployee={this.props.searchEmployee}
                />
                {this.props.ecpBase.isFetching ? <Preloader /> : null}
</>
                )
    }
}

let mapStateToProps = (state) => {
    return {
        ecpBase: state.ecpBase
    };
};

/*let mapDispatchToProps = (dispatch) => {
    return {
        updateNewName: (name) => {
            let action = updateNewEmployeeName(name);
            dispatch(action);
        },
        addEmployee: () => {
            dispatch(addEmployee() );
        },
        setEmployees: (employees) => {
            dispatch(setEmployees(employees));
        }
    };
};*/


export default connect(mapStateToProps, {updateNewEmployeeName, addEmployee, setEmployees, setCurrentPage, getEmployees, updateEmployee, searchEmployee})(EcpBaseContainer);
