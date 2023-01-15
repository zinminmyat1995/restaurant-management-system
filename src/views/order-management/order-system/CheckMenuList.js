import React from "react";
import {
  CRow,
  CButton,
  CModal,
  CModalBody,
  CButtonToolbar,
  CModalHeader,
  CModalFooter,
  CCol,
  CLabel,
  CInput,
  CSelect,
  CImg,
} from "@coreui/react";

const CheckMenuList = (props) => {
  let {
    data,
    closeBtn,
    show,
    checkMenuCheckboxClick,
    plusClick,
    minusClick,
    addToCartBtn,
  } = props;
  return (
    <>
      {data.length > 0 && (
        <CModal
          onClose={closeBtn}
          size="xl"
          centered
          closeOnBackdrop={false}
          show={show}
          style={{ boxShadow: "0 3px 7px rgba(0, 0, 0, 0.4)" }}
        >
          <CModalHeader style={{ background: "#455261" }}>
            <CLabel
              style={{
                fontSize: "17px",
                fontFamily: "cursive",
                color: "white",
              }}
            >
              {data[0]["menu_name"]}
            </CLabel>
            <CImg src={"/image/close.svg"} width="30px" onClick={closeBtn} />
          </CModalHeader>
          <CModalBody>
            {data[0]["meat_data"] != undefined &&
              data[0]["meat_data"].length > 0 &&
              data[0]["meat_data"].map((d, ind) => {
                return (
                  <CRow style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                    <CCol sm="1">
                      <input
                        type="checkbox"
                        onChange={checkMenuCheckboxClick}
                        value={d.meat_type}
                        checked={d.check === true}
                        name={d.meat_type}
                        id={d.meat_type}
                      />
                    </CCol>
                    <CCol sm="5">
                      <CLabel htmlFor={d.meat_type}>{d.name}</CLabel>
                    </CCol>

                    {d.count > 0 && (
                      <React.Fragment>
                        <CCol sm="1">
                          <CImg
                            src={"/image/minus1.svg"}
                            width="15px"
                            onClick={() => minusClick(d.meat_type)}
                          />
                        </CCol>
                        <CCol sm="1">
                          <CLabel
                            style={{
                              fontSize: "14px",
                              fontWeight: "blod",
                              color: "#455261",
                            }}
                          >
                            {d.count}
                          </CLabel>
                        </CCol>
                        <CCol sm="1">
                          <CImg
                            src={"/image/plusCat.svg"}
                            width="15px"
                            onClick={() => plusClick(d.meat_type)}
                          />
                        </CCol>
                      </React.Fragment>
                    )}
                  </CRow>
                );
              })}
          </CModalBody>
          <CModalFooter>
            <CButton className="add-to-cart-btn" onClick={addToCartBtn}>
              Add To Cart
            </CButton>
          </CModalFooter>
        </CModal>
      )}
    </>
  );
};

export default CheckMenuList;
