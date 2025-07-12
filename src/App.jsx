import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/Layout'
import Hero from './components/Hero'
import TaskManager from './components/TaskManager'
import ApiData from './components/ApiData'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <div className="space-y-20">
          <Hero />
          <TaskManager />
          <ApiData />
        </div>
      </Layout>
    </ThemeProvider>
  )
}

export default App
