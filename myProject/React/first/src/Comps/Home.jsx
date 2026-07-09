

function home() {
var name = "om mali";
var number = 1234567890;
var arr = ["om", "ritesh", "soham"];

var fun = ()=>{
  var a = 10;
  return a*a;
}



  return (
    <div className="home">
      <h1>Welcome to the Home Page my name is {name}</h1>
      <p>My phone number is {number}</p>
      <p>My friends are: {arr.join(", ")}</p>
      <p>The result of the function is {fun()}</p>
      <p>This is the main content of the home page.</p>
    </div>
  )
};

export default home;    