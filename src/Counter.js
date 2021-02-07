import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Counter = () => {
  const maxCounters = 3;
  const [counters, setCounters] = useState([1]);

  return (
    <div className="section">
      <div class="add-counter">
        <button
          // add counter
          onClick={() => {
            if (counters.length < maxCounters) {
              const newCounters = [...counters];
              newCounters.push(1);
              setCounters(newCounters);
            }
          }}
        >
          Add counter
        </button>
      </div>
      <div className="counters">
        {counters.map((counter, index) => {
          return (
            <div className="counter" key={index}>
              <div>
                <div>
                  {counter > 0 && (
                    <button
                      onClick={() => {
                        const newCounters = [...counters];
                        console.log(newCounters);
                        newCounters[index] = newCounters[index] - 1;
                        console.log(newCounters);
                        setCounters(newCounters);
                      }}
                    >
                      <FontAwesomeIcon icon="minus" size="2x" />
                    </button>
                  )}
                </div>
                <div>{counter}</div>
                <div>
                  {counter < 9 && (
                    <button
                      onClick={() => {
                        const newCounters = [...counters];
                        newCounters[index] = newCounters[index] + 1;
                        setCounters(newCounters);
                      }}
                    >
                      <FontAwesomeIcon icon="plus" size="2x" />
                    </button>
                  )}
                </div>
              </div>
              <div className="reset">
                <button
                  onClick={() => {
                    const newCounters = [...counters];
                    newCounters[index] = 0;
                    setCounters(newCounters);
                  }}
                >
                  Reset
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Counter;
