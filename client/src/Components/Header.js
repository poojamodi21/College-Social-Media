import React from "react";
import { Search ,Person,Chat,} from "@material-ui/icons";
import NotificationsIcon from '@material-ui/icons/Notifications';
function Header() {
  return (
    <div className='  flex text-xl text-white items-center top-0 py-10 w-full h-12 bg-blue-500 sticky'>
      {/*Left side */}
      <div className='flex flex-grow '>
        <h1><span className='cursor-pointer text-4xl pl-16  font-extrabold '>Unigram</span></h1>
      </div>

      {/*Center side */}
      <div className='  space-x-2 ml--15 flex items-center flex-grow justify-center'>
        <Search className=' flex items-center '/>
        <input className='cursor-pointer flex flex-grow rounded-xl '
          type="text
                "
          
        />
      </div>

      {/*right  side */}
      <div className='cursor-pointer flex flex-grow justify-center space-x-4'>
        <div className='space-x-6'>
          <span>Homepage</span>
          <span>Timeline</span>
        </div>
      <div className='flex space-x-10'>
        <div className='relative'>
            <Person />
            <span className=' absolute bottom-2 bg-red-500 w-full rounded-2xl text-center'>1</span>
        </div>
        <div className='relative'>
            <Chat />
            <span className='absolute bottom-2 bg-red-500 w-full rounded-full text-center'>1</span>
        </div>
        <div className='relative'>
            <NotificationsIcon />
            <span className='absolute bottom-2 bg-red-500 w-full rounded-full text-center'>1</span>
        </div>
        </div>
      </div>

    </div>
  );
}

export default Header;
