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
  const [tableData, setTableData] = useState([
    {material_id:"1",material_name:"Cat",purchase_type:"Gram"},
    {material_id:"2",material_name:"Noodle",purchase_type:"Buu"},
    {material_id:"3",material_name:"Chicken",purchase_type:"Gram"},
    {material_id:"4",material_name:"Pork",purchase_type:"Pate Thar"},

  ]); //for table show

   /**
   * get material name from input field
   * @author yuwa
   * @create 22/09/2022
   * @param e
   */
  const handleChangeMaterialName = (e) => {
    setMaterialName(e.target.value);
  };

   /**
   * onChange function of select box(select purchase type)
   * @author yuwa
   * @create 22/09/2022
   * @param e
   */
  const selectPurChaseOnChange = (e) => {
    setSelectPurchaseValue(e.target.value)
  };

  

  const searchClick = () => {
    alert("search");
  };
  

  const deleteClick = (id) => {
    alert(id);
  };

  const editClick = (id) => {
    alert(id);
  };
  

  return (
    <>
      <MaterialListForm
        handleChangeMaterialName={handleChangeMaterialName}
        materialName={materialName}
        selectPurchaseType={selectPurchaseType}
        selectPurchaseValue={selectPurchaseValue}
        selectPurChaseOnChange={selectPurChaseOnChange}
        tableData={tableData}
        searchClick={searchClick}
        deleteClick={deleteClick}
        editClick={editClick}
      />
    </>
  )
}

export default MaterialListIndex