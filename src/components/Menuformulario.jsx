import { useState, useEffect } from "react";
const Menuformulario = () => {
    const [Platos, setPlatos] = useState('');
  
    //setPlatos('Hook')
  
    //console.log(platos);
  
    return (
      <div className="md:w-1/2 lg:w-2/5">
          <h2 className="font-black text-3xl text-center">Seguimiento Platos</h2>
        <p className="text-lg mt-5 text-center mb-10">
          Añade Platos y {' '}
          <span className="text-indigo-600 font-bold">Administrar Menu</span>
        </p>
  
        <form className="bg-white shadow-md rounded-lg py-14 px-7 mb-12">
          <div className="mb-5">
  
            <label htmlFor="Plato" className="block text-red-900 uppercase font-bold">
              Nombre Plato:
            </label>
            <input id="Plato" className="border-2 w-full p-2 mt-2 placeholder-blue-500 rounded-md" 
            type="text" placeholder="Nombre del Plato" value={Platos} onChange={(e)=> console.log(e.target.value)}/>
            
          </div>
          <div className="mb-5">
            
            <label htmlFor="Listadoplatos" className="block text-red-900 uppercase font-bold">
              Nombre Listadoplatos:
            </label>
            <input id="Listadoplatos" className="border-2 w-full p-2 mt-2 placeholder-blue-500 rounded-md" 
            type="text" placeholder="Nombre Listadoplatos"/>
            
          </div>
          <div className="mb-5">
          
          <label htmlFor="ingredientes" className="block text-red-900 uppercase font-bold">
            ingredientes : 
          </label>
          <input id="ingredientes" className="border-2 w-full p-2 mt-2 placeholder-blue-500 rounded-md" 
          type="text" placeholder="Nombre del ingredientes"/>
          
        </div>
        <div className="mb-5">
          
          <label htmlFor="fecha " className="block text-red-700 uppercase font-bold">
            Fecha de Preparacion:
          </label>
          <input id="fecha" className="border-2 w-full p-2 mt-2 placeholder-blue-400 rounded-md" 
          type="date"/>
          
        </div>
        <div className="mb-5">
          
          <label htmlFor="tipo de coccion" className="block text-red-700 uppercase font-bold">
            tipo de coccion:
          </label>
          <textarea className="border-2 w-full p-2 mt-2 placeholder-blue-500 rounded-md" 
          id="tipo de coccion"  placeholder="nombra los tipos de ingredientes" />
          
        </div>

        <input type="submit" className="bg-indigo-600 w-full p-3
         text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors" 
         value="Agregar platos"/>
        
      </form>
    
    <div>
    <form className="bg-white shadow-md rounded-lg py-14 px-7 mb-12">
          <div className="mb-5">
  
            <label htmlFor="Plato" className="block text-red-900 uppercase font-bold">
              Nombre Plato:
            </label>
            <input id="Plato" className="border-2 w-full p-2 mt-2 placeholder-blue-500 rounded-md" 
            type="text" placeholder="carne a la llanera" value={Platos} onChange={(e)=> console.log(e.target.value)}/>
            
          </div>
          <div className="mb-5">
            
            <label htmlFor="Listadoplatos" className="block text-red-900 uppercase font-bold">
              Nombre Listadoplatos:
            </label>
            <input id="Listadoplatos" className="border-2 w-full p-2 mt-2 placeholder-blue-500 rounded-md" 
            type="text" placeholder="pechuga a la plancha, carne a la llanera, filete de mojarra y cazuela de mariscos"/>
            
          </div>
          <div className="mb-5">
          
          <label htmlFor="ingredientes" className="block text-red-900 uppercase font-bold">
            ingredientes : 
          </label>
          <input id="ingredientes" className="border-2 w-full p-2 mt-2 placeholder-blue-500 rounded-md" 
          type="text" placeholder="calamares,peces,pulpo,camaron y almejas"/>
          
        </div>
        <div className="mb-5">
          
          <label htmlFor="fecha " className="block text-red-700 uppercase font-bold">
            Fecha de Preparacion:
          </label>
          <input id="fecha" className="border-2 w-full p-2 mt-2 placeholder-blue-400 rounded-md" 
          type="date"/>
          
        </div>
        <div className="mb-5">
          
          <label htmlFor="tipo de coccion" className="block text-red-700 uppercase font-bold">
            tipo de coccion:
          </label>
          <textarea className="border-2 w-full p-2 mt-2 placeholder-blue-500 rounded-md" 
          id="vapor, freir, ahumado"  placeholder="vapor, freir, ahumado" />
          
        </div>

        <input type="submit" className="bg-indigo-600 w-full p-3
         text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors" 
         value="Agregar platos"/>
        
      </form>
    </div>
    </div>
  )
}

export default Menuformulario;
  