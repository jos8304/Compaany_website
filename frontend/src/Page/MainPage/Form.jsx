import React from "react";

const Form = () => {
  const dummyPosts = [
    {
      _id: 1,
      number: 1,
      title: "frist post",
      views: 120,
      fileUrl: ["file1"],
      createdAt: "2023-01-01",
    },
    {
      _id: 2,
      number: 2,
      title: "second post",
      views: 95,
      fileUrl: [],
      createdAt: "2023-01-05",
    },
    {
      _id: 3,
      number: 3,
      title: "third post",
      views: 70,
      fileUrl: ["file2", "file3"],
      createdAt: "2023-01-10",
    },
    {
      _id: 4,
      number: 4,
      title: "fourth post",
      views: 50,
      fileUrl: [],
      createdAt: "2023-01-15",
    },
    {
      _id: 5,
      number: 5,
      title: "five post",
      views: 30,
      fileUrl: ["file4"],
      createdAt: "2023-01-20",
    },
  ];
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-28 lg:px-10 xl:px-20">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Explore the latest posts</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Get all the latest posts from all over the internet.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-5">
          {dummyPosts.map((post) => (
            <div
              key={post._id}
              className="border shadow rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {post.title}
                  </h2>
                  <div className="text-sm font-medium text-gray-500">
                    {post.createdAt}
                  </div>
                </div>
                <p className="mt-2 text-base text-gray-500">
                  {post.views} views
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Form;
