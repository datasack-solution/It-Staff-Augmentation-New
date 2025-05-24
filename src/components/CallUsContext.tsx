import { createContext, useContext, useEffect, useState } from "react"

interface CallUsModalContextProps {
  setIsCallUsModalOpen: React.Dispatch<React.SetStateAction<CallUsModalStateType>>
  isCallUsModalOpen: CallUsModalStateType
  isOpened: boolean
  darkMode: boolean,
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
  quantities: TechQuantitiesType
  setQuantities: React.Dispatch<React.SetStateAction<TechQuantitiesType>>,
  setDuration: React.Dispatch<React.SetStateAction<string>>,
  duration: string
  isPricingToastOpened: boolean
}

const CallUsModalContext = createContext<CallUsModalContextProps | undefined>(undefined);

type CallUsModalStateType = {
  isOpen: boolean,
  hasTechs: boolean,
  techLabels: string[] | null,
  techQuantities: number[] | null
}

export type TechQuantitiesType = { [category: string]: { [tech: string]: number } }
let isPricingToastOpened = false

export const CallUsModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCallUsModalOpen, setIsCallUsModalOpen] = useState<CallUsModalStateType>({
    isOpen: false,
    hasTechs: false,
    techLabels: [],
    techQuantities: []
  })
  const [quantities, setQuantities] = useState<TechQuantitiesType>({});
  const [duration, setDuration] = useState<string>('6 months');


  const [isOpened, setIsOpened] = useState(false)
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setIsOpened(false)
  }, [])

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      const techs = Object.values(quantities).flatMap(r => { return Object.keys(r) })
      if (techs.length > 0) {
        isPricingToastOpened = true
        event.preventDefault();
        event.returnValue = "Are you sure you want to leave this page?"; //Modern browsers (Chrome 51+, Safari 9.1+, Firefox 48+) ignore the returnValue property and do not display a confirmation dialog.
        //Legacy browsers (Internet Explorer, older versions of Chrome and Safari) may still display a confirmation dialog if returnValue is set.
      }
    };

    // Add the event listener
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup the event listener on component unmount
    return () => {
      isPricingToastOpened = true
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };

  }, [quantities]);

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
    <CallUsModalContext.Provider value={{ isCallUsModalOpen, setIsCallUsModalOpen, isOpened, darkMode, setDarkMode, quantities, setQuantities, duration, setDuration, isPricingToastOpened }}>
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