import { useRef } from 'react';
import './App.css';
import Table from './components/table.component';

// ht-header-active-border-color
function App() {
  const hot = useRef(null);
  return (
    <div className="App">
      <Table ref={hot}/>
      <button onClick={() => console.log(hot.current.hotInstance.getData(), hot.current.hotInstance)}>Show data</button>
    </div>
  );
}

export default App;
