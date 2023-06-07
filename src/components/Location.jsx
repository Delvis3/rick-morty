import axios, { Axios } from "axios";

const Location = ({location, setLocation}) => {
    // console.log(location); esto para verificar q nos llegara la info de la location  

    const handleSubmit= (e) =>{
        e.preventDefault()
        const newLocation = e.target.newLocation.value;

        const URL=`https://rickandmortyapi.com/api/location/${newLocation}`
        console.log(URL)

       axios.get(URL)
          .then(({data}) => setLocation(data))
          .catch((err) => console.log(err))
        }


    return(
        <section className="ml-6 mr-6">
      {/* formulario */}
      <form onSubmit={handleSubmit} className="p-10 flex justify-center">
        <input id="newLocation" className="text-white bg-black" placeholder="Type Location ID..." type="text"/>
        <button className="bg-green-600"><b>Search</b> <i className='bx bx-search-alt'></i></button>
      </form>
            
       <section className="items-center grid aling-center bg-green-600/20 text-white">
        {/* DATOS DE LA LOCATION */}
        <h2 className="grid aling-center justify-center p-2 border-2 border-green-700">NAME: {location?.name}</h2>
        <ul className="grid gap-2 grid-cols-3 justify-center max-w mx-auto py-6 items-center p-2">
            <li className="border-2 border-green-700">TIPE: {location?.type}</li>
            <li className="border-2 border-green-700">DIMENSION {location?.dimension}:</li>
            <li className="border-2 border-green-700">POPULATION: {location?.residents.length}</li>
        </ul>
       </section>
        </section>
    )
}
export default Location