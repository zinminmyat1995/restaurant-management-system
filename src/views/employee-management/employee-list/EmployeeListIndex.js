import React, { useEffect, useState } from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
// import {ApiRequest} from '../../common/ApiRequest';
import EmployeeListForm from './EmployeeListForm';

const EmployeeListIndex = () => {
  const [success, setSuccess] = useState([]); // for success message
  const [error, setError] = useState([]); // for error message
  const [loading, setLoading] = useState(false); // for loading condition
  const [employeeList, setEmployeeList] = useState([]); // for user list table data
  const [totalRow, setTotalRow] = useState(""); // for user list table rows
  const [currentPage, setCurrentPage] = useState(); // for user list table current page
  const [lastPage, setLastPage] = useState(""); // for user list table last page
  const [shopCode, setShopCode] = useState(""); // for shop code

  useEffect(()=> {
    formLoad();
  },[])

  const formLoad = () => {
    // setLoading(true);
    // let obj = {
    //   method: "post",
    //   url: ApiPath.empList+`?page=${page}`,
    //   params:
    //     {
    //     }
    // };
    // let response = await ApiRequest(obj);
    // setLoading(false);
    // if (response.flag === false) {

    // } else {
    //   if (response.data.status === "OK") {

    let data = [
      {
        'id':'1',
        'shop_code':'SSK2000',
        'emp_id':'1000',
        'emp_name':'phyoe',
        'dob':'10-4-2020',
        'gender':'Male',
        'phone':'234567765',
        'address':'bago',
        'role':'admin'
      },
      {
        'id':'2',
        'shop_code':'SSK2000',
        'emp_id':'1000',
        'emp_name':'phyoe',
        'dob':'10-4-2020',
        'gender':'Male',
        'phone':'234567765',
        'address':'bago',
        'role':'admin'
      },
      {
        'id':'3',
        'shop_code':'SSK2000',
        'emp_id':'1000',
        'emp_name':'phyoe',
        'dob':'10-4-2020',
        'gender':'Male',
        'phone':'234567765',
        'address':'bago',
        'role':'admin'
      },
      {
        'id':'4',
        'shop_code':'SSK2000',
        'emp_id':'1000',
        'emp_name':'phyoe',
        'dob':'10-4-2020',
        'gender':'Male',
        'phone':'234567765',
        'address':'bago',
        'role':'admin'
      },
      {
        'id':'5',
        'shop_code':'SSK2000',
        'emp_id':'1000',
        'emp_name':'phyoe',
        'dob':'10-4-2020',
        'gender':'Male',
        'phone':'234567765',
        'address':'bago',
        'role':'admin'
      },
      {
        'id':'6',
        'shop_code':'SSK2000',
        'emp_id':'1000',
        'emp_name':'phyoe',
        'dob':'10-4-2020',
        'gender':'Male',
        'phone':'234567765',
        'address':'bago',
        'role':'admin'
      },
      {
        'id':'7',
        'shop_code':'SSK2000',
        'emp_id':'1000',
        'emp_name':'phyoe',
        'dob':'10-4-2020',
        'gender':'Male',
        'phone':'234567765',
        'address':'bago',
        'role':'admin'
      },
      {
        'id':'8',
        'shop_code':'SSK2000',
        'emp_id':'1000',
        'emp_name':'phyoe',
        'dob':'10-4-2020',
        'gender':'Male',
        'phone':'234567765',
        'address':'bago',
        'role':'admin'
      },
      {
        'id':'9',
        'shop_code':'SSK2000',
        'emp_id':'1000',
        'emp_name':'phyoe',
        'dob':'10-4-2020',
        'gender':'Male',
        'phone':'234567765',
        'address':'bago',
        'role':'admin'
      },
      {
        'id':'10',
        'shop_code':'SSK2000',
        'emp_id':'1000',
        'emp_name':'phyoe',
        'dob':'10-4-2020',
        'gender':'Male',
        'phone':'234567765',
        'address':'bago',
        'role':'admin'
      }
    ]
    setEmployeeList(data);
    setTotalRow(14);
    setCurrentPage(1);
    setLastPage(2);
    //     setEmployeeList(response.data.data.data);
    //     setTotalRow(response.data.data.total);
    //     setCurrentPage(response.data.data.current_page);
    //     setLastPage(response.data.data.last_page);
    //   } else {
    //   }
    // }
  }

  const searchClick = () => {
    alert('search');
  }

  // pagination function
  const pagination = (i) => {
    setCurrentPage(i);
    alert(i);
  }

  const editClick = (id) => {
    alert(id);
  }

  const delClick = (id) => {
    alert(id);
  }

  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardHeader>
           <h4 className='m-0'>Employee List</h4>
          </CCardHeader>
          <CCardBody>
            <EmployeeListForm
            employeeList = {employeeList}
            totalRow = {totalRow}
            currentPage = {currentPage}
            lastPage = {lastPage}
            shopCode = {shopCode}
            pagination ={pagination}
            searchClick ={searchClick}
            editClick = {editClick}
            delClick = {delClick}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default EmployeeListIndex
