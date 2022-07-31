import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/cart/reducerUserSlice";
import AuthorizationForm from "../../ui/AuthorizationForm";
import HeaderAuthorization from "../Common/HeaderAuthorization";
import "./index.scss";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const handlLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
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
      <HeaderAuthorization />
      <AuthorizationForm
        title="Войти"
        handleClick={handlLogin}
        authType="Вход"
        handleLink="/register"
        linkName="Зарегистрироваться"
      />
    </>
  );
};

export default AdminLogin;
