import { useState } from 'react';

const LabelGroupButton = ({ LabelColor, LabelText, className = '', isActive, onClick }) => {
  return (
    <button
      className={`flex flex-row px-4 py-2 ${isActive ? 'bg-primary' : 'bg-white'} ${className}`}
      onClick={onClick}
    >
      <div className={`h-4 w-4 rounded-full ${LabelColor} mr-2`}></div>
      <span className={`${isActive ? 'text-white' : 'text-gray-500'}`}>{LabelText}</span>
    </button>
  );
};

const LabelGroup = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="flex flex-col text-xs bg-transparent rounded-2xl">
      {[
        { color: 'bg-amber-400', text: 'Personal', className: 'rounded-t-lg' },
        { color: 'bg-rose-500', text: 'Academic' },
        { color: 'bg-cyan-300', text: 'Others' },
        { color: 'bg-blue-700', text: 'Work', className: 'rounded-b-lg' },
      ].map((item, index) => (
        <LabelGroupButton
          key={index}
          LabelColor={item.color}
          LabelText={item.text}
          className={item.className}
          isActive={activeIndex === index}
          onClick={() => handleButtonClick(index)}
        />
      ))}
    </div>
  );
};

export default LabelGroup;
