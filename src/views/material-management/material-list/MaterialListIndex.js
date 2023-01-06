import React from 'react';
import { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import MaterialListForm from './MaterialListForm'

const MaterialListIndex = () => {

  const [materialName, setMaterialName] = useState(""); //for material name
  const [selectPurchaseType,setSelectPurchaseType] = useState([
    {purchase_type:"1",name: "Gram" },
    {purchase_type:"2",name: "Bottle" },
    {purchase_type:"3",name: "Buu" },
    {purchase_type:"4",name: "Pate Thar"},
  ]);
  const [selectPurchaseValue,setSelectPurchaseValue] = useState("");//for purchase value

   /**
   * get material name from input field
   * @author yaminzaw
   * @create 22/09/2022
   * @param e
   */
  const handleChangeMaterialName = (e) => {
    setMaterialName(e.target.value);
  };

   /**
   * onChange function of select box(select purchase type)
   * @author yaminzaw
   * @create 22/09/2022
   * @param e
   */
  const selectPurChaseOnChange = (e) => {
    setSelectPurchaseValue(e.target.value)
  };
  

  return (
    <>
      <MaterialListForm
        handleChangeMaterialName={handleChangeMaterialName}
        materialName={materialName}
        selectPurchaseType={selectPurchaseType}
        selectPurchaseValue={selectPurchaseValue}
        selectPurChaseOnChange={selectPurChaseOnChange}
      />
    </>
  )
}

export default MaterialListIndex