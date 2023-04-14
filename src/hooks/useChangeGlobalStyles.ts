import React from "react";

const useChangeGlobalStyles = (classes: string) => {
  React.useEffect(() => {
    document.body.classList.add(classes);

    return () => document.body.classList.remove(classes);
  }, [])
}

export default useChangeGlobalStyles