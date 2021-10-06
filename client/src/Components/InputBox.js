import React from "react";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";

function InputBox() {
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <img
          src="/assets/ben-parker-OhKElOkQ3RE-unsplash.jpg"
          className="rounded-full h-12 w-12 object-cover"
          alt=""
        />
        <form className="flex flex-1">
          <input
            type="text"
            placeholder={`What's in your mind?`}
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none max-w-lg"
          />
        </form>
        </div>
        <div className='flex p-3  border-t justify-evenly'>
          <div className='inputIcon'>
              <PermMedia className='text-red-500' />
              <p className='text-base '>Photos/Videos</p>
          </div>
          <div className='inputIcon'>
            <Label className='text-blue-500'/>
            <p className='text-base'>Tag</p>
          </div>
          <div className='inputIcon'>
              <Room className='text-green-500 '/>
              <p className='text-base'>Location</p>
          </div>
        </div>
      
    </div>
  );
}

export default InputBox;
