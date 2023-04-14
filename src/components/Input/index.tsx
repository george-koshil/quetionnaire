import cn from 'classnames'

type InputProps = {
  onChange?: (e: any) => void;
  value?: string;
  type?: string;
  placeholder?: string;
  name?: string;
  className?: string;
  onBlur?: (e: any) => void
};

const Input = ({
  onChange,
  value,
  type,
  placeholder,
  name,
  className,
  onBlur
}: InputProps) => {
  return (
    <div className={cn(className, "border-1 border-gray-primary rounded-20 bg-transparent h-40 pr-36 pl-16 flex items-center")}>
      <input
        className="bg-transparent focus:outline-none w-full"
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
