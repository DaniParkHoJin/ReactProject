// const Body = ({children}) =>{
//     console.log(children);
//     return(
//         <div className="body">
//             {children}
//         </div>
//     );
// }
// Body.defaultProps = {
//     favorList: [],
// }
//
// export default Body;

// const Body = () => {
//     function handleOnClick() {
//         alert("버튼을 클릭하셨군요");
//     }
//     return(
//         <div className="body">
//             <button onClick={handleOnClick}>클릭하세요</button>
//         </div>
//     );
// }
// export default Body;

// const Body = () => {
//     const handleOnClick = (e) => {
//         console.log(e.target.name);
//     }
//     return (
//         <div className="body">
//             <button name="A버튼" onClick={handleOnClick}>
//                 A버튼
//             </button>
//             <button name="B버튼" onClick={handleOnClick}>
//                 B버튼
//             </button>
//         </div>
//     );
//
// }
// export default Body;
//
// const Body = () => {
//     const handleOnClick = (e) => {
//         console.log(e)
//         console.log(e.target.name);
//     }
//     return (
//         <div className="body">
//             <button name="A버튼" onClick={handleOnClick}>
//                 A 버튼
//             </button>
//             <button name="B버튼" onClick={handleOnClick}>
//                 B 버튼
//             </button>
//         </div>
//     );
// }
// export default Body;

// import {useState} from 'react';
//
// const Body = () => {
//     const [count, setCount] = useState(0);
//     return(
//         <div>
//             <h2>{count}</h2>
//         </div>
//     );
// }
// export default Body;

// import {useState} from 'react';
//
// const Body = () => {
//     const [count, setCount] = useState(0);
//     const OnIncrease= () => {
//         setCount(count + 1);
//     };
//
//     return(
//         <div>
//             <h2>{count}</h2>
//             <button onClick={OnIncrease}>+</button>
//         </div>
//     );
// }
// export default Body;

// import {useState} from 'react';
//
// const Body = () => {
//     console.log("Update!");
//     const [count, setCount] = useState(0);
//     const OnIncrease= () => {
//         setCount(count + 1);
//     };
//
//     return(
//         <div>
//             <h2>{count}</h2>
//             <button onClick={OnIncrease}>+</button>
//         </div>
//     );
// }
// export default Body;

// import {useState} from 'react';
//
// const Body = () => {
//     const handleOnChange = (e) => {
//         console.log(e.target.value);
//     };
//     return(
//         <div>
//             <input onChange={handleOnChange} />
//         </div>
//     );
// }
// export default Body;
//
// import {useState} from 'react';
//
// const Body = () => {
//     const [text, setText] = useState("");
//     const handleOnChange = (e) => {
//         setText(e.target.value);
//     };
//     return(
//         <div>
//             <input value={text} onChange={handleOnChange} />
//         </div>
//     );
// }
// export default Body;

// import {useState} from 'react';
// const Body = () => {
//     const [date, setDate] = useState("");
//     const handleChange = (e) => {
//         console.log("변경된 값: ",  e.target.value);
//         setDate(e.target.value);
//     };
//     return(
//         <div>
//             <input type="date" value={date} onChange={handleChange} />
//         </div>
//     );
// }
// export default Body;

// import {useState} from 'react';
//
// const Body = () => {
//     const [option, setOptions] = useState("");
//     const handleOnChange = (e) => {
//         console.log("변경된 값 : ", e.target.value);
//         setOptions(e.target.value);
//     };
//     return (
//         <div>
//             <select value={option} onChange={handleOnChange}>
//                 <option key={"1번"}>1번</option>
//                 <option key={"2번"}>2번</option>
//                 <option key={"3번"}>3번</option>
//             </select>
//         </div>
//     );
// }
// export default Body;

// import {useState} from 'react';
//
// const Body = () => {
//     const [text, setText] = useState("");
//     const handleOnChange = (e) => {
//         console.log("변경된 값 : ", e.target.value);
//         setText(e.target.value);
//     };
//     return (
//         <div>
//             <textarea value={text} onChange={handleOnChange} />
//         </div>
//     );
// }
// export default Body;

// import {useState} from 'react';
//
// const Body = () => {
//     const [name, setName] = useState("");
//     const [gender, setGender] = useState("");
//     const [birth, setBirth] = useState("");
//     const [bio, setBio] = useState("");
//
//     const onChangeName = (e) => {
//         setName(e.target.value);
//     };
//     const onChangeGender = (e) => {
//         setGender(e.target.value);
//     };
//     const onChangeBirth = (e) => {
//         setBirth(e.target.value);
//     };
//     const onChangeBio = (e) => {
//         setBio(e.target.value);
//     };
//
//     return (
//         <div>
//             <div>
//                 <input value={name} onChange={onChangeName} placeholder="이름"/>
//             </div>
//             <div>
//                 <select value={gender} onchange={onChangeGender}>
//                     <option key={""}></option>
//                     <option key={"남성"}>남성</option>
//                     <option key={"여성"}>여성</option>
//                 </select>
//             </div>
//             <div>
//                 <input type="date" value={birth} onChange={onChangeBirth}/>
//             </div>
//             <div>
//                 <textarea value={bio} onChange={onChangeBio}/>
//             </div>
//         </div>
//     );
// }
// export default Body;

