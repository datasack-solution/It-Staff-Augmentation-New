import { createContext, useContext, useEffect, useState } from "react"

interface CallUsModalContextProps {
  setIsCallUsModalOpen: React.Dispatch<React.SetStateAction<CallUsModalStateType>>
  isCallUsModalOpen: CallUsModalStateType
  isOpened:boolean
  darkMode:boolean,
  setDarkMode:React.Dispatch<React.SetStateAction<boolean>>
  quantities:TechQuantitiesType
  setQuantities:React.Dispatch<React.SetStateAction<TechQuantitiesType>>
}


const CallUsModalContext = createContext<CallUsModalContextProps | undefined>(undefined);

type CallUsModalStateType = {
  isOpen:boolean,
  hasTechs:boolean,
  techLabels:string[] | null,
  techQuantities:number[]| null
}

type TechQuantitiesType = { [category: string]: { [tech: string]: number } }

export const CallUsModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCallUsModalOpen, setIsCallUsModalOpen] = useState<CallUsModalStateType>({
    isOpen:false,
    hasTechs:false,
    techLabels:[],
    techQuantities:[]
  })
  const [quantities, setQuantities] = useState<TechQuantitiesType>({});
  const [isOpened, setIsOpened] = useState(false)
  const [darkMode, setDarkMode] = useState(false);

  useEffect(()=>{
    setIsOpened(false)
  },[])

  useEffect(() => {
    if (isCallUsModalOpen.isOpen) {
      setIsOpened(true)
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isCallUsModalOpen.isOpen]);

  return (
    <CallUsModalContext.Provider value={{ isCallUsModalOpen, setIsCallUsModalOpen, isOpened , darkMode,setDarkMode,quantities,setQuantities}}>
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