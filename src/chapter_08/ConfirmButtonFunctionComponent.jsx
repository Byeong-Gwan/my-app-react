'use client'
import { useState } from 'react'


function ConfirmButtonFunctionComponent(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);
    
    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
        <button
            onClick={handleConfirm}
            disabled={isConfirmed}
        >
            {isConfirmed ? '확인됨' : '환인하기'}
        </button>
    );
}

export default ConfirmButtonFunctionComponent;