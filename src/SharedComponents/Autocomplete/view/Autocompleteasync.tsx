import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import { useAutoCompleteAsync } from '../hook/useAutocompleteasync';

type props = {

    nombreDataOcject: string;
    method: string;
    label: string;
    fnSeleted: handleSelected;
    defaultValue?: Object | null;
    showError?: errorAC;
}

type errorAC = { hasError: boolean; msn: string }
type handleSelected = <T>(value: T) => void;

interface Foo {
    [key: string]: string;
}
export const Autocompleteasync = (info: props) => {

    if (info.showError == undefined) info.showError = { hasError: false, msn: "" }


    const { changeTyping, loading, lstData, open, setOpen, textInput, handleSelected } = useAutoCompleteAsync(info);

    const id = `AcAsync_${info}`;
    return (
        <Autocomplete
            disablePortal
            id={id}
            options={lstData}
            loading={loading}
            size="small"
            onChange={(event, value) => handleSelected(value)}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            value={textInput}
            onInputChange={changeTyping}
            isOptionEqualToValue={(option, value) => option[info.nombreDataOcject] === value[info.nombreDataOcject]}
            getOptionLabel={(option) => option[info.nombreDataOcject]}
            renderInput={(params) => (
                <TextField
                    error={info.showError!.hasError}
                    helperText={info.showError!.msn}
                    {...params}
                    label={info.label}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                            </>
                        ),
                    }}
                />
            )}
        />
    )
}
