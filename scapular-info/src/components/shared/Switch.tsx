const Switch = ({ label, value, setValue } : { label: string; value: boolean; setValue: (value: boolean) => void;}) => {
  const handleToggle = () => {
    setValue(!value);
  };

  return (
    <div className="flex items-center">
      <span className="mr-2">{label}</span>
      <button
        onClick={handleToggle}
        className={`relative inline-block w-12 h-6 ${value ? 'bg-blue-500' : 'bg-gray-300'} rounded-full transition-all`}
      >
        <span
          className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${value ? 'transform translate-x-6' : ''}`}
        />
        
      </button>
    </div>
  );
};

export default Switch;
