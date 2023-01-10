import React from "react";
import {
  CRow,
  CButton,
  CModal,
  CModalBody,
  CButtonToolbar,
  CModalHeader,
  CModalFooter,
  CCol,
  CLabel,
  CInput,
  CSelect,
} from "@coreui/react";
import Message from "../../common/SuccessError"
const Modal = (props) => {
  let { cancelBtn, show, title, type,success, error,okBtn,plusNameChangeType,plusNameChangeCate,plusNameCate,plusNameType } = props;
  return (
    <>
      <CModal
        onClose={cancelBtn}
        centered
        closeOnBackdrop={false}
        show={show}
        style={{ boxShadow: "0 3px 7px rgba(0, 0, 0, 0.4)" }}
      >
        <CModalHeader>
          <h5>{title}</h5>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol>
              <Message success={success} error={error} />
            </CCol>
          </CRow>
          {type == "plus1" && (
          <>
            <CRow>
              <CCol lg="3" style={{ textAlign: "center" }}>
                <CLabel className="required">Name</CLabel>
              </CCol>
              <CCol lg="9">
                <CInput onChange={plusNameChangeCate} value={plusNameCate} />
              </CCol>
            </CRow>
          
          </>
          
          )}

{type == "plus2" && (
          <>
            <CRow>
              <CCol lg="3" style={{ textAlign: "center" }}>
                <CLabel className="required">Name</CLabel>
              </CCol>
              <CCol lg="9">
                <CInput onChange={plusNameChangeCate} value={plusNameCate} />
              </CCol>
            </CRow>
          
          </>
          
          )}
             {type == "plus" && (
            <CRow>
              <CCol lg="3" style={{ textAlign: "center" }}>
                <CLabel className="required">Name</CLabel>
              </CCol>
              <CCol lg="9">
                <CInput onChange={plusNameChangeType} value={plusNameType} />
              </CCol>
            </CRow>
          )}
          {type == "minus" && (
            <CRow>
              <CCol lg="3" style={{ textAlign: "center" }}>
                <CLabel className="required">Name</CLabel>
              </CCol>
              <CCol lg="9">
                <CSelect>
                  <option key="" value="">
                    ---Select---
                  </option>
                </CSelect>
              </CCol>
            </CRow>
          )}


{type == "minus2 " && (
            <CRow>
              <CCol lg="3" style={{ textAlign: "center" }}>
                <CLabel className="required">Name</CLabel>
              </CCol>
              <CCol lg="9">
                <CSelect>
                  <option key="" value="">
                    ---Select---
                  </option>
                </CSelect>
              </CCol>
            </CRow>
          )}
            {type == "minus1" && (
            <CRow>
              <CCol lg="3" style={{ textAlign: "center" }}>
                <CLabel className="required">Name</CLabel>
              </CCol>
              <CCol lg="9">
                <CSelect>
                  <option key="" value="">
                    ---Select---
                  </option>
                </CSelect>
              </CCol>
            </CRow>
          )}
        </CModalBody>
        <CModalFooter>
          <CButton className="ok-btn" onClick={okBtn}>OK</CButton>
          <CButton className="cancel-btn" onClick={cancelBtn}>
            Cancel
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};
export default Modal;
