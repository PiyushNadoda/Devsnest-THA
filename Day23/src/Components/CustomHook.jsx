import { useCallback, useState, useRef, useEffect } from "react";

const useToggle = (initialState = false) => {

    const [state, setState] = useState(initialState);
    
    const toggle = useCallback(() => setState(state => !state), []);
    
    return [state, toggle]
}
function useHover() {
    const [value, setValue] = useState(false);
    const ref = useRef(null);
    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);
    useEffect(
      () => {
        const node = ref.current;
        if (node) {
          node.addEventListener("mouseover", handleMouseOver);
          node.addEventListener("mouseout", handleMouseOut);
          return () => {
            node.removeEventListener("mouseover", handleMouseOver);
            node.removeEventListener("mouseout", handleMouseOut);
          };
        }
      },
    //   [ref.current]
    );
    return [ref, value];
  }
export {useToggle, useHover};