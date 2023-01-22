import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CInput,
  CLabel,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import ShopRegistrationAndListForm from "./ShopRegistrationAndListForm";
import Message from "../../common/SuccessError";
import Loading from "../../common/Loading";
import CommonMessage from "../../common/CommonMessage";
import {
  validateIntegerOnly,
  validateName,
  numberFormat,
  validatePwd,
  validationWhiteSpace,
  nullChk,
  numberChk,
  checkNullOrBlank,
} from "../../common/CommonValidation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShopRegistrationAndList = () => {
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState([]);
  const [loading, setLoading] = useState(false);
  const [shopCode, setShopCode] = useState(""); // shop code
  const [shopName, setShopName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hrOpenSelectValue, setHrOpenSelectValue] = useState("");
  const [minOpenSelectValue, setMinOpenSelectValue] = useState("");
  const [hrCloseSelectValue, setHrCloseSelectValue] = useState("");
  const [minCloseSelectValue, setMinCloseSelectValue] = useState("");
  const [radioChkVal, setRadioChkVal] = useState("");

  const [hr, setHr] = useState([
    { name: "00", hr: "00" },
    { name: "01", hr: "01" },
    { name: "02", hr: "02" },
    { name: "03", hr: "03" },
    { name: "04", hr: "04" },
  ]);
  const [min, setMin] = useState([
    { name: "00", hr: "00" },
    { name: "01", hr: "01" },
    { name: "02", hr: "02" },
    { name: "03", hr: "03" },
    { name: "04", hr: "04" },
  ]);
  const [openRadioData, setOpenRadioData] = useState([
    { id: 1, name: "AM" },
    { id: 2, name: "PM" },
  ]); // radio array
  const [closeRadioData, setCloseRadioData] = useState([
    { id: 1, name: "AM" },
    { id: 2, name: "PM" },
  ]);

  const shopCodeChange = (e) => {
    setShopCode(e.target.value);
  };
  const shopNameChange = (e) => {
    setShopName(e.target.value);
  };
  const addressChange = (e) => {
    setAddress(e.target.value);
  };
  const phoneChange = (e) => {
    setPhone(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };
  const confirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const hrOpenSelectChange = (e) => {
    setHrOpenSelectValue(e.target.value);
  };
  const minOpenSelectChange = (e) => {
    setMinOpenSelectValue(e.target.value);
  };
  const hrCloseSelectChange = (e) => {
    setHrCloseSelectValue(e.target.value);
  };
  const minCloseSelectChange = (e) => {
    setMinCloseSelectValue(e.target.value);
  };

  const radioChange = (data) => {
    setRadioChkVal(data.id);
  };

  const saveClick = () => {
    setError("");
    let errorMsg = [];
    if (!checkNullOrBlank(shopCode)) {
      errorMsg.push(CommonMessage.JSE005.replace("%s", "SHOP CODE"));
      setError(errorMsg);
    } else if (!validateIntegerOnly(shopCode)) {
      errorMsg.push(CommonMessage.JSE028.replace("%s", "SHOP CODE"));
      setError(errorMsg);
    }
    if (!checkNullOrBlank(shopName)) {
      errorMsg.push(CommonMessage.JSE005.replace("%s", "SHOP NAME"));
      setError(errorMsg);
    } else if (!validateName(shopName)) {
      errorMsg.push(CommonMessage.JSE028.replace("%s", "SHOP NAME"));
      setError(errorMsg);
    }
    if (!checkNullOrBlank(address)) {
      errorMsg.push(CommonMessage.JSE005.replace("%s", "address"));
      setError(errorMsg);
    }
    if (!checkNullOrBlank(phone)) {
      errorMsg.push(CommonMessage.JSE005.replace("%s", "phone number"));
      setError(errorMsg);
    } else if (!validateIntegerOnly(phone)) {
      errorMsg.push(CommonMessage.JSE028.replace("%s", "phone number"));
      setError(errorMsg);
    }
    if (!checkNullOrBlank(password)) {
      errorMsg.push(CommonMessage.JSE005.replace("%s", "password"));
      setError(errorMsg);
    } else if (!validatePwd(password)) {
      errorMsg.push(CommonMessage.JSE040);
      setError(errorMsg);
    }
    if (!checkNullOrBlank(confirmPassword)) {
      errorMsg.push(CommonMessage.JSE005.replace("%s", "confirm password"));
      setError(errorMsg);
    } else if (password !== confirmPassword) {
      errorMsg.push(CommonMessage.JSE008.replace("", ""));
    }
    if (!checkNullOrBlank(hrOpenSelectValue)) {
      errorMsg.push(CommonMessage.JSE005.replace("%s", "choose opening hour"));
      setError(errorMsg);
    }
    if (!checkNullOrBlank(minOpenSelectValue)) {
      errorMsg.push(
        CommonMessage.JSE005.replace("%s", "choose opening minute")
      );
      setError(errorMsg);
    }
    if (!checkNullOrBlank(hrCloseSelectValue)) {
      errorMsg.push(CommonMessage.JSE005.replace("%s", "choose closing hour"));
      setError(errorMsg);
    }
    if (!checkNullOrBlank(minCloseSelectValue)) {
      errorMsg.push(
        CommonMessage.JSE005.replace("%s", "choose closing minute")
      );
      setError(errorMsg);
    }
    scrollTop();
  };
  const searchClick = () => {
    alert("search");
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <CRow>
      <CCol xs="12">
        <Loading start={loading} />
        <Message success={success} error={error} />
        <CCard>
          <CCardHeader>
            <h4>Shop Registration And List</h4>
          </CCardHeader>
          <CCardBody>
            <ShopRegistrationAndListForm
              shopCode={shopCode}
              shopName={shopName}
              address={address}
              phone={phone}
              shopCodeChange={shopCodeChange}
              shopNameChange={shopNameChange}
              addressChange={addressChange}
              phoneChange={phoneChange}
              passwordChange={passwordChange}
              confirmPasswordChange={confirmPasswordChange}
              saveClick={saveClick}
              searchClick={searchClick}
              hr={hr}
              min={min}
              hrOpenSelectChange={hrOpenSelectChange}
              hrOpenSelectValue={hrOpenSelectValue}
              minOpenSelectChange={minOpenSelectChange}
              minOpenSelectValue={minOpenSelectValue}
              hrCloseSelectChange={hrCloseSelectChange}
              hrCloseSelectValue={hrCloseSelectValue}
              minCloseSelectChange={minCloseSelectChange}
              minCloseSelectValue={minCloseSelectValue}
              openRadioData={openRadioData}
              closeRadioData={closeRadioData}
              radioChange={radioChange}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default ShopRegistrationAndList;
