import axios from "axios";
import { ApiResponse, Result } from "../../../utils/types";
import { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import "./Almashhad.css";

function Almashhad() {
  const [data, setData] = useState<Result | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get<ApiResponse>(
        `https://dev-api.almashhad.tv/api/videos/detailsElastic/182622880654874`
      );
      const { id, title, image, date } = response.data.data.result;
      setData({ id, title, image, date });
      setLoading(false);
    } catch (err) {
      setError("Error fetching data");
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return (
      <div className="container mx-auto text-center flex flex-col p-5">
        Loading....
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto text-center flex flex-col p-5">
        {error}
      </div>
    );
  }

  return (
    <div className="mashhad-container">
      <div className="row mt-6">
        <div className="title">
          <h1>Al Mashhad Data</h1>
        </div>
        <div className="data-container">
          {data && (
            <div className="max-w-m card-container">
              <img src={data.image} alt="img" width={355} height={260} />
              <div className="flex flex-col items-start mt-4 pl-3">
                <div className="title-container">
                  <h3 className="data-title ">title:</h3>
                  <span className="text-2xl pl-2">{data.title}</span>
                </div>
                <div className="flex items-center mt-2">
                  <FaCalendarAlt size={28} className="text-yellow-400" />
                  <span className="text-2xl pl-2">
                    {new Date(data.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Almashhad;
