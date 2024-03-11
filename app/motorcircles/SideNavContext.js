import { createContext, useContext, useState } from "react";

const SideNavContext = createContext(null);

export const useSiderNav = () => useContext(SideNavContext);

const SideNavProvider = ({ children }) => {
  const [isCollapsable, setIsCollapsable] = useState(false);

  const toggleSiderNav = () => {
    setIsCollapsable((prev = !prev));
  };

  return (
    <SideNavContext.Provider value={{ isCollapsable, toggleSiderNav }}>
      {children}
    </SideNavContext.Provider>
  );
};

export default SideNavProvider;
