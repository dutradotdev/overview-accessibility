import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AccessibilityInfo,
} from 'react-native'
import Button from './src/components/Button'

const Header = () => (
  <>
    <Text style={styles.title}>Acessibilidade</Text>
    <Text style={styles.headerSubtitle}>
      Vamos estudar como alguns componentes devem se comportar para se tornarem acessíveis
    </Text>
  </>
)

const SectionSubtitle = ({ text }) => (
  <Text style={styles.sectionSubtitle} accessible={false} importantForAccessibility='no'>
    {text}
  </Text>
)

const SectionTitle = ({ text }) => (
  <Text style={styles.sectionTitle} importantForAccessibility='no' accessibilityElementsHidden>
    {text}
  </Text>
)

const SectionContent = ({ children, accessible }) => (
  <View accessible={accessible} style={styles.sectionContent}>
    {children}
  </View>
)

const TextWithoutAccessibility = () => (
  <SectionContent>
    <SectionSubtitle text='Sem acessibilidade:' />
    <View>
      <Text style={styles.text}>Preço</Text>
    </View>
    <View>
      <Text style={styles.subtitle}>R$ 12,00</Text>
    </View>
  </SectionContent>
)

const TextWithAccessibility = () => (
  <SectionContent accessible>
    <SectionSubtitle text='Com acessibilidade:' />
    <View>
      <Text style={styles.text}>Preço</Text>
    </View>
    <View>
      <Text style={styles.subtitle}>R$ 12,00</Text>
    </View>
  </SectionContent>
)

const BackButtonWithoutAccessibilityLabel = () => (
  <SectionContent>
    <SectionSubtitle text='Sem acessibilidade:' />
    <TouchableOpacity onPress={() => {}} style={styles.button}>
      <Text>Voltar!</Text>
    </TouchableOpacity>
  </SectionContent>
)

const BackButtonWithAccessibilityLabel = () => (
  <SectionContent>
    <SectionSubtitle text='Com acessibilidade:' />
    <TouchableOpacity
      accessibilityRole='button'
      accessibilityLabel='Voltar'
      accessibilityHint='Pressione para voltar para a tela anterior'
      onPress={() => {}}
      style={styles.button}>
      <Text>Voltar!</Text>
    </TouchableOpacity>
  </SectionContent>
)

const BackButtonWithoutAccessibilityState = () => (
  <SectionContent>
    <SectionSubtitle text='Sem acessibilidade:' />
    <TouchableOpacity
      accessibilityRole='button'
      accessibilityLabel='Voltar'
      accessibilityHint='Pressione para voltar para a tela anterior'
      disabled
      onPress={() => {}}
      style={styles.button}>
      <Text>Voltar!</Text>
    </TouchableOpacity>
  </SectionContent>
)

const BackButtonWithAccessibilityState = () => (
  <SectionContent>
    <SectionSubtitle text='Com acessibilidade:' />
    <TouchableOpacity
      accessibilityRole='button'
      accessibilityLabel='Voltar'
      accessibilityHint='Pressione para voltar para a tela anterior'
      accessibilityState={{ disabled: true }}
      disabled
      onPress={() => {}}
      style={styles.button}>
      <Text>Voltar!</Text>
    </TouchableOpacity>
  </SectionContent>
)

const PropAccessible = () => (
  <View style={styles.sectionContainer}>
    <SectionTitle text='Prop accessible' />
    <TextWithoutAccessibility />
    <TextWithAccessibility />
  </View>
)

const PropAccessibilityLabel = () => (
  <View style={styles.sectionContainer}>
    <SectionTitle text='Prop accessibilityLabel, accessibilityHint e accessibilityRole' />
    <BackButtonWithoutAccessibilityLabel />
    <BackButtonWithAccessibilityLabel />
  </View>
)

const PropAccessibilityState = () => (
  <View style={styles.sectionContainer}>
    <SectionTitle text='Prop accessibilityState (botão desabilitado)' />
    <BackButtonWithoutAccessibilityState />
    <BackButtonWithAccessibilityState />
  </View>
)

const PropImportantForAccessibility = () => (
  <View style={styles.sectionContainer}>
    <SectionTitle text='Prop importantForAccessibility(android) e accessibilityElementsHidden' />
    <Text>
      O componente SectionTitle utiliza essas tags pois queremos que o leitor de tela ignore a sua
      leitura.
    </Text>
  </View>
)

const AccessibilityInfoAPI = () => (
  <View style={styles.sectionContainer}>
    <SectionTitle text='AccessibilityInfoAPI' />
    <Button
      onPress={() => AccessibilityInfo.announceForAccessibility('Anunciado! testando a API')}
      text='Anunciar'
      accessibilityLabel='Anunciar'
      accessibilityHint='Pressione para testar o método announceForAccessibility'
    />
    <Button
      onPress={async () =>
        AccessibilityInfo.announceForAccessibility(
          `O leitor de tela está ligado? ${await AccessibilityInfo.isScreenReaderEnabled()}`
        )
      }
      text='Verificar'
      accessibilityLabel='Verificar'
      accessibilityHint='Pressione para verificar leitor de tela'
    />
  </View>
)

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Header />
        <PropAccessible />
        <PropAccessibilityLabel />
        <PropAccessibilityState />
        <PropImportantForAccessibility />
        <AccessibilityInfoAPI />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  headerSubtitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
  },
  text: {
    fontSize: 16,
  },
  sectionContainer: {
    borderWidth: 1,
    marginBottom: 30,
    padding: 10,
    borderRadius: 8,
  },
  sectionContent: {
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 18,
    marginVertical: 5,
  },
  sectionSubtitle: {
    fontSize: 16,
  },
  button: {
    borderWidth: 1,
    borderRadius: 50,
    maxWidth: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
})

export default App
