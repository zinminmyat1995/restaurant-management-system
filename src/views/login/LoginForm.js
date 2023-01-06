import React from 'react'
import {CCard,CCardBody,CCol,CContainer,CImg,CInput,CInputGroup,CInputGroupPrepend,CInputGroupText,CLabel,CRow,CButton} from '@coreui/react'
/**
 * Login form design Component
 * @author Phyoe Wai Aung
 * @create 21/09/2022
 * @modify 
 * @returns output shown in web page
*/
const LoginForm = (props) => {
    let {shopCode,shopCodeChange,password,passwordChange,loginClick,passwordClick,passError,codeError} = props;
  return (
    <div className="min-vh-100 d-flex flex-row align-items-center login-bg">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol lg={5}>
            <CCard className="login">
            <CCardBody>
              <CRow alignHorizontal='center'>
               <CImg src='./image/dining.jpg' width={100} height={100}></CImg>
              </CRow>
              <CRow alignHorizontal='center' className="mb-4">
                <h3 className='login-title'>Restaurant Management System</h3>
              </CRow>
              <CRow className="align-items-center">
                <CCol lg="4"><CLabel className="form-label">Shop Code</CLabel></CCol>
                <CCol lg="8">
                  <CInputGroup>
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CImg src='./image/shop_code.png' width={20} height={20}></CImg>
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type='text' value={shopCode} onChange={shopCodeChange}></CInput>
                  </CInputGroup>
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CCol lg="4"></CCol>
                <CCol lg="8">
                <p id='error' className='red'>{codeError}</p>
                </CCol>
              </CRow>
              <CRow className="align-items-center">
                <CCol lg="4"><CLabel className="form-label">Password</CLabel></CCol>
                <CCol lg="8">
                <CInputGroup>
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CImg src='./image/password.png' width={20} height={20}></CImg>
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type='text' value={password} onChange={passwordChange}></CInput>
                  </CInputGroup>
                </CCol>
              </CRow>
              <CRow className="mb-4">
                <CCol lg="4"></CCol>
                <CCol lg="8">
                <p id='error' className='red'>{passError}</p>
                </CCol>
              </CRow>
              <CRow alignHorizontal='end' className="mb-4">
                <CButton id="login" className='form-btn login-btn' onClick={loginClick}>Login</CButton>
              </CRow>
              <hr />
              <CRow alignHorizontal='center' className="mt-4 mb-2">
                <CLabel className='forgot-password cursor-style' onClick={passwordClick}>Forgot Password?</CLabel>
              </CRow>
            </CCardBody>
          </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default LoginForm
