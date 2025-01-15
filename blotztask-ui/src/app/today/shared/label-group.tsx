const LabelGroup = () => {
  return (
    <div className="text-xs border-2 bg-transparent rounded-2xl w-32 place-items-start ml-36">
      <button className="flex flex-row px-4 py-2">
        <div className="h-4 w-4 rounded-full bg-amber-400 mr-2"></div>
        <span className="text-gray-500">Personal</span>
      </button>
      <button className="flex flex-row px-4 py-2">
        <div className="h-4 w-4 rounded-full bg-rose-500  mr-2"></div>
        <span className="text-gray-500">Academic</span>
      </button>
      <button className="flex flex-row px-4 py-2">
        <div className="h-4 w-4 rounded-full bg-cyan-400  mr-2"></div>
        <span className="text-gray-500">Others</span>
      </button>
      <button className="flex flex-row px-4 py-2">
        <div className="h-4 w-4 rounded-full bg-blue-800  mr-2"></div>
        <span className="text-gray-500">Others</span>
      </button>
    </div>
  );
};

export default LabelGroup;
