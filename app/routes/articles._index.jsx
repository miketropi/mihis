import HeroSection from "../components/me/HeroSection"

export const meta = () => {
  return [
    { title: "Articles 👀" },
    { name: "description", content: "As a dedicated fan of Ethereum, I enjoy staying on top of decentralized innovations and sharing insights from my crypto journey." },
  ];
};

export default function Articles() {
  return <main>
    <HeroSection title={ `Articles` }></HeroSection>
    <div className="container mx-auto px-4 mb-4">
      ...
    </div>
  </main>
}