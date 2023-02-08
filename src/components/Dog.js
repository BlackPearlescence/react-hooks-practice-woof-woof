import {useState} from "react";

function Dog({dog,  selectedDog, setSelectedDog}){
    // const [isGood, setIsGood] = useState(selectedDog.isGoodDog);

    const handleDogSpanClick = (e) => {
        setSelectedDog(dog);
    }

    return(
        <span onClick={handleDogSpanClick}>
            {dog.name}
        </span>
    );
}

export default Dog;