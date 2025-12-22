const list = document.getElementById("studentList");
const message = document.getElementById("message");
const input = document.getElementById("nameInput");

// 1️⃣ LOAD STUDENTS (GET)
async function loadStudents() {
  message.textContent = "Loading...";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Failed to fetch students");
    }

    const students = await response.json();

    list.innerHTML = "";

    students.forEach(student => {
      const li = document.createElement("li");
      li.textContent = student.name;
      list.appendChild(li);
    });

    message.textContent = "";
  } catch (error) {
    message.textContent = error.message;
  }
}

// 2️⃣ ADD STUDENT (POST)
async function addStudent() {
  const name = input.value;

  if (name === "") {
    alert("Enter name");
    return;
  }

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name })
    });

    const newStudent = await response.json();

    const li = document.createElement("li");
    li.textContent = newStudent.name;
    list.appendChild(li);

    input.value = "";
  } catch (error) {
    alert("Error adding student");
  }
}
