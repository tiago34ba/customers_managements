import Header from './components/Header'
import Box from './components/Box'
import './styles/global.css'

function App() {
  return (
    <div className="App">
    <Header />
      <main>
        <Box background="claro" />
        <Box background="escuro" />
      </main>
    </div>
  )
}

export default App