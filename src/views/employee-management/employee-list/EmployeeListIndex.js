import React from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import EmployeeListForm from './EmployeeListForm';

const EmployeeListIndex = () => {
  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardHeader>
           <h4 className='m-0'>Employee List</h4>
          </CCardHeader>
          <CCardBody>
            <EmployeeListForm />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default EmployeeListIndex
