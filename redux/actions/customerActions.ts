export const GET_CUSTOMERS = 'GET_CUSTOMERS';
export const ADD_CUSTOMER = 'ADD_CUSTOMER';
export const UPDATE_CUSTOMER = 'UPDATE_CUSTOMER';
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER';

export const getCustomers = () => ({
  type: GET_CUSTOMERS
})

export const addCustomer = (customer) => ({
  type: ADD_CUSTOMER,
  payload: {
    customer
  }
})

export const updateCustomer = (customer) => ({
  type: UPDATE_CUSTOMER,
  payload: {
    customer
  }
})

export const deleteCustomer = (customer) => ({
  type: DELETE_CUSTOMER,
  payload: {
    customer
  }
})