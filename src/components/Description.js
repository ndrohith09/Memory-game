import React, { useState , useEffect , useRef} from "react";
import "../assets/style.css";
function Description(props) {
  const [toggle, setToggle] = useState(false);
  const[timer , setTimer] =useState('00:00');
  const intervalRef = useRef(null);

  function getTimeRemaining(endtime){
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total/1000) %60);
    const minutes = Math.floor((total/1000/60) %60);
    const hours = Math.floor((total/1000*60*60) %24);
    return{
      total , seconds , minutes
    };
  }
  function startTimer(deadline){
    let {total , days , hours , minutes , seconds } = getTimeRemaining(deadline);
    if(total>=0){
      setTimer (
      
      (minutes > 9 ? minutes : '0'+minutes) +':'+
      (seconds > 9 ? seconds : '0'+seconds) 
      )
    }
    else{
      clearInterval(intervalRef.current);
    }
  }

  function clearTimer(endtime){
    setTimer('00:05');
    if(intervalRef.current) clearInterval(intervalRef.current);
    const id = setInterval(() => {
      startTimer(endtime);
    },1000)
    intervalRef.current = id;
  }
  
  function getDeadlineTime() {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds()+5);
    return deadline
  }

  useEffect(()=>{
    clearTimer(getDeadlineTime());
    return () => {if(intervalRef.current) clearInterval(intervalRef.current)}
  },[]);


  console.log("props", props);
  return (
    <div>
      <br />
      <h2 style={{ textAlign: "center" }}>Quiz Data</h2>
      <br />
      <h1 style={{marginLeft:"75%"}}>Clock:{timer}</h1>
      <div>
        <div>
          <img
            style={{ marginLeft: "auto", marginRight: "auto", display: "flex" }}
            src={props.description.image}
            width="40%"
            height="40%"
          />
        </div>
      </div>
    </div>
  );
}

export default Description;
