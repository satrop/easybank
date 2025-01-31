// src/components/Button.tsx
interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`hidden lg:block bg-easybankGradient text-white px-6 py-2 rounded-full transition duration-300 hover:opacity-60 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
