
import './App.css';
import './EightBall.css';
import { answers, EightBall } from './EightBall';

function App() {
  return (
    <div>
      < EightBall answers={answers} />
    </div>
  );
}

export default App;
