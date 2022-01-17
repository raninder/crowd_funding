
import './App.css';
import Register from './components/Register'
function App() {
  function save(email, password,firstName,lastName,phone,stAddress,city,state,postalCode){
    const user = {
      email, password,firstName,lastName,phone,stAddress,city,state,postalCode
    }
    
  }
  return (
    <div className="App">
     <h1>Hello</h1>
     <Register onSave={save}/>
    </div>
  );
}

export default App;
