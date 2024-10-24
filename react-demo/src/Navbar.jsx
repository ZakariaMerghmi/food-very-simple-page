import {useState, useEffect, useRef} from 'react' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
const Nafbar = () => {

const [clicked , setClicked] = useState(false);
    function appearList(event){
        setClicked(!clicked);
    }
const dropDown = useRef(null);
const buttonDrop = useRef(null);

    useEffect(()=>{
        const disappear = (e) =>{
            if(dropDown.current && !dropDown.current.contains(e.target) && !buttonDrop.current.contains(e.target)){
                setClicked(false)
            }
        }
        document.addEventListener('mousedown' , disappear);
        return() => {
            document.addEventListener('mousedown' , disappear);
        }
    },[dropDown , clicked])

    return ( 
        <div className="all">
<div className="navbar flex justify-between min-w-full font-semibold text-lg">
        <div className="title flex ">
        <FontAwesomeIcon icon={faCoffee} className='mx-3 relative top-2 hover:text-orange-500 transition-all ease-in cursor-pointer' />
        <h1 className="font-bold text-xl hover:text-orange-500 transition-all ease-in cursor-pointer">FoodiesWeb</h1>
        </div>
       <ul className="flex relative right-32 cursor-pointer">
        <li className="mx-4 hover:text-orange-500 cursor-pointer font-serif">Home</li>
        <div className="dashes flex mx-4 transition-all ease-in" ref={buttonDrop} >
        <li onClick={()=>appearList()} className='hover:text-orange-500 cursor-pointer font-serif outline-none ' ref={buttonDrop} >Dishes</li>
        <FontAwesomeIcon icon={faCaretDown} className='mx-2 relative top-1 hover:text-orange-500 cursor-pointer font-serif' ref={buttonDrop} onClick={appearList}/>
        </div>
        
        <li className="mx-4 hover:text-orange-500 cursor-pointer font-serif">About</li>
        <li className="mx-4 hover:text-orange-500 cursor-pointer font-serif">Menu</li>
        <li className="mx-4 hover:text-orange-500 cursor-pointer font-serif">Reviews</li>
        <button className="mx-4 text-orange-500 border  border-solid border-orange-500 px-3 py-1 rounded-md relative bottom-1 hover:bg-orange-500 hover:text-white transition-all ease-in  ">Login</button>
       </ul>
       
        </div>
        { clicked && 
        <div ref={dropDown} className="transition-all ease-in z-10 absolute right-[650px] bg-white w-28  shadow-md rounded-md capitalize border ">
        <ul>
            <li className='m-2 hover:text-orange-500 cursor-pointer font-serif'>spicy</li>
            <li className='m-2 hover:text-orange-500 cursor-pointer font-serif'>tasty</li>
            <li className='m-2 hover:text-orange-500 cursor-pointer font-serif'>dilicious</li>
            <li className='m-2 hover:text-orange-500 cursor-pointer font-serif'>crispy</li>
        </ul>
    </div>}
        </div>
        
     );
}
 
export default Nafbar;