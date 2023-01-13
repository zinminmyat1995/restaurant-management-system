import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";
import { checkNullOrBlank,checkPassword } from "../common/CommonValidation";
import CommonMessage from "../common/CommonMessage";

/**
 * Main Login Component
 * @author Phyoe Wai Aung
 * @create 21/09/2022
 * @modify
 * @returns output shown in web page
*/
const LoginIndex = () => {
    const history = useHistory();
    const [success, setSuccess] = useState([]); // for success message
    const [error, setError] = useState([]); // for error message
    const [shopCode, setShopCode] = useState(""); // for shop code
    const [password, setPassword] = useState(""); // for password
    const [userId, setUserId] = useState(""); // for user id
    const [email, setEmail] = useState(""); // for user email
    const [confirmPass, setConfirmPass] = useState(""); //for user confirm password
    const [token, setToken] = useState(""); // for token
    const [status, setStatus] = useState(false); // for forgot password click status
    const [forgotStatus, setForgotStatus] = useState(false); // for forgot password click status
    const [changePassword, setChangeStatus] = useState(true); // for change new password form status
    let err = [];

    const shopCodeChange = (e) => {
        setShopCode(e.target.value);
    }

    const passwordChange = (e) => {
        setPassword(e.target.value);
    }

    const userIdChange = (e) => {
      setUserId(e.target.value);
    }

    const emailChange = (e) => {
      setEmail(e.target.value);
    }

    const confirmPassChange = (e) => {
      setConfirmPass(e.target.value);
    }

    const tokenChange = (e) => {
      setToken(e.target.value);
    }


    // login Click function
    const loginClick = () => {
        if(!checkNullOrBlank(password)){
            err.push(CommonMessage.JSE005.replace('%s','password'));
        }
        if(!checkNullOrBlank(shopCode)){
          err.push(CommonMessage.JSE005.replace('%s','shop code'));
        }

        if(err.length > 0) {
          setSuccess([]);
          setError(err);
        }else{
          setError([]);
        }
        if(checkNullOrBlank(password) && checkNullOrBlank(shopCode)){
          setSuccess(["Login successfully"]);
        }
    }

    // submit Click function from forgot password
    const submitClick = () => {
        if(!checkNullOrBlank(userId)){
            err.push(CommonMessage.JSE005.replace('%s','User Id'));
        }
        if(!checkNullOrBlank(email)){
          err.push(CommonMessage.JSE005.replace('%s','Email'));
        }
        if(err.length > 0) {
          setError(err);
          setSuccess([]);
        }else{
          setError([]);
        }
        if(checkNullOrBlank(userId) && checkNullOrBlank(email)){
            setSuccess(["Email sent successfully"]);
        }
    }

    // submit Click function from change password form
    const passwordSubmit = () => {
        if(!checkNullOrBlank(password)){
          err.push(CommonMessage.JSE005.replace("%s","Password"));
        }else{
          if(!checkPassword(password)){
            err.push(CommonMessage.JSE045);
          }
        }
        if(!checkNullOrBlank(confirmPass)){
          err.push(CommonMessage.JSE005.replace('%s','Confirm Password'));
        }
        if(checkNullOrBlank(password) && checkNullOrBlank(confirmPass) && checkPassword(password)){
          if(password != confirmPass){
            err.push("Password did not match!");
          }
        }
        if(!checkNullOrBlank(token)){
          err.push(CommonMessage.JSE005.replace('%s','Token'));
        }
        if(!checkNullOrBlank(email)){
          err.push(CommonMessage.JSE005.replace('%s','Email'));
        }
        if(err.length > 0) {
          setError(err);
          setSuccess([]);
        }else{
          setError([]);
        }
        if(err.length == 0){
            setSuccess(["Change password successfully"]);
        }
    }

    // forgot password click function
    const passwordClick = () => {
        setError([]);setSuccess([]);setUserId("");setEmail("");
        setStatus(!status);
        setForgotStatus(!forgotStatus);
    }

    // back button click from forgot password
    const backClick = () => {
        setError([]);setSuccess([]);setShopCode("");setPassword("");
        setStatus(true);
        setForgotStatus(false);
        setChangeStatus(false);
    }

    // back button click from change new password form
    const goBackClick = () => {
      setError([]);setSuccess([]);setShopCode("");setPassword("");
      setStatus(true);
      setForgotStatus(false);
      setChangeStatus(false);
    }
    return(
        <>
        <LoginForm
        error = {error}
        success = {success}
        shopCode = {shopCode}
        password = {password}
        userId = {userId}
        email = {email}
        confirmPass = {confirmPass}
        token = {token}
        shopCodeChange = {shopCodeChange}
        passwordChange = {passwordChange}
        userIdChange = {userIdChange}
        emailChange = {emailChange}
        confirmPassChange = {confirmPassChange}
        tokenChange = {tokenChange}
        loginClick = {loginClick}
        passwordClick = {passwordClick}
        submitClick = {submitClick}
        backClick = {backClick}
        goBackClick = {goBackClick}
        status = {status}
        forgotStatus = {forgotStatus}
        changePassword = {changePassword}
        passwordSubmit = {passwordSubmit}
        />
        </>
    )
}

export default LoginIndex
