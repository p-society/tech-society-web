import React, { useState } from "react";
import TeamData from "./TeamData.js";
import "./style.css";

function Page() {
  const [zoomedImage, setZoomedImage] = useState(null);

  const handleImageClick = (id) => {
    if (zoomedImage === id) {
      setZoomedImage(null);
    } else {
      setZoomedImage(id);
      setTimeout(() => {
        setZoomedImage(null);
      }, 3000);
    }
  };

  return (
    <div className="flex flex-col gap-4 md:gap-6 lg:gap-10">
      <h1 className="text-center font-roboto text-custom-blue font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        Our Team
      </h1>
      <div className="flex flex-col gap-8 md:gap-11 lg:gap-12">
        {TeamData.map((team, index) => (
          <div key={index} className="flex flex-col gap-4 md:gap-6 lg:gap-10">
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-normal">
              • {team.teamName}
            </h1>
            <div className="flex justify-center">
              {Object.entries(team.members).map(([key, member]) => {
                const id = `${index}-${key}`;
                return (
                  <div
                    key={id}
                    className={`flex flex-col mx-2 md:mx-4 lg:mx-10 img-container w-36 h-48 md:w-48 md:h-64 ${
                      zoomedImage === id ? "zoomed" : ""
                    }`}
                    onClick={() => handleImageClick(id)}
                  >
                    <img
                      src={member.img}
                      alt={member.name}
                      className="rounded-2xl grayscale"
                    />
                    <div className="overlay md:mt-3 lg:mt-5">
                      <p className="font-normal md:font-medium text-base md:text-lg lg:text-xl">
                        {member.name}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
