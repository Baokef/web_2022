import React, { useState, Fragment } from "react";
import './App.css';
import data from './mock-data.json';
import { nanoid } from "nanoid";

import EditableRow from "./components/EditableRow";
import ReadOnlyRow from "./components/ReadOnlyRow";

function App() {
  const [contacts, setContacts]=useState(data);
  const [AddFormData, setAddFormData] = useState({
    Identite_nationale: "",
    Nom: "",
    Date_de_naissance: "",
    Pays_de_naissance: "",
    Pays_de_residence: "",
    Sexe:"",
    Etat_civil:"",
    Langue:""
  });
  const [editFormData, setEditFormData] = useState({
    Identite_nationale: "",
    Nom: "",
    Date_de_naissance: "",
    Pays_de_naissance: "",
    Pays_de_residence: "",
    Sexe: "",
    Etat_civil: "",
    Langue: ""
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...AddFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
     
      Identite_nationale: AddFormData.Identite_nationale,
      Nom: AddFormData.Nom,
      Date_de_naissance: AddFormData.Date_de_naissance,
      Pays_de_naissance: AddFormData.Pays_de_naissance,
      Pays_de_residence: AddFormData.Pays_de_residence,
      Sexe: AddFormData.Sexe,
      Etat_civil: AddFormData.Etat_civil,
      Langue: AddFormData.Langue,
    };
   
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };
   const handleEditFormSubmit=(event)=>{
    event.preventDefault()

    const editedContact = {
      id: editContactId,
      Identite_nationale: editFormData.Identite_nationale,
      Nom: editFormData.Nom,
      Date_de_naissance: editFormData.Date_de_naissance,
      Pays_de_naissance: editFormData.Pays_de_naissance,
      Pays_de_residence: editFormData.Pays_de_residence,
      Sexe: editFormData.Sexe,
      Etat_civil: editFormData.Etat_civil,
      Langue: editFormData.Langue,
    };
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact)=>contact.id === editContactId);
    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);
    const formValues = {
      Identite_nationale: contact.Identite_nationale,
      Nom: contact.Nom,
      Date_de_naissance: contact.Date_de_naissance,
      Pays_de_naissance: contact.Pays_de_naissance,
      Pays_de_residence: contact.Pays_de_residence,
      Sexe: contact.Sexe,
      Etat_civil: contact.Etat_civil,
      Langue: contact.Langue,
    };
    setEditFormData(formValues);
  };
  const handleCancelClick = () => {
    setEditContactId(null);
  };
  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === contactId);
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };
  return (
    <div>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Identite_nationale</th>
              <th>Nom</th>
              <th>Date_de_naissance</th>
              <th>Pays_de_naissance</th>
              <th>Pays_de_residence</th>
              <th>Sexe</th>
              <th>Etat_civil</th>
              <th>Langue</th>
              <th>Action</th>
              
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <form onSubmit={handleAddFormSubmit} onChange={handleAddFormChange}>
        <h2>Add a contact</h2>
        <ul>
          <li>
            <input
              type="text"
              name="Identite_nationale"
              required="required"
              placeholder="enter a number"
            />
          </li>
          <li>
            <input
              type="string"
              name="Nom"
              required="required"
              placeholder="enter a name"
            />
          </li>
          <li>
            <input
              type="intenger"
              name="Date_de_naissance"
              required="required"
              placeholder="enter a number"
            />
          </li>
          
          <li>
            <input
              type="string"
              name="Pays_de_naissance"
              required="required"
              placeholder="enter a Pays_de_naissance"
            />
          </li>
          <li>
            <input
              type="string"
              name="Pays_de_residence"
              required="required"
              placeholder="enter a Pays_de_residence"
            />
          </li>
          <li>
            <input
              type="string"
              name="Sexe"
              required="required"
              placeholder="enter a Sexe"
            />
          </li>
          <li>
            <input
              type="string"
              name="Etat_civil"
              required="required"
              placeholder="enter a Etat_civil"
            />
          </li>
          <li>
            <input
              type="string"
              name="Langue"
              required="required"
              placeholder="enter a Language"
            />
          </li>
          <li>
            <button type="submit">Add</button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default App;
       


