import { Container } from "react-bootstrap";
import HeroBanner from "../components/HeroBanner";
import CategorySection from "../components/CategorySection";
import About from "../components/about";
import Contact from "../components/contact";


const Home = () => {
  return (
    <>
     <HeroBanner /> 
     <Container className="mt-5">
      <CategorySection />
      <About />
      <Contact/>
     </Container>

    
    </>
  );
};

export default Home;