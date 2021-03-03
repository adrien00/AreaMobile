import Styled from 'styled-components/native'
import request from '../../../Helpers/request'

const Container = Styled.View`
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  flex: 1 1 190px;
`

const AccountProviderName = Styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
  border-bottom: 1px solid #444444;
  margin-bottom: 20px;

  & > p {
    font-size: 20px;
  }
`

// const AccountProviderButton = Styled.TouchableOpacity`
//   background-color: #9869c44d;
//   border-radius: 5px;
//   padding: 5px 10px;
//   border: none;
//   cursor: pointer;
//   color: #9869c4;
//   font-size: 14px;
//   font-weight: 700;
//   text-decoration: none;
// `

const AccountProviderStatus = Styled.View`
  display: flex;
  align-items: center;

  & > p {
    font-size: 16px;
  }
  & > p:first-child {
    font-weight: 700;
  }
  & > p:last-child {
    color: ${props => props.connected ? '#00a6a6' : '#d90808'};
    margin-left: 5px;
  }
`

const AccountProviderCard = ({ accountProvider }) => {
  const { id, name, connected, path } = accountProvider

  const disconnect = async () => {
    if (!connected) return
    await request({
      endpoint: '/accountProvider/auth/disconnect',
      method: 'post',
      data: { id },
      headers: {
        authorization: global.authorization || ''
      }
    })
  }

  return (
    <Container>
      <AccountProviderName>
        <p>{name}</p>
        {/* <AccountProviderButton
          onClick={disconnect}
          href={connected ? '' : `${global.backendUrl}${path}`}
        >
          {connected ? 'Disconnect' : 'Connect'}
        </AccountProviderButton> */}
      </AccountProviderName>
      <AccountProviderStatus connected={connected}>
        <p>Status :</p>
        <p>{connected ? 'connected' : 'not connected'}</p>
      </AccountProviderStatus>
    </Container>
  )
}

export default AccountProviderCard
