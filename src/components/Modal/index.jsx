import { useEffect, useRef, useState } from "react";
import styles from "./Modal.module.scss";

function Modal({
    isOpen,
    onAfterOpen,
    onAfterClose,
    onRequestClose,
    closeTimeoutMS = 0,
    overlayClassName,
    className,
    bodyOpenClassName = "modal-open",
    htmlOpenClassName = "modal-open",
    shouldCloseOnOverlayClick = true,
    shouldCloseOnEsc = true,
    children,
}) {
    const [shouldRender, setShouldRender] = useState(isOpen);
    const [isClosing, setIsClosing] = useState(false);
    const modalRef = useRef(null);
    const previousFocusRef = useRef(null);
    const wasOpenRef = useRef(isOpen);

    // Xử lý mở và đóng Modal, bao gồm animation đóng
    useEffect(() => {
        let timer;

        if (isOpen) {
            wasOpenRef.current = true;
            setShouldRender(true);
            setIsClosing(false);
        } else if (wasOpenRef.current) {
            wasOpenRef.current = false;
            setIsClosing(true);

            if (closeTimeoutMS > 0) {
                timer = setTimeout(() => {
                    setShouldRender(false);
                    setIsClosing(false);
                    onAfterClose?.();
                }, closeTimeoutMS);
            } else {
                setShouldRender(false);
                setIsClosing(false);
                onAfterClose?.();
            }
        }

        return () => {
            clearTimeout(timer);
        };
    }, [isOpen, closeTimeoutMS, onAfterClose]);

    // Quản lý focus, class trên body/html và phím Escape
    useEffect(() => {
        if (!isOpen) return;

        const body = document.body;
        const html = document.documentElement;

        previousFocusRef.current = document.activeElement;

        if (bodyOpenClassName) {
            body.classList.add(bodyOpenClassName);
        }

        if (htmlOpenClassName) {
            html.classList.add(htmlOpenClassName);
        }

        modalRef.current?.focus();
        onAfterOpen?.();

        const handleKeyDown = (event) => {
            if (event.key === "Escape" && shouldCloseOnEsc) {
                event.preventDefault();
                onRequestClose?.();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);

            if (bodyOpenClassName) {
                body.classList.remove(bodyOpenClassName);
            }

            if (htmlOpenClassName) {
                html.classList.remove(htmlOpenClassName);
            }

            previousFocusRef.current?.focus?.();
        };
    }, [
        isOpen,
        shouldCloseOnEsc,
        onRequestClose,
        onAfterOpen,
        bodyOpenClassName,
        htmlOpenClassName,
    ]);

    if (!shouldRender) return null;

    const handleOverlayClick = () => {
        if (shouldCloseOnOverlayClick && isOpen) {
            onRequestClose?.();
        }
    };

    return (
        <div
            className={[
                styles.overlay,
                overlayClassName,
                isClosing ? styles.closing : "",
            ]
                .filter(Boolean)
                .join(" ")}
            onClick={handleOverlayClick}
        >
            <div
                ref={modalRef}
                tabIndex={-1}
                className={[
                    styles.modal,
                    className,
                    isClosing ? styles.closing : "",
                ]
                    .filter(Boolean)
                    .join(" ")}
                role="dialog"
                aria-modal="true"
                onClick={(event) => event.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
}

export default Modal;
