import React from 'react'
import {CCard,CCardBody,CCol,CContainer,CImg,CInput,CInputGroup,CInputGroupPrepend,CInputGroupText,CLabel,CRow,CButton} from '@coreui/react'
import { Transition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward,faUser,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import SuccessError from '../common/SuccessError';
/**
 * Login form design Component
 * @author Phyoe Wai Aung
 * @create 21/09/2022
 * @modify
 * @returns output shown in web page
*/
const LoginForm = (props) => {
    let {error,success,shopCode,shopCodeChange,password,passwordChange,loginClick,passwordClick,passError,codeError,status,forgotStatus,
        backClick,userId,userIdChange,email,emailChange,submitClick} = props;
  return (
    <div className="min-vh-100 d-flex flex-row align-items-center login-bg">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol lg={5}>
            <Transition in={status} timeout={3000} enter={false} exit={false} mountOnEnter unmountOnExit>
              {state =>
              <CCard className="login"
                style={{transition:'all 3s ease', opacity: (state == 'exited' || state == 'exiting' || state == "entering") ? 0 : 1}}>
                <CCardBody>
                  <CRow alignHorizontal='center'>
                  <CImg src='./image/dining.jpg' width={100} height={100}></CImg>
                  </CRow>
                  <CRow alignHorizontal='center' className="mb-3">
                    <h3 className='login-title'>Restaurant Management System</h3>
                  </CRow>
                  <SuccessError error={error} success={success}/>
                  <CRow className="mt-4 align-items-center">
                    <CCol lg="4"><CLabel className="form-label">Shop Code</CLabel></CCol>
                    <CCol lg="8">
                      <CInputGroup>
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CImg src='./image/shop_code.png' width={20} height={20}></CImg>
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput className="login-input" type='text' autoFocus value={shopCode} onChange={shopCodeChange}></CInput>
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
                        <CInput className="login-input" type='text' value={password} onChange={passwordChange}></CInput>
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
                    <CLabel className='form-label forgot-password cursor-style' onClick={passwordClick}>Forgot Password?</CLabel>
                  </CRow>
                </CCardBody>
              </CCard>
              }
            </Transition>
            <Transition in={forgotStatus} timeout={3000} enter={false} exit={false} mountOnEnter unmountOnExit>
              {state =>
              <CCard className="login"
                style={{transition:'all 3s ease', opacity: (state == 'exiting' || state == 'exited' || state == 'entering') ? 0 : 1}}>
                <CCardBody>
                  <CRow alignHorizontal='center' className="mt-3 mb-3">
                    <h3 className='login-title'>Forgot Password?</h3>
                  </CRow>
                  <SuccessError error={error} success={success}/>
                  <CRow className="mt-5 align-items-center">
                    <CCol lg="4"><CLabel className="form-label">User Id</CLabel></CCol>
                    <CCol lg="8">
                      <CInputGroup>
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <FontAwesomeIcon width={20} height={20} icon={faUser}/>
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput className="login-input" type='text' autoFocus value={userId} onChange={userIdChange}></CInput>
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
                    <CCol lg="4"><CLabel className="form-label">Email</CLabel></CCol>
                    <CCol lg="8">
                    <CInputGroup>
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            {/* <CImg src='./image/password.png' width={20} height={20}></CImg> */}
                            <FontAwesomeIcon width={20} height={20} icon={faEnvelope}/>
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput className="login-input" type='text' value={email} onChange={emailChange}></CInput>
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
                    <CButton id="login" className='form-btn login-btn' onClick={submitClick}>Submit</CButton>
                  </CRow>
                  <hr />
                  <CRow className="mt-4 mb-2 ml-1">
                    <CLabel className='back-link forgot-password cursor-style' onClick={backClick}>
                      <FontAwesomeIcon className='mr-2' icon={faBackward}/>
                      Back</CLabel>
                  </CRow>
                </CCardBody>
              </CCard>
              }
            </Transition>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default LoginForm
