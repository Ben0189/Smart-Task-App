import { useEffect, useRef } from 'react';

function on(obj, ...args) {
  obj.addEventListener(...args);
}

function off(obj, ...args) {
  obj.removeEventListener(...args);
}

function useClickOutside(refs, onClickAway, events = ['mousedown', 'touchstart']) {
  const savedCallback = useRef(onClickAway);
  const savedRefs = useRef(refs);

  useEffect(() => {
    savedCallback.current = onClickAway;
    savedRefs.current = refs;
  }, [onClickAway, refs]);

  useEffect(() => {
    const handler = (event) => {
      const clickedOutside = savedRefs.current.every((ref) => {
        const { current: el } = ref;
        // If ref is null, consider it as outside click
        if (!el) {
          return true;
        }
        return !el.contains(event.target as Node);
      });

      if (clickedOutside) {
        savedCallback.current(event);
      }
    };

    for (const eventName of events) {
      on(document, eventName, handler);
    }

    return () => {
      for (const eventName of events) {
        off(document, eventName, handler);
      }
    };
  }, [events]);
}

export default useClickOutside;
