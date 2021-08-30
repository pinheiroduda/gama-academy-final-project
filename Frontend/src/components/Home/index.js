import React from 'react'
import HomeStyle, { HomeContainer, Text } from './style'

const Home = () => {
  return (
    <HomeStyle>
      <HomeContainer>
        <Text>
          Sabe aquela vaga na empresa dos sonhos? Então,
          na nossa página você pode ficar 1 passo mais próximo de realizar esse
          desejo. Para concorrer as oportunidades que você sonha, basta
          preencher o formulário abaixo que todas suas informações estarão
          armazenadas em nosso banco de dados que fica à disposição das
          empresas. Assim que alguma delas se interessar por você, entrará em
          contato.
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
