const CompiledNotice = ({ author, date } : { author: string; date: string; }) => {
    return (
        <>
            <p className="pr caption">This information was compiled {date} by {author}</p>
        </>
    );
  };
  
  export default CompiledNotice;