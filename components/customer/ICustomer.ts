
export interface ICustomer {
  firstName : string;
  lastName : string;
  dob: string,
  phoneNumber: string;
}

export interface ICustomerProps {
  customers: any,
  getCusttomers: any,
  addCustomer: any,
  updateCustomer: any,
  deleteCustomer: any
}

export interface IAddCustomerProps {
  addCustomer: any,
  updateCustomer: any,
  showCustomersList: any;
  isEdited: boolean;
  editValue: any;
}

export interface ICustomerListProps {
}