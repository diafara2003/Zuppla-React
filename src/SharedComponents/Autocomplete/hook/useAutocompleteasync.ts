import { useEffect, useState, useRef, ChangeEventHandler, SyntheticEvent } from "react";
import { APiMethod, requestAPI, RequestModel } from "../../../Provider";

type props = {

    nombreDataOcject: string;
    method: string;
    label: string;
    fnSeleted: handleSelected;
    defaultValue?: Object | null;
    showError?: errorAC;
}

type handleSelected = <T>(value: T) => void;
type errorAC = { hasError: boolean; msn: string }
interface Foo {
    [key: string]: string;
}

export const useAutoCompleteAsync = ({ method, fnSeleted, defaultValue, nombreDataOcject, showError }: props) => {


    let valueInitial: string = "";

    if (defaultValue != undefined && defaultValue != null)
        valueInitial = (defaultValue as Foo)[nombreDataOcject];

    const [lstData, setlstData] = useState<[]>([]);
    const [loading, setIsloadingAC] = useState(false);
    const [open, setOpen] = useState(false);
    const [selectedOption, setselectedOption] = useState<Foo>((defaultValue as Foo));
    const [textInput, setTextInput] = useState<Foo>({

        [nombreDataOcject]: valueInitial
    });


    const changeTyping = (e: SyntheticEvent<Element, Event>, value: string) => {

        if (value != '' && value != textInput[nombreDataOcject]) {
            search(value);
            // setIsloadingAC(false);
        } else {
            setlstData([]);
        }
    }

    const search = async (value: string) => {


        setIsloadingAC(true);
        setlstData([]);
        const request: RequestModel = {
            metodo: `${method}${value}`,
            AllowAnonymous: false,
            type: APiMethod.GET
        }
        const response = await requestAPI<[]>(request)!;

        if (response != null) {
            setlstData(response);
        }


        setTextInput({
            [nombreDataOcject]: value
        });
        setIsloadingAC(false);

    }

    useEffect(() => {

        if (open) {
            search(textInput[nombreDataOcject]);
        }
        else {

            setlstData([]);
            setIsloadingAC(false);

            // fnSeleted(selectedOption);
            let valueInitial: string = "";


            if (selectedOption != undefined && selectedOption[nombreDataOcject] != undefined) {

                valueInitial = selectedOption[nombreDataOcject];
                fnSeleted(selectedOption);
                setTextInput({
                    [nombreDataOcject]: valueInitial
                });
            } else {
                fnSeleted(textInput);

            }
        }




    }, [open])



    const handleSelected = (value: Foo | null) => {

        if (value == null) return;
        valueInitial = value![nombreDataOcject];
        setselectedOption(() => value!);
        //  fnSeleted(value ?? {})

    }
    return {
        lstData, loading,
        open, setOpen,
        changeTyping,
        textInput,
        handleSelected

    }
}