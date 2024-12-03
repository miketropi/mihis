import Header from '../components/me/Header';
import Footer from '../components/me/Footer';
import InlineMessage from '../components/me/InlineMessage';

export default function DefaultTemplate({ children }) {
  return <div className="default-template">
    <InlineMessage message={`Hello...! have nice day ✌️`} /> 
    <Header />
    { children }
    <Footer />
  </div>
}