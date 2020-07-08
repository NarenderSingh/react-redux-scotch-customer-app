import React, { useState, useEffect, useContext } from 'react';
import { ICustomer, ICustomerListProps } from './ICustomer';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditIcon from '@material-ui/icons/Edit';
import { CustomerContext } from './Customer';

const CustomerList = (props: ICustomerListProps) => {
  const customerContext: any = useContext(CustomerContext);
  const { customers, editCustomer, deleteCustomer } = customerContext;

  const { customerList } = customers;
  const [data, setData] = useState(customerList);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setData(customerList);
  }, [customers])

  useEffect(() => {
    const searchText = search.toLowerCase();

    let filteredData = data.filter(customer => customer.firstName.toLowerCase().includes(searchText) || customer.lastName.toLowerCase().includes(searchText));

    if (search === "")
      setData(customerList);
    else
      setData(filteredData);
  }, [search])

  const onSearchChange = (e: any) => {
    setSearch(e.target.value);
  }

  const content = (
    <div>
      <div className="row">
        <div className="col-sm-4">
          <input className="form-control mb-2" type="text"
            placeholder="Search Customer..."
            value={search}
            onChange={onSearchChange} />
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table size="medium">
          <TableHead>
            <TableRow>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">First Name</TableCell>
              <TableCell align="center">Last Name</TableCell>
              <TableCell align="center">Date of Birth</TableCell>
              <TableCell align="center">Phone Number</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="center" component="th" scope="row">
                  <EditIcon onClick={() => editCustomer(row)} />
                </TableCell>
                <TableCell align="center">{row.firstName}</TableCell>
                <TableCell align="center">{row.lastName}</TableCell>
                <TableCell align="center">{row.dob}</TableCell>
                <TableCell align="center">{row.phoneNumber}</TableCell>
                <TableCell align="center" component="th" scope="row">
                  <DeleteOutlinedIcon onClick={() => deleteCustomer(row)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )

  return content;
}

export default CustomerList