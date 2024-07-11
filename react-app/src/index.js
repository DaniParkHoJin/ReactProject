import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
//리엑트 앱의 성능 측정 용도로 사용되는 파일
//import reportWebVitals form '.reprotWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //리엑트 앱 내부의 잠재적인 문제를 검사하는 도구, 초보자에게 혼란을 줄 수 있다.
//  <React.StrictMode>
  <App />
//  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
