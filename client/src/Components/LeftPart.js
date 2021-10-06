import React from "react";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
function LeftPart() {
  return (
    <div className=" flex max-w-md flex-grow border-2 ">
        <div className='flex flex-col'>
      <ul className=' ml-3 text-xl flex flex-col space-y-7 p-9 '>
        <li className='flex items-center space-x-4 hover:bg-gray-200 cursor-pointer'>
          <RssFeed />
          <span>Feed</span>
        </li>
        <li className='flex items-center space-x-4' >
          <Chat  />
          <span >Chats</span>
        </li>
        <li className='flex items-center space-x-4' >
          <PlayCircleFilledOutlined  />
          <span >Videos</span>
        </li>
        <li className='flex items-center space-x-4' >
          <Group  />
          <span >Groups</span>
        </li>
        <li className='flex items-center space-x-4' >
          <Bookmark  />
          <span >Bookmarks</span>
        </li>
        <li className='flex items-center space-x-4' >
          <HelpOutline  />
          <span >Questions</span>
        </li>
        <li className='flex items-center space-x-4' >
          <WorkOutline  />
          <span >Jobs</span>
        </li>
        <li className='flex items-center space-x-4' >
          <Event  />
          <span >Events</span>
        </li>
        <li className='flex items-center space-x-4' >
          <School  />
          <span >Courses</span>
        </li>
        <button className='font-semibold rounded-full bg-gray-300 p-1 hover:bg-gray-600'>Show more</button>
        <hr className='mb-12' />
        <li className='flex items-center space-x-4'>
              <img src="/assets/barbora-polednova-dY7Q-sl77L4-unsplash.jpg
              " alt=""  className='  h-10 w-10 rounded-full'/>
              <span>John doe</span>
          </li>
          <li className='flex items-center space-x-4'>
              <img src="/assets/barbora-polednova-dY7Q-sl77L4-unsplash.jpg
              " alt=""  className=' h-10 w-10 rounded-full'/>
              <span>John doe</span>
          </li>
          <li className='flex items-center space-x-4'>
              <img src="/assets/barbora-polednova-dY7Q-sl77L4-unsplash.jpg
              " alt=""  className=' h-10 w-10 rounded-full'/>
              <span>John doe</span>
          </li>
          <li className='flex items-center space-x-4'>
              <img src="/assets/barbora-polednova-dY7Q-sl77L4-unsplash.jpg
              " alt=""  className=' h-10 w-10 rounded-full'/>
              <span>John doe</span>
          </li>
      </ul>
      

      </div>
      
    </div>
  );
}

export default LeftPart;
