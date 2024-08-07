// Add the correct import statement for useHistory
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const history = useNavigate();

  const handleLogin = () => {
    history("/dashboard");
  };

  return (
    <div>
      <p>Login</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
