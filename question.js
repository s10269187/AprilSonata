let answers = ["", "", ""]; // Store answers for 3 questions
console.log(answers)

function selectAnswer(choice, questionNumber) {
  answers[questionNumber - 1] = choice; // Update answer for the respective question
  if (answers.every(answer => answer !== "")) { // Check if all answers are filled
    determineInstrument(answers.join(''));
  }
}

function determineInstrument(choice) {
  const instrumentMap = {
    "AAA": "Keyboard", "ACD": "Keyboard", "AAB": "Violin", "ACC": "Electric Guitar", "AAD": "Grand Piano",
    "ABA": "Bass Guitar", "ABB": "Bass Guitar", "ABC": "High-end Bass Guitar", "ABD": "High-end Bass Guitar",
    "ACD": "Harp", "ADA": "Cajon", "ADB": "Bongos", "ADC": "Drum Set/Electronic Drum Kit", "ADD": "Drum Set/Electronic Drum Kit",
    "BAA": "Glockenspiel", "BAB": "Timpani", "BAC": "Vibraphone", "BAD": "Marimba", "BBA": "Djembe", "BBB": "Bass Drum",
    "BBC": "Drum Kit", "BDD": "Drum Kit", "CAA": "Recorder", "CAB": "Bass Flute", "CAC": "Pan Flute", "CAD": "Didgeridoo",
    "CBA": "Tin Whistle", "CBB": "Low Whistle", "CBC": "Native American Flute", "CBD": "High-end Ocarina",
    "DAA": "Beginner Saxophone", "DAB": "Beginner Trumpet", "DAC": "High-end Clarinet", "DAD": "Handmade Saxophone",
    "DBA": "Trombone", "DBB": "Tuba", "DBC": "Euphonium", "DBD": "Bass Trombone", "DCA": "Tenor Saxophone",
    "DCB": "Baritone Saxophone", "DCC": "Custom Jazz Saxophone", "DCD": "Customized Saxophone",
    "DDA": "Harmonica", "DDB": "Bagpipes", "DDC": "High-end Harmonica", "DDD": "Professional Bagpipes"
  };
  document.getElementById("result").innerText = instrumentMap[choice] || "Unknown Instrument";
}