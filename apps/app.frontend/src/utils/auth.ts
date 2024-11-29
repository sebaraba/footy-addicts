export const isTokenValid = (token: string | null): boolean => {

  if (!token) return false;

  const payload = JSON.parse(atob(token.split(".")[1]));
  const expiry = payload.exp;
  const now = Math.floor(Date.now() / 1000);

  return now < expiry;
};

export const getToken = (): string | null => {
  return localStorage.getItem("token");
};
