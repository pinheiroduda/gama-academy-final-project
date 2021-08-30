import React from 'react'
import HomeStyle, { HomeContainer, Text } from './style'

const Home = () => {
  return (
    <HomeStyle>
      <HomeContainer>
        <Text>
          Sabe aquela vaga na empresa dos sonhos? Você pode ficar 1 passo mais
          próximo de chegar até ela.
        </Text>
        <Text>
          Para concorrer as oportunidades que você sonha, basta preencher o
          formulário abaixo que todas suas informações estarão armazenadas em
          nosso banco de dados. Ele fica disponível para as empresas e assim que
          alguma delas se interessar por você, entrará em contato.
        </Text>
        <Text>
          E aí, está esperando o que? Se inscreva agora mesmo pelo formulário
          abaixo!
        </Text>
      </HomeContainer>
    </HomeStyle>
  )
}

export default Home
