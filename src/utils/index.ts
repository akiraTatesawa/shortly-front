import { NavigateFunction } from "react-router-dom";

export function getUserDataFromLocalStorage() {
  const data = localStorage.getItem("userData");

  if (data) {
    return JSON.parse(data);
  }

  return null;
}

export function deleteUserFromLocalStorage() {
  const data = localStorage.getItem("userData");

  if (data) {
    localStorage.removeItem("userData");
  }
}

export function buildRequestConfig() {
  const { token } = getUserDataFromLocalStorage();

  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  return config;
}

export function handleLocation(
  isUserAuthenticated: boolean,
  navigate: NavigateFunction,
  location: string
) {
  const routes = {
    ranking: "/ranking",
    signup: "/sign-up",
    signin: "/sign-in",
    home: "/",
  };

  const routesArray = Object.entries(routes);

  const isAuthRoute = location === routes.signup || location === routes.signin;
  const isCurrentLocationValid = routesArray.some(
    (route) => route[1] === location
  );

  let redirectUrl: string = location;

  if (
    !isCurrentLocationValid ||
    (isAuthRoute && isUserAuthenticated) ||
    (!isUserAuthenticated && !isAuthRoute)
  ) {
    redirectUrl = "/ranking";
  }

  if (location.startsWith("/open/")) {
    redirectUrl = location;
  }

  navigate(redirectUrl);
}
