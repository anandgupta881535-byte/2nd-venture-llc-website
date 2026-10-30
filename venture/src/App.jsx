import { nav } from './data/siteData.js';
import useScrollSpy from './hooks/useScrollSpy.js';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import WhyChooseUs from './pages/WhyChooseUs.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
const ids = nav.map((n) => n.id);
export default function App() {
  const active = useScrollSpy(ids);
  return (<>
    <Navbar active={active} />
    <main><Home /><About /><WhyChooseUs /><Services /><Contact /></main>
    <Footer />
  </>);
}
