import { useState } from "react";

export const useEspecialidadText = () => {

    const [checked, setChecked] = useState(false);

    const handleCLick = () => {


        setChecked(() => !checked);
    }



    return {
        checked,
        handleCLick,
    }
}