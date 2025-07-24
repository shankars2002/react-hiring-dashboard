import React, { useState } from "react";
import "./App.css";

function App() {
  const [candidates, setCandidates] = useState([]);
  const [shortlist, setShortlist] = useState([]);

  const handleFile = (e) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = JSON.parse(e.target.result);
      const cleaned = data.map((item) => ({
        name: item.name,
        email: item.email,
        experience: item.work_experiences?.length || 0,
        skills: item.skills || [],
        location: item.location,
        education: item.education?.highest_level || "",
        gpa: item.education?.degrees?.[0]?.gpa || "",
        isTopSchool: item.education?.degrees?.some((d) => d.isTop50) || false,
        expectedSalary: item.annual_salary_expectation?.["full-time"] || "",
      }));
      setCandidates(cleaned);
    };
    reader.readAsText(e.target.files[0]);
  };

  const calculateScore = (c) => {
    let score = 0;
    if (c.experience >= 5) score += 5;
    if (c.skills.includes("React")) score += 3;
    if (c.isTopSchool) score += 2;
    if (parseInt(c.expectedSalary.replace(/\$/g, "")) < 100000) score += 2;
    return score;
  };

  const handleSelect = (candidate) => {
    if (shortlist.length < 5 && !shortlist.includes(candidate)) {
      setShortlist([...shortlist, candidate]);
    }
  };

  return (
    <div className="container">
      <h1>🚀 100B Jobs - Hiring Dashboard</h1>

      <input type="file" accept="application/json" onChange={handleFile} />

      {candidates.length > 0 && (
        <>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Experience</th>
                <th>Skills</th>
                <th>Education</th>
                <th>Top School</th>
                <th>Salary</th>
                <th>Score</th>
                <th>Select</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((c, i) => (
                <tr key={i}>
                  <td>{c.name}</td>
                  <td>{c.experience}</td>
                  <td>{c.skills.join(", ")}</td>
                  <td>{c.education}</td>
                  <td>{c.isTopSchool ? "✅" : "❌"}</td>
                  <td>{c.expectedSalary}</td>
                  <td>{calculateScore(c)}</td>
                  <td>
                    <button onClick={() => handleSelect(c)}>Add</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>✅ Shortlisted Candidates (Max 5)</h2>
          {shortlist.map((c, i) => (
            <div key={i} className="card">
              <p><strong>{c.name}</strong> ({c.location})</p>
              <p>Experience: {c.experience} | Score: {calculateScore(c)}</p>
              <p>Skills: {c.skills.join(", ")}</p>
              <textarea
                placeholder="Why did you choose this candidate?"
                rows={2}
                className="textarea"
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
