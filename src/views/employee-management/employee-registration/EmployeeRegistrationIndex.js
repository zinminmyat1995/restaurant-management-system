import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import EmployeeRegistrationForm from "./EmployeeRegistrationForm";

const EmployeeRegistrationIndex = () => {
  const addClick = () => {
    alert("clicked");
  };
  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardHeader>Employee Registration</CCardHeader>
          <CCardBody>
            <EmployeeRegistrationForm addClick={addClick} />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default EmployeeRegistrationIndex;
