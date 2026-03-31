import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementAmount, incrementBy10, incrementBy5 } from "./redux/slices/counterSlice";
import { useState } from "react";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [num, setNum] = useState('');

  // Common button style
  const btnStyle = "px-6 py-3 rounded-xl font-semibold transition-all active:scale-95 duration-200 shadow-lg text-white";

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-800/50 backdrop-blur-md p-8 rounded-3xl border border-slate-700 shadow-2xl">
        
        {/* Count Display */}
        <div className="text-center mb-10">
          <p className="text-slate-400 uppercase tracking-widest text-sm mb-2">Current Balance</p>
          <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">
            {count}
          </h1>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button 
            onClick={() => dispatch(increment())} 
            className={`${btnStyle} bg-blue-600 hover:bg-blue-500`}>
            + Increment
          </button>
          <button 
            onClick={() => dispatch(decrement())} 
            className={`${btnStyle} bg-rose-600 hover:bg-rose-500`}>
            - Decrement
          </button>
          <button 
            onClick={() => dispatch(incrementBy5())} 
            className={`${btnStyle} bg-slate-700 hover:bg-slate-600`}>
            +5
          </button>
          <button 
            onClick={() => dispatch(incrementBy10())} 
            className={`${btnStyle} bg-slate-700 hover:bg-slate-600`}>
            +10
          </button>
        </div>

        {/* Custom Amount Section */}
        <div className="space-y-4 pt-6 border-t border-slate-700">
          <label className="text-slate-300 text-sm ml-1">Custom Amount</label>
          <div className="flex gap-2 mt-2">
            <input 
              type="number" 
              placeholder="Enter value"
              className="flex-1 bg-slate-900/80 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              value={num} 
              onChange={(e) => setNum(e.target.value)} 
            />
            <button 
              onClick={() => {
                dispatch(incrementAmount(Number(num) || 0));
                setNum(''); 
              }} 
              className="bg-emerald-600 hover:bg-emerald-500 px-6 py-3 rounded-xl font-bold text-white transition-all active:scale-95">
              Add
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
