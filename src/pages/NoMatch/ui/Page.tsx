import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <section>
      <div className="container flex flex-col justify-between gap-y-3 items-center h-full">
        <h1 className="text-8xl font-bold">404</h1>
        <p className="text-2xl font-medium">Page not found</p>
        <Link to="/" className="btn btn-primary">
          Go back
        </Link>
      </div>
    </section>
  );
};

export default NoMatch;
