// Save function
document.querySelectorAll(".save").forEach(function(button) {
  button.addEventListener("click", function() {
    let row = this.closest("tr");
    let inputBoxes = row.querySelectorAll("input[type='text'], .name, .age, .score, .grade");
    let isReadOnly = inputBoxes[0]?.readOnly || false;
// Flip the read-only of all input boxes
    inputBoxes.forEach(function(input) {
        input.readOnly = !isReadOnly;
    });

// Get the radio button (in Gender)  
    let genderCell = row.querySelector(".gender-cell");
// Save Mode 
    if (!isReadOnly) {
        let selected = genderCell.querySelector("input[type='radio']:checked");
        let genderValue = selected ? selected.nextSibling.textContent.trim() : "Not selected";

        genderCell.querySelectorAll("label").forEach(function(label) {
            label.style.display = "none";
        });

        let span = document.createElement("span");
        span.className = "gender-text";
        span.textContent = genderValue;
        genderCell.appendChild(span);
    } else {
        genderCell.querySelectorAll("label").forEach(function(label) {
            label.style.display = "inline";
        });

        let existing = genderCell.querySelector(".gender-text");
        if (existing) {
           existing.remove();
       }
    }

        this.textContent = isReadOnly ? "Save" : "Edit";
    });
});

//=====================================================================
// Delete function
document.querySelectorAll(".delete").forEach(function(button){
    button.addEventListener("click", function(){
       let getRow = this.closest("tr");
       getRow.remove();
    });
});

//=====================================================================
// Limit Score function
document.querySelectorAll(".score").forEach(function(input){
    input.addEventListener("keydown", function(e){
    
        let blockKey =  ["-", "+", "*", "/", "e", "="];
        if (blockKey.includes(e.key)){
            e.preventDefault();
        }
    });

    input.addEventListener("input", function(){
        this.value = this.value.replace(/\D/g, "");
         
        if (this.value.length > 3){
            this.value = this.value.slice(0, 3);
        }

    let getScore = Number(this.value);

    if(getScore < 0 || getScore > 100){
        this.value = "";
        }

// Display grade
    
    let row = this.closest(".row");
    let gradeBox = row.querySelector(".grade");

    let gradeText = "";  // we'll store the grade here
     

        if (getScore > 100){
            gradeText = "";
        }else if(getScore >= 90){
            gradeText = "A";
        }else if(getScore >= 80){
            gradeText = "B";
        }else if(getScore >= 70){
            gradeText = "C";
        }else if(getScore >= 60){
            gradeText = "D";
        }else if(getScore >= 50){
            gradeText = "E";
        }else{
            gradeText = "Fail !";
        }

    gradeBox.textContent = gradeText;

    });
});

