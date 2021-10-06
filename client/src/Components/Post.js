import React from "react";

function Post() {
  return (
    <div className='flex flex-col'>
      <div className='p-3 bg-white mt-5 rounded-t-2xl shadow-xl'>
        <div className='flex items-center space-x-2  ' >
          <img
            src="/assets/ben-parker-OhKElOkQ3RE-unsplash.jpg"
            className="rounded-full h-12 w-12 object-cover"
            alt=""
          />
          
              <p className='font-extrabold '>John Doe</p>
          
        </div>
        <p className='font-bold'>Hello World</p>
      </div>
      <div className='relative h-96 bg-white'>
          <img src="assets/ben-den-engelsen-7TU5JJAwPyU-unsplash.jpg " alt="" objectFit='cover'/>
      </div>
    </div>
  );
}

export default Post;
