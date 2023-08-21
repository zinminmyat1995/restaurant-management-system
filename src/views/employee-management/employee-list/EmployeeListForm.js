import { CButton, CCol, CInput, CLabel, CRow, CSelect } from '@coreui/react'
import React from 'react';
import NPagination from '../../common/pagination/NPagination';

function EmployeeListForm(props) {
  let {shopName,shopNameChange,shopCodeChange,searchClick,employeeList,totalRow,currentPage,lastPage,shopCode,pagination,
      editClick, delClick} = props;
  return (
    <div className='mt-4'>
      <CRow className ="tablet-register-form">
        <CCol lg="6">
          <CRow className="align-items-center">
            <CCol lg="4">
                <CLabel style={{display:'contents'}}>Shop Name</CLabel>
            </CCol>
            <CCol lg="7">
                <CSelect className="cursor-style" value={shopName} onChange={shopNameChange}>
                    <option value="">Select Shop Name</option>
                    <option value="1">SHWE KANT KAW</option>
                    <option value="2">BEST FOOD SHOP</option>
                </CSelect>
            </CCol>
            <CCol></CCol>
          </CRow>
        </CCol>
        <CCol lg="6">
          <CRow className="align-items-center">
          <CCol></CCol>
            <CCol lg="4">
                <CLabel style={{display:'contents'}}>Shop Code</CLabel>
            </CCol>
            <CCol lg="7">
                <CSelect className="cursor-style" value={shopCode} onChange={shopCodeChange}>
                    <option value="">Select Shop Code</option>
                    <option value="1">1234</option>
                    <option value="2">2345</option>
                </CSelect>
            </CCol>
          </CRow>
        </CCol>
      </CRow>
      <CRow alignHorizontal="center" className="mt-5">
        <CButton className="form-btn" onClick={searchClick}>
          Search
        </CButton>
      </CRow>
      <CRow className='mt-5 px-3'>
        <CCol>
          <p className='mb-0 font-weight-bold text-right'>Total : 15 row(s)</p>
          <div className='overflow'>
            <table className='emp-list-table'>
              <thead>
                <tr>
                  <th width={50} className="text-center">No</th>
                  <th width={120}>Shop Code</th>
                  <th width={120}>Employee ID</th>
                  <th width={230}>Employee Name</th>
                  <th className='text-center' width={150}>Date Of Birth</th>
                  <th className='text-center' width={120}>Gender</th>
                  <th width={150}>Phone No</th>
                  <th width={220}>Address</th>
                  <th width={120}>Role</th>
                  <th className='text-center' width={200}>Action</th>
                </tr>
              </thead>
              <tbody>
                {employeeList.map((item,index)=> {
                  return(
                    <tr key={index}>
                    <td width={50} className="text-center">{index + 1}</td>
                    <td width={120}>{item.shop_code}</td>
                    <td width={120}> {item.emp_id}</td>
                    <td width={230}>{item.emp_name}</td>
                    <td className='text-center' width={150}>{item.dob}</td>
                    <td className='text-center' width={120}>{item.gender}</td>
                    <td width={150}>{item.phone}</td>
                    <td width={220}>{item.address}</td>
                    <td width={120}>{item.role}</td>
                    <td width={200} className='text-center'>
                      <label onClick={()=>editClick(item.id)} className='emp-table-btn btn-edit' style={{marginRight:'26px',width:'25%'}}>Edit</label>
                      <label onClick={()=>delClick(item.id)} className='emp-table-btn btn-del' style={{width:'25%'}}>Delete</label>
                    </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </CCol>
      </CRow>
      {totalRow > 10 &&
      <NPagination
            activePage = {currentPage}
            pages = {lastPage}
            currentPage = {currentPage}
            totalPage = {lastPage}
            pagination = {pagination}
            />
      }
    </div>
  )
}

export default EmployeeListForm
