import { Form } from "../../components/Form"
import { Simulation } from "../../components/Simulation"
import { Container, Content, Title } from "./styles"

export const Home = () =>{
    return(
        <Container>
            <Content>
                <Title>Simule e solicite o seu empréstimo</Title>
                <Form />
                <Simulation/>
            </Content>
        </Container>
    )
}