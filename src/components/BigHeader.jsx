import React from "react";
import { motion } from "framer-motion"
import MePic from "./img/grad.jpg"

function BigHeader() {
    return (
        <div className="toppadding">
            <header class="p-5">
                <div class="container py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-5 col-lg-5 col-md-6 text-center">
                                <motion.img 
                                class="rounded-circle shadow-4-strong" alt="avatar2" src={MePic}
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
                            
                        </div>
                    </div>
                </div>  
            </header>     
        </div>
    );
}

export default BigHeader;