function DogFilter({isFiltering, setIsFiltering, dogList, setDogList}){
    
    const handleFilterClick = (e) => {
        setIsFiltering(!isFiltering);
      
    }
    return(
        <div id="filter-div">
            <button id="good-dog-filter" onClick={handleFilterClick}>
                {isFiltering ?"Filter good dogs: ON" : "Filter good dogs: OFF"}
            </button>
        </div>
    );
}

export default DogFilter;