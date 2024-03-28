import { useState, useEffect } from "react";
import start from '../assets/Star_fill.svg'
import startof from '../assets/Star.svg'

export type Coffe = {
    id:        number;
    name:      string;
    image:     string;
    price:     string;
    rating:    number;
    votes:     number;
    popular:   boolean;
    available: boolean;
}

export default function ItemsCoffe({ state }: { state: boolean }) {
    const [products, setProducts] = useState<Coffe[]>([]);

    const Rating  = ({rating , votes, available } :
         {rating:number , votes: number, available : boolean})=>{
            const PrintStart = rating > 0 ? <span className="flex text-sm font-medium items-center"><img src={start}/>{rating}</span> : <img src={startof} />

            const PrintVotes = votes > 0 ? <span className="font-medium flex items-center text-sm text-[#6F757C]">({votes}votes)</span> : <span className="font-medium text-sm flex items-center gap-1 text-[#6F757C]" >No ratings</span>
            const PrintAvailiable = available ? "" : <span className="text-[#ED735D] text-sm font-medium">Sold out</span>

            return (
                <section className="flex flex-row justify-between">
                    <div className="flex gap-1">
                    {PrintStart} 
                    {PrintVotes} 
                    </div>
                    {PrintAvailiable} 
                </section>
            )
         }
    const Popular = ({popular} : {popular : boolean}) =>{
        if (popular) {
            return (
                <span className=" absolute px-2 rounded-full text-sm top-2 left-2 text-black font-semibold bg-[#F6C768]">Popular</span>
            )
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json");
            const data: Coffe[] = await response.json();
            if (!state) {
                const newProducts = data.filter(produc => produc.available !== true)
                setProducts(newProducts)
             }else{
                 setProducts(data);
             }
        };
        fetchData();
    }, [state]);


    useEffect(() => {
        const mainElement = document.querySelector('.animate-fade-in-down') as HTMLElement;
        if (mainElement) {
            mainElement.classList.remove('animate-fade-in-down');
            void mainElement.offsetWidth; 
            mainElement.classList.add('animate-fade-in-down');
        }
    });

    return (
       <div className="grid  lg:grid-cols-3 md:grid-cols-2 animate-fade-in-down gap-7 pt-5 ">
        {
            products.length > 0 && products.map((product) => (
                <article key={product.id} className="flex flex-col hover:scale-105 cursor-pointer
                transition relative gap-2  ">
                    <Popular popular={product.popular}></Popular>
                    <img className="rounded-xl" src={product.image} alt={product.name} />
                    <div className="flex justify-between items-center">
                    <h1 className="font-medium text-base text-[#FEF7EE]">{product.name}</h1>
                    <span className="py-1 px-1 text-sm font-semibold rounded-md bg-[#BEE3CC] text-black">{product.price}</span>
                    </div>
                    <Rating available={product.available} rating={product.rating} votes={product.votes}></Rating>
                </article>
            ))
        }
       </div>
    )

    
}
