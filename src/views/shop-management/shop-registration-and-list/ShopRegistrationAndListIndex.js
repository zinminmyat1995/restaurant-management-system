import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CInput,
  CLabel,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const ShopRegistrationAndListIndex = () => {
  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardHeader>
            <h3>Shop Registration And List</h3>
          </CCardHeader>
          <CCardBody>
            <CRow className="input-row">
              <CCol>
                <CRow>
                  <CCol lg="4">
                    <CLabel className="required">Shop Code</CLabel>
                  </CCol>
                  <CCol>
                    <CInput placeholder="SSK-20001" value="" />
                  </CCol>
                </CRow>
              </CCol>
              <CCol lg="1"></CCol>
              <CCol>
                <CRow>
                  <CCol lg="4">
                    <CLabel className="required">Shop Name</CLabel>
                  </CCol>
                  <CCol>
                    <CInput type="text" placeholder="SHWE KANT KAW" value="" />
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
            <CRow className="input-row">
              <CCol>
                <CRow>
                  <CCol lg="4">
                    <CLabel className="required">Address</CLabel>
                  </CCol>
                  <CCol>
                    <CInput type="text" placeholder="" value="" />
                  </CCol>
                </CRow>
              </CCol>
              <CCol lg="1"></CCol>
              <CCol>
                <CRow>
                  <CCol lg="4">
                    <CLabel className="required">Phone No</CLabel>
                  </CCol>
                  <CCol>
                    <CInput type="text" placeholder="" value="" />
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
            <CRow className="input-row">
              <CCol>
                <CRow>
                  <CCol lg="4">
                    <CLabel className="required">Password</CLabel>
                  </CCol>
                  <CCol>
                    <CInput type="password" placeholder="" value="" />
                  </CCol>
                </CRow>
              </CCol>
              <CCol lg="1"></CCol>
              <CCol>
                <CRow>
                  <CCol lg="4">
                    <CLabel className="required">Confirm Password</CLabel>
                  </CCol>
                  <CCol>
                    <CInput type="password" placeholder="" value="" />
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
            <CRow>
              <CCol></CCol>
              <CCol>
                <CRow>
                  <CCol>
                    <CButton className="btn btn-save">Save</CButton>
                  </CCol>
                  <CCol>
                    <CButton className="btn btn-search">Search</CButton>
                  </CCol>
                </CRow>
              </CCol>
              <CCol></CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default ShopRegistrationAndListIndex;
