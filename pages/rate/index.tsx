import React, { useEffect, useState } from "react";
import { useShipping } from "@bigcommerce/storefront-data-hooks";

const ShippingProvider = () => {
  const [shippingMethods, setShippingMethods] = useState([]);
  const { getShippingMethods } = useShipping();

  useEffect(() => {
    getShippingMethods().then((methods) => {
      setShippingMethods(methods);
    });
  }, []);

  return (
    <div>
      <h1>Shipping Methods</h1>
      <ul>
        {shippingMethods.map((method) => (
          <li key={method.id}>{method.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShippingProvider;