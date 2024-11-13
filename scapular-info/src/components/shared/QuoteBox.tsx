const QuoteBox = ( {children, className}: { children: ReactNode, className: string } ) => {
  const combinedClasses = `flex flex-wrap flex-col items-center font-serif text-xl md:text-3xl text-gray-500 quote ${className}`;
  return (
      <div className={combinedClasses}>
        { children }
      </div>
  );
};

export default QuoteBox;