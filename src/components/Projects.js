import websiteImage1 from '../assests/ecommerce-websites.jpg';
import websiteImage2 from '../assests/food-ecommerce.jpg';
import websiteImage3 from '../assests/website-blog.jpg';
 

export default function Projects() {
    return <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white " id='projects'>
        <div className="w-full">
        <div className="flex flex-col px-10 py-5">
        <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold'>Projects</h1>
        <p>Welcome to my project showcase! Here you'll find a selection of my best work, demonstrating my skills and experience in developing robust and dynamic web applications using the MERN stack.</p>
        </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5 '>
                <div className='relative'>
                <img className='h-[200px] w-[500px]' src={websiteImage1}/>
                <div className="project-desc">
                    <p className='text-center px-5 py-5'>A Ecommerce Website Built with Mern Stack</p>
                </div>
                </div>
                <div className='relative'>
                <img className='h-[200px] w-[500px]' src={websiteImage2}/>
                <div  className="project-desc">
                    <p className='text-center px-5 py-5'>A food - Ecommerce Website Built with Mern Stack</p>
                </div>
                </div>
                <div className='relative'> 
                <img className='h-[200px] w-[500px]' src={websiteImage3}/>
                <div  className="project-desc">
                    <p className='text-center px-5 py-5'>A Website Block Built with Mern Stack</p>
                </div>
                </div>
           
           
            </div>
           
        </div>
    </section>
}