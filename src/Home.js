// import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;

// import { useState, useEffect } from "react";
// import BlogList from "./BlogList";

// const Home = () => {
//   //parent component
//   const [blogs, setBlogs] = useState([
//     { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
//     { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
//     {
//       title: "Web dev top tips",
//       body: "lorem ipsum...",
//       author: "mario",
//       id: 3,
//     },
//   ]);

//   const handleDelete = (id) => {
//     const newBlogs = blogs.filter((blog) => blog.id !== id);
//     setBlogs(newBlogs);
//   };

//   useEffect(() => {
//     console.log("use effect run");
//     console.log(blogs);
//   });

//   return (
//     <div className="home">
//       <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
//       {/* <BlogList
//         // blogs={blogs.filter((blogs) => blogs.author === "mario")}
//         // title="Mario's blogs"
//       // /> */}
//     </div>
//   );
// };
// export default Home;
// //   const [name, setName] = useState("Arjuna");
// //   const [age, setAge] = useState(25);
// //   // we can use the components as many times as needed and the value for useState may be an array, boolean, object,  or a number

// //   const handleClick = () => {
// //     setName("Krishna");
// //     setAge(30);
// //   };

// //   // const handleClick = (e) => {
// //   //   console.log("Hello ninjas", e);
// //   // };
// //   // const handleClickAgain = (name, e) => {
// //   //   console.log("hello" + name, e.target);
// //   // };
// //   return (
// //     <div className="home">
// //       <h2>Homepage</h2>
// //       <p>
// //         {name} is {age} years old
// //       </p>
// //       {/* <button onClick={handleClick}>Click me </button> */}

// //       <button onClick={(e) => handleClick(e)}>Click me</button>
// //       {/* <button onClick={(e) => handleClickAgain("mario", e)}>
// //         Click me again
// //       </button> */}
// //     </div>
// //   );
// // };
