import React from "react";
import html from "../../public/html.png"
import css from "../../public/css.jpg"
import java from "../../public/java.png"
import javascript from "../../public/javascript.png"
import oracle from "../../public/oracle.png"
import reactjs from "../../public/reactjs.png"
import php from "../../public/php.png"






function Experience() {
    const cardItem=[
            {
                id:1,
                logo:html,
                name:"Html"
            },
            {
                id:2,
                logo:css,
                name:"Css"
            },
            {
                id:3,
                logo:java,
                name:"Java"
            },
            {
                id:4,
                logo:javascript,
                name:"Javascript"
            },
            {
                id:5,
                logo:oracle,
                name:"Oracle"
            },
            {
                id:6,
                logo:reactjs,
                name:"ReactJs"
            },
            {
                id:7,
                logo:php,
                name:"PHP"
            },

    ]
  return (
    <div name="Experience" className="max-w-screen-2xl container mx-auto  px-4 md:px-20 my-16">
      <div>
        <h1 className="text-3xl font-bold mb-5">
          Experience
        </h1>
        <span className="underline font-semibold">I have frehser but teach below technologies</span>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 my-3">
            {
                cardItem.map(({id,logo,name})=>(
                    <div className="flex flex-col items-center border-[2px] p-1 cursor-pointer rounded-full md:w-[200px] md:h-[200px]  hover:scale-110 duration-300" key={id}>
                         <img src={logo} alt=""  className="w-[150px]  rounded-full "/>
                         <div>
                            <div className="">{name}</div>
                         </div>
                       

                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
}

export default Experience;
