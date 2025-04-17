import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export function Button({ children, onClick, type = "button" }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        backgroundColor: "#4f46e5", // indigo
        color: "white",
        padding: "0.5rem 1rem",
        borderRadius: "0.5rem",
        border: "none",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}
