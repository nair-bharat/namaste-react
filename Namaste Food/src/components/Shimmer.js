const Shimmer = () => {
  return (
    <div className="shimmer-cards">
      {new Array(16).fill("").map((e, i) => (
        <div key={i} className="shimmer-card"></div>
      ))}
    </div>
  );
};

export default Shimmer;
