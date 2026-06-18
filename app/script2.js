console.log("login.js loaded");

{ // Signup form
function createTagInput(inputId, tagsId, hiddenId) {
    const input = document.getElementById(inputId);
    const tagsDiv = document.getElementById(tagsId);
    const hiddenInput = document.getElementById(hiddenId);

    if (!input || !tagsDiv) return;

    let items = [];

    input.addEventListener("keydown", function (e) {
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

        if (hiddenInput) {
            hiddenInput.value = JSON.stringify(items);
        }

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

            removeBtn.addEventListener("click", function () {
                items.splice(index, 1);
                renderTags();
            });

            tag.appendChild(removeBtn);
            tagsDiv.appendChild(tag);
        });
    }

    return () => [...items];
}

// Initialize all tag inputs
const getSkills = createTagInput("skillsInput", "skillsTags", "skillsHidden");
const getInterests = createTagInput("interestsInput", "interestsTags", "interestsHidden");
const getCareerGoals = createTagInput("careerGoalsInput", "careerGoalsTags", "careerGoalsHidden");
const getCurrentGoals = createTagInput("currentGoalsInput", "currentGoalsTags", "currentGoalsHidden");

// Form validation
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
    e.preventDefault();

    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    const data = {
        name: form.name.value,
        regdNo: form.regdNo.value,
        username: form.username.value,
        email: form.email.value,
        password: password,

        bio: form.bio.value,
        college: form.college.value,
        branch: form.branch.value,
        year: form.year.value,

        interests: getInterests(),
        careerGoals: getCareerGoals(),
        skills: getSkills(),
        currentGoals: getCurrentGoals(),

        longTermGoal: document.querySelector(
            'input[placeholder="Add long-term goal"]'
        ).value,

        profilePhoto: form.profilePhoto.files.length > 0
            ? form.profilePhoto.files[0].name
            : null
    };

    console.log(data);
    console.log(JSON.stringify(data, null, 2));
});
});

/* fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
.then(res => res.json())
.then(result => console.log(result))
.catch(err => console.error(err)); */
}


{ //login form
    document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);
        
    const loginData = {
        regdNo: formData.get("regdNo"),
        username: formData.get("username"),
        password: formData.get("password")
    };

    console.log(loginData);
    console.log(JSON.stringify(loginData, null, 2));

    // Future backend call:
    /*
    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    });
    */
});
}