import './App.css';
import Card from './components/card';
import Input from './components/input'
import ToggleTheme from './components/themeToggle';
import {useSelector} from 'react-redux';

function App() {
  const theme = useSelector(state => state.theme);
  return (
    <div className={theme ? "App dark" : "App"}>
      <ToggleTheme/>
      <Input />
      <Card />
    </div>
  );
}

export default App;
