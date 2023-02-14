import React,{useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  
  const showAlert = (message,type) => {
    setAlert({
      message: message,
      type: type
      })
     setTimeout(()=> {
        setAlert(null)
        },2000)
   }
  
  const toggleMode = ()=> {
        if(mode === 'light'){
          setMode('dark');
          document.body.style.backgroundColor = '#343a40';
          document.body.style.color = 'white';
          showAlert("Dark Mode Enabled", 'success');

        }
        else{
          setMode('light');
          document.body.style.backgroundColor = 'white';
          document.body.style.color = 'black';
          showAlert("Light Mode Enabled", 'success');

        }
  }
  
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter the Text to be Analyzed" mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
