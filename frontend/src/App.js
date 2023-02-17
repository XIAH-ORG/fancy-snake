import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import "react-image-lightbox/style.css";

// pages
import HomePage from "./pages/Home";
import MmLoginPage from "./pages/MmLogin";
import MarketPlacePage from "pages/Marketplace";
import MarketLayout from "./layouts/MarketLayout";
import WalletPage from "pages/Wallet";
import WalletLayout from "layouts/WalletLayout";
import { TestPage } from "pages/Test";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        {/* <Route
          path="/login"
          element={
            <MmLayout>
              <MmLoginPage />
            </MmLayout>
          }
        />
        <Route
          path="/marketplace"
          element={
            walletAddress.length < 0 ? (
              <Navigate to="/login" />
            ) : (
              <MarketLayout>
                <MarketPlacePage />
              </MarketLayout>
            )
          }
        />
        <Route
          path="/wallet"
          element={
            <WalletLayout>
              <WalletPage />
            </WalletLayout>
          }
        /> */}
      </Routes>
    </Router>
  );
}
