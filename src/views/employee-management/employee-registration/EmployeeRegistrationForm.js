import React from "react";
import {
  CRow,
  CButton,
  CCol,
  CLabel,
  CInput,
  CImg,
  CInputRadio,
  CSelect,
} from "@coreui/react";

import ReactDOM from "react-dom";

import { data } from "jquery";

const EmployeeRegistrationForm = (props) => {
  let { addClick } = props;
  return (
    <>
      <CRow className="input-row mt-3">
        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="4">
              <CLabel className="required">Shop Code</CLabel>
            </CCol>
            <CCol lg="6">
              <CInput placeholder="SKK10001" onChange />
            </CCol>
          </CRow>
        </CCol>

        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="4">
              <CLabel className="">Employee ID</CLabel>
            </CCol>
            <CCol lg="6">
              <CInput type="text" placeholder="" onChange />
            </CCol>
          </CRow>
        </CCol>
      </CRow>
      <CRow className="input-row mt-3">
        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="4">
              <CLabel className="">Employee Name</CLabel>
            </CCol>
            <CCol lg="6">
              <CInput placeholder="" onChange />
            </CCol>
          </CRow>
        </CCol>

        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="4">
              <CLabel className="">Role</CLabel>
            </CCol>
            <CCol lg="6">
              <CInput type="text" placeholder="" onChange />
            </CCol>
          </CRow>
        </CCol>
      </CRow>
      <CRow className="input-row mt-3">
        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="4">
              <CLabel className="">Date Of Birth</CLabel>
            </CCol>
            <CCol lg="6">
              <CInput type="date" placeholder="" onChange />
            </CCol>
          </CRow>
        </CCol>

        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="4">
              <CLabel className="">Phone No</CLabel>
            </CCol>
            <CCol lg="6">
              <CInput type="text" placeholder="" onChange />
            </CCol>
          </CRow>
        </CCol>
      </CRow>
      <CRow className="input-row mt-3">
        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="4">
              <CLabel className="required">Password</CLabel>
            </CCol>
            <CCol lg="6">
              <CInput type="password" placeholder="" onChange />
            </CCol>
          </CRow>
        </CCol>

        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="4">
              <CLabel className="">Confirm Password</CLabel>
            </CCol>
            <CCol lg="6">
              <CInput type="password" placeholder="" onChange />
            </CCol>
          </CRow>
        </CCol>
      </CRow>
      <CRow className="input-row mt-3">
        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="4">
              <CLabel className="">Gender</CLabel>
            </CCol>
            <CCol lg="6"></CCol>
          </CRow>
        </CCol>
        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="4">
              <CLabel className="">Address</CLabel>
            </CCol>
            <CCol lg="6">
              <CInput type="text" placeholder="" onChange />
            </CCol>
          </CRow>
        </CCol>
      </CRow>
      <CRow className="mt-5">
        <CCol lg="3"></CCol>
        <CCol lg="6" className="d-flex justify-content-center">
          <CButton className="btn form-btn" onClick={addClick}>
            Add
          </CButton>
        </CCol>
        <CCol lg="3"></CCol>
      </CRow>
    </>
  );
};
export default EmployeeRegistrationForm;
