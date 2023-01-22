import "./App.css";
import Home from "./components/Home/Home";
import Memory from "./components/Memory/Memory";
import Gallery from "./components/Gallery/Gallery";
import BucketList from "./components/BucketList";
import BudgetTracker from "./components/BudgetTracker";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DirectMessaging from "./components/DirectMessaging";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="memory" element={<Memory />} />
          <Route path="budgettracker" element={<BudgetTracker />} />
          <Route path="bucketlist" element={<BucketList />} />
          <Route path="send_message" element={<DirectMessaging />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
