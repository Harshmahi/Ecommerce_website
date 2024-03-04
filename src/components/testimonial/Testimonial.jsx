import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section className=''>
                <div className=" container mx-auto px-5 py-10">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className=' text-pink-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://media.licdn.com/dms/image/D4D03AQG-UiQeTyTxYA/profile-displayphoto-shrink_800_800/0/1678482151646?e=1714608000&v=beta&t=OCyiP-Okb_kum8aiBlCZaOXQLXkaov_YjqiYrhROC1g" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">I've been shopping online for years, and I have to say, [E-Bharat] stands out from the rest. The user-friendly interface makes browsing through products a breeze, and their extensive selection never fails to impress. Not to mention, their customer service is top-notch – whenever I've had a question or issue, they've been quick to respond and resolve it.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Ashish</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Software Engineer</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">As a busy professional, I don't always have time to go to the store. That's why I rely on [E-Bharat] for all my shopping needs. Whether it's groceries, electronics, or clothing, they have everything I need in one convenient place. With fast delivery and excellent customer service, they've made online shopping a breeze for me.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Pragati</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">BA Student</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://media.licdn.com/dms/image/D4D03AQGfWCKbVq6uSQ/profile-displayphoto-shrink_800_800/0/1679830334065?e=1714608000&v=beta&t=0WY1LLP05Dr-kurJ-8jKhUSSTSE7i_jNfkP_TGILEkM" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">I've tried several online retailers in the past, but none compare to the quality and service provided by [E-Bharat]. From the moment I placed my order to the day it arrived at my doorstep, I was impressed every step of the way. The products exceeded my expectations, and their easy return policy gave me peace of mind. I'll definitely be shopping here again.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Utkarsh</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">BE Student</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial