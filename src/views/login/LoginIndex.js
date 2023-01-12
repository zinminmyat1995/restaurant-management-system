import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";
import { checkNullOrBlank } from "../common/CommonValidation";
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
    const [status, setStatus] = useState(true); // for forgot password click status
    const [forgotStatus, setForgotStatus] = useState(false); // for forgot password click status
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

    // forgot password click function
    const passwordClick = () => {
        setError([]);setSuccess([]);setUserId("");setEmail("");
        setStatus(!status);
        setForgotStatus(!forgotStatus);
    }

    // back button click from forgot password
    const backClick = () => {
        setError([]);setSuccess([]);setShopCode("");setPassword("");
        setStatus(!status);
        setForgotStatus(!forgotStatus);
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
        shopCodeChange = {shopCodeChange}
        passwordChange = {passwordChange}
        userIdChange = {userIdChange}
        emailChange = {emailChange}
        loginClick = {loginClick}
        passwordClick = {passwordClick}
        submitClick = {submitClick}
        backClick = {backClick}
        status = {status}
        forgotStatus = {forgotStatus}
        />
        </>
    )
}

export default LoginIndex
