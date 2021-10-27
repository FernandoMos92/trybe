import './App.css';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Header from './Components/Header';

const Task = (value) => {
  return (
    <ul>
    <li>{value}</li>
    </ul>
  );
}

const compromissos = ['Passear com os dogs', 'Cuidar do almoço', 'Estudar', 'Fazer exercicios'];

function App() {
  return (
    <>
      <Header/>
      {/* {compromissos.map((el) => Task(el))} */}
      <Content/>
      <Footer/>
    </>
  );
}

export default App;
