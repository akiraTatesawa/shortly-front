import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import RankingPage from "../../pages/RankingPage";
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
      <Route path="/ranking" element={<RankingPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
    </Routes>
  );
}
