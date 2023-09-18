import { useEffect, useState } from "react";

export default function useCursor() {
    const [cursor, setCursor] = useState({ x: 0, y: 0, down: false });

    useEffect(() => {
        const mouseMoveHandler = (e) => {
            const { clientX, clientY, buttons } = e;

            setCursor({ x: clientX, y: clientY });

            if (buttons > 0)
                setCursor({ x: clientX, y: clientY, down: true });
            else
                setCursor({ x: clientX, y: clientY, down: false });
        };
        document.addEventListener("mousemove", mouseMoveHandler);

        const mouseDownHandler = (e) => {
            const { type } = e;

            if (type === "mousedown")
                setCursor({ down: true });
            else
                setCursor({ down: false });
        }
        document.addEventListener("mouseup", mouseDownHandler);
        document.addEventListener("mousedown", mouseDownHandler);

        return () => {
            document.removeEventListener("mousemove", mouseMoveHandler);
            document.removeEventListener("mousedown", mouseDownHandler);
            document.removeEventListener("mouseup", mouseDownHandler);
        };
    }, []);

    return cursor;
}