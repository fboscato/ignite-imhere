import {Text,TextInput,View} from 'react-native'

import {styles} from './styles'
export  function Home(){
  return (
    <View style={styles.container}>
      <Text style ={styles.eventNome}>
        Nome do evento
      </Text>

      <Text style ={styles.eventDate}>
         Sexta, 4  de Novembro de 2022 
      </Text>

     <TextInput 
        style={styles.input}
        placeholder="Nome do participantes"
     />
    </View>
  )
}