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
import CIcon from "@coreui/icons-react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
const MenuType = (props) => {
  let { data, value, setValue } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      {data.length > 0 && (
        <CRow
          style={{
            marginLeft: "unset",
            marginRight: "unset",
            position: "fixed",
            top: "119px",
            width: "100%",
          }}
        >
          <Box
            sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: "background.paper" }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              {data.map((d) => {
                return <Tab label={d.menu_name} />;
              })}
            </Tabs>
          </Box>
        </CRow>
      )}
    </>
  );
};

export default MenuType;
