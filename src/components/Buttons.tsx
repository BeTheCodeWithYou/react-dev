interface ButtonProp {
  children: string;
  color?: string;
  onClick: () => void;
}

function Buttons({ children, onClick, color }: ButtonProp) {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
}

export default Buttons;
