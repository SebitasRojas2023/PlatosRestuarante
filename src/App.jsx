import Header from "./components/Header"
import Menuformulario from "./components/Menuformulario"


function App() {
 

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Menuformulario />
        
      </div>
    </div>
  )
}

export default App
