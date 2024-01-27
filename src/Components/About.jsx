





const About = () => {
  return (

    <div className="w-[90vw] h-[2200px] border-black border-[10px] ml-[100px] rounded-[50px] bg-[#F5FCFF] ">
        <div id="About"></div>
        <div className="w-[400px] h-[100px] -mt-[60px] mx-[auto] flex justify-center items-center bg-[#F5FCFF]">
            <p className="font-[Rockwell] font-bold text-6xl">About Me</p>
        </div>

        {/* Summary */}
        <div className="summary w-[200px] h-[70px] ml-12 flex justify-center items-center">
            <p className="font-mono uppercase text-[35px] font-[900]">Summary</p>
        </div>

        {/* Summary write-up */}
        <div className="w-[1300px] h-[200px] mx-[auto]">
            <p className="font-sans text-[25px] font-[500]">Frontend Developer with approximately 1 year of experience as a Web Developer. The professional journey began over 10 years ago as an Electrical Engineer. Throughout 12 months in the Tech career, expertise has been developed in frontend and software projects with skillset in HTML, CSS, JavaScript and React. Possesses collaborative abilities and finds satisfaction in collective efforts, leading groups towards shared objectives.</p>
        </div>

        {/* Work Experience */}
        <div className="summary w-[400px] h-[70px] mt-[100px] ml-12 flex justify-center items-center">
            <p className="font-mono uppercase text-[35px] font-[900]">Work Experience</p>
        </div>


        {/* Work Experience one */}
        <div className="w-[1300px] h-[200px] mx-[auto]">
          <p className="font-sans text-[25px] font-[700]">
            <strong>1. Intern, Web Developer (Remote)</strong><br />
            CODEALPHA, Lucknow, Uttar Pradesh, India. <br />
            <i>Jan 2024 – Till Date</i> <br /><br />
            • Developed interactive and visually appealing web designs utilizing React, Tailwind CSS, and JavaScript.<br />
            • Ensured optimal responsiveness across diverse devices and screen dimensions.<br />
            • Utilized version control systems, such as Git, to effectively manage and track code changes.<br />
            • Deployed web applications, seamlessly managing server and cloud platform deployment processes.
          </p>
        </div>



          {/* Work Experience Two */}
          <div className="w-[1300px] h-[200px] mx-[auto] mt-[150px]">
          <p className="font-sans text-[25px] font-[700]">
            <strong>2. Intern, Frontend Developer (Remote)</strong><br />
            CODSOFT, kolkata west bengal, India <br />
            <i>Nov 2023 – Dec 2023</i> <br /><br />
            •	Created and implemented web designs using React with Tailwind CSS, and JavaScript. <br />
            •	Ensured the responsiveness of websites for various devices and screen sizes. <br />
            •	Used version control systems (e.g., Git) to manage and track changes in codes.
          </p>
        </div>


         {/* Work Experience Three */}
         <div className="w-[1300px] h-[200px] mx-[auto] mt-[120px]">
          <p className="font-sans text-[25px] font-[700]">
            <strong>3.	Intern, Software Engineer (Remote)</strong><br />
            FIVSYS, Bangalore Urban, Karnataka, India <br />
            <i>July 2023 – Oct 2023</i> <br /><br />
            •	Created and implemented web designs using React with Tailwind CSS, and JavaScript. <br />
            •	Ensured the responsiveness of websites for various devices and screen sizes. <br />
            •	Used version control systems (e.g., Git) to manage and track changes in codes.
          </p>
        </div>



          {/* EDUCATION */}
          <div className="summary w-[400px] h-[70px] mt-[150px] flex justify-center items-center">
                      <p className="font-mono uppercase text-[35px] font-[900]">EDUCATION</p>
                  </div>

         {/* EDUCATION */}
         <div className="w-[1300px] h-[200px] mx-[auto] mt-[10px]">
          <p className="font-sans text-[25px] font-[700]">
            <strong>•	Anambra State University, Uli</strong><br />
            B.Eng Electrical/Electronics Engineering <br />
          </p>
        </div>


    {/* CERTIFICATION */}
    <div className="summary w-[400px] h-[70px] -mt-[40px] flex justify-center items-center">
                      <p className="font-mono uppercase text-[35px] font-[900]">CERTIFICATION</p>
                  </div>

        {/* CERTIFICATION */}
        <div className="w-[1300px] h-[200px] mx-[auto] mt-[10px]">
          <p className="font-sans text-[25px] font-[700]">
            
          •	<strong>Learn Factory Tech.</strong> Full-stack JavaScript Developer <i>(December 2023)</i><br />
          •	<strong>AZUBI-AFRICA.</strong> Frontend Developer <i></i>(November 2023)<br />
          •	<strong>Johns Hopkins University.</strong> HTML, CSS, and JavaScript for Web Developers <i>(July 2023)</i><br />
          •	<strong>OSOGL.</strong> Health, Safety and Environment. Level 1, 2 & 3 <i>(February 2021)</i>

          </p>
        </div>


    </div>
    
  )
}

export default About