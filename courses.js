function openOverlay(grade) {
    const overlayTitle = document.getElementById("overlayinstru-title");

    const overlayContent = document.getElementById("overlayinstru-content-text");
    

    const content = {
        "Grade 1": "Welcome to Grade 1! You will start with basic notes, rhythm, and simple songs.",
        "Grade 2": "In Grade 2, you'll learn more complex rhythms and techniques to improve your playing.",
        "Grade 3": "Grade 3 focuses on advanced music theory and more challenging pieces.",
        "Grade 4": "Master your skills in a 4 with intricate compositions and performance techniques."
    };


    overlayTitle.innerText = grade;
    if (overlayContent) {
        overlayContent.innerText = content[grade];
    }

    document.getElementById("overlayinstru").style.display = "flex";
}

function closeOverlay() {
    document.getElementById("overlayinstru").style.display = "none";
}

