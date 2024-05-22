import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto  px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Welcome to my corner of the web! I'm Ashvin, a passionate web
          developer with a knack for crafting beautiful, functional, and
          user-friendly websites. With a solid foundation in front-end
          development and a growing proficiency in back-end technologies like
          PHP, I'm excited to showcase my skills and embark on new coding
          adventures.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <br />
        <span>
          Degree:Bechlour of Computer Application(BCA)
          <br />
          Institution:I.T.Sheliya Jafari BCA College
          <br />
          Univercity:Hemchandracharya North Gujarat University,Patan <br />
          Year:June-2021 to March-2024 <br />
          CGPA:8.87/10 <br />
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <br />
        <span>
          <span className="font-bold">Front-end Development</span> <br />
          HTML5,CSS3,Javascript,Responsive Design <br />
          <span className="font-bold">Back-end Development</span> <br />
          PHP,Node.Js,Database Management <br />
          <span className="font-bold">Frameworks & Libraries</span> <br />
          Laravel,React.js <br />
          <span className="font-bold">
            Version Control & Collaboration
          </span>{" "}
          <br />
          Git,GitHub <br />
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">Projects</h1>
        <br />
        <span>
          <span className="font-bold text-lg">Online-Mobile-Shop</span> <br />
          Create a responsive online mobile shop using PHP. Features include
          user authentication, product listings, search, shopping cart,
          checkout, and admin dashboard for managing products and orders. Ensure
          security, optimize performance, and continuously improve based on
          feedback and analytics. Check this Project in GitHub Repo.
          <br />
        </span>
        <br />
        <span>
          <span className="font-bold text-lg">NewsMonkey</span> <br />
          NewsMonkey is a responsive news aggregation website developed with
          React. It offers real-time news updates from various sources,
          categorized by topics for easy navigation. Key features include:
          <br />
          <span className="font-semibold">

          Real-Time Updates:</span> Fetches the latest news articles via API.
          <br />
          <span className="font-semibold">

          Categorized Sections:</span> Browse news by categories such as Technology,
          Sports, and Business.
           <br />
           <span className="font-semibold">

           Responsive Design:</span> Optimized for both desktop
          and mobile devices.
           <br />
           <span className="font-semibold">

           Search Functionality:</span> Quickly find articles by
          keywords.
           <br />
            This project demonstrates my ability to build dynamic and
          user-friendly web applications using modern React practices.
          <br />
        </span>
        {/* <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          sed!
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          sed!
        </span>
        <br /> */}
        <br />
      </div>
    </div>
  );
}

export default About;
