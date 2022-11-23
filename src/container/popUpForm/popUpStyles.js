
import styled from 'styled-components';


export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 50%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;

    .form-title {
        text-align: flex-start;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        h3 {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 10px;
            
        }
        p {
            font-size: 14px;
            color: #999;
        }
    }
    
    .form-group {
        margin-bottom: 20px;
        label { 
            display: block;
            font-size: 18px;
            margin-bottom: 5px;
        }
        .form-control {
            width: 100%;
            height: 40px;
            border: 1px solid #ddd;
            border-radius: 5px;
           
            font-size: 14px;
            color: #333;
            &:focus {
                outline: none;
                border-color: #007bff;
            }
        }
        select {
            width: 100%;
            height: 40px;
            border: none;
            background-color: #fff;
            padding: 10px;
            font-size: 14px;
            color: #333;
            &:focus {
                outline: none;
                border-color: #007bff;
            }
        }
    }
    
    .closeForm {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: transparent;
        border: none;
        font-size: 20px;
        color: #999;
        cursor: pointer;
        &:focus {
            outline: none;
        }
    }

`;

   export const SendInviteBtn= styled.button`
    width: 100%;
    background: #2CA07E;
    border-radius: 4px;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 20px;
    padding: 20px;


    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;

    &:hover {
        background-color: #2CA07E;
    }

`;

export const OpenFormBtn = styled(SendInviteBtn)`
   width:10%;
   font-size: 14px;
`;
 


