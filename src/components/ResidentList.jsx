import { useEffect, useState } from "react";
import Resident from "./Resident";
import { paginationLogic } from "../util/pagination";

const FIRSPAGE=1;
const Residentlist = ({residents , location}) => {
// console.log(residents); esto para ver en consola la info de los recidentes de la dimencion en q estemos
const [currentPage, setCurrentPage] = useState(FIRSPAGE);
  


const {pages,residentsInPage} = paginationLogic(currentPage, residents)

useEffect(() =>{

 setCurrentPage(FIRSPAGE)
},[location])

return (
<section className="px-3">
    {/* lista de residentes */}
<section className="grid gap-8 grid-cols-[repeat(auto-fill,_280px)] justify-center max-w-[1024px] mx-auto py-6">
{residentsInPage?.map((resident) => (
    <Resident key={resident} residentUrl={resident}/>
    ))}

</section>
{/* paginacion */}
<section className=" flex justify-center gap-4 flex-wrap pb-8">
{pages.map((page) => (
    <button
    key={page}
    onClick={()=>setCurrentPage(page)} 
    className={`p-2 px-3 rounded-md ${page===currentPage ? "bg-green-300" : "bg-green-700"}`}>
    {page}
    </button>

     ))}
</section>
</section>
)
}
export default Residentlist