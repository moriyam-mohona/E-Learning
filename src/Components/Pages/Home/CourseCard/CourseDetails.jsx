import { useParams } from "react-router-dom";
import { useState } from "react";
import courseData from "../../../../assets/CourseData";
import { FaUnlockKeyhole } from "react-icons/fa6";

const CourseDetails = () => {
  const { id } = useParams();
  const course = courseData.find((course) => course.id === parseInt(id));

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded((prev) => !prev);
  };

  const truncatedDescription =
    course.description.split(" ").slice(0, 30).join(" ") + "..."; // Get first 10 words

  // Dummy lesson data
  const lessons = [
    {
      id: 1,
      topic: "মোবাইল ক্যামেরার ফিচার সমূহ",
      duration: "8.28 minutes",
      quiz: "Quiz -1",
    },
    {
      id: 2,
      topic: "ছবি তোলার পূর্ব প্রস্তুতি সমূহ",
      duration: "5.14 minutes",
      quiz: "Quiz -2",
    },
    {
      id: 3,
      topic: "রুল অফ থার্ড, ফ্রেম টু ফ্রেম",
      duration: "4.40 minutes",
      quiz: "Quiz -3",
    },
    {
      id: 4,
      topic: "Leading Line, Symmetry",
      duration: "4.02 minutes",
      quiz: "Quiz -4",
    },
    { id: 5, topic: "Pattern", duration: "4.08 minutes", quiz: "Quiz -5" },
    {
      id: 6,
      topic: "মোবাইল ব্যালেন্সিং টেকনিক",
      duration: "8.12 minutes",
      quiz: "Quiz -6",
    },
    {
      id: 7,
      topic: "ন্যাচারাল লাইটের ব্যবহার",
      duration: "3.48 minutes",
      quiz: "Quiz -7",
    },
    {
      id: 8,
      topic: "আর্টিফিশিয়াল লাইটের ব্যবহার",
      duration: "5.09 minutes",
      quiz: "Quiz -8",
    },
    { id: 9, topic: "এডিটিং এপস", duration: "3.35 minutes", quiz: "Quiz -9" },
    {
      id: 10,
      topic: "বেসিক এডিটিং, এক্সপোর্ট করার নিয়ম",
      duration: "6.23 minutes",
      quiz: "Quiz -10",
    },
  ];
  const teacherDetails = [
    {
      id: 1,
      image: "https://i.ibb.co/5F9yQdL/Art-Land-Bd-Ltd-63060350dec79.png",
      name: "Mr. Abc",
      details:
        "An experienced teacher with a passion for education.An experienced teacher with a passion for education. An  teacher with a passion for . experienced teacher with a passion for education. An experienced teacher with a  for education.An experienced teacher with a passion for. An experienced teacher with a passion for education.",
    },
  ];

  return (
    <>
      {/* Course Details  */}
      <div className="grid grid-cols-12 gap-5 md:gap-7 lg:gap-10 space-y-5 ">
        <img
          src={course.image}
          alt={course.title}
          className="col-span-12 lg:col-span-5 rounded-xl"
        />
        <div className="col-span-12 lg:col-span-7">
          <h2 className="font-extrabold text-xl">{course.title}</h2>
          <p className="mt-3 font-medium text-sm">
            {isExpanded ? course.description : truncatedDescription}
            <button
              onClick={toggleDescription}
              className="text-blue-300 font-bold ml-2"
            >
              {isExpanded ? "See Less" : "See More"}
            </button>
          </p>
          <p className="mt-2">
            <strong>Price:</strong> {course.currentPrice} (
            <strong>Discount</strong>: {course.discount})
          </p>
          <div className="flex justify-between gap-5">
            <button className="w-full mt-4 bg-blue-300 text-white font-bold py-2 px-4 rounded-md">
              Enroll Now
            </button>
            <button className="w-full mt-4 border-2 text-blue-300 border-blue-300 hover:bg-blue-300 hover:text-white font-bold py-2 px-4 rounded-md">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      {/* Lessons Section  */}
      <div className="mt-20">
        <h2 className="mt-5 font-bold text-4xl mb-8">Lessons in this Course</h2>
        <ul className="mt-3">
          {lessons.map((lesson) => (
            <li
              key={lesson.id}
              className="flex justify-between items-center rounded-lg bg-gray-50 mt-3 p-4 shadow-md transition-transform duration-700   hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <FaUnlockKeyhole className="text-gray-300" />
                <div className="flex flex-col">
                  <h2 className="font-bold">{lesson.quiz}</h2>
                  <p className="text-sm text-black/50">{lesson.topic}</p>
                </div>
              </div>
              <p className="text-black/50">{lesson.duration}</p>
            </li>
          ))}
        </ul>
      </div>
      {/* Teacher Details */}

      <div className="mt-20">
        <h2 className="mt-5 font-bold text-4xl mb-8">Meet your teacher</h2>
        <div className="">
          {teacherDetails.map((teacher) => (
            <div key={teacher.id} className="grid grid-cols-12 gap-5">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="rounded-lg w-full mb-5 col-span-12 md:col-span-6"
              />
              <div className="col-span-12 md:col-span-6">
                <h2 className="font-bold text-2xl">{teacher.name}</h2>
                <p>{teacher.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
