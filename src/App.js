import logo from './logo.svg';
import './App.css';

function App() {
  const firstName = 'Jawad';
  const lastName = 'Haider';
  const age = 22;
  const job = 'Web Programmer';

  const mArr = [1,2,3,4,5];

  const mObj = {
    name: 'jawad',
    age: 21
  }

  const inputPlaceholder = 'Enter Your Details'

  const getFullName = (firstName,lastName) => `${firstName} ${lastName}`

  const detailsInputBox = <input placeholder={inputPlaceholder} autoComplete />;

  return (
    <div className="App">
      <h3>Full Name: {getFullName(firstName,lastName)}</h3>
      <p>Age: {mObj.age}</p>
      <p>Job: {job}</p>

      {mArr[2]}

      {
        mArr[2] > 0 ? "Ture" : "False"
      }
      
      {detailsInputBox}
    </div>
  );
}

export default App;
