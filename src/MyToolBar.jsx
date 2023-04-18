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
                    <button className="ql-custom" onClick={toggleDropdown1}>
                        Custom button
                    </button>
                    <button className="ql-share" onClick={toggleDropdown1}>
                        Share this post
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