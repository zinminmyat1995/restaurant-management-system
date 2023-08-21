import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CImg,
  CInput,
  CLabel,
  CRow,
  CSelect,
} from "@coreui/react";
import Message from "../../common/SuccessError";
import Loading from "../../common/Loading";
import TableAndSeatRegisterForm from "./TableAndSeatRegisterForm";
import CommonMessage from "../../common/CommonMessage";
import { nullChk, numberChk } from "../../common/CommonValidation";
const TableAndSeatRegisterIndex = () => {
  const [error, setError] = useState([]); // for error message
  const [success, setSuccess] = useState([]); // for success message
  const [loading, setLoading] = useState(false); // for loading
  const [shopName, setShopName] = useState("Shwe Kant Kaw"); // for shopname
  const [nowDate, setNowDate] = useState(new Date().toISOString().slice(0, 10));
  const [floorSelectValue, setFloorSelectValue] = useState("0");
  const [tableNo, setTableNo] = useState("");
  const [seatCount, setSeatCount] = useState("");
  const [floor, setFloor] = useState([
    { id: 1, floor_name: "1st Floor" },
    { id: 2, floor_name: "2nd Floor" },
    { id: 3, floor_name: "3rd Floor" },
    { id: 4, floor_name: "4th Floor" },
    { id: 5, floor_name: "5th Floor" }]
  );
  const [tableData, setTableData] = useState([]); //for table show
  //for Table Number HandleChange
  const tableNoHandleChange = (e) => {
    setTableNo(e.target.value);
  };

  //for Table Number HandleChange
  const seatCountHandleChange = (e) => {
    setSeatCount(e.target.value);
  };

  let floorSelectChange = (e) => {
    setFloorSelectValue(e.target.value);
  };

    //for save click
    const saveClick = (e) => {
      alert("saved")
    };

  const addClick = () => {
    setError("");
    let errorMsg = [];

      // Checking table Number
      if (!nullChk(tableNo)) {
        errorMsg.push(CommonMessage.JSE005.replace("%s", "Table No"));
        setError(errorMsg)
      } else   if (!numberChk(tableNo)) {
        errorMsg.push(CommonMessage.JSE005.replace("%s", "Number Only in Table No Field"));
        setError(errorMsg)
        scrollTop();
        setTableNo("");}
  
      // Checking 
      if (!nullChk(seatCount)) {
        errorMsg.push(CommonMessage.JSE005.replace("%s", "Seat Count"));
        setError(errorMsg)
      }else   if (!numberChk(seatCount)) {
        errorMsg.push(CommonMessage.JSE005.replace("%s", "Number Only in Seat Count Field"));
        setError(errorMsg)
        scrollTop();
        setSeatCount("");}

        if(floorSelectValue == "0"){
          errorMsg.push(CommonMessage.JSE001.replace("%s", "Floor!"));
          setError(errorMsg)
          scrollTop();
        }

       
      if (errorMsg.length <= 0) {
        let dataArr = [],
        tmp = [];
      if (tableData.length > 0) {
    
        for (var i = 0; i < tableData.length; i++) {
          let tmpOldRemain = tableData[i];
          if (tmpOldRemain["table_no"] != tableNo) {
            if (i + 1 == tableData.length) {
              tmp["table_no"] = tableNo;
              tmp["seat_count"] = seatCount;
              tmp["floor"] = floorSelectValue;
             
              dataArr.push(tmp);
            }
          } else if (tmpOldRemain["table_no"] == tableNo) {
            setError([ "Table No "+ tableNo + " is already exit!"]);
            scrollTop();
            break;
          }
        }
        let concatData = tableData.concat(dataArr);
        setTableData(concatData);
      } else {
        tmp["table_no"] = tableNo;
        tmp["seat_count"] = seatCount;
        tmp["floor"] = floorSelectValue;
        dataArr.push(tmp);
        setTableData(dataArr);
      }
     
    };
  };
  const remove = (id) => {
    let resultArray = tableData.filter((data) => data.table_no != id);
    setTableData(resultArray);
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
            <h4>Import Material Registration</h4>
          </CCardHeader>
          <CCardBody>
            <TableAndSeatRegisterForm
              shopName={shopName}
              nowDate={nowDate}
              floor={floor}
              tableNo={tableNo}
              seatCount={seatCount}
              addClick={addClick}
              floorSelectValue={floorSelectValue}
              floorSelectChange={floorSelectChange}
              seatCountHandleChange={seatCountHandleChange}
              tableNoHandleChange={tableNoHandleChange}
              tableData={tableData}
              remove={remove}
              saveClick={saveClick}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default TableAndSeatRegisterIndex;
