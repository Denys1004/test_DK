import React from 'react';
import {useNavigate} from 'react-router-dom';
import Controls from "../controls/Controls";
import { useForm } from '../../hooks/useForm';
import * as usersService from "../../appServices/usersService";

// Styles
import './UsersForm.scss';

// Data
const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]

const initialValues = {
    id: 0,
    name: '',
    number: '',
    gender: 'male',
    maritalStatus: '',
    dateOfBirth: new Date(),
}


const UsersForm = () => {
    const navigate = useNavigate();

    const validate = (fieldValues = values) => {
        let temp = { ...errors }

        if ('name' in fieldValues)
            temp.name = fieldValues.name ? "" : "This field is required."
        if ('maritalStatus' in fieldValues)
            temp.maritalStatus = fieldValues.maritalStatus.length !== 0 ? "" : "This field is required."
        if ('dateOfBirth' in fieldValues )
                temp.dateOfBirth = fieldValues.dateOfBirth ? "" : "Please choose correct date"
        if ('number' in fieldValues)
            temp.number = fieldValues.number ? "" : "This field is required."
        setErrors({...temp})
        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    const {
        values,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialValues, true, validate);

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (validate()){
            await usersService.insertUser(values);
            await resetForm();
            navigate("/results/");
        };
    };

    return (
        <div className="form">
            <form autoComplete="off" onSubmit={handleSubmit}>

                <h2 className='form__title'>Please fill the form</h2>

                <div className="form__inputs-container">
                    <Controls.Input
                        name="name"
                        label="Name"
                        type="text"
                        value={values.name}
                        onChange={handleInputChange}
                        error={errors.name}
                    />
                    <Controls.RadioGroup
                        name="gender"
                        // label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                    <Controls.Select
                        name="maritalStatus"
                        label="Marital Status"
                        value={values.maritalStatus}
                        onChange={handleInputChange}
                        options={usersService.getMaritalStatuses()}
                        error={errors.maritalStatus}
                    />
                    <Controls.DatePicker
                        name="dateOfBirth"
                        label="Date of Birth"
                        value={values.dateOfBirth}
                        onChange={handleInputChange}
                        error={errors.dateOfBirth}
                    />
                    <Controls.Input
                        label="Number"
                        name="number"
                        type="number"
                        value={values.number}
                        onChange={handleInputChange}
                        error={errors.number}
                    />
                    <div className='form__inputs-container_buttons'>
                        <Controls.Button
                            type="submit"
                            text="Submit"
                        />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} 
                        />
                    </div>
                </div>

            </form>
        </div>
    )
}

export default UsersForm;