import './App.css'
import Nature from './nature.jpg'
import Logo from './logo.svg'

function App() {
    return (
        <div style={{textAlign:'center', color:'green'}}>
            <h1> Hello World!!!</h1>
            <div className='header'>
                    <img src={Nature} alt='nature' height='200px'/>
                    <img src={Logo} alt='nature' height='200px'/>
            </div>
        </div>
    )
}

export default App
