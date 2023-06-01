import React, { createContext, useState } from 'react';

export const GlobalStore = createContext();

const StoreProvider = ({ children }) => {
    const [tempStore, setTempStore] = useState({ count: 0 });
    return (
        <GlobalStore.Provider value={{ tempStore, setTempStore }}>
            {children}
        </GlobalStore.Provider>
    );
};

export default StoreProvider;
