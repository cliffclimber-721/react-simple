/* eslint-disable */

import React, { useState } from 'react'; 
import './App.css';

function App() {
  let [num, changeNum] = useState(0);
  let [before, after] = useState(["React", "Javascript", "Python"]);
  let post = "React 문법을 알기 위한 예시입니다.";
  {/* 함수를 따로 선언해서 아까 못 썼던 after 를 쓴다. 1. 쓰게 되면 이제 변경하게 될 인덱스의 값을 바꿔주고 그대로 배열을 가져와서 넣어준다.
                                              2. 복사본을 생성한다*/}
  function changeTitle(){
    let newTitle = [...before]; {/* reference data type */} {/* 새로운 복사본을 하나 만들어 달라는 뜻의 ... 이다. */}
    newTitle[0] = "C";
    after(newTitle);
    {/*after(["C", "Javascript", "Python"]);*/}
  }


  return (
    <div className="App">
      <div className="album">
        <div>개발 테스트용 React</div> 
      </div>
      <button onClick={ changeTitle }>Press</button> {/* 만약 첫번째 꺼를 바꾸고 싶으면 */} {/* 버튼 눌러서 실행시키고 싶으면 onClick 함수를 들고온다. 그리고 사용될 함수를 사용한다. */}
      {/* 첫번째 */}
    <div className="list">
      <h3> {before[0]} <span onClick={() => changeNum(num + 1)}>👊</span> {num} </h3> {/* onClick 안에 함수를 집어넣어야한다.*/}
      <p>11월 26일 발행</p>
      <hr />
    </div>
      {/* 두번째 */}
    <div className="list">
      <h3> {before[1]} </h3> 
      <p>11월 26일 발행</p>
      <hr />
    </div>
      {/* 세번째 */}
    <div className="list">
      <h3> {before[2]} </h3> 
      <p>11월 26일 발행</p>
      <hr />
    </div>  
    </div>
  );
}

export default App;
