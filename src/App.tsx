import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Header from "./components/Header";
// Pages
import SignInPage from "./pages/SignInPage";
// Global Styles
import GlobalStyles from "./styles/globalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />

      <Routes>
        <Route path="/" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
