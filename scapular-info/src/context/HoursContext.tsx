import { createContext, ReactNode, useContext, useState } from 'react';

interface HoursContextType {
    isLent:         boolean,
    isPassionTide:  boolean,
    isAdvent:       boolean,
    isCandlemas:    boolean,
    isChristmas:    boolean,
    isEaster:       boolean,
    firstNocturn:   boolean,
    secondNocturn:  boolean,
    thirdNocturn:   boolean,
    isLeader:       boolean,
    leadChoir:      boolean,
    followChoir:    boolean,
    readerOne:      boolean,
    readerTwo:      boolean,
    setIsLent       : (value: boolean) => void,
    setIsPassionTide: (value: boolean) => void,
    setIsAdvent     : (value: boolean) => void,
    setIsCandlemas  : (value: boolean) => void,
    setIsChristmas  : (value: boolean) => void,
    setIsEaster     : (value: boolean) => void,
    setFirstNocturn : (value: boolean) => void,
    setSecondNocturn: (value: boolean) => void,
    setThirdNocturn : (value: boolean) => void,
    setIsLeader     : (value: boolean) => void,
    setLeadChoir    : (value: boolean) => void,
    setFollowChoir  : (value: boolean) => void,
    setReaderOne    : (value: boolean) => void,
    setReaderTwo    : (value: boolean) => void,
}

const HoursContext = createContext<HoursContextType | undefined>(undefined);

export const useHoursContext = () => {
    const context = useContext(HoursContext);
    if (!context) {
        throw new Error('useHoursContext must be used within an HoursProvider');
    }
    return context;
};

export const HoursProvider = ({ children } : { children: ReactNode }) => {
    const [isLent,          setIsLent       ] = useState(false); //Septuagesima to Easter
    const [isPassionTide,   setIsPassionTide] = useState(false);
    const [isAdvent,        setIsAdvent     ] = useState(false);
    const [isCandlemas,     setIsCandlemas  ] = useState(false);//Candlemas to advent
    const [isChristmas,     setIsChristmas  ] = useState(false);//Christmas to Candlemas
    const [isEaster,        setIsEaster     ] = useState(false);
    const [firstNocturn,    setFirstNocturn ] = useState(false);
    const [secondNocturn,   setSecondNocturn] = useState(false);
    const [thirdNocturn,    setThirdNocturn ] = useState(false);
    const [isLeader    ,    setIsLeader     ] = useState(true);
    const [leadChoir   ,    setLeadChoir    ] = useState(true);
    const [followChoir ,    setFollowChoir  ] = useState(true);
    const [readerOne   ,    setReaderOne    ] = useState(true);
    const [readerTwo   ,    setReaderTwo    ] = useState(true);

    return (
        <HoursContext.Provider value={{
            isLent,          setIsLent       ,       
            isPassionTide,   setIsPassionTide,
            isAdvent,        setIsAdvent     ,
            isCandlemas,     setIsCandlemas  ,
            isChristmas,     setIsChristmas  ,
            isEaster,        setIsEaster     ,
            firstNocturn,    setFirstNocturn ,
            secondNocturn,   setSecondNocturn,
            thirdNocturn,    setThirdNocturn ,
            isLeader    ,    setIsLeader     ,
            leadChoir   ,    setLeadChoir    ,
            followChoir ,    setFollowChoir  ,
            readerOne   ,    setReaderOne    ,
            readerTwo   ,    setReaderTwo    ,
        }}>
            {children}
        </HoursContext.Provider>
    );
};
