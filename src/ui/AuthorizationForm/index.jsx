import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";
import style from "./index.scss";

const cn = classNames.bind(style);

const AuthorizationForm = ({
  title,
  handleClick,
  authType,
  handleLink,
  linkName,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const [emailError, setEmailError] = useState("email не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "пароль не может быть пустым"
  );

  const handlChangeEmail = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный email");
    } else {
      setEmailError("");
    }
  };
  const handlChangePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 7) {
      setPasswordError("Пароль должен содержать минимум 7 символов");
    } else {
      setPasswordError("");
    }
  };

  const handlClickBlur = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      default:
    }
  };
  const checkError = emailError === "" && passwordError === "";

  return (
    <form className="authorizationForm">
      <p className="authorizationForm__authType">{authType}</p>
      <div className="authorizationForm__mail">      
        <span className="authorizationForm__text">Почта</span>
        <input
          className={cn("authorizationForm__input", {
            authorizationForm__input_error: emailDirty && emailError,
          })}
          name="email"
          value={email}
          onChange={(e) => handlChangeEmail(e)}
          onBlur={(e) => handlClickBlur(e)}
        ></input>
        {emailDirty && emailError && (
          <div className="authorizationForm__errorText">{emailError}</div>
        )}
      </div>

      <div className="authorizationForm__password">
        <span className="authorizationForm__text">Пароль</span>
        <input
          className={cn("authorizationForm__input", {
            authorizationForm__input_error: passwordDirty && passwordError,
          })}
          name="password"
          type="password"
          value={password}
          onChange={(e) => handlChangePassword(e)}
          onBlur={(e) => handlClickBlur(e)}
        ></input>
        {passwordDirty && passwordError && (
          <div className="authorizationForm__errorText">{passwordError}</div>
        )}
      </div>

      <div className="authorizationForm__entryBlock">
        <span className="authorizationForm__linkEntry">Запросить доступ</span>
        <Link to={handleLink} className="authorizationForm__linkAuth">
          {linkName}
        </Link>
        <Link
          to="/admin/carCart"
          type="button"
          className={cn("authorizationForm__button", {
            authorizationForm__button_active: checkError,
          })}
          onClick={() => handleClick(email, password)}
        >
          {title}
        </Link>
      </div>
    </form>
  );
};

AuthorizationForm.propTypes = {
  title: PropTypes.string,
  handleClick: PropTypes.func,
  authType: PropTypes.string,
  handleLink: PropTypes.string,
  linkName: PropTypes.string,
};
AuthorizationForm.defaultProps = {
  title: "",
  handleClick: () => {},
  authType: "",
  handleLink: "",
  linkName: "",
};

export default AuthorizationForm;
