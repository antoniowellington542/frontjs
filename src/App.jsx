import { Home } from './pages/Home'
import { SimulationProvider } from './context/simulation';

function App() {
  return (
    <SimulationProvider>
      <Home />
    </SimulationProvider>
  )
}

export default App;
