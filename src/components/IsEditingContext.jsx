import { createContext, useContext } from "react";

export const IsEditingContext = createContext(true);
export function useIsEditing() {
  return useContext(IsEditingContext);
}
