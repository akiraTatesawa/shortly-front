import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import HomePage from "../../pages/HomePage";
import RankingPage from "../../pages/RankingPage";
import RedirectPage from "../../pages/RedirectPage";
import SignInPage from "../../pages/SignInPage";
import SignUpPage from "../../pages/SignUpPage";
import { getUserDataFromLocalStorage, handleLocation } from "../../utils";

export default function RouterNavigator() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const userData = getUserDataFromLocalStorage();
    handleLocation(Boolean(userData), navigate, location.pathname);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/open/:shortUrl" element={<RedirectPage />} />
      <Route path="/ranking" element={<RankingPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
    </Routes>
  );
}
