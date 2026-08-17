import { useCalculadoraPropinas } from '../hooks/useCalculadoraPropinas';

export const CalculadoraPropinas = () => {
  const {
    cuenta,
    porcentaje,
    resultado,
    mensaje,
    setCuenta,
    setPorcentaje,
    calcularPropina,
    limpiarFormulario,
  } = useCalculadoraPropinas();

  const porcentajes: number[] = [10, 15, 20];

  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
      <header className="mb-7 text-center">
        <div className="mb-3 text-5xl">💰</div>

        <h1 className="text-3xl font-bold text-purple-900">
          Calculadora de propinas
        </h1>

        <p className="mt-2 text-purple-500">
          Ejercicio: Imagina a Sofía, una mesera que quiere una herramienta sencilla para calcular rápidamente la propina de sus clientes. A menudo, los clientes le preguntan cuánto es el 15% o el 20% de su cuenta. Para hacer su trabajo más eficiente, Sofía necesita una aplicación que le permita ingresar el monto de la cuenta y, con solo un clic, ver cuánto sería la propina y el total a pagar. Crear dicha aplicación en React.
        </p>
      </header>

      <div className="mb-6">
        <label
          htmlFor="cuenta"
          className="mb-2 block font-semibold text-purple-900"
        >
          Total de la cuenta
        </label>

        <div className="flex items-center rounded-xl border border-purple-200 bg-purple-50 px-4 focus-within:border-pink-500 focus-within:ring-2 focus-within:ring-pink-200">
          <span className="font-bold text-purple-500">L</span>

          <input
            id="cuenta"
            type="number"
            min="0"
            step="0.01"
            value={cuenta}
            onChange={(evento) => setCuenta(evento.target.value)}
            placeholder="0.00"
            className="w-full bg-transparent p-3 text-lg text-purple-900 outline-none placeholder:text-purple-300"
          />
        </div>

        {mensaje && (
          <p className="mt-2 text-sm font-medium text-red-500">
            {mensaje}
          </p>
        )}
      </div>

      <div className="mb-7">
        <p className="mb-3 font-semibold text-purple-900">
          Seleccione el porcentaje de propina
        </p>

        <div className="grid grid-cols-3 gap-3">
          {porcentajes.map((opcion) => (
            <button
              key={opcion}
              type="button"
              onClick={() => setPorcentaje(opcion)}
              className={`rounded-xl px-4 py-3 font-bold transition ${
                porcentaje === opcion
                  ? 'bg-pink-500 text-white shadow-md'
                  : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
              }`}
            >
              {opcion}%
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={calcularPropina}
        className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 py-3 font-bold text-white shadow-md transition hover:from-purple-700 hover:to-pink-600"
      >
        Calcular propina
      </button>

      <section className="mt-7 rounded-2xl bg-purple-950 p-5 text-white">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-purple-200">
            Propina ({porcentaje}%)
          </span>

          <span className="text-xl font-bold text-pink-300">
            L {resultado.cantidadPropina.toFixed(2)}
          </span>
        </div>

        <div className="border-t border-purple-700 pt-4">
          <div className="flex items-center justify-between">
            <span className="font-semibold">
              Total a pagar
            </span>

            <span className="text-2xl font-bold text-pink-300">
              L {resultado.totalPagar.toFixed(2)}
            </span>
          </div>
        </div>
      </section>

      <button
        type="button"
        onClick={limpiarFormulario}
        className="mt-4 w-full rounded-xl border border-purple-300 py-3 font-semibold text-purple-700 transition hover:bg-purple-100"
      >
        Limpiar
      </button>
    </div>
  );
};