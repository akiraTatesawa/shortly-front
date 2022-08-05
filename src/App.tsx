import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import SignInPage from "./pages/SignInPage";
// Global Styles
import GlobalStyles from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyles />

      {/* <header>Header</header> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
