import React from "react";
import { Link } from "react-router-dom";

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      title: "Fresh Flowers",
      path: "/flowers",
      image:
        "https://plus.unsplash.com/premium_photo-1676475964992-6404b8db0b53?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      title: "Cakes",
      path: "/cakes",
      image:
        "https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Gift Combos",
      path: "/combos",
      image:
        "https://plus.unsplash.com/premium_photo-1663837827306-49d038d62b90?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 4,
      title: "Plants",
      path: "/plants",
      image:
        "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 5,
      title: "Wedding Flowers",
      path: "/flowers",
      image:
        "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 6,
      title: "Birthday Specials",
      path: "/cakes",
      image:
        "https://images.unsplash.com/photo-1583875762487-5f8f7c718d14?w=600&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <section className="py-14 px-6 bg-[#fffaf8]">
      <h2 className="text-center text-4xl font-bold font-playfair text-gray-900">
        Shop By Category
      </h2>

      <p className="text-center text-gray-500 mt-3 mb-10">
        Find the perfect gift for every occasion
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={category.path}
            className="group cursor-pointer">
            <div className="overflow-hidden rounded-2xl h-56 shadow-md">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <h3 className="text-center mt-4 font-semibold text-gray-800 group-hover:text-[#e85877] transition">
              {category.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
