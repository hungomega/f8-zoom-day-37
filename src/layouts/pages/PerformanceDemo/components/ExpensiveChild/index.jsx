import { memo, useMemo } from "react";

const ExpensiveChild = memo(({ items }) => {
    console.log("ExpensiveChild render");
    const totalLength = items.reduce((total, item) => {
        return total + item.length;
    }, 0);

    // Tính toán nặng: tìm item có tên dài nhất
    const expensiveCalculation = useMemo(() => {
        console.log("Calculating longest name...");
        let longest = "";
        items.forEach((item) => {
            // Thêm delay giả lập tính toán nặng
            for (let i = 0; i < 100000; i++) {}
            if (item.length > longest.length) {
                longest = item;
            }
        });
        return longest;
    }, [items]);

    return (
        <div>
            {items.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
            <p>Tổng độ dài tên: {totalLength}</p>
            <p>Tên dài nhất: {expensiveCalculation}</p>{" "}
        </div>
    );
});

export default ExpensiveChild;
