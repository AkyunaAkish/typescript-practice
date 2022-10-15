import './index.scss';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import View from '../../pages/View';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </div>
  );
};

export default App;
