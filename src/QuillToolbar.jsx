import React from "react";
import { useState } from 'react'
import { Quill } from "react-quill";
import './QuillToolbar.css'
const Embed = Quill.import('blots/block/embed');

class Hr extends Embed {
    static create(value) {
        let node = super.create(value);
        // give it some margin
        node.setAttribute('style', "height:0px; margin-top:10px; margin-bottom:10px;");
        return node;
    }
}

Hr.blotName = 'hr'; //now you can use .ql-hr classname in your toolbar
Hr.className = 'ql-hr';
Hr.tagName = 'hr';

function addSubscribe() {
    // const delta = this.quill.clipboard.convert(`<a href="https://www.npmjs.com/package/react-quill">Subscribe</a>`)

    // this.quill.setContents(delta, 'silent')
    // var selection = this._quill.getSelection(true);
    // console.log()
    // var prev = this.quill.root.innerHTML
    var range = this.quill.getSelection();
    this.quill.updateContents();
    this.quill.clipboard.dangerouslyPasteHTML(range.index + 1, '<a href="https://www.npmjs.com/package/react-quill">Subscribe</a> ');
}

function addLine() {
    // const delta = this.quill.clipboard.convert(`<h1>hh</h1>`)

    this.quill.updateContents()
    var range = this.quill.getSelection();
    this.quill.insertEmbed(range.index, "hr", "null")
    // this.quill.clipboard.dangerouslyPasteHTML(range.index + 1, '<div style="height:0px; margin-top:10px; margin-bottom:10px;    "></div>');

}

function sayHello() {
    alert('Hello!');
}

// Add sizes to whitelist and register them
const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);

Quill.register({
    'formats/hr': Hr
});

// Add fonts to whitelist and register them
const Font = Quill.import("formats/font");
Font.whitelist = [
    "arial",
    "comic-sans",
    "courier-new",
    "georgia",
    "helvetica",
    "lucida"
];
Quill.register(Font, true);

// Modules object for setting up the Quill editor
export const modules = {
    toolbar: {
        container: "#toolbar",
        handlers: {
            subscribe: addSubscribe,
            line: addLine,
        }
    },
    history: {
        delay: 500,
        maxStack: 100,
        userOnly: true
    }
};

// Formats objects for setting up the Quill editor
export const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "align",
    "strike",
    "script",
    "blockquote",
    "background",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "code-block",
    "hr"
];

// Quill Toolbar component
function QuillToolbar() {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
    };

    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
    };

    return (
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
                <select onChange={sayHello} className="ql-header" defaultValue="3">
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

            <div className="ffff">
                <span className="ql-formats menu">
                    <button className="ql" onClick={toggleDropdown1}>
                        Menu
                    </button>
                </span>

                <span style={{ display: isOpen1 ? "block" : "none" }} className="ql-formats ff">
                    <button className="ql-subscribe" onClick={toggleDropdown1}>
                        <span>Subscribe</span>
                    </button>
                    <button className="ql-caption" onClick={toggleDropdown1}>
                        Subscribe with Caption
                    </button>
                    <button className="ql-custon" onClick={toggleDropdown1}>
                        Custom button
                    </button>
                </span>
            </div>

            <div className="ffff">
                <span className="ql-formats menu">
                    <button className="ql" onClick={toggleDropdown2}>
                        More
                    </button>
                </span>

                <span style={{ display: isOpen2 ? "block" : "none" }} className="ql-formats ff">
                    <button className="ql-line" onClick={toggleDropdown2}>
                        <span>Add Line</span>
                    </button>
                    <button className="ql-caption" onClick={toggleDropdown2}>
                        B
                    </button>
                    <button className="ql-custon" onClick={toggleDropdown2}>
                        C
                    </button>
                </span>
            </div>

        </div >

    );
}
export default QuillToolbar;
