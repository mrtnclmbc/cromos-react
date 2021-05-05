import React, { useState } from 'react';

export const ApplicationContext = React.createContext(null);

export default ({ children }) => {
    const [currentAddress, setCurrentAddress] = useState(null);

    const store = {
        currentAddress,
        setCurrentAddress
    };

    return (
      <ApplicationContext.Provider value={store}>
        {children}
      </ApplicationContext.Provider>
    );
}
