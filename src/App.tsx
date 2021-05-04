import './App.css'
import Nature from './nature.jpg'
import Logo from './logo.svg'
import Counter from './Components/Counter.tsx'

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>
        {' '}
        Currently we are in the{' '}
        <strong style={{ color: 'violet' }}>
          {process.env.NODE_ENV}
        </strong> of{' '}
        <strong style={{ color: 'violet' }}>{process.env.title}</strong>
      </h1>
      <Counter />
      <div className="header">
        <img src={Nature} alt="nature" height="200px" />
        <img src={Logo} alt="nature" height="200px" />
      </div>
    </div>
  )
}

export default App
