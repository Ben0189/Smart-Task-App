import { useState } from 'react';

const LabelGroupButton = ({ LabelColor, LabelText, className = '' }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <button
      className={`flex flex-row px-4 py-2 ${isClicked ? 'bg-primary' : 'bg-white'} ${className}`}
      onClick={handleClick}
    >
      <div className={`h-4 w-4 rounded-full ${LabelColor} mr-2`}></div>
      <span className={`${isClicked ? 'text-white' : 'text-gray-500'}`}>{LabelText}</span>
    </button>
  );
};

const LabelGroup = () => {
  return (
    <div className="flex flex-col text-xs place-items-center bg-transparent rounded-2xl">
      <LabelGroupButton LabelColor="bg-amber-400" LabelText="Personal" className="rounded-t-lg" />
      <LabelGroupButton LabelColor="bg-rose-500" LabelText="Personal" />
      <LabelGroupButton LabelColor="bg-cyan-300" LabelText="Personal" />
      <LabelGroupButton LabelColor="bg-blue-700" LabelText="Personal" className="rounded-b-lg" />
    </div>
  );
};

export default LabelGroup;
