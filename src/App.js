import './App.css';
import Navbar from './components/navbar/navbar';
import PostChain from './components/post-chain/post-chain';
import Postform from './components/postform/postform';
import Topbar from './components/topbar/topbar';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className='container row col-12 entire-content'>
        <div className='container col-3 navbar-content'>
          <Navbar/>
        </div>
        <div className='container col-6 postform-content'>
          <Postform/>
        </div>
        <div className='container col-3 postchain-content'>
          <PostChain/>
        </div>
      </div>
    </div>
  );
}

export default App;
