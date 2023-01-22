import React from "react";
import {
  CRow,
  CButton,
  CCol,
  CLabel,
  CInput,
  CInputRadio,
  CSelect,
} from "@coreui/react";

import ReactDOM from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faPenToSquare,
  faTrashCan,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { data } from "jquery";

library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faPenToSquare,
  faTrashCan,
  faInfoCircle
);

const ShopRegistrationAndListForm = (props) => {
  let {
    shopCode,
    shopName,
    address,
    phone,
    shopCodeChange,
    shopNameChange,
    addressChange,
    phoneChange,
    passwordChange,
    confirmPasswordChange,
    saveClick,
    searchClick,
    hr,
    min,
    hrOpenSelectChange,
    hrOpenSelectValue,
    minOpenSelectChange,
    minOpenSelectValue,
    hrCloseSelectChange,
    hrCloseSelectValue,
    minCloseSelectChange,
    minCloseSelectValue,
    openRadioData,
    closeRadioData,
    radioChange,
  } = props;

  return (
    <>
      <CRow className="input-row mt-3">
        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="4">
              <CLabel className="required">Shop Code</CLabel>
            </CCol>
            <CCol lg="6">
              <CInput placeholder="SSK-20001" onChange={shopCodeChange} />
            </CCol>
          </CRow>
        </CCol>

        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="4">
              <CLabel className="required">Shop Name</CLabel>
            </CCol>
            <CCol lg="6">
              <CInput
                type="text"
                placeholder="SHWE KANT KAW"
                onChange={shopNameChange}
              />
            </CCol>
          </CRow>
        </CCol>
      </CRow>
      <CRow className="input-row">
        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="4">
              <CLabel className="required">Address</CLabel>
            </CCol>
            <CCol lg="6">
              <CInput
                type="text"
                placeholder="Enter Address"
                onChange={addressChange}
              />
            </CCol>
          </CRow>
        </CCol>
        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="4">
              <CLabel className="required">Phone No</CLabel>
            </CCol>
            <CCol lg="6">
              <CInput
                type="text"
                placeholder="Enter Phone number"
                onChange={phoneChange}
              />
            </CCol>
          </CRow>
        </CCol>
      </CRow>
      <CRow className="input-row">
        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="4">
              <CLabel className="required" autoComplete="new-password">
                Password
              </CLabel>
            </CCol>
            <CCol lg="6">
              <CInput
                type="password"
                placeholder="Enter new password"
                onChange={passwordChange}
              />
            </CCol>
          </CRow>
        </CCol>
        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="4">
              <CLabel className="required" autoComplete="new-password">
                Confirm Password
              </CLabel>
            </CCol>
            <CCol lg="6">
              <CInput
                type="password"
                placeholder="Enter confirm password"
                onChange={confirmPasswordChange}
              />
            </CCol>
          </CRow>
        </CCol>
      </CRow>
      <CRow className="input-row">
        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="4">
              <CLabel className="required" autoComplete="new-password">
                Opening hours
              </CLabel>
            </CCol>
            <CCol lg="6">
              <CRow lg="12">
                <span className="hr-span">
                  <CSelect
                    className="form-control form-select"
                    onChange={hrOpenSelectChange}
                    value={hrOpenSelectValue}
                  >
                    <option value="">hr</option>
                    {hr != "" &&
                      hr.map((data, index) => {
                        return (
                          <option key={index} value={data.name}>
                            {data.name}
                          </option>
                        );
                      })}
                  </CSelect>
                </span>
                <span className="min-span">
                  <CSelect
                    className="form-control form-select"
                    onChange={minOpenSelectChange}
                    value={minOpenSelectValue}
                  >
                    <option value="">min</option>
                    {min != "" &&
                      min.map((data, index) => {
                        return (
                          <option key={index} value={data.name}>
                            {data.name}
                          </option>
                        );
                      })}
                  </CSelect>
                </span>
                <CCol lg="5" className="col-radio">
                  {openRadioData != "" &&
                    openRadioData.map((data, index) => {
                      return (
                        <CLabel className="radio-label" key={index}>
                          {data.name}
                          <CInputRadio
                            id={data.id}
                            className="radio"
                            value={data.id}
                            onChange={() => radioChange(data)}
                          />
                        </CLabel>
                      );
                    })}
                  {/* <CLabel className="radio-pm-label">
                    PM
                    {openRadioData != "" &&
                      openRadioData.map((data, index) => {
                        return (
                          <CInputRadio
                            id={data.id}
                            className="radio"
                            value={data.id}
                            onChange={() => radioChange(data)}
                            checked={id == data.id ? true : false}
                          />
                        );
                      })}
                  </CLabel> */}
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCol>
        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="4">
              <CLabel className="required" autoComplete="new-password">
                Closing Time
              </CLabel>
            </CCol>
            <CCol lg="6">
              <CRow lg="12">
                <span className="hr-span">
                  <CSelect
                    className="form-control form-select"
                    onChange={hrCloseSelectChange}
                    value={hrCloseSelectValue}
                  >
                    <option value="">hr</option>
                    {hr != "" &&
                      hr.map((data, index) => {
                        return (
                          <option key={index} value={data.name}>
                            {data.name}
                          </option>
                        );
                      })}
                  </CSelect>
                </span>
                <span className="min-span">
                  <CSelect
                    className="form-control form-select"
                    onChange={minCloseSelectChange}
                    value={minCloseSelectValue}
                  >
                    <option value="">min</option>
                    {min != "" &&
                      min.map((data, index) => {
                        return (
                          <option key={index} value={data.name}>
                            {data.name}
                          </option>
                        );
                      })}
                  </CSelect>
                </span>
                <CCol lg="5" className="col-radio">
                  {closeRadioData != "" &&
                    closeRadioData.map((data, index) => {
                      return (
                        <CLabel className="radio-label" key={index}>
                          {data.name}
                          <CInputRadio
                            id={data.id}
                            className="radio"
                            value={data.id}
                            onChange={() => radioChange(data)}
                          />
                        </CLabel>
                      );
                    })}
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCol>
      </CRow>
      <CRow className="mt-5 input-row">
        <CCol lg="4"></CCol>
        <CCol lg="4">
          <CRow>
            <CCol>
              <CButton className="btn form-btn" onClick={saveClick}>
                Save
              </CButton>
            </CCol>
            <CCol>
              <CButton className="btn form-btn" onClick={searchClick}>
                Search
              </CButton>
            </CCol>
          </CRow>
        </CCol>
        <CCol lg="4"></CCol>
      </CRow>
      <CRow className="ml-3">
        <p className="font-weight-bold">
          {/* <span className="hideRow">Total Row:</span> {total} row(s) */}
          Total Rows : 12
        </p>
      </CRow>
      <CRow className="overflow-style">
        <table className="list-table">
          <thead className="text-center">
            <tr>
              <th style={{ width: 25 }}>No</th>
              <th style={{ width: 50 }}>Shop Code</th>
              <th style={{ width: 75 }}>Shop Name</th>
              <th style={{ width: 100 }}>Address</th>
              <th style={{ width: 75, wordBreak: "break-all" }}>
                Opening~Closing Hours
              </th>
              <th style={{ width: 50 }}>Phone No.</th>
              <th style={{ width: 90 }} colSpan="3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {/* {mainTable.length > 0 && (
                            mainTable.map((data, index) => { */}
            {/* return ( */}
            <tr>
              <td style={{ width: 25 }}>1</td>
              <td style={{ width: 50 }}>{shopCode} </td>
              <td style={{ width: 75 }}>{shopName}</td>

              <td style={{ width: 150 }}>{address}</td>
              <td style={{ width: 75 }}></td>
              <td style={{ width: 50 }}>{phone}</td>
              <td style={{ width: 30 }}>
                <FontAwesomeIcon icon={faPenToSquare} />
              </td>
              <td style={{ width: 30 }}>
                <FontAwesomeIcon icon={faInfoCircle} />
              </td>
              <td style={{ width: 30 }}>
                <FontAwesomeIcon icon={faTrashCan} />
              </td>

              {/* <td style={{ width: 25 }}>1</td>
              <td style={{ width: 50 }}>10001</td>
              <td style={{ width: 75 }}>Chicken</td>
              <td style={{ width: 100 }}>
                No(178/180), 36th Street, Middle Block, 3 Ward, Kyauktada
                Township, Yangon
              </td>
              <td style={{ width: 75, wordBreak: "break-all" }}>
                8:00AM~9:00PM
              </td>
              <td style={{ width: 50 }}>09790000279</td>
              <td style={{ width: 30 }}>
                <FontAwesomeIcon icon="fa-regular fa-pen-to-square" />
                <FontAwesomeIcon icon={faPenToSquare} />
              </td>
              <td style={{ width: 30 }}>
                <FontAwesomeIcon icon={faInfoCircle} />
              </td>
              <td style={{ width: 30 }}>
                <FontAwesomeIcon icon={faTrashCan} />
              </td> */}
            </tr>
            {/* ); */}
            {/* })} */}
          </tbody>
        </table>
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
    </>
  );
};
export default ShopRegistrationAndListForm;
