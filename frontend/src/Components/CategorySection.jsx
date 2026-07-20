import React from "react";

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      title: "Fresh Flowers",
      image:
        "https://plus.unsplash.com/premium_photo-1676475964992-6404b8db0b53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlc2glMjBmbG93ZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      title: "Cakes",
      image:
        "https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Gift Combos",
      image:
        "https://plus.unsplash.com/premium_photo-1663837827306-49d038d62b90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdpZnQlMjBjb21ib3N8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      title: "Plants",
      image:
        "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGxhbnRzfGVufDB8fDB8fHww",
    },
    {
      id: 5,
      title: "Wedding Flowers",
      image:
        "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZyUyMGZsb3dlcnN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 6,
      title: "Birthday Specials",
      image:
        "https://images.unsplash.com/photo-1583875762487-5f8f7c718d14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlydGhkYXklMjBzcGVjaWFscyUyMG9yJTIwYW5pdmVyc3J5fGVufDB8fDB8fHww",
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
          <div key={category.id} className="group cursor-pointer">
            <div className="overflow-hidden rounded-2xl h-56 shadow-md">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <h3 className="text-center mt-4 font-semibold text-gray-800">
              {category.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
