import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import MenuListForm from "./MenuListForm";

const MenuListIndex = () => {
  const [shopName, setShopName] = useState("");
  const [menuName, setMenuName] = useState("");

  const shopNameChange = (e) => {
    setShopName(e.target.value);
  };

  const menuNameChange = (e) => {
    setMenuName(e.target.value);
  };

  const searchClick = () => {
    alert("clicked");
  };
  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardHeader>MenuListIndex</CCardHeader>
          <CCardBody>
            <MenuListForm
              searchClick={searchClick}
              shopName={shopName}
              menuName={menuName}
              shopNameChange={shopNameChange}
              menuNameChange={menuNameChange}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default MenuListIndex;
