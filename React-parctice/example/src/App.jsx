import { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 1️⃣ FETCH STUDENTS (GET)
  useEffect(() => {
    async function fetchStudents() {
      try {
        const response = await fetch("/api/students");

        if (!response.ok) {
          throw new Error("Failed to load students");
        }

        const data = await response.json();
        setStudents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchStudents();
  }, []);

  // 2️⃣ ADD STUDENT (POST)
  async function addStudent() {
    try {
      const response = await fetch("/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name })
      });

      const newStudent = await response.json();
      setStudents([...students, newStudent]);
      setName("");
    } catch (err) {
      alert("Failed to add student");
    }
  }

  // 3️⃣ UI
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Student List</h2>

      <ul>
        {students.map(s => (
          <li key={s.id}>{s.name}</li>
        ))}
      </ul>

      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Student name"
      />

      <button onClick={addStudent}>Add Student</button>
    </div>
  );
}

export default App;
