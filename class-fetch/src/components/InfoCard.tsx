import React from "react";

type Props ={
  name: string,
  classDay: string,
  role: string
}

const InfoCard = ({name, classDay, role}: Props) => {




  return (
    <div className="bg-slate-400 w-44 text-black flex flex-col items-center rounded-lg m-2 ">
      <div className="flex gap-4">
        <p className="font-bold">Name:</p>
        <p>{name}</p>
      </div>
      <div className="flex gap-4">
        <p className="font-bold">Class:</p>
        <p>{classDay}</p>
      </div>
      <div className="flex gap-4">
        <p className="font-bold">Role:</p>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default InfoCard;
