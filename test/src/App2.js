import React from 'react';
import logo from './logo.svg';
import './App.css';


let post = "React 문법을 알기 위한 예시입니다."; 

function App() {
  return (
    <div className="App">
      <div className="album">
        <div >개발 테스트용 React</div> 
      </div>
    <div className="list" />
    <h3> {post} </h3>
    <p>11월 26일 발행</p>
    <hr />
    </div>
  );
}

export default App;