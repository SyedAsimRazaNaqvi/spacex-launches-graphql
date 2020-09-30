import React, { useCallback, useState } from 'react';
import './App.css';
import MissionContainer from './components/Mission';
import MissionList from './components/MissionInfo'
function App() {

  const [id, setid] = useState(42)

  const handleIdChange = useCallback(
    newId => {
      setid(newId)
    }, [])

  return (
    <div className="AppContainer">
      <MissionContainer handleIdChange={handleIdChange} />
      <MissionList id={id} />
    </div>
  );
}

export default App;
