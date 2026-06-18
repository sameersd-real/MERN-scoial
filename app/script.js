function createTagInput(inputId, tagsId) {
    const input = document.getElementById(inputId);
    const tagsDiv = document.getElementById(tagsId);

    if (!input || !tagsDiv) return;

    let items = [];

    input.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            e.preventDefault();

            const value = input.value.trim();

            if (value !== "" && !items.includes(value)) {
                items.push(value);
                input.value = "";
                renderTags();
            }
        }
    });

    function renderTags() {
        tagsDiv.innerHTML = "";

        items.forEach((item, index) => {
            const tag = document.createElement("span");

            tag.className = "badge bg-primary me-2 mb-2";
            tag.style.fontSize = "14px";
            tag.textContent = item;

            const removeBtn = document.createElement("button");

            removeBtn.type = "button";
            removeBtn.innerHTML = " ×";
            removeBtn.style.border = "none";
            removeBtn.style.background = "transparent";
            removeBtn.style.color = "white";
            removeBtn.style.cursor = "pointer";

            removeBtn.addEventListener("click", function() {
                items.splice(index, 1);
                renderTags();
            });

            tag.appendChild(removeBtn);
            tagsDiv.appendChild(tag);
        });
    }
}

createTagInput("skillsInput", "skillsTags");
createTagInput("interestsInput", "interestsTags");
createTagInput("careerGoalsInput", "careerGoalsTags");
createTagInput("currentGoalsInput", "currentGoalsTags");


function formSubmit() {
    const password = document.querySelector('[name="password"]').value;
    const confirmPassword = document.querySelector('[name="confirmPassword"]').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    console.log("Form submitted");
}