import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="Identite_nationale"
          required="required"
          values={editFormData}
          onChange={handleEditFormChange}
          placeholder="enter a number"
        />
      </td>
      <td>
        <input
          type="text"
          name="Nom"
          required="required"
          values={editFormData}
          onChange={handleEditFormChange}
          placeholder="enter a name"
        />
      </td>
      <td>
        <input
          type="datetime"
          name="Date_de_naissance"
          required="required"
          values={editFormData}
          onChange={handleEditFormChange}
          placeholder="31/05/1988"
        />
      </td>
      <td>
        <input
          type="string"
          name="Pays_de_naissance"
          required="required"
          values={editFormData}
          onChange={handleEditFormChange}
          placeholder="enter a country"
        />
      </td>
      <td>
        <input
          type="string"
          name="Pays_de_residence"
          required="required"
          values={editFormData}
          onChange={handleEditFormChange}
          placeholder="enter a country"
        />
      </td>
      <td>
        <input
          type="string"
          name="Sexe"
          required="required"
          values={editFormData}
          onChange={handleEditFormChange}
          placeholder="enter a sex"
        />
      </td>
      <td>
        <input
          type="string"
          name="Etat_civil"
          required="required"
          values={editFormData}
          onChange={handleEditFormChange}
          placeholder="enter a statut"
        />
      </td>
      <td>
        <input
          type="string"
          name="Langue"
          required="required"
          values={editFormData}
          onChange={handleEditFormChange}
          placeholder="enter a language"
        />
      </td>

      <td>
        <button type="submit">save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
       
      </td>
    </tr>
  );
};

export default EditableRow;
