import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col gap-5 justify-center items-center">
      <h2 className="font-bold text-7xl text-blue-300">404 Error</h2>
      <Link to="/" className="bg-blue-300 p-3 rounded-lg text-white font-bold ">
        Go to home{" "}
      </Link>{" "}
    </div>
  );
};

export default ErrorPage;
