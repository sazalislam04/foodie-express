import { useEffect } from "react";

const useSetTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - The Foodie Express`;
  }, [title]);
};
export default useSetTitle;
