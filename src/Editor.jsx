import React from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import PropTypes from 'prop-types'
import { Quill } from "react-quill";
import './QuillToolbar.css'
const Embed = Quill.import('blots/block/embed');
const Delta = Quill.import('delta');
const Parchment = Quill.import('parchment');
import MyToolBar from './MyToolBar';

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

function addSubscribe(quill, url) {
    var range = quill.getSelection();
    console.log(range)
    quill.updateContents(
        new Delta()
            .retain(range.index)
            .insert({ mybutton: `<div class="sub-div"><a style="background-color: #4ED96F;" href="${url}">Subscribe</a></div>` })
    );
    quill.insertText(range.index + 2, "\n")
    quill.setSelection(range.index + 2)
}

function addSubscribeWithCaption() {
    var range = this.quill.getSelection();
    this.quill.updateContents(
        new Delta()
            .retain(range.index)
            .insert({ mybutton: '<div class="sub-div"><div class="w-caption"><p>Thanks for reading! Subscribe for free<p><p>to receive new posts and support my work.</p><a style="background-color: #4ED96F;" href="#">Subscribe</a></div></div>' })
    );
    this.quill.insertText(range.index + 2, "\n")
    this.quill.setSelection(range.index + 2)
}

function addCustomButtom() {
    const url = prompt('link url:');
    const text = prompt('text to show:');

    // check to see if url or text is null
    if (url !== null || text !== null) {
        var range = this.quill.getSelection();
        this.quill.updateContents(
            new Delta()
                .retain(range.index)
                .insert({ mybutton: `<div class="sub-div"><a style="background-color: #4ED96F;" href="${url}">${text}</a></div>` })
        );
        this.quill.insertText(range.index + 2, "\n")
        this.quill.setSelection(range.index + 2)
    }
}

function addShare(quill, url) {
    var range = quill.getSelection();
    quill.updateContents(
        new Delta()
            .retain(range.index)
            .insert({ mybutton: `<div class="sub-div"><a style="background-color: #4ED96F;" href="${url}">Share</a></div>` })
    );
    quill.insertText(range.index + 2, "\n")
    quill.setSelection(range.index + 2)
}

function addLine() {
    var range = this.quill.getSelection();
    this.quill.insertEmbed(range.index, "hr", "null")
}

Quill.register(MyButton);
Quill.register({
    'formats/hr': Hr
});

/* 
 * Editor component with custom toolbar and content containers
 */
class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editorHtml: "" };
        this.handleChange = this.handleChange.bind(this);
        this.reactQuillRef = null
        this.subscribeUrl = "https://www.google.com"
        this.shareUrl = "https://www.bing.com"
    }

    handleChange(html) {
        this.setState({ editorHtml: html });
    }

    modules = {
        toolbar: {
            container: "#toolbar",
            handlers: {
                subscribe: () => addSubscribe(
                    this.reactQuillRef.getEditor(),
                    this.subscribeUrl
                ),
                caption: addSubscribeWithCaption,
                custom: addCustomButtom,
                share: () => addShare(
                    this.reactQuillRef.getEditor(),
                    this.shareUrl
                ),
                line: addLine,
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
        "color",
        "mybutton",
        "hr"
    ];

    render() {
        return (
            <div className="text-editor">
                <MyToolBar />
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
