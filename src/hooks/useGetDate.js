import { useState, useEffect } from 'react';

const useGetDate = () => {
  const [date, setDate] = useState([]);
  useEffect(() => {
    const getDate = () => {
      let today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      const yyyy = today.getFullYear();
      today = mm + '/' + dd + '/' + yyyy;
      setDate(today);
    };

    getDate();
  }, []);
  return { date };
};

export default useGetDate;
