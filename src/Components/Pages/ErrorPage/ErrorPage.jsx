import { Link } from "react-router-dom";
import vector from "../../../assets/ErrorVector.png";
const ErrorPage = () => {
  return (
    <div className="bg-blue-300/10 min-h-screen flex flex-col justify-center items-center p-5">
      <img src={vector} alt="" className="sm:max-w-sm md:max-w-lg" />
      <Link
        to="/"
        className="bg-blue-300/20 border-b-4 border-r-4 border-b-blue-300 border-r-blue-300 p-3 rounded-lg text-blue-300 font-bold w-full text-center sm:max-w-sm md:max-w-lg hover:scale-105"
      >
        Go Back To Home{" "}
      </Link>{" "}
    </div>
  );
};

export default ErrorPage;
