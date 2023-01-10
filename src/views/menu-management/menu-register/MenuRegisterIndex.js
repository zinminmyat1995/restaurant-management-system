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
import { display } from "@mui/system";
const MenuRegisterIndex = () => {
  const [modalShow, setModalShow] = useState(false); // for modal show or hide
  const [title, setTitle] = useState(""); // for modal title
  const [type, setType] = useState(""); // for plus or minus type
  const [error, setError] = useState([]); // for error message
  const [success, setSuccess] = useState([]); // for success message
  const [loading, setLoading] = useState(false);  // for loading
  const [modalSuccess, setModalSuccess] = useState([]);  // for modal success
  const [modalError, setModalError] = useState([]);   // for modal error
  const [plusNameCate, setPlusNameCate] = useState("");  // for plus modal name
  const [plusNameType, setPlusNameType] = useState("");  // for plus modal name
  const [minusName, setMinusName] = useState("");  // for minus modal name
  const [minusNameData, setMinusNameData] = useState([]); // for minus modal name data
  const [meatPriceData, setMeatPriceData] = useState([
    { name: "Wat Thar", isChecked: "false" },
    { name: "fish", isChecked: "false" }
  ]); // for minus modal name data


  // for plus and minus button click function
  let btnClcik = (type) => {
    setModalShow(true);
    setType(type);

    if (type == "plus1") {
      setTitle("Add Menu Category")
    }
    if (type == "plus2") {
      setTitle("Add Meat")
    }
    if (type == "plus") {
      setTitle("Add Menu Type")
    }
    if (type == "minus1") {
      setTitle("Remove Menu Category")
    }
    if (type == "minus") {
      setTitle("Remove Menu Type")
    }

  };

  // for close btn function
  let cancelBtn = () => {
    setModalShow(false); setModalError([]); setModalSuccess([]);
  };

  // for ok button function
  let okBtn = () => {
    let str = "";
    if (type == "plus1" && plusNameCate == "") {
      str = (message.JSE005).replace("%s", "Menu Category!")
    }
    if (type == "plus" && plusNameCate == "") {
      str = (message.JSE005).replace("%s", "Menu Type!")
    }
    if (type == "minus1" && minusName == "") {
      str = (message.JSE001).replace("%s", "Menu Category!")
    }
    if (type == "minus" && minusName == "") {
      str = (message.JSE001).replace("%s", "Menu Type!")
    }
    if (str != "") {
      setModalError([str]); setModalSuccess([]);
      $("html, body").animate({ scrollTop: 0 }, 1000);
    } else {
      setModalError([]); setModalSuccess([]);

    }

  }

  return (
    <CRow>
      <CCol xs="12">
        <Loading start={loading} />
        <Message success={success} error={error} />
        <CCard>
          <CCardHeader>
            <h4>Menu Registration</h4>
          </CCardHeader>
          <CCardBody>
            <CRow className="mt-3">
              <CCol lg="2" style={{ textAlign: "end" }}>
                <CLabel>Shop Name</CLabel>
              </CCol>
              <CCol lg="1"></CCol>
              <CCol lg="4">
                <CInput type="text" />
              </CCol>
            </CRow>
            <CRow className="mt-3">
              <CCol lg="2" style={{ textAlign: "end" }}>
                <CLabel>Menu ID</CLabel>
              </CCol>
              <CCol lg="1"></CCol>
              <CCol lg="4">
                <CInput type="text" />
              </CCol>
            </CRow>
            <CRow className="mt-4">
              <CCol lg="2" style={{ textAlign: "end" }}>
                <CLabel className="required">Menu Catagory</CLabel>
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
                      onClick={() => btnClcik("plus1")}
                    />
                  </CCol>
                  <CCol>
                    <CImg
                      className="btn-hover"
                      src={"/image/minus.svg"}
                      width="33px"
                      onClick={() => btnClcik("minus1")}
                    />
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
            <CRow className="mt-4">
              <CCol lg="2" style={{ textAlign: "end" }}>
                <CLabel className="required">Menu Type</CLabel>
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
            <CRow className="mt-3">
              <CCol lg="2" style={{ textAlign: "end" }}>
                <CLabel>Menu Name</CLabel>
              </CCol>
              <CCol lg="1"></CCol>
              <CCol lg="4">
                <CInput type="text" />
              </CCol>
            </CRow>


            <Modal
              show={modalShow}
              title={title}
              type={type}
              cancelBtn={cancelBtn}
              error={modalError}
              success={modalSuccess}
              okBtn={okBtn}
              plusNameCate={plusNameCate}
              plusNameChangeCate={(e) => setPlusNameCate(e.target.value)}
              plusNameType={plusNameType}
              plusNameChangeType={(e) => setPlusNameType(e.target.value)}



            />



          </CCardBody>

          <CRow>
            <CCol lg="2"></CCol>
            <CCol lg="8" style={{ border: "1px solid" }}>

              <CRow className="mt-3">
                <CCol lg="12" style={{ display: "flex" }}>
                  <h4 style={{ marginTop: "6px" }}>Meat and Price</h4> &nbsp;&nbsp;&nbsp;

                  <CImg
                    className="btn-hover"
                    src={"/image/plus.svg"}
                    width="40px"

                    onClick={() => btnClcik("plus2")}
                  />

                </CCol>
               

              </CRow>

               {meatPriceData.length != 0 &&(

meatPriceData.map((data, index) => {
  return (
    <table   className="table table-striped"
    style={{
      width: "99.5%",
      margin: "30px 4px",
     
      textAlign: "center",
    }}>
    <tr key={index}>
      <td style={{ border: "none" ,width:"30px" }}><CInput type="checkbox" style={{width:"20px"}} /></td>
      <td style={{ border: "none" ,width:"200px"}}>{data.name}</td>
      <td style={{ border: "none",width:"400px"}}><CInput type="text" /></td>
      <td style={{ border: "none" ,width:"50px"}}>Kyat</td>
      <td style={{ border: "none" ,width:"50px"}}>   <CImg
                      className="btn-hover"
                      src={"/image/minus.svg"}
                      width="33px"
                      onClick={() => btnClcik("minus2")}
                    /></td>
      
      
    </tr>
    </table>

  );
})

               )}  
            
            </CCol>
            <CCol lg="2"></CCol>
          </CRow>
          <CRow alignHorizontal="center" className="mt-5">
            <CButton className="form-btn">Save</CButton>
          </CRow>
        </CCard>

      </CCol>
    </CRow>
  );
};

export default MenuRegisterIndex;
