import './App.css'
import { BrowserRouter } from 'react-router-dom'
import RenderRouter from './routes'


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <RenderRouter />
      </div>
    </BrowserRouter>
  )
}

export default App
