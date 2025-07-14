import { useState } from "react";

function useLoadingState() {
  const [loading, setLoading] = useState<boolean>(false);

  const performActionWithLoading = async (action: Function): Promise<void> => {
    if (!loading) setLoading(true);
    try {
      await action();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, performActionWithLoading };
}

export default useLoadingState;
