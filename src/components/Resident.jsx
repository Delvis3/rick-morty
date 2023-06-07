import axios from "axios";
import { useEffect, useState } from "react";

const Resident=({residentUrl}) =>{
 console.log(residentUrl);
const [ residentInfo, setResidentInfo ] = useState(null)

const statusStyles ={
    "Alive" : "bg-green-500",
    "Dead" : "bg-red-500",
    "unknown" :"bg-gray-400"
}

 useEffect(() => {
  axios.get(residentUrl)
  .then(({data}) => setResidentInfo(data))
  .catch((err) => console.log(err))
 },[])
 console.log(residentInfo);
    return(
        <section className="border-2  border-green-700 text-white">
            <article>
        <div className="relative border-2 border-green-700" >
            <img src={residentInfo?.image} alt=""/>
            <div className="bg-black/70 flex items-center gap-2 absolute bottom-3 left-1/2 -translate-x-1/2">
            <div className={`h-3 aspect-square rounded-full ${statusStyles[residentInfo?.status]}`}></div>
            {residentInfo?.status}
            </div>
        </div>
        <section>
            <h1>{residentInfo?.name}</h1>
            <ul>
                <li>SPECIES: {residentInfo?.species} <span>{}</span></li>
                <li>ORIGIN: {residentInfo?.origin.name}<span></span></li>
                <li>TIMES APPEAR: {residentInfo?.episode.length}<span></span></li>
            </ul>
        </section>     
            </article>
        </section>
    );
    // paginacion
};
export default Resident