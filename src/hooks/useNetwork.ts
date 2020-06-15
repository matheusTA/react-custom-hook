import { useState, useEffect } from "react";

function useNetwork(): boolean {
  const [network, setNetwork] = useState<boolean>(() =>
    navigator.onLine ? true : false
  );

  useEffect(() => {
    window.addEventListener("online", () => setNetwork(true));
    window.addEventListener("offline", () => setNetwork(false));

    return () => {
      window.removeEventListener("online", () => {});
      window.removeEventListener("offline", () => {});
    };
  }, []);

  return network;
}

export default useNetwork;
