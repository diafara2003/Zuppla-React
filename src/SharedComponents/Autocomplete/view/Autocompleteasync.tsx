import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import { useAutoCompleteAsync } from '../hook/useAutocompleteasync';

type props = {

    nombreDataOcject: string;
    method: string;
    label: string;
    selected: handleSelected;
    defaultValue?: Object | null;
}

type handleSelected = <T>(value: T) => void;

interface Foo {
    [key: string]: string;
}
export const Autocompleteasync = (info: props) => {

    const { changeTyping, loading, lstData, open, setOpen } = useAutoCompleteAsync(info.method);
    let obj: Foo = {};

    if (info.defaultValue != undefined && info.defaultValue != null)
        obj[info.nombreDataOcject] = (info.defaultValue as Foo)[info.nombreDataOcject];
    else obj[info.nombreDataOcject] = '';

    const id = `AcAsync_${info}`;
    return (
        <Autocomplete
            disablePortal
            id={id}
            options={lstData}
            loading={loading}
            size="small"
            onChange={(event, value) => info.selected(value ?? {})}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            value={obj}
            onInputChange={changeTyping}
            isOptionEqualToValue={(option, value) => option[info.nombreDataOcject] === value[info.nombreDataOcject]}
            getOptionLabel={(option) => option[info.nombreDataOcject]}
            renderInput={(params) => (
                <TextField

                    {...params}
                    label={info.label}
                    InputProps={{

                        ...params.InputProps,

                        endAdornment: (
                            <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </>
                        ),
                    }}
                />
            )}
        />
    )
}
