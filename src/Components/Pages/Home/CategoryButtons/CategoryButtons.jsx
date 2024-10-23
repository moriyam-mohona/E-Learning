const categories = [
  "বিসিএস",
  "NTRC",
  "আইনজীবী সনদ",
  "ভার্সিটি এডমিশন",
  "নার্সিং",
  "নার্সিং",
];

const CategoryButtons = () => {
  return (
    <div className="grid grid-cols-12 gap-5">
      {categories.map((category, index) => (
        <div
          key={index}
          className="col-span-6 md:col-span-2 shadow-md bg-blue-300/10 border-r-blue-300 border-b-blue-300 border-r-8 border-b-8 py-6 px-3 rounded-lg transform transition-transform duration-300 hover:scale-100 hover:-translate-y-0.5"
        >
          <p className="flex items-center justify-center gap-2 font-extrabold text-black/90 text-base">
            {category}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CategoryButtons;
