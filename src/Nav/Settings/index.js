import React, { useEffect } from 'react'
import { parse } from 'query-string'
import { Text, View } from 'react-native';

//import { Title, AccountProviders } from './Settings.module.css'

import request from '../../Helpers/request'
import useAccountProviders from '../../Common/Hooks/useAccountProviders'
import AccountProviderCard from '../../Common/Components/AccountProviderCard'

const Settings = () => {
  const { accountProviders, refreshAccountProviders } = useAccountProviders()
  console.log(accountProviders)
  //const { search } = useLocation()
  //const { replace } = useHistory()

  //useEffect(() => {
  //  (async () => {
  //    const { data } = parse(search)
  //    if (!data) return
//
  //    await request({
  //      endpoint: '/accountProvider/auth/save',
  //      method: 'post',
  //      data: { data },
  //      headers: {
  //        authorization: localStorage.getItem('authorization') || ''
  //      }
  //    })
  //    await refreshAccountProviders()
  //    replace('/settings')
  //  })()
  //// eslint-disable-next-line react-hooks/exhaustive-deps
  //}, [search])


  return (
    <View>
      <Text>Account providers :</Text>
      <View>
        {accountProviders.map((accountProvider) => (
          <AccountProviderCard
            key={accountProvider.name}
            accountProvider={accountProvider}
          />
        ))}
      </View>
    </View>
  )
}

export default Settings
