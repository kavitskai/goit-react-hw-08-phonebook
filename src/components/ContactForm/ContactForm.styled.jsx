import styled from "@emotion/styled";

export const Form = styled.form`
`;

export const Label = styled.label`
display: flex;
flex-direction: column;
margin: 0 auto;
width: 400px;
margin-bottom: 20px;
`;

export const Input = styled.input`
height: 40px;
border: 1px solid #000000;
border-radius: 4px;
font-size: 16px;
margin-top: 10px;
&:focus {
    outline: none;
    border: 1px solid #04125e;
}
`;

export const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
width: 100px;
height: 30px;
border-radius: 4px;
cursor: pointer;
font-size: 9px;
color: #fff;
text-transform: uppercase;
background-color: #9ccdf5;
border: none;
padding: 5px;
margin: 0 auto;
font-weight: 600;
`;
