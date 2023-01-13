import { CButton, CCol, CLabel, CRow, CSelect } from '@coreui/react'
import React from 'react'

function EmployeeListForm(props) {
  let {shopName,selectChange,searchClick} = props;
  return (
    <div className='mt-4'>
      <CRow alignHorizontal='center' className="mb-3">
        <CCol lg="4">
          <CRow className="align-items-center">
            <CCol lg="4">
                <CLabel>Shop Name</CLabel>
            </CCol>
            <CCol lg="8">
                <CSelect className="cursor-style" value={shopName} onChange={selectChange}>
                    <option value="">Select Shop</option>
                    <option value="1">SHWE KANT KAW</option>
                    <option value="2">BEST FOOD SHOP</option>
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
      <CRow className='mt-5'>
        <CCol>
          <div className='table-responsive'>
            <table className='table emp-list-table'>
              <thead>
                <tr>
                  <th width={50}>No</th>
                  <th width={120}>Shop Code</th>
                  <th width={120}>Employee ID</th>
                  <th width={230}>Employee Name</th>
                  <th width={200}>Date Of Birth</th>
                  <th width={120}>Gender</th>
                  <th width={200}>Phone No</th>
                  <th width={120}>Address</th>
                  <th width={120}>Role</th>
                  <th width={300}>Action</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
          </div>
        </CCol>
      </CRow>
    </div>
  )
}

export default EmployeeListForm
