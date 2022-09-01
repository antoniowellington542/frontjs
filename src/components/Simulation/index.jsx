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
              
        setParcels(simulation?.simulation?.parcels);
    },[]);

    const createEmprestimo = async () =>{
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'aplication/json',
        }
        await api.post("/loan/create",{
            "cpf": `${simulation?.simulation?.cpf}`,
            "birthday": `${simulation?.simulation.birthday}`,
            "value": `${simulation?.simulation.value}`,
            "uf": `${simulation?.simulation.uf}`,
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
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%'}}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                        <p>VALOR REQUERIDO:</p>
                        <p>{simulation?.simulation?.value ? simulation?.simulation?.value : 0}</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                        <p>TAXA DE JUROS</p>
                        <p>{simulation?.simulation?.value ? simulation?.simulation?.tax : 0}</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                        <p>VALOR DA PARCELA</p>
                        <p>{simulation?.simulation?.value ? simulation?.simulation?.parcelValue : 0}</p>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%'}}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                        <p>TOTAL DE MESES PARA QUITAR</p>
                        <p>{simulation?.simulation?.qntParcels  ? simulation?.simulation?.qntParcels : 0}</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                        <p>TOTAL DE JUROS</p>
                        <p>{simulation?.simulation?.totalTax  ? simulation?.simulation?.totalTax : 0}</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                        <p>TOTAL A PAGAR</p>
                        <p>{simulation?.simulation?.totalPayValue  ? simulation?.simulation?.totalPayValue : 0}</p>
                    </div>
                </div>
                    <TableRow>
                        <TableColumnTitle>SALDO DEVEDOR</TableColumnTitle>
                        <TableColumnTitle>JUROS</TableColumnTitle>
                        <TableColumnTitle>SALDO DEVEDOR AJUSTADO</TableColumnTitle>
                        <TableColumnTitle>VALOR DA PARCELA</TableColumnTitle>
                        <TableColumnTitle>VENCIMENTO</TableColumnTitle>
                    </TableRow>
                    {parcels?.map((parcel)=>
                        <TableRow key={parcel.id}>
                            <TableColumnContent>R$ {parcel.payValue}</TableColumnContent>
                            <TableColumnContent>R$ {parcel.feesValue}</TableColumnContent>
                            <TableColumnContent>R$ {parcel.valueWithFees}</TableColumnContent>
                            <TableColumnContent>R$ {parcel.parcelValue}</TableColumnContent>
                            <TableColumnContent>{parcel.parcelValue}</TableColumnContent>
                        </TableRow>
                    )}
                    <TableRow>
                        <TableColumnContent>R$ 0</TableColumnContent>
                    </TableRow>
                </Table>
            </TableContainer>
            <Button color="secondary" size="md" text="Efetivar o empréstimo" onClick={createEmprestimo}/>
        </Container>
    )
}