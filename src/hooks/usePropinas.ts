import { useState, useEffect, useCallback} from 'react';
import type {propinas} from '../types/propinas';

const usePropinas = () => {
    const objPropinas: propinas = {
        totalpagar:0,
        propina15: "",
        propina20: "",
        porcentaje: "",
    };

    const [propina, setPropina] = useState<propina>(objPropinas);

    const obtenerPropina = (propina: propinas): number =>{
        //colocar el codigo 
      return porcentaje;  
    }
    
    //callBack trae parametros por default
    const calcularPropina = useCallback(() =>{
        const p15 = Number (propina.propina15) ||0;
        return p15;
    }, [propina.propina15, propina.propina20]);
};

//... copia un arreglo o objetos
useEffect(() =>{
    setPropina((prev) =>({
        ...prev,
        totalpagar: calcularPropina(),

    }));
}, [calcularPropina()]);

const actualizarPropina = ((propinas:propinas, value: string) => void;{
    const totalpropina: number = obtenerPropina (propinas);
    const numValor: number = number (valor);

    if (isNaN (numValor) || numValor < 0){
        return;
    }

    setPropina ((prev) =>({
        ...prev,
        [propinas]: numValor,
    }));
};

return {
    propina,
    actualizarPropina,
    obtenerPropina,
};

export default usePropinas;