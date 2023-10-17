import tw from "twin.macro";
import Ruler from "./Hr";
import ReactGa from "react-ga4";

const Work = () => {
  return (
    <>
      <main>
        <h1
          id="Work"
          className="text-5xl font-headings mt-36 font-bold dark:text-teal-500"
        >
          Work Experience
        </h1>
        <p className="font-sans text-3xl mb-16 dark:text-gray-200">
          Here's a quick rundown of my most recent experiences.
        </p>
      </main>

      <section>
        <Article>
          <div className="relative pb-12 md:col-span-2">
            <div className="sticky top-28">
              <svg
                className="absolute left-[-38px] md:left-[-50px] color-bg-default color-fg-muted bg-white dark:bg-dark rounded-full dark:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="28"
                height="28"
              >
                <path
                  fillRule="evenodd"
                  d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z"
                  fill="currentColor"
                ></path>
              </svg>
              <a
                href="https://github.com/Bhanu1776/IT-Dept-Website"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  ReactGa.event({
                    category: "Internships",
                    action: "Checking Internship repository",
                  });
                }}
              >
                <h3 className="p-0 m-0 pt-2 text-4xl font-bold mb-4 dark:text-gray-200">
                  Application Developer Intern
                </h3>
              </a>
              <p className="p-0 m-0 text-3xl mb-2 dark:text-gray-200">
                UF Information Technology(UFIT)
              </p>
              <p className="p-0 m-0 text-2xl dark:text-gray-200 text-gray-500 before:content-['['] dark:before:text-teal-500 before:text-indigo-500 after:text-indigo-500 after:font-bold before:font-bold after:content-[']'] dark:after:text-teal-500 after:text-indigo-500after:font-bold">
                &nbsp; May 2023 - Present &nbsp;
              </p>
            </div>
          </div>
          <p className="relative pb-4 md:border-b dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
          • Engineered Student Application Management System with OnBase Unity Forms, Workflow, and WorkView, reducing processing time by <strong>75%</strong> for 40+ internal departments within University.
            <br />
            {/* <span className="font-semibold text-slate-800 dark:text-gray-200">
              Achievements: &nbsp;
            </span> */}
           • Redesigned the DocuSign and OnBase websites utilizing React to optimize the user experience, resulting in a <strong>50%</strong>
increase in engagement clicks. <br />
            {/* <span className="font-semibold text-slate-800 dark:text-gray-200">
              Contact: &nbsp;
            </span> */}
            •	Managed Enterprise Content Management environment for over <strong>40,000</strong> users, optimizing workflows and data access. <br />
            • Enhanced efficiency of OnBase Web Client by <strong>30% </strong> through integration of document IDs into REST API queries.
            This enhancement significantly elevated end-user experience. <br />
            •	Led Migration of backend architecture from SOAP API to RESTful API in DocuSign, simplifying client interaction by <strong>35%</strong> and boosting operational efficiency.
          </p>
        </Article>
        
      </section>
      <section>
        <Article>
          <div className="relative pb-12 md:col-span-2">
            <div className="sticky top-28">
              <svg
                className="absolute left-[-38px] md:left-[-50px] color-bg-default color-fg-muted bg-white dark:bg-dark rounded-full dark:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="28"
                height="28"
              >
                <path
                  fillRule="evenodd"
                  d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z"
                  fill="currentColor"
                ></path>
              </svg>
              <a
                href="https://github.com/Bhanu1776/IT-Dept-Website"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  ReactGa.event({
                    category: "Internships",
                    action: "Checking Internship repository",
                  });
                }}
              >
                <h3 className="p-0 m-0 pt-2 text-4xl font-bold mb-4 dark:text-gray-200">
                  Associate Software Engineer
                </h3>
              </a>
              <p className="p-0 m-0 text-3xl mb-2 dark:text-gray-200">
                DXC Technology
              </p>
              <p className="p-0 m-0 text-2xl dark:text-gray-200 text-gray-500 before:content-['['] dark:before:text-teal-500 before:text-indigo-500 after:text-indigo-500 after:font-bold before:font-bold after:content-[']'] dark:after:text-teal-500 after:text-indigo-500after:font-bold">
                &nbsp; March 2021 - December 2021 &nbsp;
              </p>
            </div>
          </div>
          <p className="relative pb-4 md:border-b dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
          • Designed and developed scalable multi-tiered web applications for clients in the Insurance Industry, using C#, .NET, and Oracle SQL as a backend to ensure robust and customized solutions.           <br />
            {/* <span className="font-semibold text-slate-800 dark:text-gray-200">
              Achievements: &nbsp;
            </span> */}
            • Maximized development and deployment efficiency with Maven/Gradle scripts, while achieving a <strong>90%</strong> test coverage through automated regression testing with Selenium WebDriver and custom XPaths. <br />
            {/* <span className="font-semibold text-slate-800 dark:text-gray-200">
              Contact: &nbsp;
            </span> */}
            • Executed Azure DevOps CI/CD pipelines, automating microservices deployment in Azure. Achieved seamless scalability, proactive monitoring and <strong>35%</strong> faster incident response.  <br />
            •	Improved build artifact reliability by <strong>50%</strong> through the implementation of a CI/CD process for integration testing using Selenium, 
            Jenkins, GitHub, and AWS Lambda.
          </p>
        </Article>
        
      </section>
      <Ruler />
    </>
  );
};

const Article = tw.article` 
  relative 
  grid 
  md:grid-cols-5 
  md:pl-8 
  -mb-12 
  md:gap-10 
  before:content-[''] 
  mx-12 
  before:block 
  before:h-full 
  before:absolute 
  before:left-[-25px] 
  md:before:left-[-17px] 
  before:border-l-2 
  before:border-gray-300 
  dark:before:border-gray-700 
  md:space-x-4 pb-8
`;

export default Work;