interface Props {
  color?: string;
}

export default function Go({ color }: Props) {
  return (
    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.51426 19.1957L14.3201 13.3898C14.8345 12.8754 15.1235 12.1778 15.1235 11.4503L15.1235 9.97154C15.1235 9.24409 14.8345 8.54644 14.3201 8.03205L9.71326 3.42517C9.05078 2.76269 7.9767 2.7627 7.31423 3.42517L14.6 10.7109L8.51427 16.7967C7.85179 17.4591 7.85179 18.5332 8.51426 19.1957Z"
        fill={color ? color : '#111111'}
      />
    </svg>
  );
}