// import {useState} from 'react';
//
// const Body = () => {
//     const [state, setState] = useState({
//         name: "",
//         gender: "",
//         birth: "",
//         bio: "",
//     });
//
//     const handleOnChange = (e) => {
//         console.log("현재 수정 대상: ", e.target.value);
//         setState({
//             ...state,
//             [e.target.name]: e.target.value,
//         });
//     };
//
//     return (
//         <div>
//             <div>
//                 <input name="name" value={state.name} onChange={handleOnChange} placeholder="이름"/></div>
//             <div>
//                 <select name="gender" value={state.gender} onChange={handleOnChange}>
//                     <option key={""}></option>
//                     <option key={"남성"}>남성</option>
//                     <option key={"여성"}>여성</option>
//                 </select>
//             </div>
//             <div>
//                 <input name="brith" type="date" value={state.birth} onChange={handleOnChange}/>
//             </div>
//             <div>
//                 <textarea name="bio" value={state.bio} onChange={handleOnChange} />
//             </div>
//         </div>
//     );
// }
// export default Body;

// import "./Body.css";
// import {useState} from "react";
//
// const Viewer = ({number}) => {
//
//     return <div>{number %2 === 0 ? <h3>짝수</h3> : <h3>홀수</h3>}</div>
// }
//
// const Body = () => {
//     const [number, setNumber] = useState(0);
//     const onIncrease = () => {
//         setNumber(number + 1);
//     };
//     const onDecrease = () => {
//         setNumber(number - 1);
//     };
//     return(
//         <div>
//             <h2>{number}</h2>
//             <Viewer number={number} />
//             <div>
//                 <button onClick={onDecrease}>-</button>
//                 <button onClick={onIncrease}>+</button>
//             </div>
//         </div>
//     );
// }
// export default Body;

// import "./Body.css";
// import {useState} from "react";
//
// const Viewer = () => {
//     console.log("viewer component update!");
//     return <div>Viewer</div>
// }
//
// const Body = () => {
//     const [number, setNumber] = useState(0);
//     const onIncrease = () => {
//         setNumber(number + 1);
//     };
//     const onDecrease = () => {
//         setNumber(number - 1);
//     };
//     return(
//         <div>
//             <h2>{number}</h2>
//             <Viewer />
//             <div>
//                 <button onClick={onDecrease}>-</button>
//                 <button onClick={onIncrease}>+</button>
//             </div>
//         </div>
//     );
// }
// export default Body;

// import { useState } from "react";
//
// const Body = () => {
//     const [text, setText] = useState("");
//     const handleOnChange = (e) => {
//       setText(e.target.value);
//     };
//     const handleOnClick = (e) => {
//         alert(text);
//     };
//
//     return(
//       <div>
//           <input value={text} onChange={handleOnChange} />
//           <button onClick={handleOnClick}>작성완료</button>
//       </div>
//     );
// }
//
// export default Body;

// import { useRef, useState } from "react";
//
// const Body = () => {
//     const [text, setText] = useState("");
//     const textRef = useRef();
//
//     const handleOnChange = (e) => {
//         setText(e.target.value);
//     };
//     const handleOnClick = (e) => {
//         alert(text);
//     };
//
//     return(
//         <div>
//             <input ref={textRef} value={text} onChange={handleOnChange} />
//             <button onClick={handleOnClick}>작성완료</button>
//         </div>
//     );
// }
//
// export default Body;

// import { useRef, useState } from "react";
//
// const Body = () => {
//     const [text, setText] = useState("");
//     const textRef = useRef();
//
//     const handleOnChange = (e) => {
//         setText(e.target.value);
//     };
//     const handleOnClick = (e) => {
//         alert(text);
//         textRef.current.value ="";
//     };
//
//     return(
//         <div>
//             <input ref={textRef} value={text} onChange={handleOnChange} />
//             <button onClick={handleOnClick}>작성완료</button>
//         </div>
//     );
// }
//
// export default Body;

import {useRef, useState} from "react";

const Body = () => {
    const [text, setText] = useState("");
    const textRef = useRef();

    const handleOnChange = (e) => {
        setText(e.target.value);
    };
    const handleOnClick = (e) => {
        if (text.length < 5) {
            textRef.current.focus();
        } else {
            alert(text);
            setText("");
        }
    };

    return (
        <div>
            <input ref={textRef} value={text} onChange={handleOnChange}/>
            <button onClick={handleOnClick}>작성완료</button>
        </div>
    );
}

export default Body;

