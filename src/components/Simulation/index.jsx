import { useContext, useEffect, useState } from "react"
import api from "../../services/api"
import { 
    Container, 
    Table,
    TableContainer, 
    TableRow, 
    TableColumnContent, 
    TableColumnTitle
} from "./style";
import { SimulationContext } from '../../context/simulation';
import { Button } from "../Button";

export const Simulation = () => {

    const { simulation } = useContext(SimulationContext);
    const [parcels, setParcels] = useState([]);
    const [sucess, setSucess] = useState(false);
    console.log(simulation);
    useEffect(()=>{
              
        setParcels(simulation.simulation.parcels);
        // if(simulation.simulation.parcels){
        //     setParcels(simulation.simulation.parcels);
        // }
       
        // async function list(){
        //     await api.get('/loan/list')
        //     .then((response)=>console.log(response.data))
        //     .catch((err)=>{
        //         console.error('erro'+ err);
        //     })
        // }
        // list();
    },[]);

    const createEmprestimo = async () =>{
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'aplication/json',
        }
        await api.post("/loan/create",{
            "cpf": `${simulation.simulation.cpf}`,
            "birthday": `${simulation.simulation.birthday}`,
            "value": `${simulation.simulation.value}`,
            "uf": `${simulation.simulation.uf}`,
            "tax": `${simulation.simulation.tax}`,
            "parcelValue": `${simulation.simulation.parcelValue}`,
            "qntParcels": `${simulation.simulation.qntParcels}`,
            "totalTax": `${simulation.simulation.totalTax}`,
            "totalPayValue": `${simulation.simulation.totalPayValue}`,
            "parcels": parcels
        }, {headers})
                 .then((response)=>setSucess(true))
                 .catch((err)=>{console.error("error"+err)})
        }

    return(
        <Container>
            {sucess ? <h1>Emprestimo criado</h1> : null}
            <h2>Veja a simulação para o seu empréstimo antes de efetivar</h2>
            <TableContainer>
                <Table>
                    <TableRow>
                        <TableColumnTitle>SALDO DEVEDOR</TableColumnTitle>
                        <TableColumnTitle>JUROS</TableColumnTitle>
                        <TableColumnTitle>SALDO DEVEDOR AJUSTADO</TableColumnTitle>
                        <TableColumnTitle>VALOR DA PARCELA</TableColumnTitle>
                        <TableColumnTitle>VENCIMENTO</TableColumnTitle>
                    </TableRow>
                    {parcels.length > 0 ? parcels.map((parcel)=>
                        <TableRow key={parcel.id}>
                            <TableColumnContent>R$ {parcel.payValue}</TableColumnContent>
                            <TableColumnContent>R$ {parcel.feesValue}</TableColumnContent>
                            <TableColumnContent>R$ {parcel.valueWithFees}</TableColumnContent>
                            <TableColumnContent>R$ {parcel.parcelValue}</TableColumnContent>
                            <TableColumnContent>{parcel.parcelValue}</TableColumnContent>
                        </TableRow>
                    ): null}
                    <TableRow>
                        <TableColumnContent>R$ 0</TableColumnContent>
                    </TableRow>
                </Table>
            </TableContainer>
            <Button color="secondary" size="md" text="Efetivar o empréstimo" onClick={createEmprestimo}/>
        </Container>
    )
}