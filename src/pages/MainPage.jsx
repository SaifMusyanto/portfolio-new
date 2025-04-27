import React from 'react';

export default function MainPage() {
    return (
        <div className='min-w-screen min-h-screen font-jakarta' style={{ backgroundColor: '#101010', color: 'white' }}>
            <nav className='flex justify-between py-4 px-8 '>
                <ul>
                    <li><a style={{ color: 'white', fontWeight: 'normal', textDecoration: 'underline'}}>About</a></li>
                    <li><a style={{ color: 'white', fontWeight: 'normal', textDecoration: 'underline'}}>Projects</a></li>
                    <li><a style={{ color: 'white', fontWeight: 'normal', textDecoration: 'underline'}}>Experiences</a></li>
                    <li><a style={{ color: 'white', fontWeight: 'normal', textDecoration: 'underline'}}>Contact</a></li>
                </ul>
                <h3 className='' style={{ fontWeight: 'normal', fontSize: 20}}>Saif Musyanto</h3>
                <div className='flex gap-1'>
                    <a style={{ color: 'white', fontWeight: 'bold' }}>Let's Talk</a>
                    <img className='my-0.5 mx-2' src="assets/share_icon.png" style={{ width: '16px', height: '16px' }} />
                </div>
            </nav>
            <div className='flex flex-row justify-center h-screen'>
                <div className='flex flex-col w-2/5 gap-4 '>
                    <p className='w-110'>Hi, Im Saif. I'm a 20-year-old IT student.
I enjoys <b>web design, mobile app developing, public speaking, and learning new things.</b> I have experience in organizing events and love to share my knowledge in management. Always growing, always improving.</p>
                    <button className='w-35 mt-4 bg-transparent border-s-2 border-s-white'>Get in Touch</button>
                    <div className='mt-60 w-120 flex flex-row gap-4 flex-wrap'>
                        <p>Web Developer,</p>
                        <p>Mobile App Developer</p>
                        <p className='w-full'>UI Designer</p>
                    </div>
                </div>
                <img src="assets/images/saif34.png" alt="saif" className='h-150'/>
            </div>
            <div className='flex flex-row justify-center gap-12 mt-12' style={{ marginTop: '86px' }}>
                    <img src="assets/logos/c.png" alt="c" className='h-8'/>
                    <img src="assets/logos/php.png" alt="php" className='h-6 mt-1'/>
                    <img src="assets/logos/javascript.png" alt="javascript" className='h-8'/>
                    <img src="assets/logos/react.png" alt="react" className='h-8'/>
                    <img src="assets/logos/laravel.png" alt="laravel" className='h-8'/>
                    <img src="assets/logos/flutter.png" alt="flutter" className='h-8'/>
            </div>
            <div className='my-37 flex flex-row justify-center'>
                <div className='flex flex-col w-[900px] gap-4 ml-12'>
                    <h3 className='text-xl underline '>Projects</h3>
                    <div className='w-full flex flex-row gap-8 flex-wrap mt-12 gap-y-21'>
                        <div className='w-[272px] flex flex-col gap-2 '>
                            <h4>Java Game</h4>
                            <p>A labyrinth game using 100% native java. I learned alot about Object Oriented Programming cuz of this project. </p>
                        </div>
                        <div className='w-[272px] flex flex-col gap-2'>
                            <h4>Java Game</h4>
                            <p>A labyrinth game using 100% native java. I learned alot about Object Oriented Programming cuz of this project. </p>
                        </div>
                        <div className='w-[272px] flex flex-col gap-2'>
                            <h4>Java Game</h4>
                            <p>A labyrinth game using 100% native java. I learned alot about Object Oriented Programming cuz of this project. </p>
                        </div>
                        <div className='w-[272px] flex flex-col gap-2'>
                            <h4>Java Game</h4>
                            <p>A labyrinth game using 100% native java. I learned alot about Object Oriented Programming cuz of this project. </p>
                        </div>
                        <div className='w-[272px] flex flex-col gap-2'>
                            <h4>Java Game</h4>
                            <p>A labyrinth game using 100% native java. I learned alot about Object Oriented Programming cuz of this project. </p>
                        </div>
                        <div className='w-[272px] flex flex-col gap-2'>
                            <h4>Java Game</h4>
                            <p>A labyrinth game using 100% native java. I learned alot about Object Oriented Programming cuz of this project. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-37 flex flex-row justify-center'>
                <div className='flex flex-col w-[900px] gap-4 ml-12'>
                    <h3 className='text-xl underline '>Experiences</h3>
                    <div className='w-full flex flex-row gap-14 flex-wrap mt-12 gap-y-12 justify-center'>
                        <div className='border-b-1 border-s-white flex flex-row justify-between gap-2 w-80'>
                            <h4>Master of Ceremony Dynamic 2024...</h4>
                            <img src="assets/share_icon.png" alt="link" style={{ height:16 }}/>
                        </div>
                        <div className='border-b-1 border-s-white flex flex-row justify-between gap-2 w-80'>
                            <h4>Master of Ceremony Dynamic 2024...</h4>
                            <img src="assets/share_icon.png" alt="link" style={{ height:16 }}/>
                        </div>
                        <div className='border-b-1 border-s-white flex flex-row justify-between gap-2 w-80'>
                            <h4>Master of Ceremony Dynamic 2024...</h4>
                            <img src="assets/share_icon.png" alt="link" style={{ height:16 }}/>
                        </div>
                        <div className='border-b-1 border-s-white flex flex-row justify-between gap-2 w-80'>
                            <h4>Master of Ceremony Dynamic 2024...</h4>
                            <img src="assets/share_icon.png" alt="link" style={{ height:16 }}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-37 flex flex-row justify-center '>
                <div className='flex flex-row w-[900px] gap-28 ml-12 justify-center '>
                    <div className='flex flex-col w-58 gap-1'>
                        <h3 className='text-5xl'>Let's Work Together</h3>
                        <div className="flex flex-row gap-1 mt-4">
                            <img src="assets/logos/instagram.png" alt="instagram" style={{ height: 24, width: 24 }}/>
                            <h4 className='mt-0.5 font-medium text-sm'>@saifmusyanto</h4>
                        </div>
                        <div className="flex flex-row gap-1">
                            <img src="assets/logos/linkedin.png" alt="instagram" style={{ height: 24, width: 24 }}/>
                            <h4 className='mt-0.5 font-medium text-sm'>@saifmusyanto</h4>
                        </div>
                        <div className="flex flex-row gap-1">
                            <h4 className='mt-0.5 font-medium text-sm'>+6281556599192</h4>
                        </div>
                    </div>
                    <div className="flex flex-col w-58 gap-3">
                        <textarea name="nama" id="" className='resize-none text-black text-xs w-full h-8 bg-white placeholder-gray-400 px-2  pt-2 rounded-xs placeholder:text-xs' placeholder='nama' ></textarea>
                        <textarea name="nama" id="" className='resize-none text-black text-xs w-full h-8 bg-white placeholder-gray-400 px-2  pt-2 rounded-xs placeholder:text-xs' placeholder='email@gmail.com' ></textarea>
                        <textarea name="nama" id="" className='resize-none text-black text-xs w-full h-24 bg-white placeholder-gray-400 px-2  pt-2 rounded-xs placeholder:text-xs' placeholder='tuliskan pesan...' ></textarea>
                        <button className="border border-white text-white bg-transparent hover:bg-white px-6 py-2 rounded">
                        Get in Touch
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}