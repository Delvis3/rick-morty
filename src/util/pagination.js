export const paginationLogic = (currentPage,residents) =>{
    if(!residents){
        return{
            pages:[1],
            residentsInPage:[]
        }
    }
// logica paginacion
const RESIDENTS_PER_PAGE = 20;

const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);

const sliceStar = (currentPage -1) * RESIDENTS_PER_PAGE;
const sliceEnd = sliceStar + RESIDENTS_PER_PAGE;
const residentsInPage = residents.slice(sliceStar, sliceEnd)

// generando el arreglo de las paginas a mostrar
const pages = [];
for(let i=1; i<= totalPages; i++){
    pages.push(i)
}
return{
    residentsInPage,
    pages
}
};