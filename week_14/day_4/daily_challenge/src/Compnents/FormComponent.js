import InputComponent from './InputComponent';
import { useState } from 'react';
import './FormComponent.css';

const FormComponent = () => {
    const [fName, setFName] = useState();
    const [lName, setLName] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const [destination, setDestination] = useState('');
    const [nutsFree, setNutsFree] = useState(false);
    const [lactoseFree, setLactoseFree] = useState(false);
    const [vegan, setVegan] = useState(false);

    const handleSubmit = () => {
        let result = `/?firstName=${fName}&lastName=${lName}&age=${age}&gender=${gender}&destination=${destination}`;
        if (nutsFree) {
            result += '&nutsFree=on';
        }
        if (lactoseFree) {
            result += '&lactoseFree=on'
        }
        if (vegan) {
            result += '&vegan=on'
        }
        window.location.href = result;
    };

    return <>
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <InputComponent label="First Name" type="text" parentCallback={(name) => {
                    setFName(name);
                }}/>
                <InputComponent label="Last Name" type="text" parentCallback={(lastName) => {
                    setLName(lastName);
                }}/>
                <InputComponent label="Age" type="number" parentCallback={(age) => {
                    setAge(age);
                }}/>
                <div><input onChange={() => {
                    setGender('Male');
                }} type="radio" value="Male" name="gender" id="genderMale"/><label htmlFor="genderMale">Male</label>
                </div>
                <div><input onChange={() => {
                    setGender('Female');
                }} type="radio" value="Female" name="gender" id="genderFemale"/><label
                    htmlFor="genderFemale">Female</label></div>
                <h3>Select your destination</h3>
                <select defaultValue={destination} onChange={(e) => {
                    setDestination(e.target.value);
                }}>
                    <option value="">-- Please Choose a destination --</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Japan">Japan</option>
                    <option value="Brazil">Brazil</option>
                </select>
                <h3>Dietary Restrictions</h3>
                <div><input checked={nutsFree} onChange={(e) => {
                    setNutsFree(e.target.checked);
                }} type="checkbox" id="nutsFreeCheckbox" name="nutsFree"/><label htmlFor="nutsFreeCheckbox">Nuts
                    Free</label></div>
                <div><input checked={lactoseFree} onChange={(e) => {
                    setLactoseFree(e.target.checked);
                }} type="checkbox" id="lactoseFreeCheckbox" name="lactoseFree"/><label htmlFor="lactoseFreeCheckbox">Lactose
                    Free</label></div>
                <div><input checked={vegan} onChange={(e) => {
                    setVegan(e.target.checked);
                }} type="checkbox" id="veganCheckbox" name="vegan"/><label htmlFor="veganCheckbox">Vegan</label></div>
                <button type='submit'>Submit</button>
            </form>
        </div>
        <hr/>
        <div className="data-container">
            <p>Your Name: {fName} {lName}</p>
            <p>Your Age: {age}</p>
            <p>Your Gender: {gender}</p>
            <p>Your Destination: {destination}</p>
            <p>Your dietary restrictions:</p>
            <p>**Nuts Free: {nutsFree ? 'Yes' : 'No'}</p>
            <p>**Lactose Free: {lactoseFree ? 'Yes' : 'No'}</p>
            <p>**Vegan: {vegan ? 'Yes' : 'No'}</p>
        </div>
    </>;
};

export default FormComponent;