import { useState } from "react";

function useLoadingState() {
  const [loading, setLoading] = useState<boolean>(false);

  const performActionWithLoading = async (
    action: () => Promise<void>
  ): Promise<void> => {
    setLoading(true);
    try {
      await action();
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return { loading, performActionWithLoading };
}

export default useLoadingState;
