import { useState, useEffect } from "react";

function useAtTopOfScreen() {
  const [atTop, setAtTop] = useState(true);

  const handleScroll = () => {
    const position = scrollY;
    position == 0 ? setAtTop(true) : setAtTop(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return atTop;
}

export default useAtTopOfScreen;
