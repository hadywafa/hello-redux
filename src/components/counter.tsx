import { useAppSelector, useAppDispatch } from "../app/hooks";
import { amountAdded, decrement, increment, reset } from "../features/counter/counter-slice";

function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <p className="mb-4 text-2xl font-bold text-center text-gray-500">Count is: {count}</p>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-6 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(amountAdded(3))}
          className="px-6 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Increment By 3
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-6 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="px-6 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
