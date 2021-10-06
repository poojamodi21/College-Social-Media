import React from 'react'

import InputBox from './InputBox'
import Posts from './Posts'
function Feed() {
    return (
        <div className='max-w-3xl  flex-grow p-5 mr-4 h-screen'>
            <div className='max-w-2xl'>
        <InputBox />
        <Posts />
        </div>
      </div>
    )
}

export default Feed
