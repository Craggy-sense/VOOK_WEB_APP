export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-br from-slate-900 to-slate-800 text-white text-center p-8">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent flex items-center">
        Vook Voice International
        <span className="inline-block w-3 h-3 ml-4 bg-blue-400 rounded-full shadow-[0_0_15px_#60a5fa] animate-pulse"></span>
      </h1>
      <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl mt-4">
        Something amazing is arriving shortly. Stay tuned.
      </p>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: .5; transform: scale(.8); }
          }
          .animate-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `
      }} />
    </div>
  );
}
