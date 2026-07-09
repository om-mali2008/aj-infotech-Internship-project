import React from "react";
import "./About.css";
function About(){
var data = [
  {
    name: "Om Mali",
    position: "Software Engineer",
    email: "ommlai(2008)@gmail.com",
    imgUrl: "https://img.magnific.com/free-photo/businessman-with-glasses-arms-folded_1098-44.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    name: "Soham Nandedkar",
    position: "Product Manager",
    email: "Nandedkar@gmail.com",   
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRqPgojOGxmZvVGOW6HZ2kNe_4KBZZ3g2gEchU7KaQmXbK6CGZrZ6VN3Zc&s=10"
    },
    {
    name: "Bhavesh Patil",
    position: "UX Designer",
    email: "GyaniBaBa@Gmail.com",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzMor-s6JtEgQbVBGFrQ-pkmwHzpmQUp-LbsBUrigaT1cGLnOGiwc3Hi0P&s=10"
    },

    {
      name:"Om Patil",
      position :"Data Engineer",
      email:"ompatil@gmail.com",
      imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfJZyEgUxrYczB4f4j51gzNNJe1P5IXvcMUBmdAonOQw&s=10"
    }
    
];


return(
  <>
  <div className="page">
    <div className="heading">
        <h1>Employee Information</h1>
        <h6>this page is show data using map() function</h6>
        
    </div>
      <br />    
       <div className="cont">  
       {
       
       data.map((employee, index) => (
        <div className="emp" key={index}>

            <div className="EmpDetailIMG">
                <img
                    src={employee.imgUrl}
                    alt={employee.name}
                    className="img"
                />
            </div>

            <div className="EmpDetail">
                <h4>Employee Name: {employee.name}</h4>
                <span>Position: {employee.position}</span>
                <span>Email: {employee.email}</span>
            </div>

        </div>
    ))



       }

     </div>
  </div>
  </>
)

};

export default About;