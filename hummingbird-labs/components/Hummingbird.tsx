const Hummingbird = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="100"
      height="100"
    >
      <ellipse cx="50" cy="60" rx="10" ry="20" fill="green" />
      <circle cx="50" cy="40" r="8" fill="green" />
      <circle cx="52" cy="39" r="1" fill="black" />
      <line x1="58" y1="40" x2="70" y2="35" stroke="black" stroke-width="1" />
      <path d="M40 50 Q20 20, 60 40" fill="lightblue" />
      <polygon points="50,80 45,90 55,90" fill="green" />
    </svg>
  );
};

export default Hummingbird;
