import styled from "styled-components";
import tw from "twin.macro";
import ReactGa from "react-ga4";

const Project = () => {
  return (
    <>
      <header
        id="Project"
        className="flex flex-col items-center gap-4 mt-28 mb-16"
      >
        <h2 className="text-3xl tablet:text-4xl text-center font-headings text-indigo-500 dark:text-teal-500">
          PROJECTS
        </h2>
        <h1 className="text-5xl tablet:text-6xl text-center font-headings dark:text-gray-200">
          A collection of Academic and Personal Projects
        </h1>
      </header>

      {/* //* 1st Card  */}
      <MainGrid className="bg-gradient-to-b from-violet-50 to-violet-300  border-violet-100 dark:from-slate-900 dark:to-fuchsia-700 dark:border-fuchsia-800 dark:border-t ">
        <LeftGrid className="order-2">
          <h2 className="text-5xl dark:text-gray-200">
          Airbnb Clone
          </h2>
          <p>
          Introducing a MERN stack Airbnb Clone web application, designed to seamlessly blend user 
          authentication through OAuth and JWT, property listing, and reservation capabilities—all powered by an array of REST API endpoints.
        
          </p>
          <div>
            <Button
              href="https://github.com/nikhithasudati/Book_My_Stay"
              target="_blank"
              rel="noreferrer"
              className="group"
              onClick={() => {
                ReactGa.event({
                  category: "Airbnb Clone",
                  action: "Source code",
                });
                navigator.vibrate(900);
              }}
            >
            Source Code
              <svg
                fill="none"
                width="12"
                height="12"
                viewBox="0 0 10 10"
                aria-hidden="true"
                className="group"
              >
                <path
                  className="transition opacity-0 group-hover:opacity-100"
                  d="M0 5h7"
                ></path>
                <path
                  className="transition group-hover:translate-x-[3px]"
                  d="M1 1l4 4-4 4"
                ></path>
              </svg>
            </Button>
          </div>
        </LeftGrid>
        <main className="md:order-2 select-none">
          <Span1>
            <Span2>
              <Span2Img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27924%27%20height=%27718%27/%3e"
              />
            </Span2>
            <Img
              alt="Airbnb Clone"
              decoding="async"
              data-nimg="intrinsic"
              srcSet="https://ik.imagekit.io/sz5ttlvhz/projects/4.png?updatedAt=1695492326904"
              className="!m-0 !max-w-[100%] !max-h-[100%] !p-12"
              data-aos="fade-left"
              data-aos-offset="400"
              data-aos-duration="500"
              loading="lazy"
            />
          </Span1>
        </main>
      </MainGrid>
        


      {/* //* 2nd Card  */}
      <MainGrid className="bg-gradient-to-b from-sky-50 to-amber-300 border-amber-100 dark:from-slate-900 dark:to-rose-700 dark:border-rose-800 dark:border-t ">
        <LeftGrid className="order-1">
          <h2 className="text-6xl dark:text-gray-200">Twitter Clone Engine </h2>
          <p>
                Twitter-like engine using actor model in erlang, with features Register,Tweet, Retweet, Subscribe, Query tweets.  
            
          </p>
          <div>
          <Button
              href="https://github.com/nikhithasudati/Twitter_clone"
              rel="noreferrer"
              className="group"
              onClick={() => {
                ReactGa.event({
                  category: "Twitter Clone",
                  action: "Source code",
                });
                navigator.vibrate(900);
              }}
            >
              Source Code
              <svg
                fill="none"
                width="12"
                height="12"
                viewBox="0 0 10 10"
                aria-hidden="true"
                className="group"
              >
                <path
                  className="transition opacity-0 group-hover:opacity-100"
                  d="M0 5h7"
                ></path>
                <path
                  className="transition group-hover:translate-x-[3px]"
                  d="M1 1l4 4-4 4"
                ></path>
              </svg>
            </Button>        
          </div>
        </LeftGrid>
        <main className="select-none">
          <Span1>
            <Span2>
              <Span2Img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27924%27%20height=%27718%27/%3e"
              />
            </Span2>
            <Img
              alt="Twitter Clone"
              decoding="async"
              data-nimg="intrinsic"
              srcSet="https://ik.imagekit.io/sz5ttlvhz/projects/2.png?updatedAt=1695492326138"
              className="!ml-0 !max-w-[100%] !max-h-[100%] !p-12"
              data-aos="fade-right"
              data-aos-offset="400"
              data-aos-duration="500"
              loading="lazy"
            />
          </Span1>
        </main>
      </MainGrid>

      {/* //* 3rd Card  */}
      <MainGrid className="bg-gradient-to-b from-sky-50 to-sky-300 border-sky-100 dark:from-slate-900 dark:to-pink-700 dark:border-pink-800 dark:border-t ">
        <LeftGrid className="order-2">
          <h2 className="text-6xl dark:text-gray-200">ExxonMobil UX Design</h2>
          <p>
            Employee Appreciation UX Design for Exxon Mobil 🚀💥💣
          </p>
          <div>
          <Button
              href="https://www.youtube.com/watch?v=-lOgPe6-czw"
              rel="noreferrer"
              className="group"
              onClick={() => {
                ReactGa.event({
                  category: "UX Design",
                  action: "Source code",
                });
                navigator.vibrate(900);
              }}
            >
              Source Code
              <svg
                fill="none"
                width="12"
                height="12"
                viewBox="0 0 10 10"
                aria-hidden="true"
                className="group"
              >
                <path
                  className="transition opacity-0 group-hover:opacity-100"
                  d="M0 5h7"
                ></path>
                <path
                  className="transition group-hover:translate-x-[3px]"
                  d="M1 1l4 4-4 4"
                ></path>
              </svg>
            </Button>
          </div>
        </LeftGrid>
        <main className="md:order-2 select-none">
          <Span1>
            <Span2>
              <Span2Img
                alt="UX Design"
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27924%27%20height=%27718%27/%3e"
              />
            </Span2>
            <Img
              alt="UX Design ExxonMobil"
              decoding="async"
              data-nimg="intrinsic"
              srcSet="https://ik.imagekit.io/sz5ttlvhz/projects/3.png?updatedAt=1695492326507"
              className="!ml-0 !max-w-[100%] !max-h-[100%] !p-12"
              data-aos="fade-left"
              data-aos-offset="400"
              data-aos-duration="500"
              loading="lazy"
            />
          </Span1>
        </main>
      </MainGrid>

      {/* //* 4th Card  */}
      <MainGrid className="bg-gradient-to-b from-purple-50 to-purple-300 border-purple-100 dark:from-slate-900 dark:to-purple-800 dark:border-purple-800 dark:border-t ">
        <LeftGrid className="order-1">
          <h2 className="text-5xl dark:text-gray-200">Gesture Recognition</h2>
          <p>
          Recognizing Keystroke Gestures: Unistroke and Multistroke Recognition with the 1$ and P$ Algorithms.   </p>
          <div>
            <Button
              href="https://github.com/nikhithasudati/HCIRA"
              rel="noreferrer"
              className="group"
              onClick={() => {
                ReactGa.event({
                  category: "Key stroke recognition",
                  action: "Source code",
                });
                navigator.vibrate(900);
              }}
            >
              Source Code
              <svg
                fill="none"
                width="12"
                height="12"
                viewBox="0 0 10 10"
                aria-hidden="true"
                className="group"
              >
                <path
                  className="transition opacity-0 group-hover:opacity-100"
                  d="M0 5h7"
                ></path>
                <path
                  className="transition group-hover:translate-x-[3px]"
                  d="M1 1l4 4-4 4"
                ></path>
              </svg>
            </Button>
          </div>
        </LeftGrid>
        <main className="select-none">
          <Span1>
            <Span2>
              <Span2Img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27924%27%20height=%27718%27/%3e"
              />
            </Span2>
            <Img
              alt="KeyStroke recognition"
              decoding="async"
              data-nimg="intrinsic"
              srcSet="https://ik.imagekit.io/sz5ttlvhz/projects/8.png?updatedAt=1695492326215"
              className="!ml-0 !max-w-[100%] !max-h-[100%] !p-12"
              data-aos="fade-right"
              data-aos-offset="400"
              data-aos-duration="500"
              loading="lazy"
            />
          </Span1>
        </main>
      </MainGrid>

      {/* //* 5th Card  */}
      <MainGrid className="bg-gradient-to-b from-violet-50 to-violet-300  border-violet-100 dark:from-slate-900 dark:to-fuchsia-700 dark:border-fuchsia-800 dark:border-t ">
        <LeftGrid className="order-2">
          <h2 className="text-5xl dark:text-gray-200">
            American Sign Language
          </h2>
          <p>
          An American Sign Language(ASL) hand sign recognition app using CNN and RNN for enhanced communication accessibility          </p>
          <div>
            <Button
              href="https://github.com/nikhithasudati/American-hand-sign-recognition"
              target="_blank"
              rel="noreferrer"
              className="group"
              onClick={() => {
                ReactGa.event({
                  category: "Sign Language",
                  action: "Source code",
                });
                navigator.vibrate(900);
              }}
            >
            Source Code
              <svg
                fill="none"
                width="12"
                height="12"
                viewBox="0 0 10 10"
                aria-hidden="true"
                className="group"
              >
                <path
                  className="transition opacity-0 group-hover:opacity-100"
                  d="M0 5h7"
                ></path>
                <path
                  className="transition group-hover:translate-x-[3px]"
                  d="M1 1l4 4-4 4"
                ></path>
              </svg>
            </Button>
          </div>
        </LeftGrid>
        <main className="md:order-2 select-none">
          <Span1>
            <Span2>
              <Span2Img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27924%27%20height=%27718%27/%3e"
              />
            </Span2>
            <Img
              alt="Sign Language"
              decoding="async"
              data-nimg="intrinsic"
              srcSet="https://ik.imagekit.io/sz5ttlvhz/projects/5.png?updatedAt=1695492326819"
              className="!m-0 !max-w-[100%] !max-h-[100%] !p-12"
              data-aos="fade-left"
              data-aos-offset="400"
              data-aos-duration="500"
              loading="lazy"
            />
          </Span1>
        </main>
      </MainGrid>
      {/* 6th grid */}

      <MainGrid className="bg-gradient-to-b from-sky-50 to-sky-300 border-sky-100 dark:from-slate-900 dark:to-pink-700 dark:border-pink-800 dark:border-t ">
        <LeftGrid className="order-1">
          <h2 className="text-5xl dark:text-gray-200">Peer-to-Peer file sharing software</h2>
          <p>
          An effective file sharing software using a choke-unchoke mechanism, allowing downloads from multiple peers.   </p>
          <div>
            <Button
              href="https://github.com/nikhithasudati/Peer-to-Peer-filesharing"
              rel="noreferrer"
              className="group"
              onClick={() => {
                ReactGa.event({
                  category: "P2P",
                  action: "Source code",
                });
                navigator.vibrate(900);
              }}
            >
              Source Code
              <svg
                fill="none"
                width="12"
                height="12"
                viewBox="0 0 10 10"
                aria-hidden="true"
                className="group"
              >
                <path
                  className="transition opacity-0 group-hover:opacity-100"
                  d="M0 5h7"
                ></path>
                <path
                  className="transition group-hover:translate-x-[3px]"
                  d="M1 1l4 4-4 4"
                ></path>
              </svg>
            </Button>
          </div>
        </LeftGrid>
        <main className="select-none">
          <Span1>
            <Span2>
              <Span2Img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27924%27%20height=%27718%27/%3e"
              />
            </Span2>
            <Img
              alt="P2p"
              decoding="async"
              data-nimg="intrinsic"
              srcSet="https://ik.imagekit.io/sz5ttlvhz/projects/8%20(1).png?updatedAt=1696430696878"
              className="!ml-0 !max-w-[100%] !max-h-[100%] !p-12"
              data-aos="fade-right"
              data-aos-offset="400"
              data-aos-duration="500"
              loading="lazy"
            />
          </Span1>
        </main>
      </MainGrid>
    </>
  );
};

