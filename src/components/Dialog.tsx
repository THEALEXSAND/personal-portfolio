import { useEffect, useRef } from "react";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    className?: string
    children: React.ReactNode;
}

export function Dialog({ isOpen, onClose, className, children }: Props) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (!isOpen) {
            console.log("Closing Modal...");
            dialogRef.current?.close();
        }

        console.log("Opening Modal...");
        dialogRef.current?.showModal();
    }, [isOpen])

    useEffect(() => {
        dialogRef.current?.addEventListener("close", onClose);

        return () => {
            dialogRef.current?.removeEventListener("close", onClose);
        }
    }, [onClose])

    
    return (
        <dialog
            className={className}
            ref={dialogRef}
        >
            {children}
        </dialog>
    )
}