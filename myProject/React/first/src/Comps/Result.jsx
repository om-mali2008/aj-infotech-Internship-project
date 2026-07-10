import { useLocation } from "react-router-dom";
import "./Result.css"

function Result() {
  const location = useLocation();

  const doctors = location.state || [];

  return (
    <div className="page">
       <div className="header">                   
              <h1>List OF Doctor</h1>            
            </div>
            

   <div className="cont">
      {doctors.map((DR) => (
        <div key={DR.id} className="box">
          <img src={DR.img} alt={DR.name}  className="img"/>
                     <br />
                     <h3>{DR.name}</h3>
                     <br />
                     <span>specialization : {DR.specialization}</span>
                     <br />
                     <span>experience : {DR.experience}</span>
                     
        </div>
      ))}

      </div>
    </div>
  );
}

export default Result;