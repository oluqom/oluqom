const Home = () => {
  return (
    <>
      <section className="bg-base-200">
        <div className="hero relative min-h-[calc(100vh-128px)] container">
          <div className="hero-content flex-col gap-x-8 lg:flex-row-reverse">
            <img
              src="/me.jpg"
              className="max-w-sm z-40 mask mask-squircle shadow-2xl shadow-primary"
            />
            <div className="flex flex-col gap-y-5">
              <h1 className="text-5xl font-bold text-white">Hi, I'm Aleksey</h1>
              <p className="text-2xl font-normal text-white">
                A frontend developer with a year of experience. I started
                programming at the age of 16 and continue to improve my skills.
                I am also good at teamwork, have good Soft-skills.
              </p>
            </div>
            <div className="absolute -top-24 -left-48 w-48 h-48 blur-[150px] bg-primary rounded-full"></div>
            <div className="absolute -bottom-24 -right-48 w-48 h-48 blur-[150px] bg-secondary rounded-full"></div>
          </div>
        </div>
      </section>
      {/* <section className="bg-base-200">
        <div className="container">
          <div className="gap-x-5 py-20 justify-center flex items-center">
            <div className="flex flex-col gap-y-3 w-[600px]">
              <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-yellow-400">
                React Pizza
              </h2>
              <p className="text-xl text-white">
                React Pizza is a single-page web application for ordering pizza
                online. Built with React and Redux, the app features a
                responsive design and a user-friendly interface that allows
                customers to customize their pizza with various toppings and
                sauces.
              </p>
              <div className="flex gap-x-3">
                <a className="btn btn-neutral text-white" href="#">
                  Site
                </a>
                <a className="btn btn-neutral text-white" href="#">
                  Source
                </a>
              </div>
            </div>
            <img className="mask mask-squircle w-96 h-96" src="/me.jpg" />
          </div>
          <div className="gap-x-5 py-20 justify-center flex items-center">
            <div className="flex flex-col gap-y-3 w-[600px]">
              <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-cyan-400">
                Weather App
              </h2>
              <p className="text-xl text-white">
                Weather App is a simple and intuitive web application that
                provides up-to-date weather information for any location in the
                world. Built with React and powered by the OpenWeatherMap API.
              </p>
              <div className="flex gap-x-3">
                <a className="btn btn-neutral text-white" href="#">
                  Site
                </a>
                <a className="btn btn-neutral text-white" href="#">
                  Source
                </a>
              </div>
            </div>
            <img className="mask mask-squircle w-96 h-96" src="/me.jpg" />
          </div>
          <div className="gap-x-5 py-20 justify-center flex items-center">
            <div className="flex flex-col gap-y-3 w-[600px]">
              <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-primary">
                YumeTune
              </h2>
              <p className="text-xl text-white">
                YumeTune is a music streaming service that allows users to
                discover and listen to their favorite Japanese anime and video
                game soundtracks. Built with React + Tailwind, the app features
                a sleek and modern interface with easy-to-use navigation and
                search functionality.
              </p>
              <div className="flex gap-x-3">
                <a className="btn btn-neutral text-white" href="#">
                  Site
                </a>
                <a className="btn btn-neutral text-white" href="#">
                  Source
                </a>
              </div>
            </div>
            <img className="mask mask-squircle w-96 h-96" src="/me.jpg" />
          </div>
        </div>
      </section> */}
      <section className="bg-base-200">
        <div className="container py-32">
          <h2 className="text-2xl font-bold text-white">My Stack:</h2>
          <div className="gap-2 flex-col items-center justify-center flex">
            <div className="flex gap-2">
              <img
                className=""
                src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
              />
              <img
                className=""
                src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
              />
              <img
                className=""
                src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
              />
              <img
                className=""
                src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
              />
            </div>
            <div className="flex gap-3">
              <img
                className=""
                src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
              />
              <img
                className=""
                src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
              />
              <img
                className=""
                src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"
              />
              <img
                className=""
                src="https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
              />
              <img
                className=""
                src="https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white"
              />
            </div>
            <div className="flex gap-3">
              <img
                className=""
                src="https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white"
              />
              <img
                className=""
                src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white"
              />
              <img
                className=""
                src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-base-200">
        <div className="container py-32 flex flex-col gap-y-3">
          <h2 className="text-5xl text-white font-bold">About Me</h2>       
          <p className="text-xl text-white">
            My journey in programming started with simple lendings and bug
            fixes, but now I'm developing large, scalable and complex web
            applications. Now I'm actively using React for development and
            writing unit tests to ensure the quality of my code. I also use
            TailwindCSS and DaisyUI to create user interfaces quickly and
            easily.
          </p>
          <p></p>
        </div>
      </section>
    </>
  );
};

export default Home;
