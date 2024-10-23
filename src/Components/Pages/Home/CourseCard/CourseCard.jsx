import { useNavigate } from "react-router-dom";
import courseData from "../../../../assets/CourseData";

const CourseCard = () => {
  const navigate = useNavigate();

  const truncateText = (text) => {
    return text.split(" ").slice(0, 10).join(" ") + "...";
  };

  const handleSeeMore = (id) => {
    navigate(`/course-details/${id}`);
  };

  return (
    <div className="grid grid-cols-12 gap-5">
      {courseData.map((course) => (
        <div
          key={course.id}
          className="col-span-12 lg:col-span-4 border shadow-md p-5 rounded-2xl space-y-3 text-black transform transition-all hover:scale-95"
        >
          <img
            src={course.image}
            alt={course.title}
            className="rounded-t-2xl h-60 w-full shadow-md"
          />
          <div className="space-y-2">
            <h2 className="font-extrabold text-base">{course.title}</h2>
            <p>
              {truncateText(course.description)}{" "}
              <button
                onClick={() => handleSeeMore(course.id)}
                className="text-blue-300 font-bold"
              >
                See more
              </button>
            </p>
            <hr />
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <p>{course.price}</p>
                <p>{course.discount}</p>
                <p>{course.currentPrice}</p>
              </div>
              <p className="text-blue-300 font-bold text-sm">{course.offer}</p>
            </div>
            <button className="w-full bg-blue-300 font-bold text-base text-white py-3 rounded-lg">
              Enroll Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseCard;
