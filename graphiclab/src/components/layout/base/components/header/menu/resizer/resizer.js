import React from "react";

let defaultHeight
let defaultWidth

if (typeof window !== `undefined`) {
  defaultHeight = window.innerHeight
  defaultWidth = window.innerWidth
}

export default function useWindowSize() {

    const [windowSize, setWindowSize] = React.useState({
        width: defaultWidth,
        height: defaultHeight,
    });

    function changeWindowSize() {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    React.useEffect(() => {
        window.addEventListener("resize", changeWindowSize);

        return () => {
            window.removeEventListener("resize", changeWindowSize);
        };
    }, []);

    return windowSize;
}