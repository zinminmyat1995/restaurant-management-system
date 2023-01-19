import React from 'react'
import {CCard,CCardBody,CCol,CContainer,CImg,CInput,CInputGroup,CInputGroupPrepend,CInputGroupText,CLabel,CRow,CButton} from '@coreui/react'
import { Transition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward,faUser,faEnvelope,faCircleExclamation,faKey,faMessage } from '@fortawesome/free-solid-svg-icons'
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
        backClick,userId,userIdChange,email,emailChange,submitClick,changePassword,confirmPass,confirmPassChange,
        token,tokenChange,passwordSubmit,goBackClick} = props;
  return (
    <div className="min-vh-100 d-flex flex-row align-items-center login-bg">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol lg={5}>
            <Transition in={status} timeout={3000} enter={false} exit={false} mountOnEnter unmountOnExit>
              {state =>
              <CCard className="login mt-3 mb-3"
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
                        <CInput className="login-input" placeholder='Enter Shop Code' type='text' autoFocus value={shopCode} onChange={shopCodeChange}></CInput>
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
                        <CInput className="login-input" placeholder='Enter Password' type='text' value={password} onChange={passwordChange}></CInput>
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
              <CCard className="login mt-3 mb-3"
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
                        <CInput className="login-input" placeholder='Enter User Id' type='text' autoFocus value={userId} onChange={userIdChange}></CInput>
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
                            <FontAwesomeIcon width={20} height={20} icon={faEnvelope}/>
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput className="login-input" placeholder='Enter Email' type='text' value={email} onChange={emailChange}></CInput>
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
                      Back To Login</CLabel>
                  </CRow>
                </CCardBody>
              </CCard>
              }
            </Transition>

            <Transition in={changePassword} timeout={3000} enter={false} exit={false} mountOnEnter unmountOnExit>
              {state =>
              <CCard className="login mt-3 mb-3"
                style={{transition:'all 3s ease', opacity: (state == 'exiting' || state == 'exited' || state == 'entering') ? 0 : 1}}>
                <CCardBody>
                  <h3 className='login-title mt-3 mb-3'>Change New Password</h3>
                  <div style={{color:"#6DD5CC",fontSize:'15px'}} className={error.length > 0 || success.length > 0 ? 'mb-2': ''}>
									You are almost done. Please enter your new password below. This password will provide access to all services.
								  </div>
                  <SuccessError error={error} success={success}/>
                  <div style={{margin:'0 70px'}}>
                    <CRow className="mt-4 mb-2">
                        <CInputGroup>
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <FontAwesomeIcon width={20} height={20} icon={faKey}/>
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput className="login-input" placeholder='New Password' type='text' autoFocus value={password} onChange={passwordChange}></CInput>
                        </CInputGroup>
                    </CRow>
                    <div style={{color:"#6DD5CC"}}>
                      <FontAwesomeIcon icon={faCircleExclamation}/>
                      <CLabel className='ml-2'>Password must be contained</CLabel>
                      <ul className='ml-3 mb-0'>
                        <li><i>Capital Letter,</i></li>
                        <li><i>Small Letter,</i></li>
                        <li><i>Special Characters,</i></li>
                        <li><i>Numbers</i></li>
                      </ul>
                    </div>
                    <CRow className="mb-4 mt-3">
                      <CInputGroup>
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <FontAwesomeIcon width={20} height={20} icon={faKey}/>
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput className="login-input" placeholder='Confirm New Password' type='text' value={confirmPass} onChange={confirmPassChange}></CInput>
                        </CInputGroup>
                    </CRow>
                    <CRow className="mb-4">
                      <CInputGroup>
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <FontAwesomeIcon width={20} height={20} icon={faMessage}/>
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput className="login-input" placeholder='Enter Token' type='text' value={token} onChange={tokenChange}></CInput>
                        </CInputGroup>
                    </CRow>
                    <CRow className="mb-4">
                      <CInputGroup>
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <FontAwesomeIcon width={20} height={20} icon={faEnvelope}/>
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput className="login-input" placeholder='Enter Email' type='text' value={email} onChange={emailChange}></CInput>
                        </CInputGroup>
                    </CRow>
                    <CRow alignHorizontal='end' className="mb-4" style={{marginRight:'-2rem'}}>
                      <CButton id="login" className='form-btn login-btn' onClick={passwordSubmit}>Submit</CButton>
                    </CRow>
                  </div>
                  <hr />
                  <CRow className="mt-4 mb-2 ml-1">
                    <CLabel className='back-link forgot-password cursor-style' onClick={goBackClick}>
                      <FontAwesomeIcon className='mr-2' icon={faBackward}/>
                      Go To Login</CLabel>
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
