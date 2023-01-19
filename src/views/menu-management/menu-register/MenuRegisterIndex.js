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
  const [plusNameMeat, setPlusNameMeat] = useState("");  // for plus modal name
  const [total, setTotal] = useState(0);  // for plus modal name
 
  const [shopName, setShopName] = useState("Yuwa Tea House");  // for plus modal name
  const [menuName, setMenuName] = useState("20001");  // for plus modal name
  const [menuID, setMenuID] = useState();  // for plus modal name
  
  const [minusName, setMinusName] = useState("");  // for minus modal name
  const [minusNameData, setMinusNameData] = useState([]); // for minus modal name data
  const [meatPriceData, setMeatPriceData] = useState([
    { name: "Wat Thar", isChecked: "false" },
    { name: "fish", isChecked: "false" }
  ]); // for minus modal name data
  const [catData, setCatData] = useState([
    { name: "Myanmar", id: "1" , total:"2" },
    { name: "Thai", id: "2" ,total:"3" },
    { name: "China", id: "3",total:"4" },
    { name: "Shan", id: "4" ,total:"1"},
  ]); // for minus modal name data
  const [menuCatSelectValue, setMenuCatSelectValue] = useState("");  // for plus modal name

  const [typeData, setTypeData] = useState([
    { name: "Htamin Kyaw", id: "1" },
    { name: "Noddle", id: "2" },
    { name: "Salad", id: "3" },
    { name: "DimSum", id: "4" },
  ]); // for minus modal name data
  const [menuTypeSelectValue, setMenuTypeSelectValue] = useState("");  // for plus modal name
  // for plus and minus button click function
  let btnClcik = (type) => {
    setModalShow(true);
    setType(type);

    if (type == "plusCat") {
      setTitle("Add Menu Category")
    }
    if (type == "plusMeat") {
      setTitle("Add Meat and Price")
    }
    if (type == "plusType") {
      setTitle("Add Menu Type")
    }
    if (type == "minusCat") {
      setTitle("Remove Menu Category")
    }
    if (type == "minusType") {
      setTitle("Remove Menu Type")
    }
    if (type == "minusMeat") {
      setTitle("Remove Meat and Price")
    }

  };

  // for close btn function
  let cancelBtn = () => {
    setModalShow(false); setModalError([]); setModalSuccess([]);
    setPlusNameCate("");setPlusNameMeat("");setPlusNameType("");
  };


  let saveClick = () =>{
    let errorArray = [];

   if(menuCatSelectValue == ""){
    errorArray.push(message.JSE019.replace("%s","Menu Category"))
   }
   if(menuTypeSelectValue == ""){
    errorArray.push(message.JSE019.replace("%s","Menu Type"))
   }

   if(errorArray === [] || errorArray == ""){
    alert("save")
   }else{
    setError(errorArray);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

   }
  }

  // for ok button function
  let okBtn = () => {
    let str = "";
   
    if (type == "plusType" && plusNameType == "") {
      str = (message.JSE005).replace("%s", "Menu Type!")
    }
    if (type == "plusCat" && plusNameCate == "") {
      str = (message.JSE005).replace("%s", "Menu Category!")
    }
    if (type == "plusMeat" && plusNameMeat == "") {
      str = (message.JSE005).replace("%s", "Menu Meat and Price")
    }
    
    if (type == "minusType" && minusName == "") {
      str = (message.JSE001).replace("%s", "Menu Type!")
    }
    if (type == "minusCat" && minusName == "") {
      str = (message.JSE001).replace("%s", "Menu Category!")
    }

    if (str != "") {
      setModalError([str]); setModalSuccess([]);
      $("html, body").animate({ scrollTop: 0 }, 1000);
    } else {
      setModalError([]); setModalSuccess([]);

      if(type == "plusType"){
        alert("Type")
      }
      if(type == "plusCat"){
        alert("Cat")
      }
      if(type == "plusMeat"){
        alert("Meat")
      }

    }

  }

  let MenuCatSelectChange = (e) => {

    if(e.target.value == ""){
      setMenuID("");
      setMenuCatSelectValue("");
    }else{
      let[firstID,lastID]= e.target.value.split(",");
      let first = parseInt(firstID);
      let last = parseInt(lastID);
        setMenuCatSelectValue(parseInt(firstID));
        setTotal(parseInt(lastID));
        let a = 0;
        a = (1000 * first ) + last + 1
          setMenuID(a);

    }
  }

  const MenuNameChange = (e) => {
    setMenuName(e.target.value);
  };


  let MenuTypeSelectChange = (e) => {
    setMenuTypeSelectValue(e.target.value);
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
                <CInput type="text"  value={shopName} readOnly/>
              </CCol>
            </CRow>
            <CRow className="mt-3">
              <CCol lg="2" style={{ textAlign: "end" }}>
                <CLabel>Menu ID</CLabel>
              </CCol>
              <CCol lg="1"></CCol>
              <CCol lg="4">
                <CInput type="text" value={menuID} readOnly/>
              </CCol>
            </CRow>
            <CRow className="mt-4">
              <CCol lg="2" style={{ textAlign: "end" }}>
                <CLabel className="required">Menu Category</CLabel>
              </CCol>
              <CCol lg="1"></CCol>
              <CCol lg="3">
              <CSelect
                onChange={MenuCatSelectChange}
                value={[menuCatSelectValue,total]}
              >
                <option  value="">-- Select --</option>
                {catData.length != 0 &&
                  catData.map((data, index) => {
                    return (
                      <option 
                      style={{backgroundColor: "#e6e8ff"}}
                      key={index} value={[data.id, data.total]}>
                        {data.name}
                      </option>
                    );
                  })}
              </CSelect>
              </CCol>
              <CCol lg="1" style={{ marginLeft: "-13px" }}>
                <CRow alignHorizontal="start">
                  <CCol>
                    <CImg
                      className="btn-hover"
                      src={"/image/plus.svg"}
                      width="33px"
                      onClick={() => btnClcik("plusCat")}
                    />
                  </CCol>
                  <CCol>
                    <CImg
                      className="btn-hover"
                      src={"/image/minus.svg"}
                      width="33px"
                      onClick={() => btnClcik("minusCat")}
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
              <CSelect
                onChange={MenuTypeSelectChange}
                value={menuTypeSelectValue}
              >
                <option  value="">-- Select --</option>
                {typeData.length != 0 &&
                  typeData.map((data, index) => {
                    return (
                      <option 
                      style={{backgroundColor: "#e6e8ff"}}
                      key={index} value={data.id}>
                        {data.name}
                      </option>
                    );
                  })}
              </CSelect>
              </CCol>
              <CCol lg="1" style={{ marginLeft: "-13px" }}>
                <CRow alignHorizontal="start">
                  <CCol>
                    <CImg
                      className="btn-hover"
                      src={"/image/plus.svg"}
                      width="33px"
                      onClick={() => btnClcik("plusType")}
                    />
                  </CCol>
                  <CCol>
                    <CImg
                      className="btn-hover"
                      src={"/image/minus.svg"}
                      width="33px"
                      onClick={() => btnClcik("minusType")}
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
                <CInput type="text"  onChange={MenuNameChange}/>
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
              plusNameMeat={plusNameMeat}
              plusNameChangeMeat={(e) => setPlusNameMeat(e.target.value)}
            />



          </CCardBody>

          <CRow className="mt-3 ">
            <CCol lg="2"></CCol>
            <CCol lg="8" style={{ border: "2px solid #a3a83b" , borderRadius : "5px"}}>
              <CRow className="mt-1">
                <CCol lg="12" style={{ display: "flex" }} className="mt-4">
                  <h4 style={{ marginTop: "10px" }}>Meat and Price</h4> &nbsp;&nbsp;&nbsp;

                  <CImg
                    className="btn-hover"
                    src={"/image/plus.svg"}
                    width="40px"
                    
                    onClick={() => btnClcik("plusMeat")}
                  />

                </CCol>


              </CRow>

              {meatPriceData.length != 0 && (

                meatPriceData.map((data, index) => {
                  return (
                    <table className="table table-striped"
                      style={{
                        width: "99.5%",
                        margin: "30px 4px",

                        textAlign: "center",
                      }}>
                      <tr key={index}>
                        <td style={{ border: "none", width: "30px" }}><CInput type="checkbox" style={{ width: "20px" }} /></td>
                        <td style={{ border: "none", width: "200px" }}>{data.name}</td>
                        <td style={{ border: "none", width: "400px" }}><CInput type="text" /></td>
                        <td style={{ border: "none", width: "50px" }}>Kyat</td>
                        <td style={{ border: "none", width: "50px" }}>   <CImg
                          className="btn-hover"
                          src={"/image/minus.svg"}
                          width="33px"
                          onClick={() => btnClcik("minusMeat")}
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
            <CButton className="form-btn" style={{marginBottom:"30px"}}
            onClick ={saveClick}
            >Save</CButton>
            
          </CRow>
        </CCard>

      </CCol>
    </CRow>
  );
};

export default MenuRegisterIndex;
