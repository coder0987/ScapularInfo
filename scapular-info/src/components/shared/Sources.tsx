import { sourcesList, source } from "@/constants";
import { useContext } from 'react';
import SourcesContext from '@/context/SourcesContext';
import Source from '@/components/shared/Source';

const Sources = () => {
    const { list } = useContext(SourcesContext);

    console.log(list);

    if (list.length === 0) {
        return (
            <> </>
        );
    }

    let slimSources = [];
    for (let i in sourcesList) {
        if (list.includes(i)) {
            slimSources.push(i);
        }
    }

    console.log(slimSources);

    return (
        <div>
            <h2 className="title">Sources</h2>
            <ul>
                {slimSources.map((item) => (
                    <Source key={item} sourceJSON={sourcesList[item]} />
                ))}
            </ul>
        </div>
    );
};

export default Sources;
