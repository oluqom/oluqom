const Home = () => {
  return (
    <>
      <section>
        <div className="hero min-h-[calc(100vh-128px)] bg-base-200">
          <div className="hero-content flex-col gap-x-8 lg:flex-row-reverse">
            <img src="/me.jpg" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">Hi, I'm Aleksey</h1>
              <p className="py-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. In
                nisl nisi scelerisque eu ultrices. Auctor eu augue ut lectus
                arcu bibendum at. Integer vitae justo eget magna fermentum. Non
                quam lacus suspendisse faucibus interdum posuere lorem ipsum.
              </p>
              <button className="btn btn-primary">More</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
