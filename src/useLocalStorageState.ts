import { useState } from "react";

function useLocalStorageState<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  // Get value from localStorage or use initial value if not present
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? (item as T) : initialValue;
    } catch (error) {
      console.error("Error reading from localStorage", error);
      return initialValue;
    }
  });

  // Update localStorage whenever the state changes
  const setValue = (value: T) => {
    try {
      // Save to localStorage
      localStorage.setItem(key, String(value)); // Ensure value is stored as a string
      setStoredValue(value);
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorageState;
