import React, { useEffect, useState } from 'react';

const ClipPlayer = ({ amount }) => {
  const [clipList, setClipList] = useState([]);

  useEffect(() => {
    const generateClips = () => {
      const all = Array.from({ length: 500 }, (_, i) => `clip${i + 1}.mp4`);
      const selected = [];

      while (selected.length < amount) {
        const rand = all[Math.floor(Math.random() * all.length)];
        if (!selected.includes(rand)) selected.push(rand);
      }

      setClipList(selected);
    };

    generateClips();
  }, [amount]);

  return (
    <div>
      <h2>🎬 Total Clips: {clipList.length}</h2>
      {clipList.map((clip, index) => (
        <video
          key={index}
          src={`/clips/${clip}`}
          width="300"
          controls
          autoPlay
          muted
        />
      ))}
    </div>
  );
};

export default ClipPlayer;
