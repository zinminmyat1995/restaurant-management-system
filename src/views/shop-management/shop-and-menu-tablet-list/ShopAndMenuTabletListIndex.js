import React, { useState } from 'react'
import {CCard,CCardBody,CCardHeader,CCol,CRow} from '@coreui/react';
import { checkNullOrBlank,validateIntegerOnly } from "../../common/CommonValidation";
import CommonMessage from '../../common/CommonMessage';
import SuccessError from '../../common/SuccessError';
import ShopAndMenuTabletListForm from './ShopAndMenuTabletListForm';

const ShopAndMenuTabletListIndex = () => {
  const [error, setError] = useState([]); // for error message
  const [success, setSuccess] = useState([]); // for success message
  const [shopName, setShopName] = useState(""); // for selected shop name
  const [tabCode, setTabCode] = useState(""); // for tablet code

  const shopNameChange = (e) => {
    setShopName(e.target.value);
  }

  const tabCodeChange = (e) => {
    setTabCode(e.target.value);
  }

  const searchClick = () => {
    alert('a');
  }

  return (
    <>
    <SuccessError error={error} success={success} />
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardHeader>
            <h4 className='m-0'>Shop And Tablet List</h4>
          </CCardHeader>
          <CCardBody>
            <ShopAndMenuTabletListForm
            shopName = {shopName}
            shopNameChange = {shopNameChange}
            tabCode = {tabCode}
            tabCodeChange = {tabCodeChange}
            searchClick = {searchClick}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    </>
  )
}

export default ShopAndMenuTabletListIndex
