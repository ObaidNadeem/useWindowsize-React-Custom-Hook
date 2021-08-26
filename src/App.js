import logo from './logo.svg';
import './App.css';

import {useWindowSize} from './useWindowSize/useWindowSize'

function App() {

  const [height, width] = useWindowSize()


  return (
    <div>
      This is the height of the screen  {height}
      <div></div>
      This is the width of the screen  {width} 
    </div>
  );
}

export default App;
