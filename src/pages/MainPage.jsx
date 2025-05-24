import React, { useState } from 'react';
import { Menu, X, ExternalLink, Download } from 'lucide-react';


export default function MainPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = (className) => {
        const element = document.querySelector(`.${className}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const projects = [
        {
            title: "Hireka! Career Preparation Startup",
            description: "Led as Scrum Master and Developer, facilitating Agile ceremonies and coordinating cross-functional teams for a career preparation platform."
        },
        {
            title: "UI/UX Design Workshop",
            description: "Delivered hands-on workshop attended by 40+ participants, engaging audience through live demos and interactive sessions."
        },
        {
            title: "TechnoGear X PKKMB PENS",
            description: "Managed legal permissions and official correspondence for one of the largest campus events integrating technology and orientation week."
        },
        {
            title: "Mentoring Akbar 2024",
            description: "Led planning and execution of large-scale mentoring event, coordinating multiple teams and overseeing entire program implementation."
        },
        {
            title: "BITECHTALKS Workshop",
            description: "Presented UI/UX design concepts to diverse academic audience with interactive learning approach."
        },
        {
            title: "Youth Leadership Development",
            description: "Responsible for team development and coordination of leadership training in external youth community organization."
        }
    ];

    const experiences = [
        {
            title: "Scrum Master & Developer - Hireka! Startup",
            year: "2025-Present",
            link: "#"
        },
        {
            title: "Leader - Mentoring Akbar 2024",
            year: "2024",
            link: "#"
        },
        {
            title: "Vice Head Licensing - TechnoGear X PKKMB PENS",
            year: "2024",
            link: "#"
        },
        {
            title: "Master of Ceremony - Dynamic HIMA IT",
            year: "2024",
            link: "#"
        },
        {
            title: "Workshop Presenter - BITECHTALKS UI/UX",
            year: "2023",
            link: "#"
        },
        {
            title: "Vice Head HR - Youth Leadership Organization",
            year: "2023-Present",
            link: "#"
        }
    ];

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleContactSubmit = (e) => {
        e.preventDefault();
        const waNumber = '6281556599192';
        const text = `Halo, saya ${name}. ${message}`;
        const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    return (
        <div className='w-full min-h-screen font-sans overflow-x-hidden' style={{ backgroundColor: '#101010', color: 'white' }}>
             {/* Mobile Menu Overlay */}
             <div className={`fixed top-0 left-0 w-full z-40 bg-[#101010] text-white transition-all duration-300 overflow-hidden md:hidden ${isMenuOpen ? 'h-64 py-4' : 'h-0 py-0'}`}>
                <ul className='flex flex-col items-center gap-4 mt-16'>
                    <li><a className="underline cursor-pointer hover:opacity-70" onClick={() => handleScroll('about')}>About</a></li>
                    <li><a className="underline cursor-pointer hover:opacity-70" onClick={() => handleScroll('projects')}>Projects</a></li>
                    <li><a className="underline cursor-pointer hover:opacity-70" onClick={() => handleScroll('experiences')}>Experiences</a></li>
                    <li><a className="underline cursor-pointer hover:opacity-70" onClick={() => handleScroll('contact')}>Contact</a></li>
                </ul>
            </div>

            {/* Navigation */}
            <nav className='flex flex-col bg-[#101010] w-full md:flex-row justify-between items-center py-6 px-4 md:px-8 gap-4 z-50 fixed top-0'>

                <div className="absolute flex flex-row justify-around align-middle top-4 w-full bg-[#101010]">
                    
                    {/* Desktop Menu */}
                    <ul className='hidden md:flex flex-row gap-4'>
                        <li><a className="text-white font-normal underline cursor-pointer hover:opacity-70" onClick={() => handleScroll('about')}>About</a></li>
                        <li><a className="text-white font-normal underline cursor-pointer hover:opacity-70" onClick={() => handleScroll('projects')}>Projects</a></li>
                        <li><a className="text-white font-normal underline cursor-pointer hover:opacity-70" onClick={() => handleScroll('experiences')}>Experiences</a></li>
                        <li><a className="text-white font-normal underline cursor-pointer hover:opacity-70" onClick={() => handleScroll('contact')}>Contact</a></li>
                    </ul>

                    {/* Right Side Buttons */}
                    <a className={`flex flex-row gap-2 items-center md:relative md:top-0 md:right-0 hover:text-gray-500`} href="/assets/CV_Saifullah Ahmad Musyanto_.pdf" download title="Download CV">
                        <p className='hidden md:flex'>Download my CV</p>               
                        <Download className="w-6 h-6 " />
                    </a>

                    {/* Title */}
                    <h3 className={`text-xl font-normal sticky`}>Saif Musyanto</h3>

                    {/* Hamburger Button */}
                    <button 
                        className=' md:hidden text-white hover:opacity-70' 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>


            </nav>

            {/* About Section */}
            <div className='flex flex-col md:flex-row justify-center items-center about px-4 gap-8 mt-8 md:mt-0'>
                <div className='flex flex-col w-full md:w-2/5 gap-4 pl-4 md:mt-48 mt-32'>
                    <p className='text-base leading-relaxed w-full md:w-3/5'><b className="text-2xl">Hi!</b> I'm Saif — a 20-year-old IT student passionate about <b>web design, mobile app development, and public speaking.</b> I thrive on learning new skills and challenging myself to grow. With hands-on experience in event organizing and a strong drive for self-improvement, I love sharing knowledge and inspiring others to level up. Always evolving, always moving forward.</p>
                    <button 
                        className='w-fit mt-4 bg-transparent border-l-2 border-white pl-4 py-2 cursor-pointer hover:opacity-70 transition-opacity'
                        onClick={() => handleScroll('contact')}
                    >
                        Get in Touch
                    </button>
                    <div className='mt-20 md:mt-60 w-full flex flex-row gap-4 flex-wrap'>
                        <span className="text-sm opacity-80">Web Developer</span>
                        <span className="text-sm opacity-80">Mobile App Developer</span>
                        <span className="text-sm opacity-80 w-full">UI Designer</span>
                    </div>
                </div>
                <div className="w-full md:w-auto flex justify-center max-w-full h-auto">
                    <img src="assets\images\saif_ril.png" alt="" className='md:grayscale hover:grayscale-0 transition-all duration-300'/>
                </div>
            </div>

            {/* Tech Stack Logos */}
            <div className='flex flex-wrap justify-center items-center gap-8 mt-12 px-4'>
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center text-xs"><img src="assets/logos/c.png" alt="" /></div>
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center text-xs"><img src="assets/logos/flutter.png" alt="" /></div>
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center text-xs"><img src="assets/logos/react.png" alt="" /></div>
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center text-xs"><img src="assets/logos/javascript.png" alt="" /></div>
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center text-xs"><img src="assets/logos/laravel.png" alt="" /></div>
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center text-xs"><img src="assets/logos/php.png" alt="" /></div>
            </div>

            {/* Projects Section */}
            <div className='my-24 flex flex-col items-center px-4 projects'>
                <div className='w-full max-w-4xl flex flex-col gap-4'>
                    <h3 className='text-2xl underline mb-8'>Organization Experiences</h3>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {projects.map((project, index) => (
                            <div key={index} className='flex flex-col gap-3 p-4 border border-gray-700 rounded-lg hover:border-gray-500 transition-colors'>
                                <h4 className='text-lg font-semibold'>{project.title}</h4>
                                <p className='text-sm text-gray-300 leading-relaxed'>{project.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Experiences Section */}
            <div className='my-24 flex flex-col items-center px-4 experiences'>
                <div className='w-full max-w-4xl flex flex-col gap-4'>
                    <h3 className='text-2xl underline mb-8'>Public Speaking Experiences</h3>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                        {experiences.map((exp, index) => (
                            <div key={index} className='border-b border-gray-600 pb-3 flex flex-row justify-between items-start gap-4 cursor-pointer hover:border-gray-400 transition-colors'>
                                <div className="flex-1">
                                    <h4 className='text-base font-medium'>{exp.title}</h4>
                                    <span className='text-sm text-gray-400'>{exp.year}</span>
                                </div>
                                {/* <ExternalLink className="w-4 h-4 text-gray-400 hover:text-white transition-colors flex-shrink-0 mt-1" /> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className='my-24 flex flex-col items-center px-4 contact'>
                <div className='flex flex-col md:flex-row w-full max-w-4xl gap-12 justify-between'>
                    <div className='flex flex-col w-full md:w-1/2 gap-4'>
                        <h3 className='text-3xl md:text-5xl font-normal'>Let's Work Together</h3>
                        <div className="flex flex-col gap-3 mt-6">
                            <div className="flex flex-row items-center gap-3">
                                <div className="w-6 h-6  flex items-center justify-center text-xs"><img src="assets/logos/instagram.png" alt="IG" /></div>
                                <span className='text-sm font-medium'><a href="https://www.instagram.com/saifmusyanto">@saifmusyanto</a></span>
                            </div>
                            <div className="flex flex-row items-center gap-3">
                                <div className="w-6 h-6  flex items-center justify-center text-xs"><img src="assets/logos/linkedin.png" alt="IN" /></div>
                                <span className='text-sm font-medium'><a href="https://www.linkedin.com/in/saifullah-ahmad-musyanto-958b90290/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bedx%2BbDGFSf25DsX%2B27lM7g%3D%3D">Saifullah Ahmad Musyanto</a></span>
                            </div>
                            <div className="flex flex-row items-center gap-3">
                                <div className="w-6 h-6  flex items-center justify-center text-xs"><img src="assets/logos/phone.png" alt="Phone" /></div>
                                <span className='text-sm font-medium'>+6281556599192</span>
                            </div>
                            <div className="flex flex-row items-center gap-3">
                                <div className="w-6 h-6  flex items-center justify-center text-xs"><img src="assets/logos/github.png" alt="IN" /></div>
                                <span className='text-sm font-medium'><a href="https://github.com/SaifMusyanto">SaifMusyanto</a></span>
                            </div>
                        </div>
                    </div>
                    <form className="flex flex-col w-full md:w-1/2 gap-4" onSubmit={handleContactSubmit}>
                        <input 
                            type="text" 
                            className='text-black text-sm w-full h-10 bg-white placeholder-gray-500 px-3 rounded placeholder:text-sm' 
                            placeholder='Nama' 
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                        
                        <textarea 
                            className='resize-none text-black text-sm w-full h-24 bg-white placeholder-gray-500 px-3 pt-3 rounded placeholder:text-sm' 
                            placeholder='Tuliskan pesan...'
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            required
                        ></textarea>
                        <button type="submit" className="border border-white text-white bg-transparent hover:bg-white hover:text-black px-6 py-3 rounded transition-colors cursor-pointer">
                            Get in Touch
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}