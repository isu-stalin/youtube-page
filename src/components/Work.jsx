import React, { useState, useEffect } from "react";

const API_URL = "/api/api.json";

const Work = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Ошибка получения данных:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="center_of_main_block">
      {data.map((item) => (
               <div class="tube_videos">
                <img src={item.img} alt="" />
               <div class="collection_text">
                 <div class="collection-img">
                    <img src={item.avatar} alt="" />
                  </div>
                   <div class="collection-info">
                     <div class="collection-videos-name">
                       <p>{item.title}</p>
                     </div>
                     <div class="collection-autors-name">
                       <p>{item.about}</p>
                     </div>
                     <div class="collection-watching">
                        <p>{item.data}</p>
                      </div>
                     </div>
                   </div>
               </div>
      ))}
    </div>
  )
}

export default Work;