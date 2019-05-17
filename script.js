window.addEventListener("DOMContentLoaded", function () {
    var memeForm = document.getElementById("meme-form");
    var memeGallery = document.getElementById("meme-gallery");

    memeForm.addEventListener("submit", function (event) {
        event.preventDefault();

        //create elements and assign attributes
        var newMemeDiv = document.createElement("div");
        newMemeDiv.classList.add("meme-div");
        
        var image = document.getElementById("image-url").value;
        var topText = document.getElementById("top-text").value;
        var bottomText = document.getElementById("bottom-text").value;

        var imageElement = document.createElement("img");
        imageElement.setAttribute("src", image);
        imageElement.classList.add("meme-image");

        var topTextElement = document.createElement("p");
        topTextElement.innerText = topText;
        topTextElement.classList.add("meme-text");
        topTextElement.classList.add("top-text-display");

        var bottomTextElement = document.createElement("p");
        bottomTextElement.innerText = bottomText;
        bottomTextElement.classList.add("meme-text"); 
        bottomTextElement.classList.add("bottom-text-display");
        
        var removeButton = document.createElement("a");
        removeButton.innerText = "x";
        removeButton.classList.add("remove-button");

        //append elements to new div
        newMemeDiv.appendChild(imageElement);
        newMemeDiv.appendChild(topTextElement);
        newMemeDiv.appendChild(bottomTextElement);
        newMemeDiv.appendChild(removeButton);

        //add new div to gallery
        memeGallery.appendChild(newMemeDiv);

        //reset form
        memeForm.reset();
    });

    //enable user to remove meme by clicking on it
    function removeMeme(event) {
        event.target.parentNode.remove()
    }

    memeGallery.addEventListener("click", removeMeme, false);

});