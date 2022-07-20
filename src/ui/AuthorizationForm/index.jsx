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
    <form className="adminAuthorization_fillField">
      <p className="adminAuthorization_fillField_title">{authType}</p>
      <div className="adminAuthorization_fillField_mailEntryFields">
        <span className="adminAuthorization_fillField_mailEntryFields_mail">
          Почта
        </span>
        <input
          className={cn(
            "adminAuthorization_fillField_mailEntryFields_inputMail",
            {
              adminAuthorization_fillField_mailEntryFields_inputMail_error:
                emailDirty && emailError,
            }
          )}
          name="email"
          value={email}
          onChange={(e) => handlChangeEmail(e)}
          onBlur={(e) => handlClickBlur(e)}
        ></input>
        {emailDirty && emailError && (
          <div className="adminAuthorization_fillField_mailEntryFields_error">
            {emailError}
          </div>
        )}
      </div>

      <div className="adminAuthorization_fillField_passwordEntryFields">
        <span className="adminAuthorization_fillField_passwordEntryFields_password">
          Пароль
        </span>
        <input
          className={cn(
            "adminAuthorization_fillField_passwordEntryFields_inputPassword",
            {
              adminAuthorization_fillField_passwordEntryFields_inputPassword_error:
                passwordDirty && passwordError,
            }
          )}
          name="password"
          type="password"
          value={password}
          onChange={(e) => handlChangePassword(e)}
          onBlur={(e) => handlClickBlur(e)}
        ></input>
        {passwordDirty && passwordError && (
          <div className="adminAuthorization_fillField_inputPassword_error">
            {passwordError}
          </div>
        )}
      </div>

      <div className="adminAuthorization_fillField_entryBlock">
        <span className="adminAuthorization_fillField_entryBlock_linkEntry">
          Запросить доступ
        </span>
        <Link to={handleLink} className="linkAuth">
          {linkName}
        </Link>
        <Link
          to="/admin/carCart"
          type="button"
          className={cn("adminAuthorization_fillField_entryBlock_botton", {
            adminAuthorization_fillField_entryBlock_botton_active: checkError,
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
  handleLink: PropTypes.func,
  linkName: PropTypes.string,
};
AuthorizationForm.defaultProps = {
  title: "",
  handleClick: () => {},
  authType: "",
  handleLink: () => {},
  linkName: "",
};

export default AuthorizationForm;
