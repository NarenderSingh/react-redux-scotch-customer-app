import React, { useEffect, useState, createContext } from 'react';
import { connect } from 'react-redux';
import { getCustomers, addCustomer, updateCustomer, deleteCustomer } from '../../redux/actions/customerActions';
import AddCustomer from './AddCustomer';
import CustomerList from './CustomerList';
import { ICustomer, ICustomerProps } from './ICustomer';

export const CustomerContext = createContext({});
const Customer = (props: ICustomerProps) => {
  const { customers, getCusttomers, addCustomer, updateCustomer, deleteCustomer } = props;
  const [toggle, setToggle] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [editValue, setEditValue] = useState({});

  useEffect(() => {
    getCustomers();
  }, [])

  const editCustomer = (customer: ICustomer) => {
    setEditValue(customer)
    setIsEdited(true);
    showCustomerForm();
  }

  const addNewCustomer = () => {
    setEditValue({})
    setIsEdited(false);
    showCustomerForm();
  }

  const showCustomerForm = () => {
    setToggle(true);
  }

  const showCustomersList = () => {
    setToggle(false);
  }

  const content = (
    <CustomerContext.Provider value={{customers, editCustomer, deleteCustomer}}>
      <div className="card card-body">
        <div>
          <button type="button" className="btn btn-outline-primary btn-sm ml-2" onClick={addNewCustomer}>Add New Customer</button>
          <button type="button" className="btn btn-outline-primary btn-sm ml-2" onClick={showCustomersList}>View Customers</button>
        </div>
        <hr />
        {
          toggle ?
            <AddCustomer
              addCustomer={addCustomer}
              updateCustomer={updateCustomer}
              showCustomersList={showCustomersList}
              isEdited={isEdited}
              editValue={editValue} /> :
            <CustomerList />
        }
      </div>
    </CustomerContext.Provider>
  )

  return content;
}

const mapStateToProps = (state) => ({
  customers: state.customer,
})

const mapDispachToProps = (dispatch) => ({
  getCusttomers: () => dispatch(getCustomers()),
  addCustomer: (customer: ICustomer) => dispatch(addCustomer(customer)),
  updateCustomer: (customer: ICustomer) => dispatch(updateCustomer(customer)),
  deleteCustomer: (customer: ICustomer) => dispatch(deleteCustomer(customer))
})

export default connect(mapStateToProps, mapDispachToProps)(Customer);