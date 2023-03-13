import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = ({ path, element }) => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <Route path={path} element={element} />;
};

export default ProtectedRoute;