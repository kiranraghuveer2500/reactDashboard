import "./styles.css";
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';

export default function App() {
  return (
    <div className="App">
       <Header />
       <Footer />
       <List />
    </div>
  );
}

