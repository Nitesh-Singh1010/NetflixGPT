export const validate = (email, password) => {
  const isEmailValid = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
  const isPasswordValid =
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
  if (!isEmailValid) return "Email entered is invalid";
  if (!isPasswordValid) return "Password entered is invalid";
  return null;
};
