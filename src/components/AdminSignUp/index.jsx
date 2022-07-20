import { useNavigate } from "react-router-dom";
import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/cart/reducerUserSlice";
import AuthorizationForm from "../../ui/AuthorizationForm";

import "./index.scss";

const AdminSignUp = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const handlSignUp = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        history("/admin/carCart");
      })
      .catch(console.error);
  };

  return (
    <>
      <h2 className="adminAuthorization_title">
        <div id="adminAuthorization_title_circleContainer">
          <div id="adminAuthorization_title_circleContainer_circleSmall"></div>
          <div id="adminAuthorization_title_circleContainer_circleLarge">
            <div id="adminAuthorization_title_circleContainer_circleLarge_circleSmallTwo"></div>
          </div>
        </div>
        Need for drive
      </h2>
      <AuthorizationForm
        title="Зарегистрироваться"
        handleClick={handlSignUp}
        authType="Регистрация"
        handleLink="/login"
        linkName="Войти"
      />
    </>
  );
};

export default AdminSignUp;
