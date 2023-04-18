import { useState } from 'react'

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
                <button className="ql-list" value="bullet" />
                <button className="ql-list" value="ordered" />
            </span>
            <div className="dropdown">
                <span className="ql-formats menu">
                    <button className="menuBtn" onClick={toggleDropdown1}>
                        <span>Buttons</span>
                        <span><svg className="svgBtn" viewBox="0 0 22 22"> <polygon class="ql-stroke" points="7 11 9 13 11 11 7 11"></polygon> </svg> </span>
                    </button>

                </span>

                <span style={{ display: isOpen1 ? "block" : "none" }} className="ql-formats items">
                    <button className="ql-subscribe" onClick={toggleDropdown1}>
                        <span>Subscribe</span>
                    </button>
                    <button className="ql-caption" onClick={toggleDropdown1}>
                        Subscribe with Caption
                    </button>
                    <button className="ql-custom" onClick={toggleDropdown1}>
                        Custom button
                    </button>
                    <button className="ql-share" onClick={toggleDropdown1}>
                        Share this post
                    </button>
                </span>
            </div>

            <div className="dropdown">
                <span className="ql-formats menu">
                    <button className="menuBtn" onClick={toggleDropdown2}>
                        More
                    </button>
                </span>

                <span style={{ display: isOpen2 ? "block" : "none" }} className="ql-formats items">
                    <button className="ql-line" onClick={toggleDropdown2}>
                        <span>Add Line</span>
                    </button>
                </span>
            </div>

        </div >

    );
}
export default QuillToolbar;