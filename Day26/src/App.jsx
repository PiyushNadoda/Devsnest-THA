import './App.css';

import { formInput } from "./actions/index"
import { useDispatch, useSelector} from "react-redux";

function App() {

  
  const formState = useSelector((state) => state.form);
  const dispatch = useDispatch();

  return (
    <>
    <h1>Input</h1>
    <input onChange={(e) => dispatch(formInput({ name : e.target.value }))} placeholder="Name" type="text" />
    <input onChange={(e) => dispatch(formInput({ email : e.target.value }))} placeholder="Email" type="text" />
    <h2>Data : </h2>
    <p> Name : {formState.name} </p>
    <p> Email : {formState.email} </p>
    </>
  );
}

export default App;