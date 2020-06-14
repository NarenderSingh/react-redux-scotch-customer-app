import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';
import TextField from '@material-ui/core/TextField';
import { ICustomer, IAddCustomerProps } from './ICustomer';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

let defaultState: ICustomer = {
  firstName: "",
  lastName: "",
  dob: "",
  phoneNumber: ""
}

const AddCustomer = (props: IAddCustomerProps) => {
  const { addCustomer, updateCustomer, showCustomersList, isEdited, editValue } = props;
  const classes = useStyles();

  if (isEdited) {
    defaultState = editValue
  }

  const [customer, setCustomer] = useState(defaultState);
  const [toast, setToast] = useState({ open: false, message: '' });

  const onInputChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;

    setCustomer({
      ...customer,
      [name]: value
    });
  }

  const validateCustomer = () : boolean => {
    const { firstName, lastName, dob, phoneNumber } = customer;
    let isValid = true;

    if (firstName === "") {
      showToast("Enter the First Name");
      isValid = false;
      return;
    }
    else if (lastName === "") {
      showToast("Enter the Last Name");
      isValid = false;
      return;
    }
    else if (dob === "") {
      showToast("Enter the Date of Birth");
      isValid = false;
      return;
    }
    else if (phoneNumber === "") {
      showToast("Enter the Phone Number");
      isValid = false;
      return;
    }

    return isValid;
  }

  const saveCustomer = () => {
    if(validateCustomer()) {
      addCustomer(customer);
      showCustomersList();
    }
  }

  const onUpdateCustomer = () => {
    if (validateCustomer()) {
      updateCustomer(customer);
      showCustomersList();
    }
  }

  const showToast = (message: string) => {
    setToast({ open: true, message: message });
    setTimeout(() => {
      hideToast();
    }, 2500)
  };

  const hideToast = () => {
    setToast({ open: false, message: '' });
  };

  const content = (
    <div className="card">
      <form className={classes.root} noValidate autoComplete="off">
        <div className="form-group">
          <TextField id="outlined-basic" label="First Name"
            name="firstName"
            value={customer.firstName}
            onChange={onInputChange}
            variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
        </div>
        <div className="form-group">
          <TextField id="outlined-basic" label="Last Name"
            name="lastName"
            value={customer.lastName}
            onChange={onInputChange}
            variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
        </div>
        <div className="form-group">
          <TextField
            id="date"
            label="Data of Birth"
            name="dob"
            type="date"
            value={customer.dob}
            onChange={onInputChange}
            variant="outlined"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="form-group">
          <TextField
            id="standard-number"
            label="Phone Number"
            name="phoneNumber"
            type="number"
            value={customer.phoneNumber}
            onChange={onInputChange}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="form-group">
          {
            !isEdited ? <button type="button" className="btn btn-outline-primary btn-sm ml-2" onClick={saveCustomer}>Add Customer</button> :
              <button type="button" className="btn btn-outline-primary btn-sm ml-2" onClick={onUpdateCustomer}>Update Customer</button>
          }
        </div>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={toast.open}
          onClose={hideToast}
          message={toast.message}
        />
      </form>
    </div>
  )

  return content;
}

export default AddCustomer