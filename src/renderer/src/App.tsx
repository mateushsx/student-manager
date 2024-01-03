import { AppRoutes } from './routes'
import { BrowserRouter } from 'react-router-dom'
import { AppDrawer } from './components/appdrawer'

import './assets/index.css'

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <AppDrawer />

      <div className="container">
        <AppRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App
