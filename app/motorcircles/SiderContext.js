import { createContext, useContext, useState } from "react";

const SiderNavContext = createContext(null);

export const useSiderNav = () => useContext(SiderNavContext);

const SiderNavProvider = ({ children }) => {
  const [isCollapsable, setIsCollapsable] = useState(false);

  const toggleSiderNav = () => {
    setIsCollapsable((prev = !prev));
  };

  return (
    <SiderNavContext.Provider value={{ isCollapsable, toggleSiderNav }}>
      {children}
    </SiderNavContext.Provider>
  );
};

export default SiderNavProvider;
