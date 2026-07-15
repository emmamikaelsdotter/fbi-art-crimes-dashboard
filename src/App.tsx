import { Routes, Route } from "react-router-dom";
import { ArtCrimesPage } from "./features/artcrimes/ArtCrimesPage";
import { ArtCrimeDetail } from "./features/artcrimes/ArtCrimeDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ArtCrimesPage />} />
      <Route path="/artcrimes/:uid" element={<ArtCrimeDetail />} />
    </Routes>
  );
}

export default App;