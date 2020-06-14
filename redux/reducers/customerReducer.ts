import { GET_CUSTOMERS, ADD_CUSTOMER, UPDATE_CUSTOMER, DELETE_CUSTOMER } from "../actions/customerActions";
import { initialCustomerState } from "../state/customerState";

const customerReducer = (state = initialCustomerState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CUSTOMERS: {
      return state;
    }
    case ADD_CUSTOMER: {
      const { customer } = payload;

      state = {
        ...state,
        customerList: [
          ...state.customerList,
          ...customer
        ]
      }

      return state;
    }
    case UPDATE_CUSTOMER: {
      const { customer } = payload;

      state = {
        ...state,
        customerList: state.customerList.map((_customer: any) => {
            if(_customer.firstName === customer.firstName  && _customer.lastName === customer.lastName) {
               _customer = customer;
            }

            return _customer;
          })
      }

      return state;
    }
    case DELETE_CUSTOMER: {
      const { customer } = payload;

      const filteredCustomerList =
        state.customerList.filter(_customer =>
          _customer.firstName !== customer.firstName
          && _customer.lastName !== customer.lastName);

      state = {
        ...state,
        customerList: filteredCustomerList
      }

      return state;
    }
    default:
      return state;
  }
};

export default customerReducer;