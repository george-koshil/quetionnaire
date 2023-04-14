import cn from "classnames";
import React, { useEffect, useRef, useState } from "react";

interface SelectProps {
  options?: string[] | number[];
  onSelectOption: (selectedOption: string | number) => void;
  className?: string;
  placeholder?: string;
}

const Select: React.FC<SelectProps> = ({
  options = [],
  onSelectOption,
  className,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | number>("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionSelect = (option: string | number) => {
    setSelectedOption(option);
    onSelectOption(option);
    toggleDropdown();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div
      ref={dropdownRef}
      className={cn(
        className,
        "border-1 border-gray-primary rounded-20 bg-transparent h-40 pr-36 pl-16 flex items-center relative cursor-pointer"
      )}
      onClick={toggleDropdown}
    >
      {selectedOption || placeholder}
      <img
        src="./arrow-down.svg"
        alt="arrow-down"
        className={cn(
          "absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer",
          {
            "rotate-180 ease-in duration-200": isOpen,
          }
        )}
      />
      {isOpen && (
        <div className="block absolute top-42 left-0 border-gray-primary rounded-16 w-full z-10 overflow-y-auto max-h-80">
          <ul>
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleOptionSelect(option)}
                className="bg-slate-300 h-40 pr-36 pl-16 hover:bg-slate-400"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
