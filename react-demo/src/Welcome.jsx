const Welcome = () => {
    return ( 
        <div className="content">
            <img src="./src/main4.jpg" className="-z-10 w-[1500px] max-w-none h-[640px] absolute right-0 left-0 top-20 rounded-xl" alt="Full screen image" />
            <h1 className='capitalize absolute  -z-10 bottom-[390px] right-20 text-orange-500 font-semibold text-6xl tracking-widest font-mono text-left'>evaluate your enner <br /> foody with every <br /> bite.</h1>
            <p className='w-[500px] absolute bottom-[270px] right-80 text-lg text-left text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias animi optio inventore dolorum numquam? Incidunt cum veritatis</p>
            <button className='absolute bottom-[180px] right-[400px] border border-orange-500 rounded-lg px-4 py-2 text-orange-500 tracking-wider capitalize hover:bg-orange-500 hover:text-white transition-all ease-in'>order now</button>
        </div>
     );
}

export default Welcome;
