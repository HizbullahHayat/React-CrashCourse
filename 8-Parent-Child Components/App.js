import logo from './logo.svg';
import './App.css';
//Parent Child Component
import Component1 from './Components/Component1';
import Component2 from './Components/Comonent2';
import Component3 from './Components/Component3';


function App() {
  return (
    <div className='App'>
      <h1>This is my Parent Component, below are child components</h1>
      <Component1 />
      <Component3 />
      <Component2 />
    </div>
  );
}

export default App;


