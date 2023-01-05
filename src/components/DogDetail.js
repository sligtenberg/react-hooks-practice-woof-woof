import React from "react";

function DogDetails({ selectedDog, updateDog }) {
    if (!selectedDog) return <h3>Select a doggo</h3>

    function handleGoodDogToggle () {
        selectedDog.isGoodDog = !selectedDog.isGoodDog
        fetch(`http://localhost:3001/pups/${selectedDog.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(selectedDog)
        })
        .then(r => r.json())
        .then(updateDog)
    }

    return (
        <div>
            <img src={selectedDog.image} alt={selectedDog.name}/>
            <h2>{selectedDog.name}</h2>
            <button onClick={handleGoodDogToggle}>{selectedDog.isGoodDog ? "Good" : "Bad"}  Dog!</button>
        </div>
    )
}

export default DogDetails