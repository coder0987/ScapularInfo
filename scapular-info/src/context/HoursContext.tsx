import { createContext, ReactNode, useContext, useState } from 'react';

interface HoursContextType {
    isLent:         boolean,
    isAdvent:       boolean,
    isCandlemas:    boolean,
    isChristmas:    boolean,
    isEaster:       boolean,
    firstNocturn:   boolean,
    secondNocturn:  boolean,
    thirdNocturn:   boolean,
    setIsLent       : (value: boolean) => void,
    setIsAdvent     : (value: boolean) => void,
    setIsCandlemas  : (value: boolean) => void,
    setIsChristmas  : (value: boolean) => void,
    setIsEaster     : (value: boolean) => void,
    setFirstNocturn : (value: boolean) => void,
    setSecondNocturn: (value: boolean) => void,
    setThirdNocturn : (value: boolean) => void,
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
    const [isAdvent,        setIsAdvent     ] = useState(false);
    const [isCandlemas,     setIsCandlemas  ] = useState(false);//Candlemas to advent
    const [isChristmas,     setIsChristmas  ] = useState(false);//Christmas to Candlemas
    const [isEaster,        setIsEaster     ] = useState(false);
    const [firstNocturn,    setFirstNocturn ] = useState(false);
    const [secondNocturn,   setSecondNocturn] = useState(false);
    const [thirdNocturn,    setThirdNocturn ] = useState(false);

    return (
        <HoursContext.Provider value={{
            isLent,          setIsLent       ,       
            isAdvent,        setIsAdvent     ,
            isCandlemas,     setIsCandlemas  ,
            isChristmas,     setIsChristmas  ,
            isEaster,        setIsEaster     ,
            firstNocturn,    setFirstNocturn ,
            secondNocturn,   setSecondNocturn,
            thirdNocturn,    setThirdNocturn ,
        }}>
            {children}
        </HoursContext.Provider>
    );
};
