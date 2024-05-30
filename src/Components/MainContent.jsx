import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment, faShare, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const MainContent = () => {
    return (
        <div className='flex justify-center px-8 gap-6 h-auto'>
            {/* Left side */}
            <div className='flex-1 my-8'>
                <section>
                    {/* Suggested connections */}
                    <aside className="w-auto bg-white shadow-md rounded-lg p-4 mb-4">
                        <h5>profile</h5>
                    </aside>
                </section>
            </div>



            {/* Main content */}
            <main className="flex-3 max-w-2xl my-8">

                {/* user to post */}
                <section>
                    <div className='bg-white shadow-md rounded-lg p-4 mb-4'>
                        <div className='flex'>
                            <div>
                                <img className='rounded-full mr-4' src="user1.jpg" alt="user1" />
                            </div>
                            <div className='rounded-lg p-4 w-full'>
                                <textarea className='border-2 border-lime-300 w-full rounded-lg focus:outline-none p-3' name="" id=""></textarea>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-4">

                            <button className="text-lime-500 hover:text-lime-700">
                                <FontAwesomeIcon icon={faShare} />
                                <span className="ml-2" >Share</span>
                            </button>

                        </div>
                    </div>
                </section>
                {/* Feed/Posts section */}
                <section>
                    {/* Post */}
                    <div className=" bg-white shadow-md rounded-lg p-4 mb-4">
                        {/* User information */}
                        <div className="flex items-center mb-4">
                            <img src='' alt='' className="w-12 h-12 rounded-full" />
                            <h2 className="text-lg font-semibold ml-4">John doe</h2>
                        </div>
                        {/* Post content */}
                        <p className="text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum amet quo fugiat est quibusdam incidunt modi, porro vero temporibus, dolore ab tempora dolorem? Rem libero eum itaque provident, mollitia repellendus?</p>
                        {/* Optional post image */}
                        {/* {postImage && <img src='' alt="Post" className="mt-4 rounded-lg" />} */}
                        {/* Action buttons */}
                        <div className="flex items-center justify-between mt-4">
                            <button className="text-lime-500 hover:text-lime-700">
                                <FontAwesomeIcon icon={faThumbsUp} />
                                <span className='ml-2'>Like</span></button>
                            <button className="text-lime-500 hover:text-lime-700">
                                <FontAwesomeIcon icon={faComment} />
                                <span className="ml-2">Comment</span> </button>
                            <button className="text-lime-500 hover:text-lime-700">
                                <FontAwesomeIcon icon={faShare} />
                                <span className="ml-2" >Share</span></button>
                            <button className="text-lime-500 hover:text-lime-700">
                                <FontAwesomeIcon icon={faShoppingCart} />
                                <span className="ml-2">Request</span></button>
                        </div>
                    </div>

                    {/* More posts... */}
                </section>


            </main>


            {/* Connection */}

            <div className='flex-2 my-8 justify-center'>
                {/* Suggested connections */}
                <aside className="bg-white shadow-md rounded-lg p-4 mb-4">
                    <h2 className="text-xl font-semibold mb-4">Suggested Connections</h2>
                    {/* Suggested connections list */}
                    <ul>
                        <li className="flex items-center space-x-4">
                            <img src="user1.jpg" alt="User 1" className="w-12 h-12 rounded-full" />
                            <div>
                                <h3 className="text-lg font-semibold">John Doe</h3>
                                <p className="text-gray-700">Managing patner at Company X</p>
                            </div>
                        </li>
                        {/* More suggested connections... */}
                    </ul>
                </aside>
            </div>

        </div>
    )
}

export default MainContent
