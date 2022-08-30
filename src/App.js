import './App.css';
import Faq from './components/FAQ/Faq';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Newsletter from './components/Newsletter/Newsletter';
import Stages from './components/Stages/Stages';
import Whatwedo from './components/Whatwedo/Whatwedo';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Whatwedo />
      <Stages />
      <Newsletter />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
