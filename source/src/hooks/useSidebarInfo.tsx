import { useState } from 'react';

const useSidebarInfo = () => {
  const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false);

  const openInfoBar = (): void => {
    setIsInfoOpen(true);
  };

  const closeInfoBar = (): void => {
    setIsInfoOpen(false);
  };

  return { isInfoOpen, openInfoBar, closeInfoBar };
};

export default useSidebarInfo;
