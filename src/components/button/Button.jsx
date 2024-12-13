export function Button({ label, onSubmit, className }) {
  return (
    <button
      className={`rounded-full w-full bg-dark-gray-blue font-bold hover:bg-gradient-to-b hover:to-light-royal-blue hover:from-light-slate-blue ${className}`}
      onClick={onSubmit}
    >
      {label}
    </button>
  );
}
