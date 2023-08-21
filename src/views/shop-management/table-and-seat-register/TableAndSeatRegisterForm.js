import React from "react";
import { CRow, CButton, CCol, CLabel, CInput, CSelect } from "@coreui/react";

const TableAndSeatRegisterForm = (props) => {
  let {
    tableData,
    shopName,
    nowDate,
    floor,
    tableNo,
    seatCount,
    addClick,
    floorSelectValue,
    floorSelectChange,
    seatCountHandleChange,
    remove,
    tableNoHandleChange,
    saveClick
  } = props;

  console.log("table", tableData);
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
              <CInput
                type="text"
                value={shopName}
                readOnly
                className="without-allowed"
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
              <CInput
                type="text"
                value={nowDate}
                readOnly
                className="without-allowed"
              />
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
              <CLabel style={{ marginTop: "5px" }}>Table No</CLabel>&nbsp;
              <label style={{ color: "red" }}>*</label>
            </CCol>
            <CCol lg="6">
              <CInput
                type="text"
                onChange={tableNoHandleChange}
                value={tableNo}
              />
            </CCol>
            <CCol lg="1"></CCol>
          </CRow>
        </CCol>
        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="4">
              <CLabel style={{ marginTop: "5px" }}>Seat Count</CLabel>&nbsp;
              <label style={{ color: "red" }}>*</label>
            </CCol>
            <CCol lg="6">
              <CInput
                type="text"
                onChange={seatCountHandleChange}
                value={seatCount}
              />
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
              <CLabel style={{ marginTop: "5px" }}>Floor</CLabel>&nbsp;
              <label style={{ color: "red" }}>*</label>
            </CCol>
            <CCol lg="6">
              <CSelect onChange={floorSelectChange} value={floorSelectValue}>
                <option value="0">Please Select Floor</option>
                {floor != "" &&
                  floor.map((data, index) => {
                    return (
                      <option key={index} value={data.floor_name}>
                        {data.floor_name}
                      </option>
                    );
                  })}
              </CSelect>
            </CCol>
            <CCol lg="1"></CCol>
          </CRow>
        </CCol>
        <CCol lg="6"></CCol>
      </CRow>
      <CRow alignHorizontal="center" className="mt-5">
        <CButton className="form-btn" onClick={addClick}>
          Add
        </CButton>
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
                    <label style={{ color: "white" }}>Table No</label>
                  </th>
                  <th style={{ border: "1px solid" }} scope="col">
                    <label style={{ color: "white" }}>Seat Count</label>
                  </th>
                  <th style={{ border: "1px solid" }} scope="col">
                    <label style={{ color: "white" }}>Floor</label>
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
                      <td style={{ border: "1px solid" }}>{data.table_no}</td>
                      <td style={{ border: "1px solid" }}>{data.seat_count}</td>
                      <td style={{ border: "1px solid" }}>{data.floor}</td>
                      <td style={{ border: "1px solid" }}>
                        <CLabel
                          style={{ color: "red" }}
                          onClick={() => remove(data.table_no)}
                        >
                          Remove
                        </CLabel>
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
export default TableAndSeatRegisterForm;
