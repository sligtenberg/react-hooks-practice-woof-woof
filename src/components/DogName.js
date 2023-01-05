import React from "react";

function DogName({ dog, setSelectedDog }) {
    function handleDogNameClick() {
        setSelectedDog(dog)
    }
    return (
        <span onClick={handleDogNameClick}>
            {dog.name}
        </span>
    )
}

export default DogName