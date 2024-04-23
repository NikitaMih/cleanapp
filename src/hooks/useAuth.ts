export const useAuth = () => {
  const token = localStorage.getItem('token');

  const isAuth = !!token;
  return {
    token,
    isAuth,
  };
};
