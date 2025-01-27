import { useState } from 'react';

const LabelGroupButton = ({ LabelColor, LabelText }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <button
      className={`flex flex-row px-4 py-2 ${isClicked ? 'bg-primary' : 'bg-white'}`}
      onClick={handleClick}
    >
      <div className={`h-4 w-4 rounded-full ${LabelColor} mr-2`}></div>
      <span className={`${isClicked ? 'text-white' : 'text-gray-500'}`}>{LabelText}</span>
    </button>
  );
};

const LabelGroup = () => {
  return (
    <div className="flex flex-col text-xs place-items-center bg-transparent rounded-2xl w-32 px-0">
      <LabelGroupButton LabelColor="bg-amber-400" LabelText="Personal" />
      <LabelGroupButton LabelColor="bg-rose-500" LabelText="Personal" />
      <LabelGroupButton LabelColor="bg-cyan-300" LabelText="Personal" />
      <LabelGroupButton LabelColor="bg-blue-700" LabelText="Personal" />
    </div>
  );
};

export default LabelGroup;
