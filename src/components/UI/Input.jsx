import React from 'react';
import { TextField } from '@material-ui/core';


const Input = (props) => {
    const { name, label, value,error=null, onChange, type } = props;
    
    return (
        <TextField
            variant="outlined"
            label={label}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            {...(error && {error:true,helperText:error})}
        />
    )
}

export default Input;