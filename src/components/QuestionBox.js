import React, { useState , useEffect , useRef} from "react";
import "../assets/style.css";

const QuestionBox = ({ questions, options, selected, correct }) => {
  const [answers, setAnswers] = useState(options);
  const [result, setResult] = useState(false);
  const [toggle, setToggle] = useState(false);
  const[timer , setTimer] =useState('00:00:00');
  const intervalRef = useRef(null);

  function getTimeRemaining(endtime){
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total/1000) %60);
    const minutes = Math.floor((total/1000/60) %60);
    const hours = Math.floor((total/1000*60*60) %24);
    return{
      total , seconds , minutes , hours
    };
  }
  function startTimer(deadline){
    let {total , days , hours , minutes , seconds } = getTimeRemaining(deadline);
    if(total>=0){
      setTimer (
      (hours > 9 ? hours : '0'+hours) +':'+
      (minutes > 9 ? minutes : '0'+minutes) +':'+
      (seconds > 9 ? seconds : '0'+seconds) 
      )
    }
    else{
      clearInterval(intervalRef.current);
    }
  }

  function clearTimer(endtime){
    setTimer('00:00:20');
    if(intervalRef.current) clearInterval(intervalRef.current);
    const id = setInterval(() => {
      startTimer(endtime);
    },1000)
    intervalRef.current = id;
  }
  
  function getDeadlineTime() {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds()+10);
    return deadline
  }

  useEffect(()=>{
    clearTimer(getDeadlineTime());
    return () => {if(intervalRef.current) clearInterval(intervalRef.current)}
  },[]);


  return (
    <>
      <h1 style={{marginLeft:"80%"}}>{timer}</h1>
 
    <div className="questionBox">

      <div className="question">{questions}</div>
      
      {answers.map((answer, index) => (
        <span>
          <button
            key={index}
            className="answerBtn"
            onClick={() => {
              setToggle(true);
              if (answer == correct) {
                setResult(true);
              } else {
                setResult(false);
              }
              setAnswers([answer]);

              selected(answer);
            }}
          >
            {answer}
          </button>
          <span>
            {toggle ? (
              result ? (
                <div
                  style={{
                    backgroundColor: "green",
                    color: "wheat",
                    padding: "10px",
                    borderRadius: "10px",
                    width: "30%",
                    textAlign: "center",
                  }}
                >
                  Correct Answer
                </div>
              ) : (
                <div>
                  <div
                    style={{
                      backgroundColor: "red",
                      color: "wheat",
                      padding: "10px",
                      borderRadius: "10px",
                      width: "30%",
                      textAlign: "center",
                    }}
                  >
                    Wrong Answer
                  </div>

                  <br />
                  <div
                    style={{
                      backgroundColor: "cyan",
                      color: "",
                      padding: "10px",
                      borderRadius: "10px",
                      width: "30%",
                      textAlign: "center",
                    }}
                  >
                    Correct Answer is {correct}
                  </div>
                </div>
              )
            ) : (
              ""
            )}
          </span>
        </span>
      ))}
    </div>
    </>
  );
};

export default QuestionBox;
