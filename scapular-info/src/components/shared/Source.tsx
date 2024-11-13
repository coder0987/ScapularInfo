const Source = ({ sourceJSON }: any) => {


    const author    = (di(sourceJSON.author   ) ? '' : sourceJSON.author + '. '                 );
    const name      = (di(sourceJSON.name     ) ? '' : sourceJSON.name + '. '                   );
    const date      = (di(sourceJSON.date     ) ? '' : sourceJSON.date + '. '                   );
    const editor    = (di(sourceJSON.editor   ) ? '' : 'Edited by ' + sourceJSON.editor + '. '  );
    const publisher = (di(sourceJSON.publisher) ? '' : sourceJSON.publisher + '. '              );
    const ISBN      = (di(sourceJSON.ISBN     ) ? '' : 'ISBN ' + sourceJSON.ISBN + '. '         );
    const link      = (di(sourceJSON.link     ) ? '' : sourceJSON.link + '. '                   );
    const website   = (di(sourceJSON.website  ) ? '' : sourceJSON.website + '. '                );

    return (
        <div className="hanging-indent">
            <span>{ author }</span>
            <span className="italic">{ name }</span>
            <span>{ date }</span>
            <span className="italic">{ publisher }</span>
            <span>{ editor }</span>
            <span>{ ISBN }</span>
            <span>{ website }</span>
            <a href={sourceJSON.link} rel="noopener noreferrer" target="_blank">{ link }</a>
        </div>
    );
};


// Don't display item
function di(item: string | undefined) {
    if (typeof item === undefined || item === 'Unknown') {
        return true;
    }
    return false;
}

export default Source;
