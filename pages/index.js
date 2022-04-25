import styled from 'styled-components'
import { useWeb3 } from '@3rdweb/hooks'
import { connectWallet } from '@3rdweb/react'
import Dashboard from './Dashboard'


export default function Home() {
  
  const { address, connectWallet } = useWeb3()

  return (
    <Wrapper>
      {address ? (
        <Dashboard address={address} />
        ) : (
        <WalletConnect>
          <Button onClick={() => connectWallet('injected')}>
            Connect Wallet
          </Button>
          <Details>
            You need Chrome to be
            <br /> able to run this app.
          </Details>
        </WalletConnect>
      )}
    </Wrapper>
    )
  }



const Wrapper = styled.div`
display: flex;
height: 100vh;
max-width: 100vw;
background: linear-gradient(220deg,#000,#3773f5);
color: white;
display: grid;
place-items: center;
`
const WalletConnect = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Button = styled.div`
  /* flex: 0; */
  border: 1px solid #282b2f;
  padding: 0.8rem;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.8rem;
  background-color: #3773f5;
  color: #000;
  background: #282b2f;
  font-weight: bold;
  letter-spacing: 0.2rem;
  color: #fff;
  box-shadow: inset 2px 2px 0 #fff, 0 8px 10px -4px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: all 0.4s ease;
}

  &: hover {
 cursor: pointer;
}`

const Details = styled.div`
  font-size: 1.2rem;
  text-align: center;
  margin-top: 1rem;
  font-weight: 500;
  color: #fff;
  `