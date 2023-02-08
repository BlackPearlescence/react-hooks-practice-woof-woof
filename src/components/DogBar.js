import Dog from "./Dog.js"

function DogBar({dogList,selectedDog, setSelectedDog, isFiltering, setIsFiltering}){

    return(
        <div id="dog-bar">
            {isFiltering ? dogList.filter(dog => dog.isGoodDog !== false).map(dog => 
            <Dog
            key={dog.id}
            dog={dog}
            selectedDog={selectedDog}
            setSelectedDog={setSelectedDog}/>) 
            :
            dogList.map(dog => 
                <Dog
                key={dog.id}
                dog={dog}
                selectedDog={selectedDog}
                setSelectedDog={setSelectedDog}/>)}
        </div>
    );
}

export default DogBar;