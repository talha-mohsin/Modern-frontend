import { useState } from "react";

function App() {
  const [habit, setHabit] = useState();
  const [time, setTime] = useState();
  const [habitsData, setHabitsData] = useState([]);

  function habitHandler() {
    console.log(`habit ==>>>`, habit);
    console.log(`time ==>>>`, time);

    if (habit == undefined || time == undefined) {
      return alert(`All fields must be filled!`);
    }
    setHabitsData([...habitsData, { habit, time }]);
  }

  // habitEditHandler
  function habitEditHandler(i) {
    const newHabitsData = [...habitsData];
    const habit = prompt("Enter your correct habit");
    const time = prompt("Enter your correct time");

    newHabitsData.splice(i, 1, { habit, time });
    setHabitsData(newHabitsData);
  }

  // habitDeleteHandler
  function habitDeleteHandler(i) {
    const newHabitsData = [...habitsData];
    newHabitsData.splice(i, 1);
    setHabitsData(newHabitsData);
  }

  return (
    <div>
      <div>
        <h1>Track your habits</h1>
        <input
          onChange={(e) => setHabit(e.target.value)}
          type="text"
          placeholder="Enter your habits"
          required
        />
        <select
          onChange={(e) => setTime(e.target.value)}
          name=""
          id=""
          required
        >
          <option value="">Timing</option>
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Evening">Evening</option>
        </select>
        <button onClick={habitHandler}>Add</button>
      </div>
      <ul>
        {habitsData.map((data, i) => {
          return (
            <li key={i}>
              {data.habit} - {data.time}
              <button onClick={() => habitEditHandler(i)}>Edit</button>
              <button onClick={() => habitDeleteHandler(i)}>Remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
