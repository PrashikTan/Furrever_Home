import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdoptionForm from "./pages/adoptionform";
import AdoptionHome from "./pages/AdoptionHome";
import AdoptionProcess from "./pages/AdoptionProcess";
import BrowsePets from "./pages/BrowsePets";
import ContactSupport from "./pages/ContactSupport";
import FAQs from "./pages/FAQ";
import MyAdoptions from "./pages/MyAdoptions";
import Navbar from "./pages/Navbar";
import PetCard from "./pages/PetCard";
import PetCenters from "./pages/PetCenters";
import PetDetail from "./pages/PetDetail";
import PetList from "./pages/PetList";
import SuccessStories from "./pages/successstories";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AdoptionHome />} />
        <Route path="/adoption/process" element={<AdoptionProcess />} />
        <Route path="/adoption/pets" element={<BrowsePets />} />
        <Route path="/adoption/PetCard" element={<PetCard />} />
        <Route path="/adoption/pets/:petId" element={<PetDetail />} /> 
        <Route path="/adoption/faqs" element={<FAQs />} />
        <Route path="/adoption/form" element={<AdoptionForm />} />
        <Route path="/adoption/success-stories" element={<SuccessStories />} />
        <Route path="/adoption/centers" element={<PetCenters />} />
        <Route path="/adoption/contact" element={<ContactSupport />} />
        <Route path="/adoption/pet-list" element={<PetList />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
};

export default App;
