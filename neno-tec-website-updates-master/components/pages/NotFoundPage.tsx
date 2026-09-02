import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-[120px] md:text-[180px] font-black leading-none tracking-tighter text-zinc-900">
          404
        </div>
        <div className="-mt-8 mb-8">
          <h1 className="text-3xl md:text-5xl font-arapey italic mb-4">Page Not Found</h1>
          <p className="text-zinc-500 text-base md:text-lg">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-zinc-200 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
