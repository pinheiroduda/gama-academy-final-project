import React from 'react'
import HomeStyle, { HomeContainer, Title, Text } from './style'

const Home = () => {
  return (
    <HomeStyle>
      <HomeContainer>
        <Title>Seja bem vindo à JobsNet!</Title>
        <Text>
          Sabe aquela vaga na empresa dos sonhos que você tanto deseja? Então,
          na nossa página você pode ficar 1 passo mais próximo de realizar esse
          desejo. Para concorrer as oportunidades que você sonha, basta
          preencher o formulário abaixo que todas suas informações estarão
          armazenadas em nosso banco de dados que fica à disposição das
          empresas. Assim que alguma delas se interessar por você, entrará em
          contato.
          <br></br>
          Veja alguns depoimentos de quem já conseguiu o emprego dos sonhos
          através da JobsNET.
        </Text>
      </HomeContainer>
    </HomeStyle>
  )
}

export default Home
