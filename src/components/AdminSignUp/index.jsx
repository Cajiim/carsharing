import { useNavigate } from "react-router-dom";
import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/cart/reducerUserSlice";
import AuthorizationForm from "../../ui/AuthorizationForm";
import HeaderAuthorization from '../Common/HeaderAuthorization';
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
        localStorage.setItem("email", user.email);
        localStorage.setItem("token", user.accessToken);
        history("/admin/carCart");
      })
      .catch(console.error);
  };

  return (
    <>
      <HeaderAuthorization/>
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
