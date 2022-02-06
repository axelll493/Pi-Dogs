import { Form, Label, ConteienerTerms, ConteinerButtonCenter, Button, SucessMensage, ErrorMensage} from '../../FormElemento/Formulario'
import React, {useState} from 'react'
import InputComponent from './InputComponent'

export default function DogCreate (){
    const expresiones = {
        Race: /^[a-zA-Z]{3,12}$/ ,
        Height: /^[1-9]{1,2}$/,
        Weight: /^[1-9]{1,2}$/,
        Life_Span: /^[1-20]{1,2}$/,
    }

    //Estados Local

    // const [Race, ChangeRace] = useState({
    //     RaceInput: "",
    //     validationRace: null,
    // })
    const [Race, ChangeRace] = useState({
        textInput: "",
        validation: null,
    })
    const [WeightMin, ChangeWeightMin] = useState({
        textInput: "",
        validation: null,
    })
    const [WeightMax, ChangeWeightMax] = useState({
        textInput: "",
        validation: null,
    })
    const [HeightMin, ChangeHeightMin] = useState({
        textInput: "",
        validation: null,
    })
    const [HeightMax, ChangeHeightMax] = useState({
        textInput: "",
        validation: null,
    })
    const [LifeSpan, ChangeLifeSpan] = useState({
        textInput: "",
        validation: null,
    })
    // const [Temperament, ChangeTemperament] = useState({
    //     textInput: "",
    //     validation: null,
    // })
    // const [Image, ChangeImage] = useState({
    //     textInput: "",
    //     validation: null,
    // })

    //Definir
    // const {RaceInput, validationRace} = Race;

    //FUNCIONES................................


    // const handleinputChange = (e)=>{
    //     ChangeRace({...Race, RaceInput: e.target.value})
    // }

    // const validationInputRace =() => {
    //     if(expresiones.Race) {
    //         if(expresiones.Race.test(RaceInput)) {
    //             ChangeRace({
    //                 ...Race,
    //                 validationRace: "true"
    //             })
    //         }else {
    //             ChangeRace({
    //                 ...Race,
    //                 validationRace: "false"
    //             })
    //         }
    //     }
    // }



    return (
        <main>
            <Form action="">
                {/* <div>
                    <Label htmlFor="race" validation={validationRace}>Race</Label>
                    <InputGroup >
                   <Input 
                          type="text" 
                          placeholder="Race" 
                          id="race"
                          value={RaceInput}
                          onChange={handleinputChange}
                          //cuando presionas una tecla tu la presionas hacia adentro
                          //y cuando la levantas se va a ejecutar esta funcion
                          onKeyUp ={validationInputRace}
                          //cuando tu das un click fuera del input se va a ejecutar una funcion
                          onBlur={validationInputRace}
                          validation = {validationRace}
                    />
                   </InputGroup>
                    <PError validation = {validationRace}>No puedes agregar numeros, o signos el nombre tiene que tener mas de 3 digitos</PError>
               </div> */}
                    <InputComponent
                        state= {Race}
                        setState ={ChangeRace}
                        type="text"
                        label="Breed Name"
                        placeholder="Breed Name"
                        InputError = "No puedes agregar numeros, o signos el nombre tiene que tener mas de 3 digitos"
                        name = "breedName"
                        ExprecionRegular ={expresiones.Race}
                    />
                    <InputComponent
                        state= {LifeSpan}
                        setState ={ChangeLifeSpan}
                        Type="text"
                        label="Life Span"
                        placeholder="Life Span"
                        InputError = "La vida del perro no puede ser mayor a 20 años"
                        name = "LifeSpan"
                        ExprecionRegular ={expresiones.Life_Span}
                    />
                   <InputComponent
                        state= {WeightMin}
                        setState ={ChangeWeightMin}
                        Type="text"
                        label="Weight Min"
                        placeholder="Weight Min"
                        InputError = "El perro no puede pesar 100 kg o mas"
                        name = "WeightMin"
                        ExprecionRegular ={expresiones.Weight}
                    />
                   <InputComponent
                        state= {WeightMax}
                        setState ={ChangeWeightMax}
                        Type="text"
                        label="Weight Max"
                        placeholder="Weight Max"
                        InputError = "El peso maximo no puede ser menor al peso minimo"
                        name = "WeightMin"
                        ExprecionRegular ={expresiones.Weight}
                    />
                   <InputComponent 
                        state= {HeightMin}
                        setState ={ChangeHeightMin}
                        Type="text"
                        label="Height Min"
                        placeholder="Height Min"
                        InputError = "Altura maxima 3 digitos"
                        name = "HeightMin"
                        ExprecionRegular ={expresiones.Height}
                    />
                    <InputComponent 
                        state= {HeightMax}
                        setState ={ChangeHeightMax}
                        Type="text"
                        label="HeightMax"
                        placeholder="Height Max"
                        InputError = "La altura maxima no debe ser menor a la minima"
                        name = "Height Max"
                        ExprecionRegular ={expresiones.Height}
                    />
               <ConteienerTerms>
                   <Label>
                       <input type="checkbox" name="terminos" id="terminos"/>
                       acepto los terminos y condiciones
                   </Label>
               </ConteienerTerms>
                {false && <ErrorMensage>
                   <p>
                       <b>Error:</b>Por favor enllena el formulario correctamente
                    </p>
               </ErrorMensage>}
               <ConteinerButtonCenter>
                   <Button type='s
                   bmit'>Enviar</Button>
                   <SucessMensage>Formulario Se Envio Exitosamente  </SucessMensage>
               </ConteinerButtonCenter>
            </Form>
        </main>
    )
}