import * as React from "react";
import {
  CButton,
  CImg,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CLabel,
  CInput,
} from "@coreui/react";

const OrderListCheck = (props) => {
  let { data, totalPrice, confirmBtn,orderListMinusBtn,orderListPlusBtn,orderListRemoveBtn } = props;
  console.log("DATA", data);
  return (
    <>
      {data.length > 0 && (
        <>
          <CRow
            style={{
              marginLeft: "unset",
              marginRight: "unset",
            }}
          >
            <CCol>
              <CRow>
                <CCol style={{ borderBottom: "2px #455261 solid" }}>
                  <CRow style={{ textAlign: "center" }}>
                    <CCol>
                      <CLabel
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                          color: "#455261",
                        }}
                      >
                        Order List
                      </CLabel>
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>
              <CRow>
                <CCol style={{ borderBottom: "2px #455261 solid" }}>
                  <CRow sm="12" style={{ paddingTop: "7px" }}>
                    <CCol sm="1" style={{ textAlign: "center" }}>
                      <CLabel
                        style={{
                          fontSize: "13px",
                          fontWeight: "bold",
                          color: "#455261",
                        }}
                      >
                        No
                      </CLabel>
                    </CCol>

                    <CCol sm="2" style={{ textAlign: "center" }}>
                      <CLabel
                        style={{
                          fontSize: "13px",
                          fontWeight: "bold",
                          color: "#455261",
                        }}
                      >
                        Name
                      </CLabel>
                    </CCol>

                    <CCol sm="2" style={{ textAlign: "center" }}>
                      <CLabel
                        style={{
                          fontSize: "13px",
                          fontWeight: "bold",
                          color: "#455261",
                        }}
                      >
                        Meat
                      </CLabel>
                    </CCol>
                    <CCol sm="1" style={{ textAlign: "center" }}>
                      <CLabel
                        style={{
                          fontSize: "13px",
                          fontWeight: "bold",
                          color: "#455261",
                        }}
                      >
                        Count
                      </CLabel>
                    </CCol>

                    <CCol sm="2" style={{ textAlign: "center" }}>
                      <CLabel
                        style={{
                          fontSize: "13px",
                          fontWeight: "bold",
                          color: "#455261",
                        }}
                      >
                        Price
                      </CLabel>
                    </CCol>

                    <CCol sm="4" style={{ textAlign: "center" }}></CCol>
                  </CRow>
                </CCol>
              </CRow>
              {data.map((d, ind) => {
                let color = "#cccccc";
                if (ind == data.length - 1) {
                  color = "#455261";
                }

                return (
                  <CRow>
                    <CCol style={{ borderBottom: `2px ${color} solid` }}>
                      <CRow sm="12" style={{ paddingTop: "7px" }}>
                        <CCol sm="1" style={{ textAlign: "center" }}>
                          <CLabel
                            style={{
                              fontSize: "12px",
                              fontWeight: "bold",
                              color: "#455261",
                            }}
                          >
                            {ind + 1}
                          </CLabel>
                        </CCol>

                        <CCol sm="2" style={{ textAlign: "center" }}>
                          <CLabel
                            style={{
                              fontSize: "12px",
                              fontWeight: "bold",
                              color: "#455261",
                            }}
                          >
                            {d.menu_name}
                          </CLabel>
                        </CCol>

                        <CCol sm="2" style={{ textAlign: "center" }}>
                          <CLabel
                            style={{
                              fontSize: "12px",
                              fontWeight: "bold",
                              color: "#455261",
                            }}
                          >
                            {d.name}
                          </CLabel>
                        </CCol>
                        <CCol sm="1" style={{ textAlign: "center" }}>
                          <CLabel
                            style={{
                              fontSize: "12px",
                              fontWeight: "bold",
                              color: "#455261",
                            }}
                          >
                            {d.count}
                          </CLabel>
                        </CCol>

                        <CCol sm="2" style={{ textAlign: "center" }}>
                          <CLabel
                            style={{
                              fontSize: "12px",
                              fontWeight: "bold",
                              color: "#455261",
                            }}
                          >
                            {d.total_price}
                          </CLabel>
                        </CCol>

                        <CCol sm="4" style={{ textAlign: "center" }}>
                          <CRow>
                            <CCol style={{ textAlign: "end" }}>
                              <CImg
                                className=""
                                src={"/image/delete3.svg"}
                                width="20px"
                                onClick={d.count > 0 ?   ()=>orderListMinusBtn(d) : ""}
                              />
                            </CCol>
                            <CCol>
                              <CImg
                                className=""
                                src={"/image/plus2.svg"}
                                width="20px"
                                onClick={()=>orderListPlusBtn(d.id)}
                              />
                            </CCol>
                            <CCol style={{ textAlign: "initial" }}>
                              <CImg
                                className=""
                                src={"/image/delete2.svg"}
                                width="20px"
                                onClick={()=>orderListRemoveBtn(d.id)}
                              />
                            </CCol>
                          </CRow>
                        </CCol>
                      </CRow>
                    </CCol>
                  </CRow>
                );
              })}
              <CRow>
                <CCol style={{ borderBottom: "2px #455261 solid" }}>
                  <CRow sm="12" style={{ paddingTop: "7px" }}>
                    <CCol sm="6" style={{ textAlign: "end" }}>
                      <CLabel
                        style={{
                          fontSize: "13px",
                          fontWeight: "bold",
                          color: "#455261",
                        }}
                      >
                        Total Price
                      </CLabel>
                    </CCol>
                    <CCol sm="2" style={{ textAlign: "center" }}>
                      <CLabel
                        style={{
                          fontSize: "13px",
                          fontWeight: "bold",
                          color: "#455261",
                        }}
                      >
                        {totalPrice}
                      </CLabel>
                    </CCol>

                    <CCol sm="4" style={{ textAlign: "center" }}></CCol>
                  </CRow>
                </CCol>
              </CRow>
              <CRow
                alignHorizontal="center"
                style={{ background: "#455261" }}
                onClick={confirmBtn}
              >
                <CButton className="add-to-cart-btn">Confirm</CButton>
              </CRow>
            </CCol>
          </CRow>
        </>
      )}
    </>
  );
};

export default OrderListCheck;
