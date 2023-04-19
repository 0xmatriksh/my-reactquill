import { useState } from 'react'
import './App.css';
import 'react-quill/dist/quill.snow.css';
import MyEditor from './MyEditor'; // yo chai testing editor ho
import Editor from './Editor'; // yo chai actual Editor ho

function App() {
  const [value, setValue] = useState('');

  const handleChange = value => {
    setValue(value);
  };

  return (
    <div className="App">
      <MyEditor />
    </div>
  )
}

export default App
