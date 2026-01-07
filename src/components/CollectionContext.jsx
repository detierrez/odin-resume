import { createContext, useContext, useReducer } from "react";
import {
  education as initialEducation,
  experience as initialExperience,
  createEmptyItem,
} from "../modules/data";

const CollectionContext = createContext(null);
const CollectionDispatchContext = createContext(null);

export function useCollection() {
  return useContext(CollectionContext);
}

export function useCollectionDispatch() {
  return useContext(CollectionDispatchContext);
}

export function CollectionProvider({ initialCollection, children }) {
  const [collection, dispatch] = useReducer(
    collectionReducer,
    initialCollection
  );
  return (
    <CollectionContext value={collection}>
      <CollectionDispatchContext value={dispatch}>
        {children}
      </CollectionDispatchContext>
    </CollectionContext>
  );
}

function collectionReducer(collection, action) {
  switch (action.type) {
    case "update": {
      const { id, ...patch } = action.item;
      const item = collection[id];
      return {
        ...collection,
        [item.id]: {
          ...item,
          ...patch,
        },
      };
    }
    case "add": {
      const item = createEmptyItem();
      return { ...collection, [item.id]: item };
    }

    case "delete": {
      const copy = { ...collection };
      delete copy[action.item.id];
      return copy;
    }

    default:
      return collection;
  }
}
