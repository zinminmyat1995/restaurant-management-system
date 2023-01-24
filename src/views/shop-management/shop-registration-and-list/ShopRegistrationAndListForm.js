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
                    <option name="00" value="00">
                      00
                    </option>
                    <option name="01" value="01">
                      01
                    </option>
                    <option name="02" value="02">
                      02
                    </option>
                    <option name="03" value="03">
                      03
                    </option>
                    <option name="04" value="04">
                      04
                    </option>
                    <option name="05" value="05">
                      05
                    </option>
                    <option name="06" value="06">
                      06
                    </option>
                    <option name="07" value="07">
                      07
                    </option>
                    <option name="08" value="08">
                      08
                    </option>
                    <option name="09" value="09">
                      09
                    </option>
                    <option name="10" value="10">
                      10
                    </option>
                    <option name="11" value="11">
                      11
                    </option>
                    <option name="12" value="12">
                      12
                    </option>
                    <option name="13" value="13">
                      13
                    </option>
                    <option name="14" value="14">
                      14
                    </option>
                    <option name="15" value="15">
                      15
                    </option>
                    <option name="16" value="16">
                      16
                    </option>
                    <option name="17" value="17">
                      17
                    </option>
                    <option name="18" value="18">
                      18
                    </option>
                    <option name="19" value="19">
                      19
                    </option>
                    <option name="20" value="20">
                      20
                    </option>
                    <option name="21" value="21">
                      21
                    </option>
                    <option name="22" value="22">
                      22
                    </option>
                    <option name="23" value="23">
                      23
                    </option>
                  </CSelect>
                </span>
                <span className="min-span">
                  <CSelect
                    className="form-control form-select"
                    onChange={minOpenSelectChange}
                    value={minOpenSelectValue}
                  >
                    <option value="">min</option>
                    <option name="00" value="00">
                      00
                    </option>
                    <option name="01" value="01">
                      01
                    </option>
                    <option name="02" value="02">
                      02
                    </option>
                    <option name="03" value="03">
                      03
                    </option>
                    <option name="04" value="04">
                      04
                    </option>
                    <option name="05" value="05">
                      05
                    </option>
                    <option name="06" value="06">
                      06
                    </option>
                    <option name="07" value="07">
                      07
                    </option>
                    <option name="08" value="08">
                      08
                    </option>
                    <option name="09" value="09">
                      09
                    </option>
                    <option name="10" value="10">
                      10
                    </option>
                    <option name="11" value="11">
                      11
                    </option>
                    <option name="12" value="12">
                      12
                    </option>
                    <option name="13" value="13">
                      13
                    </option>
                    <option name="14" value="14">
                      14
                    </option>
                    <option name="15" value="15">
                      15
                    </option>
                    <option name="16" value="16">
                      16
                    </option>
                    <option name="17" value="17">
                      17
                    </option>
                    <option name="18" value="18">
                      18
                    </option>
                    <option name="19" value="19">
                      19
                    </option>
                    <option name="20" value="20">
                      20
                    </option>
                    <option name="21" value="21">
                      21
                    </option>
                    <option name="22" value="22">
                      22
                    </option>
                    <option name="23" value="23">
                      23
                    </option>
                    <option name="24" value="24">
                      24
                    </option>
                    <option name="25" value="25">
                      25
                    </option>
                    <option name="26" value="26">
                      26
                    </option>
                    <option name="27" value="27">
                      27
                    </option>
                    <option name="28" value="28">
                      28
                    </option>
                    <option name="29" value="29">
                      29
                    </option>
                    <option name="30" value="30">
                      30
                    </option>
                    <option name="31" value="31">
                      31
                    </option>
                    <option name="32" value="32">
                      32
                    </option>
                    <option name="33" value="33">
                      33
                    </option>
                    <option name="34" value="34">
                      34
                    </option>
                    <option name="35" value="35">
                      35
                    </option>
                    <option name="36" value="36">
                      36
                    </option>
                    <option name="37" value="37">
                      37
                    </option>
                    <option name="38" value="38">
                      38
                    </option>
                    <option name="39" value="39">
                      39
                    </option>
                    <option name="40" value="40">
                      40
                    </option>
                    <option name="41" value="41">
                      41
                    </option>
                    <option name="42" value="42">
                      42
                    </option>
                    <option name="43" value="43">
                      43
                    </option>
                    <option name="44" value="44">
                      44
                    </option>
                    <option name="45" value="45">
                      45
                    </option>
                    <option name="46" value="46">
                      46
                    </option>
                    <option name="47" value="47">
                      47
                    </option>
                    <option name="48" value="48">
                      48
                    </option>
                    <option name="49" value="49">
                      49
                    </option>
                    <option name="50" value="50">
                      50
                    </option>
                    <option name="51" value="51">
                      51
                    </option>
                    <option name="52" value="52">
                      52
                    </option>
                    <option name="53" value="53">
                      53
                    </option>
                    <option name="54" value="54">
                      54
                    </option>
                    <option name="55" value="55">
                      55
                    </option>
                    <option name="56" value="56">
                      56
                    </option>
                    <option name="57" value="57">
                      57
                    </option>
                    <option name="58" value="58">
                      58
                    </option>
                    <option name="59" value="59">
                      59
                    </option>
                  </CSelect>
                </span>
                {/* <CCol lg="5" className="col-radio">
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
                </CCol> */}
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
                    <option name="00" value="00">
                      00
                    </option>
                    <option name="01" value="01">
                      01
                    </option>
                    <option name="02" value="02">
                      02
                    </option>
                    <option name="03" value="03">
                      03
                    </option>
                    <option name="04" value="04">
                      04
                    </option>
                    <option name="05" value="05">
                      05
                    </option>
                    <option name="06" value="06">
                      06
                    </option>
                    <option name="07" value="07">
                      07
                    </option>
                    <option name="08" value="08">
                      08
                    </option>
                    <option name="09" value="09">
                      09
                    </option>
                    <option name="10" value="10">
                      10
                    </option>
                    <option name="11" value="11">
                      11
                    </option>
                    <option name="12" value="12">
                      12
                    </option>
                    <option name="13" value="13">
                      13
                    </option>
                    <option name="14" value="14">
                      14
                    </option>
                    <option name="15" value="15">
                      15
                    </option>
                    <option name="16" value="16">
                      16
                    </option>
                    <option name="17" value="17">
                      17
                    </option>
                    <option name="18" value="18">
                      18
                    </option>
                    <option name="19" value="19">
                      19
                    </option>
                    <option name="20" value="20">
                      20
                    </option>
                    <option name="21" value="21">
                      21
                    </option>
                    <option name="22" value="22">
                      22
                    </option>
                    <option name="23" value="23">
                      23
                    </option>
                  </CSelect>
                </span>
                <span className="min-span">
                  <CSelect
                    className="form-control form-select"
                    onChange={minCloseSelectChange}
                    value={minCloseSelectValue}
                  >
                    <option value="">min</option>
                    <option name="00" value="00">
                      00
                    </option>
                    <option name="01" value="01">
                      01
                    </option>
                    <option name="02" value="02">
                      02
                    </option>
                    <option name="03" value="03">
                      03
                    </option>
                    <option name="04" value="04">
                      04
                    </option>
                    <option name="05" value="05">
                      05
                    </option>
                    <option name="06" value="06">
                      06
                    </option>
                    <option name="07" value="07">
                      07
                    </option>
                    <option name="08" value="08">
                      08
                    </option>
                    <option name="09" value="09">
                      09
                    </option>
                    <option name="10" value="10">
                      10
                    </option>
                    <option name="11" value="11">
                      11
                    </option>
                    <option name="12" value="12">
                      12
                    </option>
                    <option name="13" value="13">
                      13
                    </option>
                    <option name="14" value="14">
                      14
                    </option>
                    <option name="15" value="15">
                      15
                    </option>
                    <option name="16" value="16">
                      16
                    </option>
                    <option name="17" value="17">
                      17
                    </option>
                    <option name="18" value="18">
                      18
                    </option>
                    <option name="19" value="19">
                      19
                    </option>
                    <option name="20" value="20">
                      20
                    </option>
                    <option name="21" value="21">
                      21
                    </option>
                    <option name="22" value="22">
                      22
                    </option>
                    <option name="23" value="23">
                      23
                    </option>
                    <option name="24" value="24">
                      24
                    </option>
                    <option name="25" value="25">
                      25
                    </option>
                    <option name="26" value="26">
                      26
                    </option>
                    <option name="27" value="27">
                      27
                    </option>
                    <option name="28" value="28">
                      28
                    </option>
                    <option name="29" value="29">
                      29
                    </option>
                    <option name="30" value="30">
                      30
                    </option>
                    <option name="31" value="31">
                      31
                    </option>
                    <option name="32" value="32">
                      32
                    </option>
                    <option name="33" value="33">
                      33
                    </option>
                    <option name="34" value="34">
                      34
                    </option>
                    <option name="35" value="35">
                      35
                    </option>
                    <option name="36" value="36">
                      36
                    </option>
                    <option name="37" value="37">
                      37
                    </option>
                    <option name="38" value="38">
                      38
                    </option>
                    <option name="39" value="39">
                      39
                    </option>
                    <option name="40" value="40">
                      40
                    </option>
                    <option name="41" value="41">
                      41
                    </option>
                    <option name="42" value="42">
                      42
                    </option>
                    <option name="43" value="43">
                      43
                    </option>
                    <option name="44" value="44">
                      44
                    </option>
                    <option name="45" value="45">
                      45
                    </option>
                    <option name="46" value="46">
                      46
                    </option>
                    <option name="47" value="47">
                      47
                    </option>
                    <option name="48" value="48">
                      48
                    </option>
                    <option name="49" value="49">
                      49
                    </option>
                    <option name="50" value="50">
                      50
                    </option>
                    <option name="51" value="51">
                      51
                    </option>
                    <option name="52" value="52">
                      52
                    </option>
                    <option name="53" value="53">
                      53
                    </option>
                    <option name="54" value="54">
                      54
                    </option>
                    <option name="55" value="55">
                      55
                    </option>
                    <option name="56" value="56">
                      56
                    </option>
                    <option name="57" value="57">
                      57
                    </option>
                    <option name="58" value="58">
                      58
                    </option>
                    <option name="59" value="59">
                      59
                    </option>
                  </CSelect>
                </span>
                {/* <CCol lg="5" className="col-radio">
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
                </CCol> */}
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
