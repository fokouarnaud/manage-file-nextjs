import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className="bg-yellow-400 pt-24 pb-10 border-b border-black">
            <div className="max-w-7xl mx-auto flex flex-row items-center justify-between py-3">
                <div className="max-w-2xl space-y-10">
                    <h1 className="text-black  text-7xl font-serif tracking-tighter">   Where good ideas find you</h1>
                    <p className="text-lg">
                        Read and share new perspectives on just about any topic.
                        Everyone&rsquo;s welcome.{" "} 
                        <a className="underline" href="#">Learn more</a>.
                    </p>

                    <div className="w-1/3">
                        <a href="#" className="outline outline-1 borber  border-black text-black  rounded-full  px-5 py-3">

                            Get Started
                        </a>
                    </div>
                </div>
                <div>
                    <Image src="/images/hero.png" alt="train_image"/>
                </div>
            </div>
        </div>
    )
}

export default Hero