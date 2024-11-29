import { Button } from "../components/ui/button";
import HeroSection from '../components/me/HeroSection';

export const meta = () => {
  return [
    { title: "Mike, investment history 🐋" },
    { name: "description", content: "As a dedicated fan of Ethereum, I enjoy staying on top of decentralized innovations and sharing insights from my crypto journey." },
  ];
};

export default function index() {
  return <main className="">
    <HeroSection 
      title={`Welcome, glad you visited me! 🎉`}  
      description={`I'm Mike, an enthusiastic amateur crypto investor with a passion for exploring the world of blockchain technology. As a dedicated fan of <u>Ethereum</u>, I enjoy staying on top of decentralized innovations and sharing insights from my crypto journey.`}></HeroSection>
    <div className="container mx-auto px-4">
      <h2>Welcome to the Main Layout!</h2>
      <Button>Click me...!</Button> 
    </div>
  </main>
}
