import Header from './Header.tsx';
import { ToDo } from './ToDo/ToDo.tsx';
import '/src/stylesheets/App.css';

function App() {
  return (
    <>
      <Header />
      <ToDo />
    </>
  );
}

export default App;
