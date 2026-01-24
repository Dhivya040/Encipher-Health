import React from "react";

function StudentList() {
  const students = [
    { id: 1, name: "Akash" },
    { id: 2, name: "Mina" },
    { id: 3, name: "Ravi" },
  ];

  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>{student.name}</li>
      ))}
    </ul>
  );
}

export default StudentList;
