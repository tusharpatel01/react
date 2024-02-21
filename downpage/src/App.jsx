import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'


function App() {
 

  return (
    <>
      <Navbar/>
      <div className="cards">
        <Card title="typing skills" description="card 1 made with efforts"/>
        <Card title="typing skills 2" description="card 1 made with lot pfefforts"/>
        <Card title="typing skills 3" description="card 1 made with some efforts"/>
        <Card title="typing skills 4" description="card 1 made with no efforts"/>
        <Footer/>
      </div>
    </>
  )
}

export default App
