export default function Button({ children, ...props }) {
  return (
    <button
      type="submit"
      {...props}
      className="flex items-center justify-center p-2 rounded-lg bg-lime-900"
    >
      {children}
    </button>
  );
}
