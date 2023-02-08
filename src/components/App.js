import React, {useState, useEffect} from "react";
import DogDisplay from "./DogDisplay.js";
import DogHeader from "./DogHeader.js";

function App() {
  const [dogList, setDogList] = useState([])
  const [selectedDog,setSelectedDog] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then((res) => res.json())
      .then((dogData) => {
        setDogList(dogData)
        console.log(dogData)})
  },[])
  return (
    <div className="App">
      <DogHeader dogList={dogList} setDogList={setDogList} selectedDog={selectedDog} setSelectedDog={setSelectedDog}/>
      <DogDisplay dogList={dogList} setDogList={setDogList} selectedDog={selectedDog} setSelectedDog={setSelectedDog}/>
    </div>
  );
}

export default App;
