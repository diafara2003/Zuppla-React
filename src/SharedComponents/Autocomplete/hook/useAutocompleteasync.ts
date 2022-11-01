import { useEffect, useState, useRef, ChangeEventHandler, SyntheticEvent } from "react";
import { APiMethod, requestAPI, RequestModel } from "../../../Provider";


export const useAutoCompleteAsync = (method:string) => {


    const [lstData, setlstData] = useState<[]>([]);
    const [loading, setIsloadingAC] = useState(false);
    const [open, setOpen] = useState(false);
    const value = useRef<HTMLInputElement>(null);

    const changeTyping = (e: SyntheticEvent<Element, Event>, value: string) => {

        if (value != '') {
            
            search(value);
            // setIsloadingAC(false);
        } else {
            setlstData([]);
        }
    }

    const search = async (value: string) => {

        if (value == "") value = " ";
        setIsloadingAC(true);
        setlstData([]);
        const request: RequestModel = {
            metodo: `${method}${value}`,
            AllowAnonymous: false,
            type: APiMethod.GET
        }
        const response = await requestAPI<[]>(request)!;

        if (response != null){
              setlstData(response);
        }



        setIsloadingAC(false);
        
    }

    useEffect(() => {

        if (open) {

            setIsloadingAC(true);

            search(" ");

        }
        else {
            setlstData([]);
            setIsloadingAC(false);
        }

    }, [open])


    return {
        lstData, loading,
        open, setOpen,
        changeTyping, value,

    }
}