import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";

// Components
import Header from "./components/Header";
import RouterNavigator from "./components/RouterNavigator";
// Contexts
import { UserProvider } from "./contexts/UserContext";
// Global Styles
import GlobalStyles from "./styles/globalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <UserProvider>
        <Header />
        <RouterNavigator />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
