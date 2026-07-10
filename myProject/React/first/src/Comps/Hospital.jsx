import "./Hospital.css"
import { useNavigate } from "react-router-dom";
function Hospital (){
const navigate = useNavigate();
var doctors = [
  {
    id: 1,
    name: "Dr. Aarav Sharma",
    specialization: "Cardiologist",
    experience: "12 Years Experience",
    about:
      "Expert in diagnosing and treating heart diseases with modern cardiac care.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMAeb5cWGW6rUyyq23c3otGkGHjvyJ2DLpSgOnP9tskA&s=10",
  },
  {
    id: 2,
    name: "Dr. Priya Mehta",
    specialization: "Dermatologist",
    experience: "8 Years Experience",
    about:
      "Specializes in skin, hair, and nail disorders using advanced treatments.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGJ1LXvXPxlWQ5hlO9zZ4rAWUiMO12uvlmXye5TeN3Og&s=10",
  },
  {
    id: 3,
    name: "Dr. Rahul Verma",
    specialization: "Neurologist",
    experience: "15 Years Experience",
    about:
      "Treats disorders of the brain, spine, and nervous system with precision.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnrK9jlnLTawCEbao3V5b0UbDxWIIG5qZ67SxLQHtzQ&s=10",
  },
  {
    id: 4,
    name: "Dr. Sneha Kulkarni",
    specialization: "Pediatrician",
    experience: "10 Years Experience",
    about:
      "Provides complete healthcare for infants, children, and teenagers.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-o01b3jJLmPvbnTT7bnNmTTCayCkCnQVkVZXhqj4tyRDdl9G4qvSQDlH-&s=10",
  },
  {
    id: 5,
    name: "Dr. Vikram Singh",
    specialization: "Orthopedic Surgeon",
    experience: "14 Years Experience",
    about:
      "Experienced in bone, joint, and sports injury treatments and surgeries.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUwhtEF6vsDDbpgh07yN4a5QwDsgDL8w0XKSL3JU4ysQ&s=10",
  },
  {
    id: 6,
    name: "Dr. Neha Kapoor",
    specialization: "Gynecologist",
    experience: "11 Years Experience",
    about:
      "Offers comprehensive women's healthcare and maternity services.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCUeGokRznaW87sSiBr43saOAUnKhgES4LYRhYELML1g&s=10",
  },
  {
    id: 7,
    name: "Dr. Aditya Joshi",
    specialization: "ENT Specialist",
    experience: "9 Years Experience",
    about:
      "Treats ear, nose, and throat conditions with modern medical techniques.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmbZA1CxMtXRRO7Zi2oeUt-C_LyYVgD3YQTRNUz_ZIeg&s",
  },
  {
    id: 8,
    name: "Dr. Riya Deshmukh",
    specialization: "Ophthalmologist",
    experience: "13 Years Experience",
    about:
      "Expert in eye care, vision correction, and cataract surgeries.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF8MtvIognhqYh0KVao4wsR9-odS5oud-Pd3eN1s7XSA&s=10",
  },
  {
    id: 9,
    name: "Dr. Karan Patel",
    specialization: "Psychiatrist",
    experience: "7 Years Experience",
    about:
      "Provides compassionate care for mental health and emotional well-being.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8SYfYyikF5jo6bvbHGRC0f1Dhq59jhTP0BahyqUWH7A&s=10",
  },
  {
    id: 10,
    name: "Dr. Ananya Rao",
    specialization: "General Physician",
    experience: "16 Years Experience",
    about:
      "Offers diagnosis and treatment for common illnesses with personalized care.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQN3zr3gWM1u3ss3Ekfv-L_aj_dlNNjP_2VFpIF07J7g&s=10",
  },
];




function Search(){
  var ScArray = [];
 var search = document.getElementById("sc").value;
  

   for (let i = 0; i < doctors.length; i++) {
  if (doctors[i].name.toLowerCase().includes(search.toLowerCase())) {
    ScArray.push(doctors[i]);
  }
}
    navigate("/result", {
        state: ScArray
    });
}

return(
    <div className="page">
        <div className="header">
                   
              <h1>List OF Doctor</h1>
            <div className="searchBar">
                <input type="text" className="search" placeholder="Search With Name" id="sc"/>
               <button className="btn" onClick={() => Search()}>
                    Search
               </button>
            </div>
            </div>
            <div className="cont">
          {
             doctors.map((DR) => {
                return (
                   <div className="box">
                     <img src={DR.img} alt={DR.name}  className="img"/>
                     <br />
                     <h3>{DR.name}</h3>
                     <br />
                     <span>specialization : {DR.specialization}</span>
                     <br />
                     <span>experience : {DR.experience}</span>
                     

                   </div>
                       );
              })
          }       
          </div>



        </div>
  
)
};
export default Hospital