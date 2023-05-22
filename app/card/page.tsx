export default function Card() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex items-center justify-center bg-amber-900 rounded-2xl h-3/4 basis-1/4">
        <div className="w-[95%] relative h-[97%] rounded-xl border-8 border-amber-500">
          <div className="absolute w-[10%] bg-amber-900 border-b-8 border-r-8 border-amber-500 rounded-br-full top-[-8px] left-[-8px] aspect-square ">
            <div className="w-5 rounded-full bg-amber-500 aspect-square" />
          </div>
          <div className="absolute w-[10%] border-b-8 border-l-8 border-amber-500 rounded-bl-full aspect-square top-[-8px] right-[-8px] bg-amber-900">
            <div className="absolute right-0 w-5 rounded-full bg-amber-500 aspect-square" />
          </div>
          <div className="absolute bg-amber-900 bottom-[-8px] left-[-8px] w-[10%] border-t-8 border-r-8 border-amber-500 rounded-tr-full aspect-square ">
            <div className="absolute bottom-0 left-0 w-5 rounded-full bg-amber-500 aspect-square" />
          </div>
          <div className="absolute bg-amber-900 bottom-[-8px] right-[-8px] w-[10%] border-t-8 border-l-8 border-amber-500 rounded-tl-full aspect-square ">
            <div className="absolute bottom-0 right-0 w-5 rounded-full bg-amber-500 aspect-square" />
          </div>
        </div>
      </div>
    </div>
  );
}
