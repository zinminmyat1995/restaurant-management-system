import { CButton, CCol, CImg, CInput, CLabel, CRow, CSelect } from "@coreui/react";
import React from "react";

const ShopAndMenuTabletRegisterForm = (props) => {
    let {shopName, count , selectChange, countChange, addClick ,listData, totalRow, deleteClick,
    password, passwordChange, ownPasswordChange, saveClick ,keyHandler} = props;
    return(
        <>
        <div className="tablet-register-form">
            <CRow className="mb-5">
                <CCol lg="6">
                    <CRow>
                        <CCol lg="4">
                            <CLabel className="required">Shop Name</CLabel>
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
                     <CRow>
                        <CCol></CCol>
                        <CCol lg="4">
                            <CLabel className="required">Table Count</CLabel>
                        </CCol>
                        <CCol lg="7">
                            <CInput type="text" value={count} onChange={countChange} onKeyDown={keyHandler}></CInput>
                        </CCol>
                    </CRow>
                </CCol>
            </CRow>
            <CRow alignHorizontal="center">
                <CButton className="form-btn login-btn" onClick={addClick}>Add</CButton>
            </CRow>
        </div>
        {listData != "" &&
            <CRow className='table-container'>
                <CCol>
                    <CRow className='m-0 p-0'>
                        <CLabel className='total-rows'>Total Row: {totalRow} rows</CLabel>
                    </CRow>
            <CRow>
                <CCol>
                    <div className='table-responsive'>
                        <table className='table shop-menu-table'>
                            <thead className="text-center">
                                <tr>
                                <th>No</th>
                                <th>Table Code</th>
                                <th>
                                    <div className="d-flex align-items-center">
                                        <CLabel className="mr-2">Password</CLabel>
                                        <CInput type="text" value={password} onChange={passwordChange}></CInput>
                                    </div>
                                </th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {listData.map((data,index)  => {
                                    return(
                                        <tr key={index}>
                                            <td>{index +1}</td>
                                            <td>{data.code}</td>
                                            <td>
                                                <CInput type="text" value={password != ""? password : data.value} onChange={(e)=>ownPasswordChange(data.code,e)}></CInput>
                                            </td>
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
        }
        {listData != "" &&
        <CRow alignHorizontal="center">
        <CButton className="form-btn login-btn" onClick={saveClick}>Save</CButton>
        </CRow>
        }
      </>
    )
}

export default ShopAndMenuTabletRegisterForm;