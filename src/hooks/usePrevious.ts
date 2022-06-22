import { useEffect, useRef } from "react";

/** return the last defined value */
export function usePreviousDefinedValue<T>(value: T) {
  const ref = useRef<T>();
  // Store current value in ref
  useEffect(() => {
    if (value) {
      ref.current = value;
    }
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)
  return ref.current;
}
