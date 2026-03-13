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
                href="https://www.sailpoint.com/"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  ReactGa.event({
                    category: "Work",
                    action: "Viewed SailPoint role",
                  });
                }}
              >
                <h3 className="p-0 m-0 pt-2 text-4xl font-bold mb-4 dark:text-gray-200">
                  Software Engineer II
                </h3>
              </a>
              <p className="p-0 m-0 text-3xl mb-2 dark:text-gray-200">
                SailPoint Technologies
              </p>
              <p className="p-0 m-0 text-2xl dark:text-gray-200 text-gray-500 before:content-['['] dark:before:text-teal-500 before:text-indigo-500 after:text-indigo-500 after:font-bold before:font-bold after:content-[']'] dark:after:text-teal-500 after:text-indigo-500after:font-bold">
                &nbsp; June 2024 - Present &nbsp;
              </p>
            </div>
          </div>
          <p className="relative pb-4 md:border-b dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
            • Decomposed Java monolith into 8 event-driven Golang microservices (Kafka + Redis) to cut p99 API latency 50%, reduce load 45%, and save $50K/year.
            <br />
            • Architected distributed systems achieving 99.9% uptime across 2M+ daily users and reduced MTTR from 45min to 29min via automated failover and observability.
            <br />
            • Built multi-tenant auth platform (OAuth2/SAML/JWT) processing 50M+ daily requests, adding dynamic token refresh, rate limits, and SOC2-compliant revocation.
            <br />
            • Optimized PostgreSQL schemas with composite indexes and query tuning, improving p95 latency from 2.1s to 650ms while supporting 3x traffic.
            <br />
            • Orchestrated Temporal-based provisioning workflows with retries and exponential backoff, reducing customer onboarding failures 75%.
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
                href="https://www.ufl.edu/"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  ReactGa.event({
                    category: "Work",
                    action: "Viewed UF role",
                  });
                }}
              >
                <h3 className="p-0 m-0 pt-2 text-4xl font-bold mb-4 dark:text-gray-200">
                  Software Engineer
                </h3>
              </a>
              <p className="p-0 m-0 text-3xl mb-2 dark:text-gray-200">
                University of Florida
              </p>
              <p className="p-0 m-0 text-2xl dark:text-gray-200 text-gray-500 before:content-['['] dark:before:text-teal-500 before:text-indigo-500 after:text-indigo-500 after:font-bold before:font-bold after:content-[']'] dark:after:text-teal-500 after:text-indigo-500after:font-bold">
                &nbsp; May 2023 - June 2024 &nbsp;
              </p>
            </div>
          </div>
          <p className="relative pb-4 md:border-b dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
            • Built backend grant management system (C#/.NET + MySQL) with role-based access control and optimized schemas, processing $50M+ in research funding for 50+ faculty investigators; cut query execution time 30%.
            <br />
            • Designed Python ETL pipeline for financial analytics with automated data visualizations, enabling portfolio rebalancing decisions that produced a $2.5M value increase.
            <br />
            • Designed and implemented RESTful APIs using Spring Boot with gRPC for inter-service communication; achieved sub-100ms p95 latency at 10K requests/second with 99.5% uptime.
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
                href="https://www.dxc.com/"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  ReactGa.event({
                    category: "Work",
                    action: "Viewed DXC role",
                  });
                }}
              >
                <h3 className="p-0 m-0 pt-2 text-4xl font-bold mb-4 dark:text-gray-200">
                  Software Engineer
                </h3>
              </a>
              <p className="p-0 m-0 text-3xl mb-2 dark:text-gray-200">
                DXC Technology
              </p>
              <p className="p-0 m-0 text-2xl dark:text-gray-200 text-gray-500 before:content-['['] dark:before:text-teal-500 before:text-indigo-500 after:text-indigo-500 after:font-bold before:font-bold after:content-[']'] dark:after:text-teal-500 after:text-indigo-500after:font-bold">
                &nbsp; June 2021 - December 2021 &nbsp;
              </p>
            </div>
          </div>
          <p className="relative pb-4 md:border-b dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
            • Developed microservices-based insurance claims processing platform (Spring Boot + Oracle SQL) handling 10K+ daily transactions at 99.5% SLA.
            <br />
            • Optimized database queries and connection pooling, doubling concurrent user capacity and cutting average transaction time 40% while maintaining sub-second response.
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
