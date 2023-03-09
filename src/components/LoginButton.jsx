import { Link } from 'react-router-dom';

function LoginButton() {
  return (
    <Link to="/login">
      <button>Log In</button>
    </Link>
  );
}

export default LoginButton;