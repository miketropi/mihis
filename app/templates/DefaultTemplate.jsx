import Header from '../components/me/Header';
import Footer from '../components/me/Footer';

export default function DefaultTemplate({ children }) {
  return <div className="default-template">
    <Header />
    { children }
    <Footer />
  </div>
}