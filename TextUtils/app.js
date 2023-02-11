import React,{useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  
  const [mode, setMode] = useState('light');
  
  const toggleMode = ()=> {
        if(mode === 'light'){
          setMode('dark');
          document.body.style.backgroundColor = '#343a40';
          document.body.style.color = 'white';
        }
        else{
          setMode('light');
          document.body.style.backgroundColor = 'white';
          document.body.style.color = 'black';
        }
  }
  
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the Text to be Analyzed" mode={mode} />
      </div>
    </>
  );
}

export default App;
