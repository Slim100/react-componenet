import logo from './logo.svg';
import './App.css';
import ReactStars from "react-rating-stars-component";
import component from './Component';
import ProfilPhoto from '.ProfilPhoto';
import FullName from './FullName';
import Address from './Address';
function App() {
  return (
    <div className="App">
      <FullName/>
      <ProfilPhoto/>
      <Address/>
    </div>
  );
}

export default App;
