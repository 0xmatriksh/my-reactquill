import React from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import PropTypes from 'prop-types'
import { Quill } from "react-quill";
import './QuillToolbar.css'
const Delta = Quill.import('delta');

let BlockEmbed = Quill.import('blots/block/embed')

class MyCont extends BlockEmbed {
    static create(value) {
        console.log(value)
        const node = super.create();
        node.innerHTML = value;
        return node;
    }

}

MyCont.blotName = 'mycont';
MyCont.tagName = 'cnt';
MyCont.className = 'ql-mycont';

function addContainer() {
    var range = this.quill.getSelection();
    console.log(range)
    this.quill.updateContents(
        new Delta()
            .retain(range.index)
            .insert({ mycont: `<div class="myContainer"><h3 class="myContainer-head">TOGETHER WITH FACET</h3><h1 class="myContainer-title">Who\’s a better saver?</h1><p>According to YouGov.com, only 9% of men and 4.5% of women have $100k or more in savings.*</p></div>` })
    );
}

Quill.register(MyCont);


class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editorHtml: "" };
        this.handleChange = this.handleChange.bind(this);
        this.reactQuillRef = null
    }

    handleChange(html) {
        this.setState({ editorHtml: html });
    }

    modules = {
        toolbar: {
            container: "#toolbar",
            handlers: {
                container: addContainer
            }
        },
        clipboard: {
            matchVisual: false,
        }
    };

    formats = [
        "header",
        "font",
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
        "code-block",
        "mycont"
    ];

    render() {
        return (
            <div className="text-editor">
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
                        <button className="ql-code-block" />
                    </span>
                    <span className="ql-formats">
                        <button className="ql-link" />
                        <button className="ql-image" />
                        <button className="ql-video" />
                        <button className="ql-blockquote" />
                    </span>
                    <span className="ql-formats">
                        <button className="ql-container">
                            Container
                        </button>
                    </span>
                </div>
                <ReactQuill
                    ref={(el) => { this.reactQuillRef = el }}
                    onChange={this.handleChange}
                    placeholder={this.props.placeholder}
                    modules={this.modules}
                    formats={this.formats}
                    theme={"snow"} // pass false to use minimal theme
                />
            </div>
        );
    }
}

Editor.propTypes = {
    placeholder: PropTypes.string
};


export default Editor
