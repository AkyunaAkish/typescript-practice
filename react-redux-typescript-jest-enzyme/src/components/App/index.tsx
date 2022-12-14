import './index.scss';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Counter from '../../pages/Counter';
import Todos from '../../pages/Todos';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/todos" element={<Todos />} />
    </Routes>
  );
};

export default App;
