import React from "react";
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
import CIcon from "@coreui/icons-react";

const OrderSystemIndex = (props) => {
  let { data, menuCategoryClick } = props;
  return (
    <>
      <CRow md="12" xs="12">
        {data.length > 0 &&
          data.map((d) => {
            return (
              <CCol md="4" xs="12" sm="4" className="p-2">
                <CCard
                  className="menu_category_card btn-hover"
                  onClick={() => menuCategoryClick(d.menu_category)}
                >
                  <CRow alignHorizontal="middel">
                    <CImg
                      className="btn-hover"
                      src={"/image/dish.svg"}
                      width="45px"
                      style={{ marginTop: "24px", marginLeft: "12px" }}
                    />
                    <div
                      className="mb-1"
                      style={{
                        fontFamily: "cursive",
                        marginTop: "35px",
                        fontWeight: "bold",
                        marginLeft: "7px",
                      }}
                    >
                      {d.menu_name}
                    </div>
                  </CRow>
                </CCard>
              </CCol>
            );
          })}
      </CRow>
    </>
  );
};

export default OrderSystemIndex;
