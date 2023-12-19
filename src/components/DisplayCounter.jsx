import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const {counterVal} = useSelector((store) => store.counter);

  return (
    <p className="lead mb-4" style={{ fontSize: "xxx-large" }}>
      Counter current Value : {counterVal}
    </p>
  );
};

export default DisplayCounter;
