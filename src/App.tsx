import './App.scss';
import './variable.scss'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Content from './components/Content';
import { Stack } from 'react-bootstrap';
import {useState} from'react';

function App() {
  const [tabKey, setKey] = useState('1');


  // tab navigation
  const getKey = (key:any) => {
    setKey(key);
    document.getElementById("el")?.scrollIntoView()
  }
  return (
    <Stack>
      <Navbar getTabKey={getKey} />
      <Header/>
      <Content tab={tabKey} getTabKey={getKey}/>
      <div id="dummy"></div>
    </Stack>
  );
}

export default App;
