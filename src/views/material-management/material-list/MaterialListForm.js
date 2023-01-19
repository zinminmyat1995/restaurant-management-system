import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CLabel,
  CInput,
  CSelect,
  CImg,
} from "@coreui/react";

const MaterialListForm = (props) => {
  let {
    handleChangeMaterialName,
    materialName,
    selectPurchaseType,
    selectPurchaseValue,
    selectPurChaseOnChange,
    tableData,
    searchClick,
    deleteClick,
    editClick,
  } = props;
  return (
    <>
      <CCard>
        <CCardHeader>
          <h4>Material List</h4>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol lg="6">
              <CRow>
                <CCol lg="1"></CCol>
                <CCol lg="4">
                  <CLabel style={{ marginTop: "5px" }}> Material Name</CLabel>
                </CCol>
                <CCol lg="6">
                  <CInput
                    autoFocus="focus"
                    placeholder="Enter Material Name"
                    type="text"
                    value={materialName}
                    onChange={(e) => handleChangeMaterialName(e)}
                  />
                </CCol>
                <CCol lg="1"></CCol>
              </CRow>
            </CCol>
            <CCol lg="6">
              <CRow>
                <CCol lg="1"></CCol>
                <CCol lg="4">
                  <CLabel style={{ marginTop: "5px" }}> Purchase Type</CLabel>
                </CCol>
                <CCol lg="6">
                  <CSelect
                    value={selectPurchaseValue}
                    onChange={selectPurChaseOnChange}
                  >
                    <option value="">---Select Purchase Type---</option>
                    {selectPurchaseType.map((data, index) => {
                      return (
                        <option
                          key={index}
                          id={data.purchase_type}
                          value={data.purchase_type}
                        >
                          {data.name}
                        </option>
                      );
                    })}
                  </CSelect>
                </CCol>
                <CCol lg="1"></CCol>
              </CRow>
            </CCol>
          </CRow>

          {/* {mainTable.length > 0 && ( */}
          <CRow alignHorizontal="center" className="mt-5">
            <CButton className="form-btn" onClick={searchClick}>
              Search
            </CButton>
          </CRow>

          <CRow style={{ overflow: "auto" }}>
            <CCol lg="12" xs="12">
              {tableData.length > 0 && (
                <>
                  <CRow className="mt-5">
                    <CCol lg="10">
                    </CCol>

                    <CCol lg="2">
                      <p style={{ paddingRight: "10px", textAlign: "end" }}>
                        <span>Total Row:</span> {tableData.length} row(s)
                      </p>
                    </CCol>
                  </CRow>
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
                          <label style={{ color: "white" }}>
                            Material Name
                          </label>
                        </th>
                        <th style={{ border: "1px solid" }} scope="col">
                          <label style={{ color: "white" }}>
                            Purchase Type
                          </label>
                        </th>
                        <th
                          style={{ border: "1px solid" }}
                          colSpan="2"
                          scope="col"
                        >
                          <label style={{ color: "white" }}>Action</label>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((data, index) => {
                        return (
                          <tr key={index}>
                            <td style={{ border: "1px solid" }}>{index + 1}</td>
                            <td style={{ border: "1px solid" }}>
                              {data.material_id}
                            </td>
                            <td style={{ border: "1px solid" }}>
                              {data.material_name}
                            </td>
                            <td style={{ border: "1px solid" }}>
                              {data.purchase_type}
                            </td>

                            <td style={{ border: "1px solid" }}>
                              <div className="user-before">
                                <CImg
                                  src="/image/Edit-Component-inactive.svg"
                                  onClick={() => {
                                    editClick(data.material_id);
                                  }}
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    cursor: "pointer",
                                  }}
                                ></CImg>
                                <CImg
                                  className="user-after"
                                  src="/image/Edit-Component-active.svg"
                                  onClick={() => {
                                    editClick(data.material_id);
                                  }}
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    cursor: "pointer",
                                  }}
                                ></CImg>
                              </div>
                            </td>

                            <td style={{ border: "1px solid" }}>
                              <div className="user-before">
                                <CImg
                                  src="/image/Delete-Component-inactive.svg"
                                  onClick={() => deleteClick(data.material_id)}
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    cursor: "pointer",
                                  }}
                                ></CImg>
                                <CImg
                                  className="user-after"
                                  src="/image/Delete-Component-active.svg"
                                  onClick={() => deleteClick(data.material_id)}
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
                </>
              )}
            </CCol>
          </CRow>
          {/* {total > 20 && (
                    <CRow alignHorizontal="center" className="mt-3">
                    <CPagination
                        activePage={currentPage}
                        pages={lastPage}
                        dots={false}
                        arrows={false}
                        align="center"
                        firstButton="First page"
                        lastButton="Last page"
                        onActivePageChange={(i) => setActivePage(i)}
                    ></CPagination>
                    </CRow>
                )} */}
        </CCardBody>
      </CCard>
      {/* )} */}
    </>
  );
};

export default MaterialListForm;
