import { useState } from 'react'
import './App.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import QuillToolbar, { modules, formats } from "./QuillToolbar";
import Dropdown from './Dropdown';

function App() {
  const [value, setValue] = useState('');

  const handleChange = value => {
    setValue(value);
  };
  return (
    <div className="App">
      <QuillToolbar />
      <ReactQuill
        theme="snow"
        value={value}
        onChange={handleChange}
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
      />
    </div>
  )
}

export default App
