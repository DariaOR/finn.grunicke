import './App.css'
import TextCong from './Components/TextCong.js'
import EmailForm from './Components/EmailForm'
// import Gallery from './Components/Gallery'
import { Box, CardCover } from '@mui/material'

function App() {
  return (
    <div className="App">
      {/* <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      /> */}
      <header className="App-header">
        <TextCong />
        <Box />
        {/* <Gallery /> */}
        <Box />
        <EmailForm />
        <Box />
        <a
          className="App-link"
          href="https://www.instagram.com/finn_grunicke/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginBottom: '8px' }}
        >
          Finn Grunicke
        </a>
      </header>
    </div>
  )
}

export default App
