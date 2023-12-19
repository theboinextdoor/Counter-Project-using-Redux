import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterAction } from "../store/counter";

const Controls = () => {
  const inputElement = useRef();

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterAction.increment());
  };

  const handleDecrement = () => {
    dispatch(counterAction.decrement());
  };

  const handleReset = () => {
    dispatch(counterAction.reset());
  };

  const handleAddButton = () => {
    dispatch(counterAction.add(inputElement.current.value ));
    inputElement.current.value = "";
  };
  const handleSubtractButton = () => {
    dispatch(counterAction.subtract(inputElement.current.value ));
    inputElement.current.value = "";
  };
  const handleMultiPlicationButton = () => {
    dispatch(counterAction.multiplication(inputElement.current.value ))
    inputElement.current.value = "";
  };
  const handleDivideButton = () => {
    dispatch(counterAction.divide(inputElement.current.value ))
    inputElement.current.value = "";
  };
 

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary m-3 p-4 fs-3 "
          onClick={handleIncrement}
        >
          Increment
        </button>

        <button
          type="button"
          className="btn btn-success p-4 m-3 fs-3"
          onClick={handleDecrement}
        >
          Decrement
        </button>

        <button
          type="button"
          className="btn btn-danger m-3 p-4 fs-3"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      <div className="input-group mb-3">
        {/* Input Field */}
        <input
          type="text"
          ref={inputElement}
          className="form-control me-3"
          placeholder="Enter Number"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />

        {/* Button Field */}
        <button
          type="button"
          className="btn btn-info me-3 p-3"
          onClick={handleAddButton}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-warning me-3 p-3"
          onClick={handleSubtractButton}
        >
          {" "}
          Subtract{" "}
        </button>
        <button
          type="button"
          className="btn btn-dark me-3 p-3"
          onClick={handleMultiPlicationButton}
        >
          {" "}
          Multilication{" "}
        </button>
        <button
          type="button"
          className="btn btn-secondary me-3 p-3"
          onClick={handleDivideButton}
        >
          {" "}
          Divide{" "}
        </button>
      </div>
    </>
  );
};

export default Controls;
