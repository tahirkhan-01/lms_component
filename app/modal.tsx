import React from 'react'

const modal = ({isVisible}) => {
    if (! isVisible) return null;
    
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] flex flex-col">
        <button className="text-white text-xl place-self-end">X</button>
        <div className="bg-white p-2 rounded-md">
          <div className="py-6 px-6 lg:px-8 text-left">
            <h3 className="mb-4 text-xl font-medium text-gray-900">
              Edit Details
            </h3>
            <form className="" action="#">
              <div className="flex space-x-4">
                <div className="w-1/2 pb-2">
                  <label htmlFor="firstname">First Name</label>
                  <input
                    className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-blue-400"
                    type="text"
                    name="firstname"
                    id="firstname"
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="lastname">Last Name</label>
                  <input
                    className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-blue-400"
                    type="text"
                    name="lastname"
                    id="lastname"
                  />
                </div>
              </div>
              <div className="pb-2">
                <label htmlFor="address">Current Address</label>
                <input
                  className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-blue-400"
                  type="text"
                  name="address"
                  id="address"
                />
              </div>
              <div>
                <label htmlFor="role">Role</label>
                <input
                  className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-blue-400"
                  type="text"
                  name="role"
                  id="role"
                />
              </div>
              
            </form>
            <div className='flex gap-x-6 py-6 '>
                <button className='bg-blue-500 px-24 py-2 text-white rounded'>Update</button>
                <button className='bg-blue-500 px-24 py-2 text-white rounded'>Cancel</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default modal