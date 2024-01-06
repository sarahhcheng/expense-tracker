export const ExpenseItem = (props) => {
  const { title, price } = props;
  return (
    <div>
      <span>{title}</span>
      <span>{price}</span>
    </div>
  );
};
