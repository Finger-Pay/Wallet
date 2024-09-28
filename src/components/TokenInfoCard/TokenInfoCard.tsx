import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { ThemeType } from "../../styles/theme";
import { formatDollar } from "../../utils/formatDollars";
import { useSelector } from "react-redux";
import axios from "axios";
import type { RootState } from "../../store";

interface ButtonContainerProps {
  backgroundColor?: string;
  theme: ThemeType;
}

const TokenInfoCardContainer = styled.View<ButtonContainerProps>`
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const TokenSectionViewTop = styled.View<{ theme: ThemeType }>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;

  background-color: ${({ theme }) => theme.colors.lightDark};
  border: 1px solid ${({ theme }) => theme.colors.dark};
  border-top-left-radius: ${(props) => props.theme.borderRadius.large};
  border-top-right-radius: ${(props) => props.theme.borderRadius.large};
`;

const TokenSectionViewMid = styled.View<{ theme: ThemeType }>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  background-color: ${({ theme }) => theme.colors.lightDark};

  border: 1px solid ${({ theme }) => theme.colors.dark};
`;

const TokenSectionViewBot = styled.View<{ theme: ThemeType }>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;

  background-color: ${({ theme }) => theme.colors.lightDark};
  border: 1px solid ${({ theme }) => theme.colors.dark};
  border-bottom-left-radius: ${(props) => props.theme.borderRadius.large};
  border-bottom-right-radius: ${(props) => props.theme.borderRadius.large};
`;

const TokenNameLabel = styled.Text<{ theme: ThemeType }>`
  font-family: ${(props) => props.theme.fonts.families.openBold};
  font-size: ${(props) => props.theme.fonts.sizes.large};
  color: ${({ theme }) => theme.colors.lightGrey};
`;

const TokenNameText = styled.Text<{ theme: ThemeType }>`
  font-family: ${(props) => props.theme.fonts.families.openBold};
  font-size: ${(props) => props.theme.fonts.sizes.large};
  color: ${({ theme }) => theme.colors.white};
`;

interface TokenInfoCardProps {
  tokenName: string;
  tokenSymbol: string;
  network: string;
  price?: number;
}

// Define the NeoX RPC URL
const NEOX_RPC_URL = 'https://neoxt4seed1.ngd.network';

const TokenInfoCard: React.FC<TokenInfoCardProps> = ({
  tokenName,
  tokenSymbol,
  network,
}) => {
  const prices = useSelector((state: RootState) => state.price.data);
  const solPrice = prices.solana.usd;
  const ethPrice = prices.ethereum.usd;
  console.log(ethPrice);

  const [neoxGasPrice, setNeoxGasPrice] = useState<number | null>(null);

  // Function to fetch the NeoX gas price
  const fetchNeoxGasPrice = async () => {
    try {
      const response = await axios.post(NEOX_RPC_URL, {
        jsonrpc: '2.0',
        method: 'eth_gasPrice',
        params: [],
        id: 1,
      });
      const gasPriceHex = response.data.result; // Get the gas price in hex
      const gasPriceInWei = parseInt(gasPriceHex, 16); // Convert hex to decimal
      const gasPriceInEth = gasPriceInWei / 1e18;
      const gasPriceInUsd= 4.12;

      console.log("gas",gasPriceInUsd)// Convert wei to NEOX (ETH equivalent)
      setNeoxGasPrice(gasPriceInUsd);
    } catch (error) {
      console.error('Error fetching NeoX gas price:', error);
    }
  };

  useEffect(() => {
    console.log(tokenSymbol)
    // Fetch NeoX gas price when the component mounts if tokenSymbol is Neox
    if (tokenSymbol === "Neox") {
      fetchNeoxGasPrice();
    }
  }, [tokenSymbol]);

  const findTokenPrice = (tokenSymbol: string) => {
    if (tokenSymbol === "ETH") {
      return ethPrice;
    } else if (tokenSymbol === "SOL") {
      return solPrice;
    } else if (tokenSymbol === "Neox") {
      return neoxGasPrice;
    } else {
      return 0;
    }
  };

  return (
    <TokenInfoCardContainer>
      <TokenSectionViewTop>
        <TokenNameLabel>Token Name</TokenNameLabel>
        <TokenNameText>
          {tokenName} ({tokenSymbol})
        </TokenNameText>
      </TokenSectionViewTop>
      <TokenSectionViewMid>
        <TokenNameLabel>Network</TokenNameLabel>
        <TokenNameText>{network}</TokenNameText>
      </TokenSectionViewMid>
      <TokenSectionViewBot>
        <TokenNameLabel>Price</TokenNameLabel>
        <TokenNameText>
          {formatDollar(findTokenPrice(tokenSymbol))}
        </TokenNameText>
      </TokenSectionViewBot>
    </TokenInfoCardContainer>
  );
};

export default TokenInfoCard;
