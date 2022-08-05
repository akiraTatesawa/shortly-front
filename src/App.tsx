/* eslint-disable react/jsx-no-constructed-context-values */
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Header from "./components/Header";
// Contexts
import { UserProvider } from "./contexts/UserContext";
// Pages
import RankingPage from "./pages/RankingPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
// Global Styles
import GlobalStyles from "./styles/globalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <UserProvider>
        <Header />

        <Routes>
          <Route path="/ranking" element={<RankingPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
