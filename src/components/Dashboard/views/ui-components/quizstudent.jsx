import React, {useState} from 'react';

import QuizComponent from './quizComponent';

  const QuizStudent = (props)=>{
      const [c, setc] = useState(0)
      const [finish, setfinish] = useState(false)
    const qid= props.location.pathname;
      const increment = ()=>{
        setc(c+1)
      }
      const decrement = ()=>{
        setc(c-1)
      }
      var elements=[];
      const [cSelected, setCSelected] = useState([]);
      const [marks, setmarks] = useState(0)
      const onCheckboxBtnClick = (selected) => {
          
          const index = cSelected.indexOf(selected);
          if (index < 0) {
          cSelected.push(selected);
          } else {
          cSelected.splice(index, 1);
          }
          setCSelected([...cSelected]);
          console.log(cSelected,"oncheck")
      }
      const incMarks = ()=>{
        setmarks(marks+1)
      }
      return(
    <QuizComponent c={c} setc={setc} increment={increment} decrement={decrement} qid={qid} cSelected={cSelected} finish={finish} setfinish={setfinish} elements={elements} onCheckboxBtnClick={onCheckboxBtnClick} marks={marks} incMarks={incMarks} setmarks={setmarks}></QuizComponent>
      )
  }

  export default QuizStudent