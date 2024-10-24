import './App.css'
import './output.css'
import Navbar from './Navbar.jsx';
import Home from './Content.jsx'
function App() {
  return (
    <>
      <div className="Navbar min-w-full">
       <Navbar />
      </div>
      <div className="content">
      <Home/>
      </div>
    </>
  );
}

export default App;

