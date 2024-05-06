import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Navigation from "./components/Navigation";
import SavedNotes from "./pages/SavedNotes";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/saved-notes" element={<SavedNotes />} />
      </Routes>
    </Router>
  );
}

export default App;
