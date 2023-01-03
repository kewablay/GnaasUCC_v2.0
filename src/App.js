import "./App.css";
import Homepage from "./pages/Front/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventsPage from "./pages/Front/EventsPage";

function App() {
  return (
    <div className="App wrapContent">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/events" element={<EventsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
