import React from "react";
import java from "../../public/java.png"
import python from "../../public/python.webp"
import mongoDb from "../../public/mongodb.jpg"
import react from "../../public/reactjs.png"
import express from "../../public/express.png"
import node from "../../public/node.png"





function Portfolio() {
    const cardItem = [
        {
          id:1,
          logo:mongoDb,
          name:"MongoDB",
          description: "A leading NoSQL database, MongoDB stores data in flexible, JSON-like documents."
        },
        {
          id:2,
          logo:express,
          name:"Express",
          description: "Express is a minimal and flexible Node.js web application framework."
        },
        {
          id:3,
          logo:react,
          name:"Reactjs",
          description: "React is a JavaScript library for building user interfaces, maintained by Facebook."
        },
        {
          id:4,
          logo:node,
          name:"Nodejs",
          description: "Node.js is a runtime environment that allows you to run JavaScript on the server."
        },
        {
          id:5,
          logo:python,
          name:"Python",
          description: "Python is a versatile programming language known for its readability and ease of use."
        },
        {
          id:6,
          logo:java,
          name:"Java",
          description: "Java is a high-level, class-based programming language designed to have few implementation dependencies."
        },
      ];
      
  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto  px-4 md:px-20 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">
          Portfolio
        </h1>
        <span className="underline font-semibold">Fearured Project</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 my-5">
            {
                cardItem.map(({id,logo,name,description})=>(
                    <div className="md:w-[300px] md:h-[300px] border-[2px] p-1 cursor-pointer rounded-lg shadow-lg  hover:scale-110 duration-300" key={id}>
                         <img src={logo} alt=""  className="w-[120px] h-[120px] p-1 rounded-full border-[2px] "/>
                         <div>
                            <div className="px-2 font-bold text-xl mb-2">{name}</div>
                            <p className="px-2 text-gray-700">{description}</p>
                         </div>
                         <div className=" px-6 py-4 dps space-x-3 justify-around">
                             <button className="bg-blue-500 hover:bg-blue-700 text-white  font-bold  px-4  py-2  rounded">Video</button>
                             <button className="bg-green-500 hover:bg-green-700 text-white  font-bold  px-4  py-2  rounded">Source Code</button>

                         </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
