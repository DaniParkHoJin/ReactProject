import "./TodoEditor.css";
import {useRef, useState} from "react";

const TodoEditor = ({ onCreate }) => {

    const [content, setContent] = useState("");
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };
    const inputRef = useRef(null);

    const onSubmit = () => {
        if (!content) {
            inputRef.current.focus();
            return;
        } else {
            onCreate(content);
            setContent("");
        };
    };


    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    };

    return (
        <div className="TodoEditor">
            <h4>새롭게 할일 추가하기⚽🎨🎸🎧📷🖍</h4>
            <div className="editor_wrapper">
                <input ref={inputRef} value={content} onChange={onChangeContent} onKeyDown={onKeyDown} placeholder="새롭게 해야할 일"/>
                <button onClick={onSubmit}>추가</button>
            </div>

        </div>

    )
}
export default TodoEditor;