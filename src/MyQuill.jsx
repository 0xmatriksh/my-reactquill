import { Quill } from "react-quill";

var quill = new Quill('#editor', {
    modules: {
        toolbar:
            [
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                [{ 'size': ['small', false, 'large', 'huge'] }],
                ['bold', 'italic', 'underline', 'strike',],
                [{ 'myDropdown': ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'] }],
                ['clean']
            ]
    },
    theme: 'snow'
});

export const modules = {
    toolbar: {
        container: "#editor",
        handlers: {
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
    "code-block"
];

export default quill