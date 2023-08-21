import React from "react";
import {
  CRow,
  CButton,
  CCol,
  CLabel,
  CInput,
  CSelect,
  CImg
} from "@coreui/react";

const ImportMaterialRegisterForm = (props) => {
  let {
    shopName,
    nowDate,
    materialID,
    materialName,
    purchaseType,
    price,
    importCount,
    totalPrice,
    addClick,
    priceHandleChange,
    importCountHandleChange,
    materialIDHandleChange,
    materialNameHandleChange,
    tableData,
    remove,
    saveClick
  } = props;
  return (
    <>
      <CRow className="mt-3">
        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="4">
              <CLabel style={{ marginTop: "5px" }}>Shop Name</CLabel>
            </CCol>
            <CCol lg="6">
              <CInput type="text" value={shopName}
                    readOnly className="without-allowed"
              />
            </CCol>
            <CCol lg="1"></CCol>
          </CRow>
        </CCol>
        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="4">
              <CLabel style={{ marginTop: "5px" }}>Date</CLabel>
            </CCol>
            <CCol lg="6">
              <CInput type="text"  value={nowDate} readOnly className="without-allowed"/>
            </CCol>
            <CCol lg="1"></CCol>
          </CRow>
        </CCol>
      </CRow>
      <CRow className="mt-4">
        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="4">
              <CLabel style={{ marginTop: "5px" }}>Material ID</CLabel>
            </CCol>
            <CCol lg="6">
              <CInput type="text" value={materialID} onChange={materialIDHandleChange}/>
            </CCol>
            <CCol lg="1"></CCol>
          </CRow>
        </CCol>
        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="4">
              <CLabel style={{ marginTop: "5px" }}>Material Name</CLabel>
            </CCol>
            <CCol lg="6">
              <CInput type="text"  value={materialName} onChange={materialNameHandleChange}/>
            </CCol>
            <CCol lg="1"></CCol>
          </CRow>
        </CCol>
      </CRow>
      <CRow className="mt-4">
        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="4">
              <CLabel style={{ marginTop: "5px" }}>Purchase Type</CLabel>
            </CCol>
            <CCol lg="6">
              <CInput type="text" readOnly className="without-allowed"/>
            </CCol>
            <CCol lg="1"></CCol>
          </CRow>
        </CCol>
        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="4">
              <CLabel style={{ marginTop: "5px" }}>Price</CLabel>&nbsp;
              <CLabel style={{ color: "red", marginTop: "5px" }}>*</CLabel>
            </CCol>
            <CCol lg="6">
              <CInput type="text" value={price} onChange={priceHandleChange}/>
            </CCol>
            <CCol lg="1"></CCol>
          </CRow>
        </CCol>
      </CRow>
      <CRow className="mt-4">
        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="4">
              <CLabel style={{ marginTop: "5px" }}>Import Count</CLabel>&nbsp;
              <CLabel style={{ color: "red", marginTop: "5px" }}>*</CLabel>
            </CCol>
            <CCol lg="6">
              <CInput type="text" value={importCount} onChange={importCountHandleChange}/>
            </CCol>
            <CCol lg="1"></CCol>
          </CRow>
        </CCol>
        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="4">
              <CLabel style={{ marginTop: "5px" }}>Total Price</CLabel>
            </CCol>
            <CCol lg="6">
              <CInput type="text" value={totalPrice} className="without-allowed" readOnly/>
            </CCol>
            <CCol lg="1"></CCol>
          </CRow>
        </CCol>
      </CRow>
      <CRow alignHorizontal="center" className="mt-5">
        <CButton className="form-btn" onClick={addClick}>Add</CButton>
      </CRow>
      <CRow style={{ overflow: "auto" }}>
        <CCol lg="12" xs="12">
          {tableData.length > 0 && (
            <>
            <table
              className="table table-striped"
              style={{
                width: "99.5%",
                margin: "30px 4px",
                border: "1px solid",
                textAlign: "center",
              }}
            >
              <thead style={{ backgroundColor: "#9ca13c" }}>
                <tr>
                  <th style={{ border: "1px solid" }} scope="col">
                    <label style={{ color: "white" }}>No</label>
                  </th>
                  <th style={{ border: "1px solid" }} scope="col">
                    <label style={{ color: "white" }}>Material ID</label>
                  </th>
                  <th style={{ border: "1px solid" }} scope="col">
                    <label style={{ color: "white" }}>Material Name</label>
                  </th>
                  <th style={{ border: "1px solid" }} scope="col">
                    <label style={{ color: "white" }}>Price</label>
                  </th>
                  <th style={{ border: "1px solid" }} scope="col">
                    <label style={{ color: "white" }}>Purchase Type</label>
                  </th>
                  <th style={{ border: "1px solid" }} scope="col">
                    <label style={{ color: "white" }}>Total Price</label>
                  </th>
                  <th style={{ border: "1px solid" }} scope="col">
                    <label style={{ color: "white" }}>Action</label>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td style={{ border: "1px solid" }}>{index + 1}</td>
                      <td style={{ border: "1px solid" }}>{data.material_id}</td>
                      <td style={{ border: "1px solid" }}>{data.material_name}</td>
                      <td style={{ border: "1px solid" }}>{data.price}</td>
                      <td style={{ border: "1px solid" }}>{data.purchase_type}</td>
                      <td style={{ border: "1px solid" }}>{data.total}</td>
                      <td style={{ border: "1px solid" }}>
                      
                        <div className="user-before">
                                <CImg
                                  src="/image/Delete-Component-inactive.svg"
                                  onClick={() => remove(data.material_id)}
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    cursor: "pointer",
                                  }}
                                ></CImg>
                                <CImg
                                  className="user-after"
                                  src="/image/Delete-Component-active.svg"
                                  onClick={() => remove(data.material_id)}
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    cursor: "pointer",
                                  }}
                                ></CImg>
                              </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <CRow alignHorizontal="center" className="mt-4">
            <CButton className="form-btn" onClick={saveClick} >Save</CButton>
          </CRow>
          </>
          )}
        </CCol>
      </CRow>
    </>
  );
};
export default ImportMaterialRegisterForm;
