import { useState } from "react";

export default function Card() {
  const [front, setFront] = useState<boolean>(true);

  const face: string = front ? "front" : "back";

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div
        className={`relative card-container w-[180px] h-[280px] ${face} transition-transform`}
      >
        <div
          className="absolute w-full h-full backface-hidden bg-amber-950 rounded-2xl"
          onClick={() => setFront(false)}
        ></div>
        <div
          className="absolute flex items-center justify-center w-full h-full card-back backface-hidden bg-amber-950 rounded-2xl"
          onClick={() => setFront(true)}
        >
          <div className="w-[95%] relative h-[97%] rounded-xl border-4 border-amber-500">
            <div className="absolute w-[10%] bg-amber-950 border-b-4 border-r-4 border-amber-500 rounded-br-full top-[-8px] left-[-8px] aspect-square "></div>
            <div className="absolute w-[10%] border-b-4 border-l-4 border-amber-500 rounded-bl-full aspect-square top-[-8px] right-[-8px] bg-amber-950"></div>
            <div className="absolute bg-amber-950 bottom-[-8px] left-[-8px] w-[10%] border-t-4 border-r-4 border-amber-500 rounded-tr-full aspect-square "></div>
            <div className="absolute bg-amber-950 bottom-[-8px] right-[-8px] w-[10%] border-t-4 border-l-4 border-amber-500 rounded-tl-full aspect-square "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
