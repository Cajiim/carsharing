import { useSelector } from "react-redux";

const Authorization = () => {
  const {email, token, id} = useSelector(({user}) => user)
  return {
    isAuthorization: !!email,
    email,
    token,
    id,
  };
}

export default Authorization;