import { createContext, useContext, useEffect, useState } from "react"

interface CallUsModalContextProps{
    setIsCallUsModalOpen:React.Dispatch<React.SetStateAction<boolean>>
    isCallUsModalOpen:boolean
}

const CallUsModalContext = createContext<CallUsModalContextProps | undefined>(undefined);

export const CallUsModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isCallUsModalOpen,setIsCallUsModalOpen]=useState(false)

    useEffect(() => {

      if (isCallUsModalOpen) {
          document.body.classList.add('overflow-hidden');
      } else {
          document.body.classList.remove('overflow-hidden');
      }
  
      return () => {
          document.body.classList.remove('overflow-hidden');
      };
  }, [isCallUsModalOpen]);

    return (
      <CallUsModalContext.Provider value={{ isCallUsModalOpen,setIsCallUsModalOpen }}>
        {children}
      </CallUsModalContext.Provider>
    );
  };
  
  export const useCallUsModalState = (): CallUsModalContextProps => {
    const context = useContext(CallUsModalContext);
    if (!context) {
      throw new Error('useCallUsModalState must be used within a CallUsModalProvider');
    }
    return context;
  };