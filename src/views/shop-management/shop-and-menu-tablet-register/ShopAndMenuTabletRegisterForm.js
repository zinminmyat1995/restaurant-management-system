import { CButton, CCol, CImg, CInput, CLabel, CRow, CSelect } from "@coreui/react";
import React from "react";

const ShopAndMenuTabletRegisterForm = (props) => {
    let {shopName, count , selectChange, countChange, addClick ,listData, totalRow, deleteClick,
    password, passwordChange, ownPasswordChange, saveClick ,keyHandler} = props;
    return(
        <>
        <div className="mt-4 tablet-register-form">
            <CRow>
                <CCol lg="6">
                    <CRow className="align-items-center">
                        <CCol lg="4">
                            <CLabel className="required" style={{display:'contents'}}>Shop Name</CLabel>
                        </CCol>
                        <CCol lg="7">
                            <CSelect className="cursor-style" value={shopName} onChange={selectChange}>
                                <option value="">Select Shop</option>
                                <option value="1">SHWE KANT KAW</option>
                                <option value="2">BEST FOOD SHOP</option>
                            </CSelect>
                        </CCol>
                        <CCol></CCol>
                    </CRow>
                </CCol>
                <CCol lg="6">
                     <CRow className="align-items-center">
                        <CCol></CCol>
                        <CCol lg="4">
                            <CLabel className="required" style={{display:'contents'}}>Tablet Count</CLabel>
                        </CCol>
                        <CCol lg="7">
                            <CInput type="text" value={count} onChange={countChange} onKeyDown={keyHandler}></CInput>
                        </CCol>
                    </CRow>
                </CCol>
            </CRow>
            <CRow alignHorizontal="center" className="mt-5">
                <CButton className="form-btn" onClick={addClick}>Add</CButton>
            </CRow>
        </div>
        {listData != "" &&
        <>
            <CRow className='mt-3 p-0' alignHorizontal="end" style={{marginRight:'40px'}}>
              <CLabel className='total-rows'>Total Row: {totalRow} rows</CLabel>
            </CRow>
            <CRow className='table-container'>
              <CCol>
                <CRow className="shop-tablet-table">
                  <CCol className='p-0'>
                      <div className='table-responsive'>
                          <table className='shop-menu-table'>
                              <thead className="text-center">
                                  <tr>
                                    <th width={50}>No</th>
                                    <th width={200}>Shop Name</th>
                                    <th width={200}>Tablet Code</th>
                                    <th width={200}>Action</th>
                                  </tr>
                              </thead>
                              <tbody className="text-center">
                                  {listData.map((data,index)  => {
                                      return(
                                          <tr key={index}>
                                              <td>{index +1}</td>
                                              <td>SSK</td>
                                              <td>{data.code}</td>
                                              <td>
                                                  <CImg className="cursor-style delete" src="/image/delete.png" width={25} height={25}onClick={()=>deleteClick(data.code)}></CImg>
                                              </td>
                                          </tr>
                                      )
                                  })}
                              </tbody>
                          </table>
                      </div>
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
        </>
        }
        {listData != "" &&
        <CRow alignHorizontal="center">
        <CButton className="form-btn" onClick={saveClick}>Save</CButton>
        </CRow>
        }
      </>
    )
}

export default ShopAndMenuTabletRegisterForm;
