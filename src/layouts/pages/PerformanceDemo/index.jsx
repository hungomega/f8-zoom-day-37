import CounterDisplay from "./components/CounterDisplay";
import ActionButtons from "./components/ActionButtons";
import ExpensiveChild from "./components/ExpensiveChild";
import { useState, useCallback } from "react";

function PerformanceDemo() {
    const [count, setCount] = useState(0);
    const [items, setItems] = useState(["React", "JavaScript", "NodeJS"]);
    const [name, setName] = useState("Hung");

    const handleIncrement = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    const handleReset = useCallback(() => {
        setCount(0);
    }, []);

    const handleChangeName = useCallback(() => {
        setName("Nguyen Huu Hung");
    }, []);

    const handleAddItem = useCallback(() => {
        setItems((prevItems) => [...prevItems, "New Item"]);
    }, []);
    return (
        <>
            <CounterDisplay count={count} /> <br />
            <ActionButtons
                onIncrement={handleIncrement}
                onReset={handleReset}
            />{" "}
            <br /> <br />
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <br /> <br />
            <button onClick={handleChangeName}>Change Name</button>
            <br />
            <p>Name: {name}</p>
            <br />
            <ExpensiveChild items={items} />
            <button onClick={handleAddItem}>Add Item</button>
        </>
    );
}

export default PerformanceDemo;
