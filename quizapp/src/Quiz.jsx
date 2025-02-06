import React, { useState } from "react";
import { data } from "./data";

export default function Quiz() {
  let [index, setIndex] = useState(0);
  let [option, setOption] = useState('');
  let [finish, setFinish] = useState(false);
  let [score, setScore] = useState(0);

  const correctOption = [
    'option1',
    'option1',
    'option1',
    'option1',
    'option1',
    'option1',
    'option1',
    'option1',
    'option1',
    'option1'
  ];
 
  const handleSelect = (optn) => {
    setOption(optn);
  }
  
  const handleNext = ()=> {
    if (index < data.length - 1) {
      if (correctOption[index] === option) {
        setScore(score + 1);
      }
      setIndex(++index);
      setOption('');
    } else {
      setFinish(true);
      alert("Test has been completed successfully.");
    }
  };

  if (finish) {
    return (
      <div className="scorePage">
        <h1>Quiz Finished</h1>
        <h3>Your Score: {score} of {data.length}</h3>
      </div>
    );
  }

  const handlePrev = ()=> {
    if (index > 0) {
      setIndex(--index);
    } else {
      alert("FIRST question");
    }
  };

  return (
    <>
      <div className="quiz">
        <h1>Quiz APP</h1>
        <h3>{data[index].Question}</h3>
        <ul>
          <li className= {option === 'option1' ? 'selected' : ''} onClick={()=> {handleSelect('option1')}}>
            {data[index].Option1}
          </li>
          <li className= {option === 'option2' ? 'selected' : ''} onClick={()=> {handleSelect('option2')}}>
            {data[index].Option2}
          </li>
          <li className= {option === 'option3' ? 'selected' : ''} onClick={()=> {handleSelect('option3')}}>
            {data[index].Option3}
          </li>
          <li className= {option === 'option4' ? 'selected' : ''} onClick={()=> {handleSelect('option4')}}>
            {data[index].Option4}
          </li>
        </ul>
        <div>
          <button onClick={handlePrev}>PREV</button>
          &nbsp;&nbsp;
          <button onClick={handleNext} disabled = {!option}>NEXT</button>
          <h5>Question {index+1} of {data.length}</h5>
        </div>
      </div>
    </>
  );
}
