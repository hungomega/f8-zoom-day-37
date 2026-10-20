import { forwardRef, useImperativeHandle, useRef } from "react";

const CustomInput = forwardRef((props, ref) => {
    const inputRef = useRef(null);
    useImperativeHandle(ref, () => ({
        focus() {
            inputRef.current.focus();
        },
        blur() {
            inputRef.current.blur();
        },
        getValue() {
            return inputRef.current.value;
        },
    }));

    return (
        <div>
            <label htmlFor="">{props.label}</label>

            <input
                ref={inputRef}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    );
});
export default CustomInput;
