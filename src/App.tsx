import backgroud from './assets/bg-cafe.jpg'
import ItemsCoffe from './components/ItemsCoffe'
import { useState } from "react";
import './App.css'

function App() {
const [active , setActive] = useState<string>("all")

  const products = ()=>{
    if (active === "all") {
      return true
    }
    return false
  }
  return (
    <div className='text-white h-fit  '>
      <img src={backgroud} alt="Imagen de cafe" />
      <main>
        <article className='dm-sans min-h-full inset-10 rounded-md bg-[#1B1D1F] w-[80%] md:inset-20 lg:inset-40 absolute h-fit  flex flex-col p-5 md:p-10 lg:p-20  items-center'>
          <div className='lg:w-1/2 flex flex-col items-center justify-center gap-4'>
          <h1 className='md:text-4xl text-2xl text-[#FEF7EE] font-bold'>Our Collection</h1>
          <p className='md:text-base text-sm text-[#6F757C]  text-center'>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
          <div className='flex felx-col items-center justify-center gap-8'>
            <button onClick={()=>{setActive("all")}} className={`md:py-1.5 hover:bg-[#6F757C] md:px-3 py-1 px-1 ${active === "all" ? "bg-[#6F757C]":""} rounded-lg text-sm font-semibold `}>All Products</button>
            <button onClick={()=>{setActive("not")}} className={`hover:bg-[#6F757C] py-1.5 px-3 rounded-lg ${active === "not" ? "bg-[#6F757C]":""} text-sm font-semibold`}>Available Now</button>
          </div>
          </div>
        <ItemsCoffe state={products()} />
        </article>
      </main>
    </div>
  )
}

export default App
