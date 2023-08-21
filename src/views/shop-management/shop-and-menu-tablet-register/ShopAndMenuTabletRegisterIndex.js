import React, { useState } from 'react'
import {CCard,CCardBody,CCardHeader,CCol,CRow} from '@coreui/react';
import ShopAndMenuTabletRegisterForm from './ShopAndMenuTabletRegisterForm';
import { checkNullOrBlank,validateIntegerOnly } from "../../common/CommonValidation";
import CommonMessage from '../../common/CommonMessage';
import SuccessError from '../../common/SuccessError';

const ShopAndMenuTabletRegisterIndex = () => {
  const [error, setError] = useState([]); // for error message
  const [success, setSuccess] = useState([]); // for success message
  const [shopName, setShopName] = useState(""); // for selected shop name
  const [count, setCount] = useState(""); // for table count
  const [code, setCode] = useState(""); // for shop code or tablet code
  const [listData, setListData] = useState([]); // for shop and tablet list table
  const [totalRow, setTotalRow] = useState(""); // for listdata table rows
  const [password, setPassword] = useState(""); // for listdata table header password
  const [ownPassword, setOwnPassword] = useState(""); // for table's code own password
  let errArr = []; // temporary array for error message
  let dataArr = []; // temporary array for list table data

  //Key Handler for search box
  const keyHandler = (e) => {
    if (e.key == "Enter") {
      addClick();
    }
  };

  //onChange select shop name dropdown
  const selectChange = (e) => {
    setOwnPassword("");
    setShopName(e.target.value);
    if(e.target.value == "1"){
      setCode("SSK10001")
    }else if(e.target.value == "2"){
      setCode("BFS10001")
    }
  }

  //onChange table count
  const countChange = (e) => {
    setOwnPassword("");
    if(validateIntegerOnly(e.target.value)){
       setCount(e.target.value);
    }else{
      setCount(count);
    }
  }

  // addClick function
  const addClick = () => {
    setPassword("");
    if(!checkNullOrBlank(shopName)){
      errArr.push(CommonMessage.JSE019.replace("%s","Shop Name"))
    }
    if(!checkNullOrBlank(count)){
      errArr.push(CommonMessage.JSE005.replace("%s","table count"))
    }
    if(count > 50) {
      errArr.push("Table count must be less than 50.")
    }
    if(errArr !== ""){
      setError(errArr);
      setListData([]);
    }else{
      setError([])
    }
    if(errArr === [] || errArr == ""){
      for(var i= 0; i< count; i++){
        dataArr.push({"code":`${code}`.replace(/[0-9]/g, '')+(parseInt(`${code}`.replace(/[^\d]/g, ''))+1+i),value:ownPassword})
      }
      setListData(dataArr)
      setTotalRow(count);
    }
  }

  // passwordChange function
  const passwordChange = (e) => {
    setPassword(e.target.value);
    listData.forEach((data)=>{
      data.value = e.target.value;
    })
  }

  // ownPassword change function
  const ownPasswordChange = (id,e) => {
    setPassword("");
    listData.forEach((data)=> {
      if(id === data.code){
        data.value = e.target.value;
        setOwnPassword(e.target.value)
      }
    })
  }

  //delete click function
  const deleteClick = (id) => {
    let result = listData.filter((data)=> {
      return data.code != id;
    })
    setCount(result.length == "0"? "":result.length);
    setTotalRow(result.length);
    setListData(result)
  }

  //save data to database
  const saveClick = () => {
    alert(JSON.stringify(listData));
  }
  return (
    <>
    <SuccessError error={error} success={success} />
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardHeader>
            <h4 className='m-0'>Shop And Tablet Registration</h4>
          </CCardHeader>
          <CCardBody>
            <ShopAndMenuTabletRegisterForm
            selectChange = {selectChange}
            countChange = {countChange}
            shopName = {shopName}
            count = {count}
            code = {code}
            addClick = {addClick}
            listData = {listData}
            totalRow = {totalRow}
            password = {password}
            passwordChange = {passwordChange}
            ownPasswordChange = {ownPasswordChange}
            deleteClick = {deleteClick}
            saveClick = {saveClick}
            keyHandler = {keyHandler}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    </>
  )
}

export default ShopAndMenuTabletRegisterIndex
