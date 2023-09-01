import logo from './logo.svg';
import './App.css';
//JS INSIDE JSX

function App() {
  const firstname = 'Hizbullah'
  const lastname = 'Hayat'

  let date = new Date()
  let hours = date.getHours()
  let timeOfDay
    
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 13) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }
  return (
    <div>
      <h1>{firstname} {lastname}</h1>
      <h1>{timeOfDay}</h1>
    </div>
  );
}

export default App;


