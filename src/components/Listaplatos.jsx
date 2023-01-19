import Platos from "./Platos"

function Listaplatos() {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        <h2 className="font-black text-3xl text-center">Listado Platos</h2>
        <p className=" text-xl mt-5 mb-10 text-center ">
          Administra tus {' '}
          <span className="text-indigo-800 font-bold">Platos y Reservas</span>
        </p>
        <Platos />
        <Platos />
        <Platos />
        <Platos />
    </div>
    
  )
}

export default Listaplatos;