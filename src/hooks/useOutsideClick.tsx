import { useEffect, type RefObject } from "react";

type EventType = MouseEvent | TouchEvent;

const useOutsideClick = <T extends HTMLElement>(
    ref: RefObject<T | null>,
    handler: (event: EventType) => void
) => {

    useEffect(() => {

        const listener = (event: EventType) => {

            if (!ref.current) return;

            if (ref.current.contains(event.target as Node)) return;

            handler(event);

        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {

            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);

        };

    }, [ref, handler]);

};

export default useOutsideClick;