import { Form, FormContainer, Input, SendButton, StyledLabel } from "./styled"

function TelaCadastroEndereco (props){
    return(
        <FormContainer>
            <h1>Cadastro de Endereço</h1>
            <Form>
            <StyledLabel htmlFor="endereco">
                Endereço:
                <Input/>
            </StyledLabel >

            <StyledLabel htmlFor="numeroResidencia">
                Numero da residencia:
                <Input/>
            </StyledLabel>

            <StyledLabel htmlFor="telefone">
                Telefone:
                <Input/>
            </StyledLabel >

            <StyledLabel htmlFor="complemento">
                Complemento:
                <Input/>
            </StyledLabel>

            <SendButton onClick={()=>props.mudarTela(4)}>Finalizar Cadastro</SendButton>
    
            </Form>
        </FormContainer>

    )
}

export default TelaCadastroEndereco