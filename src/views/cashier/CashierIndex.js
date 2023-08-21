import React, { useState, useEffect } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const CashierIndex = () => {
  const [selectedTableNo, setSelectedTableNo] = useState("");
  const [selectedTokenNo, setSelectedTokenNo] = useState("");
  const [tableData, setTableData] = useState([
    { id: 1, table_number: 1, total_seat: 4, remain_seat: 4, token_data: [] },
    {
      id: 2,
      table_number: 2,
      total_seat: 4,
      remain_seat: 0,
      token_data: [{ token_no: 1 }, { token_no: 21 }],
    },
    { id: 3, table_number: 3, total_seat: 4, remain_seat: 4, token_data: [] },
    { id: 4, table_number: 4, total_seat: 4, remain_seat: 4, token_data: [] },
    {
      id: 5,
      table_number: 5,
      total_seat: 4,
      remain_seat: 2,
      token_data: [{ token_no: 1 }],
    },
    { id: 6, table_number: 6, total_seat: 4, remain_seat: 4, token_data: [] },
    {
      id: 7,
      table_number: 7,
      total_seat: 4,
      remain_seat: 1,
      token_data: [{ token_no: 21 }],
    },
    { id: 8, table_number: 8, total_seat: 4, remain_seat: 4, token_data: [] },
    { id: 9, table_number: 9, total_seat: 4, remain_seat: 4, token_data: [] },
    { id: 10, table_number: 10, total_seat: 4, remain_seat: 4, token_data: [] },
    {
      id: 11,
      table_number: 11,
      total_seat: 4,
      remain_seat: 0,
      token_data: [{ token_no: 14 }, { token_no: 51 }],
    },
    { id: 12, table_number: 12, total_seat: 4, remain_seat: 4, token_data: [] },
    {
      id: 13,
      table_number: 13,
      total_seat: 4,
      remain_seat: 2,
      token_data: [{ token_no: 1 }],
    },
    { id: 14, table_number: 14, total_seat: 4, remain_seat: 4, token_data: [] },
  ]);

  const [orderData, setOrderData] = useState([
    { id: 1, menu_name: "Marlar Shan Kaw", count: 3, price: "24000" },
    { id: 2, menu_name: "Mauk Chite", count: 1, price: "12000" },
    { id: 3, menu_name: "Chicken Noodle", count: 2, price: "5000" },
    { id: 4, menu_name: "Thai Tea", count: 4, price: "6000" },
    { id: 5, menu_name: "Pauk Si", count: 3, price: "4000" },
    { id: 6, menu_name: "Marlar Shan Kaw", count: 3, price: "24000" },
    { id: 7, menu_name: "Mauk Chite", count: 1, price: "12000" },
    { id: 8, menu_name: "Chicken Noodle", count: 2, price: "5000" },
    { id: 9, menu_name: "Thai Tea", count: 4, price: "6000" },
    { id: 10, menu_name: "Pauk Si", count: 3, price: "4000" },
    { id: 11, menu_name: "Marlar Shan Kaw", count: 3, price: "24000" },
    { id: 12, menu_name: "Mauk Chite", count: 1, price: "12000" },
    { id: 13, menu_name: "Chicken Noodle", count: 2, price: "5000" },
    { id: 14, menu_name: "Thai Tea", count: 4, price: "6000" },
    { id: 15, menu_name: "Pauk Si", count: 3, price: "4000" },
    { id: 16, menu_name: "Marlar Shan Kaw", count: 3, price: "24000" },
    { id: 17, menu_name: "Mauk Chite", count: 1, price: "12000" },
    { id: 18, menu_name: "Chicken Noodle", count: 2, price: "5000" },
    { id: 19, menu_name: "Thai Tea", count: 4, price: "6000" },
    { id: 20, menu_name: "Pauk Si", count: 3, price: "4000" },
  ]);
  const [totalPrice, setTotalPrice] = useState("64900");

  let notFull = "#5affb3",
    full = "#ff5d5d",
    white = "white";

  // for cashier card click function
  let cashierCardClick = (id) => {
    let tokenNo = "";
    tableData.forEach((data) => {
      if (data.table_number == id) {
        if (data.token_data.length > 0) {
          tokenNo = data.token_data[0]["token_no"];
        }
      }
    });
    setSelectedTokenNo(tokenNo);
    setSelectedTableNo(id);
  };

  return (
    <CRow>
      <CCol xs="9">
        <CRow xs="12">
          {tableData.length > 0 &&
            tableData.map((data, ind) => {
              return (
                <>
                  <CCol xs="3">
                    <CRow alignHorizontal="center">
                      <CCard
                        className="cashier-table-card"
                        style={{
                          background:
                            data.remain_seat == 0
                              ? `${full}`
                              : data.total_seat == data.remain_seat
                              ? `${white}`
                              : `${notFull}`,
                        }}
                        value={data.table_number}
                        onClick={() => cashierCardClick(data.table_number)}
                      >
                        <CCardBody>
                          <CRow
                            alignHorizontal="center"
                            className="cashier-table-card-tableno"
                            style={{
                              color: data.remain_seat == 0 ? `white` : `black`,
                            }}
                          >
                            {data.table_number}
                          </CRow>
                        </CCardBody>
                        <CCardFooter className="cashier-table-card-tablefooter">
                          Total - {data.total_seat} , Remain -{" "}
                          {data.remain_seat}
                        </CCardFooter>
                      </CCard>
                    </CRow>
                  </CCol>
                </>
              );
            })}
        </CRow>
      </CCol>
      <CCol xs="3">
        <CCard>
          <CCardHeader
            style={{
              // // textAlign: "left",
              // fontWeight: "bold",
              background: "#e6f290",
            }}
          >
            <CRow>
              <CCol>Table No - {selectedTableNo}</CCol>
              <CCol>Token - {selectedTokenNo}</CCol>
              {/* <CCol><CButton>df</CButton></CCol> */}
            </CRow>
          </CCardHeader>
          <CCardBody className="cashier-payment-card">
            {orderData.length > 0 &&
              orderData.map((data, ind) => {
                return (
                  <>
                    <CRow lg="12">
                      <CCol lg="5">
                        <p className="cashier-menu-name">{data.menu_name}</p>
                      </CCol>
                      <CCol lg="3">
                        <p>x&nbsp;&nbsp;{data.count}</p>
                      </CCol>
                      <CCol lg="4">
                        <p>{data.price}</p>
                      </CCol>
                    </CRow>
                    {/* <hr className="cashier-menu-divide" /> */}
                  </>
                );
              })}
          </CCardBody>
          <CCardFooter className="cashier-total-price-footer">
            <CRow lg="12">
              <CCol lg="5">
                <p className="cashier-total-price">Total Price</p>
              </CCol>
              <CCol lg="3">
                <p>-</p>
              </CCol>
              <CCol lg="4">
                <p>{totalPrice}</p>
              </CCol>
            </CRow>
          </CCardFooter>
          <CCardFooter
            style={{
              textAlign: "center",
              background: "#235749",
              color: "white",
            }}
          >
            To Pay
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default CashierIndex;
