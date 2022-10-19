import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.Identite_nationale}</td>
      <td>{contact.Nom}</td>
      <td>{contact.Date_de_naissance}</td>
      <td>{contact.Pays_de_naissance}</td>
      <td>{contact.Pays_de_residence}</td>
      <td>{contact.Sexe}</td>
      <td>{contact.Etat_civil}</td>
      <td>{contact.Langue}</td>
      <td>
         <button type="button" onClick={handleDeleteClick}>
        Delete
      </button>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
      </td>
     
    </tr>
  );
};

export default ReadOnlyRow;
