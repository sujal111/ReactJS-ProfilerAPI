import { Profiler } from 'react';
import Counter from './Counter'

const log = (id, phase, actualTime, baseTime, startTime, commitTime, interactions) => {
  console.table({ id, phase, actualTime, baseTime, startTime, commitTime, interactions })
}

function App() {
  return (
    <div style={{ margin: '50px' }}>
      <Profiler id="Counter" onRender={log}>
        <Counter />
      </Profiler>
    </div>
  );
}

export default App;