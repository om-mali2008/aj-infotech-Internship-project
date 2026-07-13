import { useState } from "react";
import "./Game.css"
function Game(){
var [index , setindex] = useState(0);
const games = [
  {
    id: 1,
    gameName: "GTA V",
    gameImage: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg",
    storage: "110 GB",
    price: "₹1,899",
    description: "Explore the massive city of Los Santos with endless missions and action. Experience one of the most popular open-world games ever made."
  },
  {
    id: 2,
    gameName: "Red Dead Redemption 2",
    gameImage: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg",
    storage: "150 GB",
    price: "₹3,199",
    description: "Live the life of outlaw Arthur Morgan in the Wild West. Enjoy a rich story with stunning graphics and realistic gameplay."
  },
  {
    id: 3,
    gameName: "Cyberpunk 2077",
    gameImage: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg",
    storage: "70 GB",
    price: "₹2,999",
    description: "Step into the futuristic world of Night City filled with action. Upgrade your character and complete exciting missions."
  },
  {
    id: 4,
    gameName: "Forza Horizon 5",
    gameImage: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg",
    storage: "110 GB",
    price: "₹3,499",
    description: "Race through beautiful landscapes with hundreds of cars. Enjoy realistic driving and thrilling racing events."
  },
  {
    id: 5,
    gameName: "EA SPORTS FC 25",
    gameImage: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2669320/header.jpg",
    storage: "100 GB",
    price: "₹3,999",
    description: "Build your dream football team and compete worldwide. Experience realistic gameplay with updated players and clubs."
  },
  {
    id: 6,
    gameName: "God of War",
    gameImage: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg",
    storage: "70 GB",
    price: "₹3,299",
    description: "Join Kratos and Atreus on an unforgettable Norse adventure. Fight powerful enemies using legendary weapons and abilities."
  },
  {
    id: 7,
    gameName: "Marvel's Spider-Man Remastered",
    gameImage: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1817070/header.jpg",
    storage: "75 GB",
    price: "₹3,299",
    description: "Swing across New York City as Spider-Man and defeat villains. Experience smooth combat and an emotional superhero story."
  },
  {
    id: 8,
    gameName: "Resident Evil 4",
    gameImage: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg",
    storage: "67 GB",
    price: "₹2,999",
    description: "Survive terrifying enemies while rescuing the president's daughter. Solve puzzles and enjoy intense survival horror action."
  },
  {
    id: 9,
    gameName: "Hogwarts Legacy",
    gameImage: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/990080/header.jpg",
    storage: "85 GB",
    price: "₹3,499",
    description: "Explore Hogwarts and master powerful magical spells. Create your own wizard and uncover hidden mysteries."
  },
  {
    id: 10,
    gameName: "Black Myth: Wukong",
    gameImage: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg",
    storage: "130 GB",
    price: "₹3,599",
    description: "Battle legendary creatures inspired by Chinese mythology. Experience fast-paced combat with breathtaking visuals."
  }
];
function change () {
    if (games.length == index){
        setindex(index=0);    
    }
    else{
        setindex(index++)
    }
}




    return(
        <div className="page">
            <div className="header">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRouo71BF5yed81vonm5UHYOSiyGKFxkKrH-Yzd4Im58g&s=10" alt="" className="logo" />
                <h3 className="h3">Welcome To Play</h3>                
            </div>
            <div className="box">
                <img src={games[index].gameImage} alt="" className="gameimg"/>
                <div className="databox">
                        <h3 className="gamename">Game : {games[index].gameName}</h3>
                        <span className="storage">Storage : {games[index].storage}</span>
                        <br />
                        <span className="price">Price : {games[index].price}</span>
                        <br />
                        <br />
                        <span className="discription" >description : {games[index].description}</span>
            </div>
            </div>
            <button className="btn" onClick={change}>Next</button>
        </div>
        
    )
}
export default Game ;