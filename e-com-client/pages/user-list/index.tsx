import Layout from '@/components/Layout';
import URLs from '@/constants/URLs';
import HttpService from '@/service/HttpService';
import React, { useState } from 'react';

function UserList({ user_list = [] }: any) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

  return (
    <Layout isAdmin={true}>
      <div className='container mx-auto px-4 py-8'>
        <div className='flex justify-between items-center mb-4'>
          <h1 className='text-2xl font-bold'>User List</h1>
          <div>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 mr-2 rounded ${
                viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded ${
                viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              List View
            </button>
          </div>
        </div>

        {viewMode === 'grid' ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8'>
            {user_list?.map((user: any) => (
              <div
                key={user._id}
                className='bg-white p-4 shadow-md rounded-lg border border-gray-200'
              >
                <h3 className='text-lg font-bold'>{user.name}</h3>
                <p className='text-gray-600'>{user.email}</p>
                <p className='text-gray-500 text-sm'>Role: {user.role}</p>
                <p className='text-gray-500 text-sm'>Address: {user.address}</p>
                <p className='text-gray-500 text-sm'>City: {user.city}</p>
                <p className='text-gray-500 text-sm'>Country: {user.country}</p>
                <p className='text-gray-500 text-sm'>Phone: {user.phone}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className='overflow-x-auto mt-8'>
            <table className='min-w-full bg-white border border-gray-200'>
              <thead>
                <tr className='text-left'>
                  <th className='px-4 py-2 border-b'>Name</th>
                  <th className='px-4 py-2 border-b'>Email</th>
                  <th className='px-4 py-2 border-b'>Role</th>
                  <th className='px-4 py-2 border-b'>Address</th>
                  <th className='px-4 py-2 border-b'>City</th>
                  <th className='px-4 py-2 border-b'>Country</th>
                  <th className='px-4 py-2 border-b'>Phone</th>
                </tr>
              </thead>
              <tbody>
                {user_list?.length ? user_list.map((user: any, index: number) => (
                  <tr
                    key={user._id}
                    className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className='px-4 py-2 border-b'>{user.name}</td>
                    <td className='px-4 py-2 border-b'>{user.email}</td>
                    <td className='px-4 py-2 border-b'>{user.role}</td>
                    <td className='px-4 py-2 border-b'>{user.address}</td>
                    <td className='px-4 py-2 border-b'>{user.city}</td>
                    <td className='px-4 py-2 border-b'>{user.country}</td>
                    <td className='px-4 py-2 border-b'>{user.phone}</td>
                  </tr>
                )): <tr><td className='mx-auto text-sm py-2 px-2' colSpan={7}>No Data Found</td></tr>}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const { results: userList }: any = await HttpService.get(
      `${URLs.get_all_user}`,
    );

    return {
      props: {
        user_list: userList.users,
      },
    };
  } catch (e) {
    console.log(e)
    return {
      notFound: true,
    };
  }
}

export default UserList;