const MainGrid = styled.section`
  ${tw`
    grid
    grid-cols-1
    gap-2
    rounded-[2.5rem]
    mb-20
    p-2
    md:p-0
    md:grid-cols-2
    `}
`;

const LeftGrid = styled.article`
  ${tw`
  flex
  flex-col
  self-end 
  col-span-1 
  text-center 
  !mb-20 
  md:text-left
  md:m-8
  md:ml-20 
`}

  &>h2 {
    ${tw` 
    font-headings 
    font-bold 
    mt-0 
    ml-2 
    mb-10
    `}
  }

  & > p {
    ${tw`
      font-sans 
      text-3xl
      ml-2 
      pr-4
      md:text-left
      dark:text-gray-200
    `}
  }
`;

const Button = styled.a`
  ${tw`
    bg-midnight 
    text-white 
    inline-flex 
    text-[1.7rem] 
    items-center 
    rounded-full 
    font-semibold 
    no-underline
    transition
    px-10 
    py-3.5 
    mt-16 
    dark:bg-gray-200 
    dark:text-midnight 
    hover:bg-slate-700 
    select-none
  `}

  svg {
    ${tw`
      stroke-2 
      stroke-white 
      mt-0.5 
      ml-4 
      -mr-3 
      dark:stroke-midnight
    `}
  }
`;


const Span1 = styled.span`
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  overflow: hidden;
  background: none;
  opacity: 1;
  border: 0px;
  width: initial;
  height: initial;
  margin: 0px;
  padding: 0px;
  max-width: 100%;
`;

const Span2 = styled.span`
  box-sizing: border-box;
  display: block;
  background: none;
  opacity: 1;
  border: 0px;
  width: initial;
  height: initial;
  margin: 0px;
  padding: 0px;
  max-width: 100%;
`;

const Span2Img = styled.img`
  display: block;
  background: none;
  opacity: 1;
  border: 0px;
  max-width: 100%;
  width: initial;
  height: initial;
  margin: 0px;
  padding: 0px;
`;

const Img = styled.img`
  display: block;
  box-sizing: border-box;
  position: absolute;
  inset: 0px;
  object-fit: fill;
  border: none;
  padding: 0rem;
  margin: auto;
  width: auto !important;
  min-width: 100%;
  min-height: 100%;

  ${tw`
    md:ml-32
    md:[height: 68rem]
  `}
`;

export { Project, Button };