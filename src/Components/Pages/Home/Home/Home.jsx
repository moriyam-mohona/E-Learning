import Banner from "../Banner/Banner";
import CategoryButtons from "../CategoryButtons/CategoryButtons";
import CourseCard from "../CourseCard/Coursecard";

const Home = () => {
  return (
    <div className="space-y-10 mt-5">
      <Banner />
      <CategoryButtons />
      <CourseCard />
    </div>
  );
};

export default Home;
