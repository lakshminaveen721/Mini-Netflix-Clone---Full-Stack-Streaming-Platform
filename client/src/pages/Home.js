import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get('http://localhost:5000/api/videos');
      setVideos(res.data);
    };
    fetchVideos();
  }, []);

  return (
    <div>
      <h2>Video Library</h2>
      {videos.map((vid, idx) => (
        <div key={idx}>
          <h3>{vid.title}</h3>
          <video width="640" controls>
            <source src={vid.url} type="application/x-mpegURL" />
          </video>
        </div>
      ))}
    </div>
  );
};

export default Home;
