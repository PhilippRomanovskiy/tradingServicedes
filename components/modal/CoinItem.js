import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { imageUrlBuilder } from "@sanity/image-url";
import { client } from "../../lib/sanity";
import { FaCheck } from "react-icons/fa";



const CoinItem = ({
    token,
    sender,
    setAction,
    selectedToken,
    setSelectedToken,
    sanityTokens,
    thirdWebTokens,
    
}) => {

    const [balance, setBalance] = useState('Fetching...');
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        const getBalance = async () => {
            let activeThirdWebToken
            thirdWebTokens.map(token => {
                if (thirdWebTokens.address === token.contractAddress) {
                    activeThirdWebToken = thirdWebTokens;
                }
            })
            const balance = await activeThirdWebToken.balanceOf(sender);

            return await setBalance(balance.displayValue.split('.')[0]);
        }
        const getImageUrl = async () => {
             const imageUrl = imageUrlBuilder(client).image(token.logo).url();
             setImageUrl(imageUrl);
        }
    }, [])

  return (
    <Wrapper style={{backgroundcolor: selectedToken.name === token.name && '#141519'}} onClick={() => {
        setSelectedToken(token);
        setAction('send');
    }}>
        <Main>
            <Icon>
                <img src = {imageUrl} alt = ''/>
            </Icon>
            <NameDetails>
                <Name>{token.name}</Name>
                <Symbol>{token.symbol}</Symbol>
            </NameDetails>
        </Main>
        <Balance>
            {balance} {token.symbol}
        </Balance>
        <IsSelected>
            {Boolean(selectedToken.contractAddress === token.contractAddress) && (<FaCheck />)}
        </IsSelected>
    </Wrapper>
  )
}

export default CoinItem

const Main=styled.div`
  flex: 1;
            
  display: flex;
  align-items: center;
  `

  const Symbol = styled.div`
  color: #888f9b;
  font-size: 0.8rem;
  `

  const Icon=styled.div`
  margin-right: 1rem;
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 50%;
  overflow: hidden;
  display: grid;
  place-items: center;
  &>img{
    height: 120%;
    width: 120%;
    object-fit: cover;
  }
  `
  const NameDetails=styled.div``

const Name=styled.div`
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
  `

  const Balance=styled.div`` 

  const IsSelected=styled.div` 
  margin-left: 0.5rem;
  color: #3773f5;
  ` 