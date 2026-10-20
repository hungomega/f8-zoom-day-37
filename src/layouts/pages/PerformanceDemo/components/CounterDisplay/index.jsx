
import { memo } from "react";

const CounterDisplay = memo(({ count }) => {
    return <p>Current value: {count}</p>;
});

export default CounterDisplay;