import {React} from "react";
import { FormContainer,SendInviteBtn} from "./popUpStyles";

export const Form = ({setModalIsOpen}) => {
 
  return (
    <FormContainer>

    <button className="closeForm" onClick={ ()=> setModalIsOpen(false)}>x</button>

    <div className="form-container">
      <div className="form-title">
        <h3>Send invite</h3>
        <p>
          Send an invitation for an external user to use your internal shop
        </p>
      </div>
      
      <form >
        <div className="form-group">
          <label htmlFor="profile">Profile</label>
          <div className="form-control">
            <select name="profile" id="profile">
            <option value="frontend">Developer front-end</option>
            <option value="backend">Developer back-end</option>
          </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="joe.doe@minka.cloud"
          />
        </div>
      </form>

      <SendInviteBtn onClick={()=> setModalIsOpen(false)}>Invite</SendInviteBtn>
    </div>
    </FormContainer>
  );
};
export default Form;