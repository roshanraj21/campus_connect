import React from "react";
// import { BsLink } from "react-icons/bs";
import { FaLink } from "react-icons/fa";

function Study() {
  const cards = [
    {
      id: 1,
      title: "Semester First",
      link: "in/ananya-pathak-165765191/",
    },
    {
      id: 2,
      title: "Semester Second",
      link: "in/ananya-pathak-165765191/",
    },
    {
      id: 3,
      title: "Semester Third",
      link: "in/ananya-pathak-165765191/",
    },
    {
      id: 4,
      title: "Semester Fourth",
      link: "in/ananya-pathak-165765191/",
    },
    {
      id: 5,
      title: "Semester Fifth",
      link: "in/ananya-pathak-165765191/",
    },
    {
      id: 6,
      title: "Semester Sixth",
      link: "in/ananya-pathak-165765191/",
    },
    {
      id: 7,
      title: "Semester Seventh",
      link: "in/ananya-pathak-165765191/",
    },
    {
      id: 8,
      title: "Semester Eighth",
      link: "in/ananya-pathak-165765191/",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <style>
        {`
          body {
            background-color: #888f70;
          }
        `}
      </style>
      <div className="p-4 mt-[5rem]">
        <div className="grid grid-cols-4 gap-[7rem]">
          {cards.map((card) => (
            <div
              key={card.id}
              className="w-60 h-60 flex flex-col items-center justify-center overflow-hidden shadow-a bg-white rounded-full"
            >
              <div className="px-6 py-2 text-center text-h">
                <div className="font-bold text-[29px] mb-4">{card.title}</div>
                <a
                  href={`${card.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <FaLink
                    className="text-primary text-2xl"
                    style={{ color: "#464d2e", width: "60px", height: "60px" }}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Study;
