import React from "react";
import { Label, PError, Input, InputGroup} from '../../FormElemento/Formulario'
export default function InputComponent({setState, Type, label, placeholder, InputError, name, ExprecionRegular, state}) {
     

    const handleinputChange = (e)=>{
             setState({...state, textInput: e.target.value})
         }
    
        const validationInput=() => {
             if(ExprecionRegular) {
                 if(ExprecionRegular.test(state.textInput)) {
                     setState({
                         ...state,
                         validation: "true"
                     })
                 }else {
                     setState({
                         ...state,
                         validation: "false"
                     })
                 }
             }
         }

    return(
        <div>
                <Label htmlFor={name} validation={state.validation}>{label}</Label>
                    <InputGroup >
                   <Input 
                          type={Type} 
                          placeholder={placeholder} 
                          id={name}
                          value={state.textInput}
                          onChange={handleinputChange}
                          //cuando presionas una tecla tu la presionas hacia adentro
                          //y cuando la levantas se va a ejecutar esta funcion
                          onKeyUp ={validationInput}
                          //cuando tu das un click fuera del input se va a ejecutar una funcion
                          onBlur={validationInput}
                          validation = {state.validation}
                    />
                   </InputGroup>
                <PError validation = {state.validation}>{InputError}</PError>
        </div>
    )
}