import AboutImg from '../assests/about.png';

export default function About(){
    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2  '>
            <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center '>
        <div className='flex flex-col justify-center  text-white'>
        <h1 className='text-4xl border-b-4 border-primary mb-5 w-[172px] font-bold'>About Me</h1>
        <p className='pb-5'>Hello! I'm Vinith, a passionate MERN stack developer with a knack for creating dynamic and responsive web applications.</p>
        <p>With a strong foundation in MongoDB, Express.js, React, and Node.js, I thrive on turning complex problems into simple, beautiful, and intuitive solutions.</p>
        

        </div>
        </div>
    </section>
}