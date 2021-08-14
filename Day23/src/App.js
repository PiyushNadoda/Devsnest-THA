import './App.css';
import {useToggle , useHover } from './Components/CustomHook';

function App() {
  const [isTextChanged, setIsTextChanged] = useToggle();
  const [hoverRef, isHovered] = useHover()
  return (<>
      <button onClick={setIsTextChanged}>{isTextChanged ? 'Toggled' : 'Click to Toggle'}</button>
      <div ref={hoverRef}>{isHovered ? "😁" : "☹️"}</div>
  </>);
}

export default App;
