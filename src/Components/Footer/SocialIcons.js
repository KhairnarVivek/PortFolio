import React from "react";

const SocialIcons = ({ Icons }) => {
    return (
      <div className="text-teal-500">
        {Icons.map((icon, link) => (
          <span
            key={icon.name}
            className="w-5 h-5 p-[10px] px-[12px] md:pl-3 md:pr-[13px] md:pt-3 md:pb-2 cursor-pointer items-center rounded-full bg-gray-700 mx-1.5  sm0:text-xl md:text-2xl hover:text-gray-100 hover:bg-teal-500 duration-700"
          >
            <a href={icon.link}>
              <ion-icon name={icon.name}></ion-icon>
            </a>
          </span>
        ))}
      </div>
    );
};

export default SocialIcons;
