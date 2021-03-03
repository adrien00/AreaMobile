import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import useAccountProviders from '../../Common/Hooks/useAccountProviders'
import AccountProviderCard from '../../Common/Components/AccountProviderCard'

const Settings = () => {
  const { accountProviders, refreshAccountProviders } = useAccountProviders()

  return (
    <View style={styles.back}>
      <Text style={styles.logo}>Account providers :</Text>
      <View >
        {accountProviders.map((accountProvider) => (
          <AccountProviderCard 
            key={accountProvider.name}
            accountProvider={accountProvider}
            refreshAccountProviders={refreshAccountProviders}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: '#eeeeee',
    height: '100%',
  },
  logo: {
    fontWeight:"bold",
    fontSize:30,
    color:'#444444',
    margin: 10,
  },
});

export default Settings
