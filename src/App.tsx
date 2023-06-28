import './App.css'
import HangmanDrawing from './components/hangman-drawing'
import HangmanWord from './components/hangman-word'
import Keyboard from './components/keyboard'

function App() {
  

  return (
    <div className='App'>
      <h2>Jogo da Forca</h2>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />

    </div>
  )
}

export default App
