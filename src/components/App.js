import React, { useEffect, useState } from "react";
import DogName from "./DogName"
import DogDetails from "./DogDetail";

function App() {
  const [dogs, setDogs] = useState([])
  const [goodDogFilterOn, setGoodDogFilterOn] = useState(false)
  const [selectedDog, setSelectedDog] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then(r => r.json())
      .then(setDogs)
  }, [])

  const dogsToDisplay = goodDogFilterOn ? dogs.filter(dog => dog.isGoodDog) : dogs
  const dogNames = dogsToDisplay.map(dog => <DogName key={dog.id} dog={dog} setSelectedDog={setSelectedDog}/>)

  function updateDog(updatedDog) {
    setDogs(dogs.map(dog => {
      return dog.id === updatedDog.id ? updatedDog : dog
    }))
  }

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter" onClick={() => setGoodDogFilterOn(!goodDogFilterOn)}>
          {goodDogFilterOn ? "Filter good dogs: ON" : "Filter good dogs: OFF"}
        </button>
      </div>
      <div id="dog-bar">
        {dogNames}
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <DogDetails selectedDog={selectedDog} updateDog={updateDog}/>
        </div>
      </div>
    </div>
  );
}

export default App;
