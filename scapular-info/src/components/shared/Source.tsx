const Source = ({ sourceJSON }) => {


    const author    = (sourceJSON.author       === 'Unknown' ? '' : sourceJSON.author + '. '       );
    const name      = (sourceJSON.name         === 'Unknown' ? '' : sourceJSON.name + '. '         );
    const date      = (sourceJSON.date         === 'Unknown' ? '' : sourceJSON.date + '. '         );
    const publisher = (sourceJSON.publisher    === 'Unknown' ? '' : sourceJSON.publisher + '. '    );
    const ISBN      = (sourceJSON.ISBN         === 'Unknown' ? '' : 'ISBN ' + sourceJSON.ISBN + '.');

    return (
        <div>
            <span>{ author }</span>
            <span className="italic">{ name }</span>
            <span>{ date }</span>
            <span className="italic">{ publisher }</span>
            <span>{ ISBN }</span>
        </div>
    );
};

export default Source;
