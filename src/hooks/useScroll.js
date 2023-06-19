import { useState, useEffect, useCallback } from "react";

const useScroll = () => {
  const [prevPos, setPrevPos] = useState(document.body.scrollHeight);

  const scrollToTop = useCallback(() => {
    setPrevPos(window.pageYOffset);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToDown = useCallback(() => {
    if (prevPos) {
      window.scrollTo({ top: prevPos, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  }, [prevPos]);

  return { scrollToTop, scrollToDown };
};

export default useScroll;
