import React, { useState, useEffect } from 'react';
import { getOneBoxList } from '../api/onebox';

const OneBox = () => {
  const [oneBoxList, setOneBoxList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchOneBoxList = async () => {
    setLoading(true);
    try {
      const response = await getOneBoxList();
      setOneBoxList(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOneBoxList();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>OneBox</h1>
      <ul>
        {oneBoxList.map((item) => (
          <li key={item.threadId}>{item.subject}</li>
        ))}
      </ul>
    </div>
  );
};