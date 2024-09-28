import React from 'react'

function About() {
  return (
    <main className='bg-gradient-to-r from-zinc-300 to-sky-300 mt-28 border mx-auto p-8 md:p-20 shadow-black w-full  row-auto max-w-7xl'>
    <h2 className='text-3xl font-bold text-center text-purple-700 my-6'>
      Information
    </h2>
  
    {/* Responsive table container */}
    <nav className='overflow-x-auto'>
      <table className='min-w-full table-auto bg-white border border-gray-300'>
        <thead className='bg-purple-600 text-white'>
          <tr>
            <th className='px-4 py-2 border'>FullName</th>
            <th className='px-4 py-2 border'>Name</th>
            <th className='px-4 py-2 border'>City</th>
            <th className='px-4 py-2 border'>Country</th>
            <th className='px-4 py-2 border'>Skills</th>
            <th className='px-4 py-2 border'>Learn Skill Place</th>
          </tr>
        </thead>
        <tbody>
          <tr className='bg-gray-100 even:bg-gray-200'>
            <td className='px-4 py-2 border'>Rimsha Kanwal Arain</td>
            <td className='px-4 py-2 border'>Rimsha</td>
            <td className='px-4 py-2 border'>Karachi</td>
            <td className='px-4 py-2 border'>Pakistan</td>
            <td className='px-4 py-2 border'>HTML, CSS, TypeScript, React, Next.js</td>
            <td className='px-4 py-2 border'>Governor House Sindh</td>
          </tr>
        </tbody>
      </table>
    </nav>
  </main>
  
  )
}

export default About