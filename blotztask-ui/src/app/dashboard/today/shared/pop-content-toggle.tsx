import { Popover, PopoverTrigger } from '@/components/ui/popover';
import { PopoverContent } from '@radix-ui/react-popover';
import { useState } from 'react';

const PopContentToggle = ({ buttonIcon, buttonText, children }) => {
  const [activeButton, setActiveButton] = useState(false);
  const handleButtonState = () => setActiveButton(false);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className={`flex flex-row
                                items-center mr-4 rounded-full px-3 py-1 
                                ${activeButton ? 'bg-primary text-white' : 'bg-gray-300 text-neutral-700'}`}
          onClick={() => setActiveButton((prev) => !prev)}
        >
          {buttonIcon}
          {buttonText}
        </button>
      </PopoverTrigger>
      <PopoverContent
        onCloseAutoFocus={handleButtonState}
        className="bg-white border-2 border-gray-200 rounded-lg p-3"
      >
        {children}
      </PopoverContent>
    </Popover>
  );
};

export default PopContentToggle;
