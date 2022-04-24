export const Button = ({ toggleVisibility, isVisible }) => {
  return (
    <button type="button" onClick={toggleVisibility}>
      {isVisible ? 'Show hiden' : 'Show films'}
    </button>
  );
};
