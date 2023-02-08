import DogInfo from "./DogInfo.js";

function DogDisplay({selectedDog,setSelectedDog, dogList, setDogList}){
    return(
        <div id="dog-summary-container">
            <h1>DOGGO:</h1>
            {selectedDog ? <DogInfo 
            selectedDog={selectedDog} 
            setSelectedDog={setSelectedDog}
            dogList={dogList}
            setDogList={setDogList}/> : null}
        </div>
    );
}

export default DogDisplay;