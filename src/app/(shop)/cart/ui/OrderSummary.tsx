"use client";

import { useCartStore } from "@/store";
import { useEffect, useState } from "react";

export const OrderSummary = () => {
  const [loaded, setLoaded] = useState(false);

  const getSummaryInformation = useCartStore((state) =>
    state.getSummaryInformation()
  );

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <span>No. Productos</span>
      <span className="text-right">
        {getSummaryInformation.itemsInCart} artículos
      </span>

      <span>Subtotal</span>
      <span className="text-right">$ {getSummaryInformation.subTotal}</span>

      <span>Impuestos (15%)</span>
      <span className="text-right">$ {getSummaryInformation.tax}</span>

      <span className="mt-5 text-2xl">Total:</span>
      <span className="mt-5 text-right">$ {getSummaryInformation.total}</span>
    </>
  );
};
