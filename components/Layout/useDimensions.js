import React, { useEffect, useRef } from "react";

// Implementación básica: en realidad, sería recomendable adjuntar
// un listener para el evento de redimensionamiento de la ventana o usar state/layoutEffect en lugar de ref/effect
// si es importante conocer las dimensiones en la representación inicial del cliente.
// Sería más seguro devolver null para estados no medidos.
export const useDimensions = ref => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};
