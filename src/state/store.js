import React, { useRef, useState } from 'react';

export const ApplicationContext = React.createContext(null);

export default ({ children }) => {
    const [currentAddress, setCurrentAddress] = useState(null);
    const [isTourOpen, setIsTourOpen] = useState(false);
    const refConnectWalletButton = useRef(null);

    const store = {
      currentAddress,
      setCurrentAddress,
      isTourOpen,
      setIsTourOpen,
      refConnectWalletButton
    };

    return (
      <ApplicationContext.Provider value={store}>
        {children}
      </ApplicationContext.Provider>
    );
}
