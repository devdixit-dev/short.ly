import React, { useState } from 'react'
import axios from 'axios';

const Dashboard = () => {

  const [originalUrl, setOriginalUrl] = useState('');
  const [data, setData] = useState([]);

  const sendData = async (e) => {
    e.preventDefault();

    if(!originalUrl && !originalUrl.trim()) {
      alert('Invalid valid URL')
    }

    const response = await axios.post(
      'http://localhost:3000/url',
      {url: originalUrl}
    );
    const result = response.data;
    
    const entry = {
      id: data.length+1,
      OriginalUrl: originalUrl,
      shortUrl: result.shortURL
    }

    const updateData = [...data, entry]
    setData(updateData);
    setOriginalUrl('');
  }

  return (
    <div>
      <div className='p-8 bg-[#f1f1f17e] w-1/3 m-8 shadow-xl rounded-xl'>
        <div className='border-blue-600 border-2 text-black flex justify-between px-0 rounded-sm overflow-hidden'>
          <input type="text" placeholder='Paste your long link here' className='py-3 px-5 outline-0 text-[18px]' value={originalUrl} onChange={(e) => { setOriginalUrl(e.target.value) }} />
          <button className='bg-blue-600 px-4 py-2 text-white cursor-pointer' onClick={sendData}>Generate</button>
        </div>
        <div className='mt-4'>
          <p>{`Count : ${data.length}`}</p>
        </div>
      </div>

      <div className='w-[90%] m-auto'>

        {
          data.map((item) => (
            <div key={item.id} className='bg-[#f1f1f17e] flex flex-col gap-2 shadow-xl p-6'>
              <p className='text-xl'>{`Original URL : ${item.OriginalUrl}`}</p>
              <p className='text-lg'>{`Short URL : ${item.shortUrl}`}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Dashboard