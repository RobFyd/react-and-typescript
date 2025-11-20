import './App.css'
import { CV } from './CV'

function App() {
  const name = "John Doe";
  const currentRole = "Software Engineer";
  const jobHistory = ["Intern", "Junior Developer", "Software Engineer"];
  return <CV name={name} currentRole={currentRole} jobHistory={jobHistory} />
}

export default App
