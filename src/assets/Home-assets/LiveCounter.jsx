import React, { useState, useEffect } from 'react';

const LiveCounter = ({ targetNumber }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < targetNumber) {
      const timer = setTimeout(() => setCount(count + 1), 100);
      return () => clearTimeout(timer);
    }
  }, [count, targetNumber]);

  return (
    <div>
      {count}+
    </div>
  );
};

export default LiveCounter;
