import { useState, useEffect, useCallback } from 'react';
import type { propinas } from '../types/propinas';

export const useCalculadoraPropinas = () => {
  const [cuenta, setCuenta] = useState<string>('');
  const [porcentaje, setPorcentaje] = useState<number>(15);
  const [mensaje, setMensaje] = useState<string>('');

  const [resultado, setResultado] = useState<propinas>({
    cuenta: 0,
    porcentaje: 15,
    cantidadPropina: 0,
    totalPagar: 0,
  });

  const calcularPropina = useCallback(() => {
    const montoCuenta = Number(cuenta);

    if (cuenta.trim() === '' || montoCuenta <= 0) {
      setMensaje('Ingrese un monto válido.');

      setResultado({
        cuenta: 0,
        porcentaje,
        cantidadPropina: 0,
        totalPagar: 0,
      });

      return;
    }

    const cantidadPropina = montoCuenta * (porcentaje / 100);
    const totalPagar = montoCuenta + cantidadPropina;

    setResultado({
      cuenta: montoCuenta,
      porcentaje,
      cantidadPropina,
      totalPagar,
    });

    setMensaje('');
  }, [cuenta, porcentaje]);

  const limpiarFormulario = useCallback(() => {
    setCuenta('');
    setPorcentaje(15);
    setMensaje('');

    setResultado({
      cuenta: 0,
      porcentaje: 15,
      cantidadPropina: 0,
      totalPagar: 0,
    });
  }, []);

  useEffect(() => {
    setMensaje('');
  }, [cuenta, porcentaje]);

  return {
    cuenta,
    porcentaje,
    resultado,
    mensaje,
    setCuenta,
    setPorcentaje,
    calcularPropina,
    limpiarFormulario,
  };
};