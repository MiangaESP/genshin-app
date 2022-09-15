import { useState } from "react"

const useSucessMessage = () => {
    const [successMessage, setSuccessMessage] = useState("")
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false)
    };

    const setMessage = (message) => {
        setSuccessMessage(message)
    }

    return {
        successMessage,
        open,
        handleClick,
        handleClose,
        setMessage
    }
}

export default useSucessMessage