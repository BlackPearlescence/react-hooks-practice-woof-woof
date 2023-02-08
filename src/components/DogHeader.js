import {useState} from "react";
import DogFilter from "./DogFilter.js";
import DogBar from "./DogBar.js";

function DogHeader({dogList,setDogList, selectedDog, setSelectedDog}){
    const [isFiltering, setIsFiltering] = useState(false)
    return(
        <div>
            <DogFilter 
            isFiltering={isFiltering} 
            setIsFiltering={setIsFiltering}
            dogList={dogList}
            setDogList={setDogList}/>
            <DogBar 
            dogList={dogList} 
            setSelectedDog={setSelectedDog}
            isFiltering={isFiltering} 
            setIsFiltering={setIsFiltering}
            selectedDog={selectedDog}/>
        </div>
    );
}

export default DogHeader;