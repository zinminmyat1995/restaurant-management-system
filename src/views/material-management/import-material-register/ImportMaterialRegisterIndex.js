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
} from '@coreui/react'
import Message from "../../common/SuccessError";
import Loading from "../../common/Loading"
import ImportMaterialRegisterForm from "./ImportMaterialRegisterForm"
import CommonMessage from "../../common/CommonMessage";

import {
  nullChk,
  numberChk
} from "../../common/CommonValidation";
const ImportMaterialRegisterIndex = () => {
  const [error, setError] = useState([]); // for error message
  const [success, setSuccess] = useState([]); // for success message
  const [loading, setLoading ] = useState(false);  // for loading
  const [shopName, setShopName ] = useState("Shwe Kant Kaw");  // for shopname
  const [nowDate,setNowDate] = useState(new Date().toISOString().slice(0, 10));
  const [materialID,setMaterialID] = useState("");
  const [materialName,setMaterialName] = useState("");
  const [purchaseType,setPurchaseType] = useState("");
  const [price,setPrice] = useState("");
  const [importCount,setImportCount] = useState("");
  const [totalPrice,setTotalPrice] = useState("");
  const [tableData, setTableData] = useState([]); //for table show

  //for MaterialID HandleChange
  const  materialIDHandleChange = (e) => {
    setMaterialID(e.target.value);
  };

   //for MaterialName HandleChange
   const  materialNameHandleChange = (e) => {
    setMaterialName(e.target.value);
  };

  

    //for Price HandleChange
    const  priceHandleChange = (e) => {
      setError("")
      if (!numberChk(e.target.value)) {
        setError([CommonMessage.JSE005.replace("%s", "Number Only in Price Field")]);
        scrollTop();
        setPrice("");
      }else{
         setPrice(e.target.value);
         setTotalPrice(e.target.value*importCount)
      }
    };
        //for Import Count HandleChange
        const  importCountHandleChange = (e) => {
          setError("")
          if (!numberChk(e.target.value)) {
            setError([CommonMessage.JSE005.replace("%s", "Number Only in Import Count Field")]);
            scrollTop();
            setImportCount("");
          }else{
             setImportCount(e.target.value);
             setTotalPrice(e.target.value*price)
          }
         
        };

    const addClick = () =>{
      setError("");
      let errorMsg = [];

      // Checking Price
      if (!nullChk(price)) {
        errorMsg.push(CommonMessage.JSE005.replace("%s", "Price"));
        setError(errorMsg)
      } 
  
      // Checking Price
      if (!nullChk(importCount)) {
        errorMsg.push(CommonMessage.JSE005.replace("%s", "Import Count"));
        setError(errorMsg)
      }

      if (errorMsg.length <= 0) {
        let dataArr = [],
        tmp = [];
      if (tableData.length > 0) {
    
        for (var i = 0; i < tableData.length; i++) {
          let tmpOldRemain = tableData[i];
          if (tmpOldRemain["material_id"] != materialID) {
            if (i + 1 == tableData.length) {
              tmp["material_id"] = materialID;
              tmp["material_name"] = materialName;
              tmp["price"] = price;
              tmp["purchase_type"] = purchaseType;
              tmp["total"] = totalPrice;
             
              dataArr.push(tmp);
            }
          } else if (tmpOldRemain["material_id"] == materialID) {
            setError([ "Material ID "+ materialID + " is already exit!"]);
            scrollTop();
            break;
          }
        }
        let concatData = tableData.concat(dataArr);
        setTableData(concatData);
      } else {
              tmp["material_id"] = materialID;
              tmp["material_name"] = materialName;
              tmp["price"] = price;
              tmp["purchase_type"] = purchaseType;
              tmp["total"] = totalPrice;
        dataArr.push(tmp);
        setTableData(dataArr);
      }
    };
     
    }
//ScrollTop Func
const scrollTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

const remove = (id) => {
  let resultArray = tableData.filter((data) => data.material_id != id);
  setTableData(resultArray);
};

  //for save click
  const saveClick = (e) => {
    alert("saved")
  };
  return (
    <CRow>
      <CCol xs="12">
      <Loading start={loading} />
        <Message success={success} error={error} />
        <CCard>
        <CCardHeader>
            <h4>Import Material Registration</h4>
          </CCardHeader>
          <CCardBody>
            <ImportMaterialRegisterForm
            shopName={shopName}
            nowDate={nowDate}
            materialID={materialID}
            materialName={materialName}
            purchaseType={purchaseType}
            price={price}
            importCount={importCount}
            totalPrice={totalPrice}
            addClick={addClick}
            priceHandleChange={priceHandleChange}
            importCountHandleChange={importCountHandleChange}
            materialIDHandleChange={materialIDHandleChange}
            materialNameHandleChange={materialNameHandleChange}
            remove={remove}
            tableData={tableData}
            saveClick={saveClick}

            />
          </CCardBody>
        </CCard>
      </CCol>

    </CRow>
  )
}

export default ImportMaterialRegisterIndex