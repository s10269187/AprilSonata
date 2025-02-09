function openOverlay(grade) {
    const overlayTitle = document.getElementById("overlayinstru-title");
    // Assuming you add an id="overlayinstru-content-text" to your paragraph
    const overlayContent = document.getElementById("overlayinstru-content-text");
    
    // Define different text for each grade
    const content = {
        "Grade 1": "Welcome to Grade 1! You will start with basic notes, rhythm, and simple songs.",
        "Grade 2": "In Grade 2, you'll learn more complex rhythms and techniques to improve your playing.",
        "Grade 3": "Grade 3 focuses on advanced music theory and more challenging pieces.",
        "Grade 4": "Master your skills in a 4 with intricate compositions and performance techniques."
    };

    // Set overlay title and content
    overlayTitle.innerText = grade;
    if (overlayContent) {
        overlayContent.innerText = content[grade];
    }

    // Show the overlay (update to the correct id)
    document.getElementById("overlayinstru").style.display = "flex";
}

// Function to close overlay
function closeOverlay() {
    document.getElementById("overlayinstru").style.display = "none";
}

