function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        bg-cyan-500
        hover:bg-cyan-600
        px-6
        py-3
        rounded-2xl
        font-semibold
        transition
        shadow-lg
      "
    >
      {text}
    </button>
  );
}

export default Button;