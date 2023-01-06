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
    const [shopCode, setShopCode] = useState(""); // for shop code 
    const [password, setPassword] = useState(""); // for password
    const [codeError, setCodeError] = useState(""); // for shop code error
    const [passError, setPassError] = useState(""); // for password error and main error

    // onChange function for shop code
    const shopCodeChange = (e) => {
        setShopCode(e.target.value);
    }

    // onChange function for password
    const passwordChange = (e) => {
        setPassword(e.target.value);
    }

    // login Click function
    const loginClick = () => {
        if(!checkNullOrBlank(password)){
            setPassError(CommonMessage.JSE005.replace('%s',"password"))
        }else{
            setPassError("");
        }
        if(!checkNullOrBlank(shopCode)){
            setCodeError(CommonMessage.JSE005.replace('%s',"shop code"))
        }else{
            setCodeError("");
        }
        if(checkNullOrBlank(password) && checkNullOrBlank(shopCode)){
            history.push("/dashboard")
        }
    }

    // forgot password click function
    const passwordClick = () => {
        alert("changed")
    }
    return(
        <>
        <LoginForm 
        shopCode = {shopCode}
        password = {password}
        shopCodeChange = {shopCodeChange}
        passwordChange = {passwordChange}
        loginClick = {loginClick}
        passwordClick = {passwordClick}
        passError = {passError}
        codeError = {codeError}
        />
        </>
    )
}

export default LoginIndex