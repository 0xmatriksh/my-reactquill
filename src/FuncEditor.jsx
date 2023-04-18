import { useState, useRef } from 'react'
// import dynamic from "next/dynamic";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Quill } from "react-quill";
import './QuillToolbar.css'
const Embed = Quill.import('blots/block/embed');
const Delta = Quill.import('delta');
const Parchment = Quill.import('parchment');

// const ReactQuill = dynamic(
//     async () => {
//         const { default: RQ } = await import("react-quill");

//         return ({ forwardedRef, ...props }) => <RQ ref={forwardedRef} {...props} />;
//     },
//     {
//         ssr: false
//     }
// );

// Making non editable button
// reference: https://stackoverflow.com/questions/39601992/how-to-add-a-non-editable-tag-to-content-in-quill-editor
class MyButton extends Parchment.Embed {
    static create(value) {
        const node = super.create(value);
        node.innerHTML = value;
        node.contentEditable = 'false';
        return node;
    }
}
MyButton.blotName = 'mybutton';
MyButton.tagName = 'BTN';
MyButton.className = 'ql-mybutton';

// Adding Horizontal line
class Hr extends Embed {
    static create(value) {
        let node = super.create(value);
        // give it some margin
        node.setAttribute('style', "height:0px; margin-top:10px; margin-bottom:10px;");
        return node;
    }
}

Hr.blotName = 'hr'; //now you can use .ql-hr classname in your toolbar
// Hr.className = 'ql-hr';
Hr.tagName = 'hr';

function addSubscribe(quill, value) {
    console.log(quill)
    var range = quill.getSelection();
    console.log(range)
    quill.updateContents(
        new Delta()
            .retain(range.index)
            .insert({ mybutton: '<div class="sub-div"><a style="background-color: #4ED96F;" href="#">Subscribe</a></div>' })
    );
    quill.insertText(range.index, "\n")
}

function addLine() {
    var range = this.quill.getSelection();
    this.quill.insertEmbed(range.index, "hr", "null")
}

Quill.register(MyButton);
Quill.register({
    'formats/hr': Hr
});

const CustomToolbar = () => (
    <div id="toolbar">
        <span className="ql-formats">
            <select className="ql-font" defaultValue="arial">
                <option value="arial">Arial</option>
                <option value="comic-sans">Comic Sans</option>
                <option value="courier-new">Courier New</option>
                <option value="georgia">Georgia</option>
                <option value="helvetica">Helvetica</option>
                <option value="lucida">Lucida</option>
            </select>
            <select className="ql-size" defaultValue="medium">
                <option value="extra-small">Size 1</option>
                <option value="small">Size 2</option>
                <option value="medium">Size 3</option>
                <option value="large">Size 4</option>
            </select>
            <select className="ql-header" defaultValue="3">
                <option value="1">Heading</option>
                <option value="2">Subheading</option>
                <option value="3">Normal</option>
            </select>
        </span>
        <span className="ql-formats">
            <button className="ql-bold" />
            <button className="ql-italic" />
            <button className="ql-underline" />
            <button className="ql-strike" />
        </span>
        <span className="ql-formats">
            <button className="ql-list" value="ordered" />
            <button className="ql-list" value="bullet" />
            <button className="ql-indent" value="-1" />
            <button className="ql-indent" value="+1" />
        </span>
        <span className="ql-formats">
            <button className="ql-script" value="super" />
            <button className="ql-script" value="sub" />
            <button className="ql-blockquote" />
            <button className="ql-direction" />
        </span>
        <span className="ql-formats">
            <select className="ql-align" />
            <select className="ql-color" />
            <select className="ql-background" />
        </span>
        <span className="ql-formats">
            <button className="ql-link" />
            <button className="ql-image" />
            <button className="ql-video" />
        </span>
        <span className="ql-formats">
            <button className="ql-formula" />
            <button className="ql-code-block" />
            <button className="ql-clean" />
        </span>
        <span className="ql-formats">
            <button className="ql-subscribe">
                <span>Hello1</span>
            </button>
        </span>
        <span className="ql-formats">
            <button className="ql-line">
                <span>Hello</span>
            </button>
        </span>

    </div>
);

/* 
 * Editor component with custom toolbar and content containers
 */
function FuncEditor() {

    const [value, setValue] = useState('');
    const quillRef = useRef();

    const handleChange = value => {
        setValue(value);
    };

    var modules = {
        toolbar: {
            container: "#toolbar",
            handlers: {
                subscribe: () => addSubscribe(quillRef.current.getEditor(), value),
                line: addLine
            }
        },
        clipboard: {
            matchVisual: false,
        }
    };

    var formats = [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "color",
        "mybutton",
        "hr"
    ];

    return (
        <div className="text-editor">
            <CustomToolbar />
            <ReactQuill
                ref={quillRef}
                value={value}
                onChange={handleChange}
                modules={modules}
                formats={formats}
                theme={"snow"} // pass false to use minimal theme
            />
        </div>
    );
}

export default FuncEditor
