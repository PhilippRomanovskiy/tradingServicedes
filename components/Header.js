import React from 'react' 
import styled from 'styled-components'
import Modal from 'react-modal'
import { useRouter } from 'next/router'
import TransferModal from './modal/TransferModal'
import Link from 'next/link'

Modal.setAppElement('#__next')


const Header = ({walletAddress, sanityTokens, thirdWebTokens, connectWallet}) => { 
  const router = useRouter()

  const customStyles={
    content:{
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#0a0b0d',
      padding: 0,
      border: 'none',
    },
    overlay:{
      backgroundColor: 'rgba(10, 11, 13, 0.75)',
    },
  }


  return (
      <Wrapper>
        <Title>Assets</Title>
          <ButtonsContainer>
          <WalletLink>
            <WalletLinkTitle>
              Wallet connected
            </WalletLinkTitle>
            <WalletAddress>
              {walletAddress.slice(0,6)} ... {walletAddress.slice(35)}
            </WalletAddress>
          </WalletLink>
            <Button style={{ backgroundColor: '#3773f5', color: '#000',background: '#282b2f',fontweight: 'bold',letterspacing: '0.1rem',color: '#fff'}}>
        Buy/Sell
             </Button>
             <Link href={'/?transfer=1'}>
              <Button style={{ backgroundColor: '#3773f5', color: '#000',background: '#282b2f',fontweight: 'bold',letterspacing: '0.1rem',color: '#fff'}}>
            
        Send/Recieve
          </Button>
          </Link>
        </ButtonsContainer>
        <Modal 
        isOpen={!!router.query.transfer}
        onRequestClose={() => router.push('/')}
        style={customStyles}
        >
          <TransferModal  sanityTokens={sanityTokens} thirdWebTokens={thirdWebTokens} walletAddress={walletAddress}/>
        </Modal>
      </Wrapper>
      
  )
}

export default Header


const Wrapper = styled.div`
 width: calc(100% );
  padding: 2rem 1rem;
  border-bottom: 1px solid #282b2f;
  display: flex;
  align-items: center;
  background: #000;
  `

const Title = styled.div` 
  font-size: 2 rem;
  font-weight: 600;
  flex: 1;
  fontColor: #0000FF;
  `

const ButtonsContainer = styled.div`
display: flex;
`
const Button = styled.div`
  border: 1px solid #282b2f;
  padding: 1rem;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 1rem;
  margin-right: 2.1rem;
  &:hover {
    cursor: pointer;
  }
`
const WalletLink = styled.div`
    font-size: 0.8rem;
    border: 1px solid #282b2f;
    border-radius: 20rem;
    font-size: 1rem;
    margin-right: 2rem;
    padding: 0 1 rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

const WalletLinkTitle = styled.div`
    font-size: 1.5rem;
    margin-bottom: 0.3rem;
    color: #27DD30;
    font-weight: 700;
    margin-left: 1rem;
    margin-right: 1rem;
`
const WalletAddress = styled.div`
    font-size: 0.8rem;
    
`