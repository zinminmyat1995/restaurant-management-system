import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CImg,
  CInput,
  CLabel,
  CRow,
  CSelect,
} from "@coreui/react";
import Modal from "./Modal";
import Message from "../../common/SuccessError";
import Loading from "../../common/Loading"
import message from "../../common/CommonMessage"
import $ from "jquery";
const MaterialRegisterIndex = () => {
  const [modalShow, setModalShow] = useState(false); // for modal show or hide
  const [title, setTitle] = useState(""); // for modal title
  const [type, setType] = useState(""); // for plus or minus type
  const [error, setError] = useState([]); // for error message
  const [success, setSuccess] = useState([]); // for success message
  const [loading, setLoading ] = useState(false);  // for loading
  const [modalSuccess, setModalSuccess ] = useState([]);  // for modal success
  const [modalError, setModalError ] = useState([]);   // for modal error
  const [plusName, setPlusName  ] = useState("");  // for plus modal name
  const [minusName, setMinusName ] = useState("");  // for minus modal name
  const [minusNameData, setMinusNameData ] = useState([]); // for minus modal name data

  // for plus and minus button click function
  let btnClcik = (type) => {
    setModalShow(true);
    setType(type);
    type == "plus"
      ? setTitle("Add Purchase Type")
      : setTitle("Remove Purchase Type");
  };

  // for close btn function
  let cancelBtn = () => {
    setModalShow(false);setModalError([]);setModalSuccess([]);
  };
  
  // for ok button function
  let okBtn = ()=>{
    let str = "";
    if(type == "plus" && plusName == ""){
      str = (message.JSE005).replace("%s","Name")
    }
    if(type == "minus" && minusName == ""){
      str = (message.JSE001).replace("%s","Name")
    }
    if(str != ""){
      setModalError([str]);setModalSuccess([]);
      $("html, body").animate({ scrollTop: 0 }, 1000);
    }else{
      setModalError([]);setModalSuccess([]);

    }
    
  }

  return (
    <CRow>
      <CCol xs="12">
        <Loading start={loading} />
        <Message success={success} error={error} />
        <CCard>
          <CCardHeader>
            <h4>Material Registration</h4>
          </CCardHeader>
          <CCardBody>
            <CRow className="mt-3">
              <CCol lg="2" style={{ textAlign: "end" }}>
                <CLabel>Material ID</CLabel>
              </CCol>
              <CCol lg="1"></CCol>
              <CCol lg="4">
                <CInput type="text" />
              </CCol>
            </CRow>
            <CRow className="mt-4">
              <CCol lg="2" style={{ textAlign: "end" }}>
                <CLabel className="required">Name</CLabel>
              </CCol>
              <CCol lg="1"></CCol>
              <CCol lg="4">
                <CInput type="text" />
              </CCol>
            </CRow>
            <CRow className="mt-4">
              <CCol lg="2" style={{ textAlign: "end" }}>
                <CLabel className="required">Purchase type</CLabel>
              </CCol>
              <CCol lg="1"></CCol>
              <CCol lg="3">
                <CSelect>
                  <option key="" value="">
                    ---Select---
                  </option>
                </CSelect>
              </CCol>
              <CCol lg="1" style={{ marginLeft: "-13px" }}>
                <CRow alignHorizontal="start">
                  <CCol>
                    <CImg
                      className="btn-hover"
                      src={"/image/plus.svg"}
                      width="33px"
                      onClick={() => btnClcik("plus")}
                    />
                  </CCol>
                  <CCol>
                    <CImg
                      className="btn-hover"
                      src={"/image/minus.svg"}
                      width="33px"
                      onClick={() => btnClcik("minus")}
                    />
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
            <CRow alignHorizontal="center" className="mt-5">
              <CButton className="form-btn">Save</CButton>
            </CRow>

            <Modal
              show={modalShow}
              title={title}
              type={type}
              cancelBtn={cancelBtn}
              error={modalError}
              success={modalSuccess}
              okBtn={okBtn}
              plusName={plusName}
              plusNameChange={(e)=>setPlusName(e.target.value)}

            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default MaterialRegisterIndex;
