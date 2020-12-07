import React from "react";

let defaultWidth

if (typeof window !== `undefined`) {
  defaultWidth = window.innerWidth
}

export default function useWindowSize() {

    const [windowSize, setWindowSize] = React.useState({
        width: defaultWidth
    });

    function changeWindowSize() {
        setWindowSize({ width: window.innerWidth });
    }

    React.useLayoutEffect(() => {
        window.addEventListener("resize", changeWindowSize);

        return () => {
            window.removeEventListener("resize", changeWindowSize);
        };
    }, []);

    return windowSize;
}