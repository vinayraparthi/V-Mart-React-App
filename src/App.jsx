import './App.css'
import LandingPage from './stores/pages/LandingPage'
import { Route , Routes } from 'react-router-dom'
import MobilePage from './stores/pages/MobilePage'
import AcPage from './stores/pages/AcPage'
import KitchenPage from './stores/pages/KitchenPage'
import ComputersPage from './stores/pages/ComputersPage'
import WatchesPage from './stores/pages/WatchesPage'
import FridgePage from './stores/pages/FridgePage'
import FurniturePage from './stores/pages/FurniturePage'
import MenPage from './stores/pages/MenPage'
import WomenPage from './stores/pages/WomenPage'
import Bookspage from './stores/pages/Bookspage'
import TvPage from './stores/pages/TvPage'
import SpeakerPage from './stores/pages/SpeackerPage'
import MobileSingle from './stores/singles/MobileSingle'
import UserCart from './stores/UserCart'
import ComputerSingle from './stores/singles/ComputerSingle'
import FurnitureSingle from './stores/singles/FurnitureSingle'
import KitchenSingle from './stores/singles/KitchenSingle'
import MenSingle from './stores/singles/MenSingle'
import WatchSingle from './stores/singles/WatchSingle'
import WomanSingle from './stores/singles/WomanSingle'
import FridgeSingle from './stores/singles/FridgeSingle'
import AcSingle from './stores/singles/AcSingle'
import BooksSingle from './stores/singles/BooksSingle'
import SpeackerSingle from './stores/singles/SpeackerSingle'
import TvSingle from './stores/singles/TvSingle'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element ={<LandingPage/>}/>
      <Route path='/mobiles' element ={<MobilePage/>}/>
      <Route path='/ac' element ={<AcPage/>}/>
      <Route path='/kitchen' element ={<KitchenPage/>}/>
      <Route path='/computers' element ={<ComputersPage/>}/>
      <Route path='/watch' element ={<WatchesPage/>}/>
      <Route path='/fridge' element ={<FridgePage/>}/>
      <Route path='/furniture' element ={<FurniturePage/>}/>
      <Route path='/men' element ={<MenPage/>}/>
      <Route path='/women' element ={<WomenPage/>}/>
      <Route path='/tv' element ={<TvPage/>}/>
      <Route path='/books' element ={<Bookspage/>}/>
      <Route path='/speacker' element ={<SpeakerPage/>}/>
      <Route path='/mobiles/:id' element={<MobileSingle/>}></Route>
      <Route path='/cart' element={<UserCart/>}></Route>
      <Route path='/ac/:id' element = {<AcSingle />} />
      <Route path='/computers/:id' element = {<ComputerSingle />} />
      <Route path='/furniture/:id' element = {<FurnitureSingle />} />
      <Route path='/kitchen/:id' element = {<KitchenSingle />} />
      <Route path='/men/:id' element = {<MenSingle />} />
      <Route path='/watch/:id' element = {<WatchSingle />} />
      <Route path='/woman/:id' element = {<WomanSingle />} />
      <Route path='/fridge/:id' element = {<FridgeSingle />} />
      <Route path='/books/:id' element = {<BooksSingle />} />
      <Route path='/speacker/:id' element = {<SpeackerSingle />} />
      <Route path='/tv/:id' element = {<TvSingle />} />

    </Routes>
    </>
  )
}

export default App
