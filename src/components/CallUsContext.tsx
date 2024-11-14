import { createContext, useContext, useEffect, useState } from "react"

interface CallUsModalContextProps {
  setIsCallUsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  isCallUsModalOpen: boolean
  isOpened:boolean
  darkMode:boolean,
  setDarkMode:React.Dispatch<React.SetStateAction<boolean>>
}

const CallUsModalContext = createContext<CallUsModalContextProps | undefined>(undefined);

export const CallUsModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCallUsModalOpen, setIsCallUsModalOpen] = useState(false)
  const [isOpened, setIsOpened] = useState(false)
  const [darkMode, setDarkMode] = useState(false);


  useEffect(()=>{
    setIsOpened(false)
  },[])

  useEffect(() => {
    if (isCallUsModalOpen) {
      setIsOpened(true)
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isCallUsModalOpen]);

  return (
    <CallUsModalContext.Provider value={{ isCallUsModalOpen, setIsCallUsModalOpen, isOpened , darkMode,setDarkMode}}>
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