import React, { useRef, useState } from 'react';

export const ApplicationContext = React.createContext(null);

export default ({ children }) => {
    const [currentAddress, setCurrentAddress] = useState(null);
    const [isTourOpen, setIsTourOpen] = useState(false);
    const [isOpenPacksModalOpen, setIsOpenPacksModalOpen] = useState(false);
    const refConnectWalletButton = useRef(null);

    const store = {
      currentAddress,
      setCurrentAddress,
      isTourOpen,
      setIsTourOpen,
      isOpenPacksModalOpen,
      setIsOpenPacksModalOpen,
      refConnectWalletButton
    };

    return (
      <ApplicationContext.Provider value={store}>
        {children}
      </ApplicationContext.Provider>
    );
}
