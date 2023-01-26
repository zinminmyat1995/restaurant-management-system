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

const MenuListForm = (props) => {
  let { shopName, menuName, shopNameChange, menuNameChange, searchClick } =
    props;
  return (
    <>
      <CRow className="input-row mt-3">
        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="4">
              <CLabel className="required">Shop Name</CLabel>
            </CCol>
            <CCol lg="6">
              <CInput placeholder="Shwe Gant Gaw" onChange={shopNameChange} />
            </CCol>
          </CRow>
        </CCol>

        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="4">
              <CLabel className="">Menu Name</CLabel>
            </CCol>
            <CCol lg="6">
              <CInput type="text" placeholder="" onChange={menuNameChange} />
            </CCol>
          </CRow>
        </CCol>
      </CRow>
      <CRow className="input-row mt-3">
        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="4">
              <CLabel className="">Menu Category</CLabel>
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
              <CLabel className="">Menu Type</CLabel>
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
          <CButton className="btn form-btn" onClick={searchClick}>
            Search
          </CButton>
        </CCol>
        <CCol lg="3"></CCol>
      </CRow>
    </>
  );
};
export default MenuListForm;
