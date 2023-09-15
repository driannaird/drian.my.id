import React, { useState, useContext } from "react";

interface IGlobalContextProps {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
}

type Props = {
  children: React.ReactNode;
};

export const GlobalContext = React.createContext<IGlobalContextProps>({
  toggle: false,
  setToggle: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalContextProvider = (props: Props) => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        toggle: isToggle,
        setToggle: setIsToggle,
      }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
