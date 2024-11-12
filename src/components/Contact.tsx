import React from "react";
import { TbMailAi } from "react-icons/tb";
import { MdOutlineSettingsPhone } from "react-icons/md";

const Contact = () => {
  return (
    <div id="contact" className="pt-32 container">
        <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-2">
                <h2 className="text-4xl md:text-5xl">Get in touch</h2>
                <p className="text-gray-500 pt-2">Feel free to reach me for any query.</p>
                <div className="flex gap-3 items-center">
                <TbMailAi  size={30}/> sharmeensamad@yahoo.com
                </div>
                <div className="flex gap-3 items-center">
                <MdOutlineSettingsPhone  size={30}/> +920000600003
                </div>
            </div>
            <div className="space-y-2">
              <div className="flex flex-col gap-1">
                <label htmlFor="name">Name:</label>
                <input type="text" className="h-[30px] bg-transparent border border-accent"
                id = "name"/>
              </div>
               <div className="flex flex-col gap-1">
                <label htmlFor="email">Email:</label>
                <input type="text" className="h-[30px] bg-transparent border border-accent"
                id = "email"/>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="msg">Message:</label>
                <textarea  className="bg-transparent border border-accent"
                id = "msg" rows={5}>
                  </textarea>
              </div>
              <button className="bg-accent p-2 px-6">SEND</button>
              
              </div>
             </div>
            </div>
      
   
 
  );
};

export default Contact;
