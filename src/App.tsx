import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

// Code-split the /dokumentasi route as requested
const Documentation = lazy(() => import('./pages/Documentation'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={
        <div className="min-h-screen bg-ink-900 flex flex-col items-center justify-center font-mono text-xs text-steel gap-2 select-none">
          <span className="w-4 h-4 rounded-full border-2 border-line border-t-phosphor animate-spin" />
          <span>DECRYPTING_SYSTEM_LAYOUTS...</span>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dokumentasi" element={<Documentation />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
