import { useEffect, useState } from "react";
import { Routes , Route } from "react-router";
const API_URL = import.meta.env.VITE_API_URL;

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Header from "./Components/Header";
import NotFoundPage from "./pages/NotFoundPage";
import CoinDetails from "./pages/CoinDetails";

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("market_cap_desc");

  useEffect(() => {
    const fetchCoins = async () => {
      if (!API_URL) {
        setError("API URL is not defined in environment variables");
        setLoading(false);
        return;
      }
      try {
        const res = await fetch(
          `${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`
        );
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setCoins(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCoins();
  }, [limit]);

  return (
  <div>
    <Header/>
    <Routes>
      <Route path='/' element={<Home 
      coins={coins}
      setCoins={setCoins}
      filter={filter}
      setFilter={setFilter}
      limit={limit}
      setLimit={setLimit}
      sortBy={sortBy}
      setSortBy={setSortBy}
      loading={loading}
      error={error}
      />}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/coin/:id" element={<CoinDetails/>}/>


      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  </div>
  )
}
export default App;