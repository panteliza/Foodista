import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const PostContext = createContext();

export default function ContextProvider({ children }) {
  const [Added, setAdded] = useState([]);

  const addToAdded = (item) => {
    const index = Added.findIndex((element) => element.id === item.id);
    if (index !== -1) {
      // Item already exists in the array, update the count
      const updatedAdded = [...Added];
      updatedAdded[index].count += 1;
      setAdded(updatedAdded);
    } else {
      // Item doesn't exist in the array, add it with count 1
      setAdded([...Added, { ...item, count: 1 }]);
    }
  };

  return (
    <PostContext.Provider value={{ Added, setAdded, addToAdded }}>
      {children}
    </PostContext.Provider>
  );
}

export function usePost() {
  const context = useContext(PostContext);
  if (context === undefined) {
    throw new Error('usePost must be used within a PostProvider');
  }
  return context;
}
