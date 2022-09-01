import { Container, FormContainer, InputForm } from "./style";
import { useForm } from 'react-hook-form';
import { Button } from "../Button";
import { useContext, useEffect, useState } from "react";
import { SimulationContext } from '../../context/simulation';
import api from "../../services/api";


export const Form = () => {

    const { register, setValue, handleSubmit, formState: { errors }, getValues} = useForm();
    const [ validParcel, setValidParcel ] = useState();
    const { setSimulation } = useContext(SimulationContext);
    const [simulate, setSimulate] = useState([]);

    const onSubmit = handleSubmit((data) => {
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'aplication/json',
        }
        api.post('/loan/simulate',{
            "birthday": `${data.birthdate}`,
            "uf":`${data.city}`,
            "cpf": `${data.cpf}`,
            "parcelValue": `${data.parcel}`,
            "value": 60000,
        },{headers})
            .then((response)=> setSimulate(response.data))
            .catch((err)=>{
                console.error('error'+err);
            });
        setSimulation(simulate) 
    });
    
   
    return(
        <Container>
            <h2>Preencha o formulário abaixo para simular</h2>
            <FormContainer>
                <form onSubmit={onSubmit}>
                    <InputForm 
                        {...register('cpf', { required: true})}
                        placeholder="CPF" 
                        type="text"
                    />
                    <InputForm 
                        {...register('city', { required: true})}
                        placeholder="UF" 
                        type="text"
                    />
                    <InputForm
                        {...register('birthdate', { required: true})} 
                        placeholder="DATA DE NASCIMENTO" 
                        type="text"
                    />
                    <InputForm 
                        {...register('loan', { required: true, min:50000})}
                        placeholder="QUAL O VALOR DO EMPRÉSTIMO" 
                        type="number"
                    />
                    <InputForm 
                        {...register('parcel', { required: true, min: 0})}
                        placeholder="QUAL VALOR QUE DESEJA PAGAR POR MÊS?" 
                        type="number"
                    />
                    <Button text="Simular" color="primary" size="lg"/>
                </form>
            </FormContainer>
        </Container>
    )
}