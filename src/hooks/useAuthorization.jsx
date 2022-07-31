import { useSelector } from "react-redux";

const useAuthorization = () => {
  const {email, token, id} = useSelector(({user}) => user)
  return {
    isAuthorization: !!email,
    email,
    token,
    id,
  };
}

export default useAuthorization;