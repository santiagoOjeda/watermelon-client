import { useState, useEffect } from "react";
import dayjs from "dayjs";
const useGetDate = () => {
  const [date, setDate] = useState([]);
  useEffect(() => {
    const getDate = () => {
      let today = dayjs().format("YYYY-MM-DDTHH:mm:ssZ[Z]");
      setDate(today);
    };
    getDate();
  }, []);
  return { date };
};

export default useGetDate;
