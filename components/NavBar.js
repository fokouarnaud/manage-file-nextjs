import React from 'react'
import { useState } from 'react';
import useScroll from '../lib/useScroll';

const NavBar = () => {
    const [fix, setFix] = useState(false);

    useScroll((val)=>{
        if (val >= 300) {
            setFix(true);
        } else {
            setFix(false);
        }
    })
   



    return (
        <div className={fix ? `fixed bg-white w-full border-b border-black` : `fixed bg-yellow-400 w-full border-b border-black`}>

            <div className="max-w-7xl mx-auto flex flex-row items-center justify-between py-3 xl:px-5">
                <div>
                    <img className=" h-12" src="/images/logo.png" alt="act-blog" />
                </div>
                <div className="">
                    <ul className="flex flex-row items-center justify-between space-x-5">
                        <li><a href="#">Our story</a></li>
                        <li><a href="#">Membership</a></li>
                        <li><a href="#">Write</a></li>
                        <li><a href="#">Sign In</a></li>
                        <li><a href="#" className={fix ? "bg-green-600 rounded-full text-white px-5 py-3" : "bg-black rounded-full text-white px-5 py-3"}>Get started</a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default NavBar