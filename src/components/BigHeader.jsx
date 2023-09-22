import React from "react";
import { motion } from "framer-motion"
import MePic from "./img/grad.jpg"

function BigHeader() {
    return (
        <div className="toppadding">
            <header class="row">

       
                            <div class="col-xl-5 col-lg-5 col-md-6 text-center my-auto">
                                <motion.img 
                                class="rounded-circle shadow-4-strong border border-dark" alt="avatar2" src={MePic}
                                initial={{ y: -1000 }}
                                animate={{ y: 0 }}
                                transition={{ type: "tween", duration:1}}
                                />
                            </div>

                            
                            <div class="col-xl-7 col-lg-7 col-md-6 my-auto">
                            <motion.div
                            initial={{ y: 1000 }}
                                animate={{ y: 0 }}
                                transition={{ type: "tween", duration:1}}>
                                <h1 class="text-md-start">Jaan Sangha</h1>
                                <h2 class="text-md-start">Game Programmer / Full Stack Developer</h2>
                                </motion.div>
                            </div>
                            


            </header>     
        </div>
    );
}

export default BigHeader;