/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ComponenteClasse from './componentes/ComponenteClasse';
import ComponenteEffect from './componentes/ComponenteEffect';
import ComponenteFunction from './componentes/ComponenteFunctionDefaultExport';
import { ComponenteFuncaoSemDefault } from './componentes/ComponenteFunctionSemDefaultExport';
import ComponenteHooks from './componentes/ComponenteHooks';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <ComponenteFunction texto="Componente baseado em função com export default"/>
        <ComponenteFuncaoSemDefault texto="Componente baseado em função sem export default"/>
        <ComponenteClasse texto="Componente baseado em classe"/>
        <ComponenteHooks texto="Componente funcao com Hooks"/>
        <ComponenteEffect texto="Componente funcao com Hooks e UseEffect"/>
      </View>
    </>
  );
};


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    justifyContent: 'space-around',
  },
  basicText: {
    color: 'black',
    textAlign: 'center'
  }
});