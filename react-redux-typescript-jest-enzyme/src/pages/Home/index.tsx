import './index.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <div>
        <Link id="counter-link" to="/counter">
          Counter
        </Link>
      </div>

      <div>
        <Link id="todos-link" to="/todos">Todos</Link>
      </div>
    </div>
  );
};

export default Home;
