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

const MenuList = (props) => {
  let { data,menuListClick } = props;

  return (
    <>
      {data.length > 0 && (
        <CRow
          style={{
            marginLeft: "unset",
            marginRight: "unset",
            background: "#ebedef",
          }}
        >
          <CCol>
            {data.map((d, idx) => {
              return (
                <CRow onClick={()=>menuListClick(d)}>
                  <CCol>
                    <CRow style={{ height: "5px" }}></CRow>
                    <CRow
                      style={{
                        background: "white",
                        borderRadius: "50px",
                        boxShadow: "2px 0px 10px -1px",
                      }}
                    >
                      <CLabel className="menu-list-menu-name">
                        {d.menu_name}
                      </CLabel>
                    </CRow>
                    <CRow style={{ height: "5px" }}></CRow>
                  </CCol>
                </CRow>
              );
            })}
          </CCol>
        </CRow>
      )}
    </>
  );
};

export default MenuList;
