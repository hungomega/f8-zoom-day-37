import { memo } from "react";

const ActionButtons = memo(({ onIncrement, onReset }) => {
    return (
        <>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onReset}>Reset</button>
        </>
    );
});

export default ActionButtons;