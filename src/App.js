import './App.css';
import { useState } from 'react'
import PhotoContainer from './PhotoContainer.tsx';

function App() {
  //typically would not keep state in app component and would just render one 'main container', 
  //but for the sake of time and getting functionality down I am adding this
  const [ showPhotos, setShowPhotos ] = useState(false);
  return (
    
    <div className="App">
      <div className="app-container">
        <h1>cyberconvoy.dev</h1>,
        <div className="photo-container">
          {showPhotos ? 
            <PhotoContainer /> :
            null
          }
          <button onClick={() => setShowPhotos(!showPhotos)}>Show Photos</button>
        </div>
      </div>
    </div>
  );
}

export default App;
