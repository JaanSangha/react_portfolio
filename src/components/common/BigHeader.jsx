import React from "react";
import { motion } from "framer-motion"
import MePic from "../img/grad.jpg"

function BigHeader() {
    return (
            <header className="row">

       
                            <div className="col-xl-5 col-lg-5 col-md-6 text-center my-auto">
                                <motion.img 
                                className="rounded-circle shadow-4-strong border border-dark" alt="avatar2" src={MePic}
                                initial={{ y: -1000 }}
                                animate={{ y: 0 }}
                                transition={{ type: "tween", duration:1}}
                                />
                            </div>

                            
                            <div className="header-text col-xl-7 col-lg-7 col-md-6 my-auto">
                            <motion.div
                            initial={{ y: 1000 }}
                                animate={{ y: 0 }}
                                transition={{ type: "tween", duration:1}}>
                                <h1 className="text-md-start">Jaan Sangha</h1>
                                <h2 className="text-md-start">Game Programmer / Full Stack Developer</h2>
                                </motion.div>
                            </div>
                            


            </header>     
    );
}

export default BigHeader;