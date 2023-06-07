import { useEffect, useState } from 'react'
import './App.css'
import { getRandomDimension } from './util/random'
import axios from 'axios'
import Location from './components/Location'
import Residentlist from './components/ResidentList'

function App() {
const [location, setLocation] = useState(null)


  useEffect(() => {
  const URL=`https://rickandmortyapi.com/api/location/${getRandomDimension()}`
  console.log(URL)

axios.get(URL)
    .then(({data}) => setLocation(data))
    .catch((err) => console.log(err))
  },[])

  return (
    <main className='bg-[url("/images/fondo.png")] min-h-screen'>
      <section className='relative'>
         <div>
          <img className='absolute top-1/3 left-1/2 -translate-x-[50%]' src='/images/nombre.png' alt=''/>
        </div>
        <div className='m-auto'>
      <img className='mx-auto' src='/images/portal.png'/></div>
   </section>
   <Location location={location} setLocation={setLocation}/>
   <Residentlist location={location} residents={location?.residents}/>
    </main>
  )
}

export default App
