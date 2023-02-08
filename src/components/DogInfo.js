import { useState } from "react";

function DogInfo({selectedDog, setSelectedDog, dogList, setDogList}){

    // const [isGood, setIsGood] = useState(selectedDog.isGoodDog);
    const handleGoodDogClick = (e) => {
        fetch(`http://localhost:3001/pups/${selectedDog.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({isGoodDog : !dogList.find(dog => dog === selectedDog).isGoodDog}),
        })
            .then((res) => console.log("Update Success: ", res))
            .then((err) => console.log("Failure: ", err))
        setDogList(dogList.map(dog => {
            if(dog.name === selectedDog.name){
                dog.isGoodDog = !dog.isGoodDog
                return dog
            }
            else{
                return dog
            }
        }))
    }
    return(
        <div id="dog-info">
            <img src={selectedDog.image} alt={selectedDog.name}/>
            <h2>{selectedDog.name}</h2>
            <button onClick={handleGoodDogClick}>
                {dogList.find(dog => dog.name===selectedDog.name).isGoodDog ? "Good Dog!" : "Bad Dog!"}
            </button>
        </div>
    );
}


export default DogInfo;