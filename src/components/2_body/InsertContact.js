import React from "react";
import './InsertContact.css'

export default function InsertContact(props) {
    const [formData, setFormData] = React.useState(
        { personName: "", phoneNumber: "", id: "" }
    )


    function random() {
        return Math.random().toString(36).substring(4, 18)
    }

    function handleChange(event) {
        event.stopPropagation()


        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value,
                id: random()
            }
        })
    }


    function addItem() {
        if (isNaN(formData.personName) && !isNaN(formData.phoneNumber) && formData.phoneNumber && formData.personName) {
            props.addContact(formData);
            setFormData({ personName: "", phoneNumber: "", id: "" })
        } else {
            alert("Insert a valid Contact")
        }
    }


    return (
        <div className="form" >
            <input
                className="form-input"
                type="text"
                onChange={handleChange}
                placeholder="name"
                name="personName"
                value={formData.personName}

            />

            <input
                className="form-input"
                type="text"
                onChange={handleChange}
                placeholder="phone number"
                name="phoneNumber"
                value={formData.phoneNumber}
            />

            <button className="add-btn" onClick={addItem}>Add</button>
        </div>
    )


}