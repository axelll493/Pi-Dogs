import styled, {css} from 'styled-components';


const colors = {
    border: "#0075FF",
    error: "#bb2929",
    sucess: "#1ed12d"
}


const Form = styled.form `
   display:grid;
   grid-template-columns: 1fr 1fr;
   gap:20px;
   @media (max-width: 800px){
		grid-template-columns: 1fr;
	}
	font-family: 'Roboto', sans-serif;
`;

const Label = styled.label `
  display: block;
  font-weight: 700;
  padding: 10px;
  min-height: 40px;
  cursor: pointer;
  color: white;
    ${props=> props.validation === "false" && css`
      color: ${colors.error};
    `}
`;

const InputGroup = styled.div `
  position: relative;
  z-index: 92;
`;

const Input = styled.input `
  width:100%;
  background: #fff;
  border-radius: 3px;
  height: 45px;
  line-height: 45px;
  padding: 0 40px 0 10px;
  transition: .3s ease all;
  border: 3px solid transparent;
  &: focus {
      border: 3px solid ${colors.border};
      outline: none;
      box-shadow: 3px 0px 30px rgba{163,163,163,0.4};
  }
  ${props => props.validation === "true" && css`
     border: 3px solid transparent;
  `}
  ${props => props.validation === "false" && css`
     border: 3px solid ${colors.error}!important;
  `}
`;

const PError = styled.p`
  font-size: 12px;
  margin-button; 0;
  color: ${colors.error};
  display: none;
  ${props => props.validation === "true" && css`
     display: none;
  `}
  ${props => props.validation === "false" && css`
    display: block;
    border: 3px solid ${colors.error}!important;
  `}
`;


const ConteienerTerms = styled.div`
   grid-column: span 2;
   input{
       margin-right:10px;
   }
   @media (max-width: 800px){
		grid-column: span 1;
	}
`;

const ConteinerButtonCenter = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   grid-column:span 2;
   @media (max-width: 800px){
		grid-column: span 1;
	}
`;

const Button = styled.button `
  height: 45px;
  line-height. 45px;
  width:30%;
  background: #000;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: 1s ease all;

  &:hover{
      box-shadow: 3px, 0px, 30px, rgba(163, 163,163, 1);
  }
`;

const SucessMensage = styled.p`
  font-size:14px;
  color: ${colors.sucess};
  display:none;
`;

const ErrorMensage = styled.div`
  height: 45px;
  line-height:45px;
  background: #f66060;
  padding: 0px 15px;
  border-radius; 3px;
  grid-column: span 2;
  p {
      margin: 0;
  }
  b{
      margin-left:10px;
  }
`;

export {
       Form, 
       Label, 
       InputGroup, 
       Input, 
       PError, 
       ConteienerTerms, 
       ConteinerButtonCenter, 
       Button,
       SucessMensage,
       ErrorMensage
};
