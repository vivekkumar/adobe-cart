import React, { useState, useCallback } from "react";

const RangeInput = ({ range, min, max, onApply, onCancel }) => {
  const minRange = range[0];
  const maxRange = range[1];
  const [currentMin, setCurrentMin] = useState(min);
  const [currentMax, setCurrentMax] = useState(max);

  const handleMinRange = e => {
    let minVal = parseInt(e.target.value, 10);
    if (minVal > currentMax) {
      return;
    } else {
      setCurrentMin(minVal);
    }
  };

  const minChangeCallback = useCallback(handleMinRange, [
    currentMin,
    currentMax
  ]);

  const handleMaxRange = e => {
    let maxVal = parseInt(e.target.value, 10);

    if (maxVal < currentMin) {
      setCurrentMax(currentMin);
      return;
    } else {
      setCurrentMax(maxVal);
    }
  };

  const maxChangeCllback = useCallback(handleMaxRange, [
    currentMin,
    currentMax
  ]);

  const reset = () => {
    setCurrentMin(range[0]);
    setCurrentMax(range[1]);
  };

  return (
    <div className="p-2">
      <div className="mb-1 pb-3">
        <strong className="float-left ">&#8377;{minRange}</strong>
        <strong className="float-right">&#8377;{maxRange}</strong>
      </div>
      <div className="mt-4">
        <strong>Min:</strong>
      </div>
      <div className="px-2">
        <input
          type="range"
          min={minRange}
          max={maxRange}
          value={currentMin}
          onChange={minChangeCallback}
          className="w-100 mb-4"
        />
        <div>
          <strong>Max:</strong>
        </div>
        <input
          type="range"
          min={minRange}
          max={maxRange}
          value={currentMax}
          onChange={maxChangeCllback}
          className="w-100 mb-4"
        />
      </div>

      <div className={`font-weight-bold text-center mb-4`}>
        Price: &#8377;{currentMin} - &#8377;{currentMax}
      </div>
      <div className="row text-center border">
        <div className="col-6 border-right">
          <button
            type="button"
            className="btn btn-link"
            onClick={() => {
              reset();
              onCancel([currentMin, currentMax]);
            }}
          >
            Cancel
          </button>
        </div>
        <div className="col-6">
          <button
            type="button"
            className="btn btn-link"
            onClick={() => onApply([currentMin, currentMax])}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default RangeInput;
