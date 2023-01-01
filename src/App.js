import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import WeeklyActivities from "./components/WeeklyActivities";
import UpcomingActivities from "./components/UpcomingActivities";
import Departments from "./components/Depatments";
import Patrons from "./components/Patrons";
import LocateUs from "./components/LocateUs";
import SocialMedia from "./components/SocialMedia";
import Developers from "./components/Developers";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App wrapContent">
      <Navbar />
      <Header />
      <WeeklyActivities />
      <UpcomingActivities />
      <Departments />
      <Patrons />
      <LocateUs />
      <SocialMedia />
      <Developers />
      <Footer />
    </div>
  );
}

export default App;
