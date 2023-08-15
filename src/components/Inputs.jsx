export const GenericInput = (label, type, value, onChange) => {
  return (
    <div className="flex flex-col">
      <label className="text-m text-gray-700">{label}:</label>
      <input
        className="bg-amber-200 border-b border-gray-700"
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
