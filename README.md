# FingerPay

![Logo](assets/icon.png)

**FingerPay** is a next-generation wallet application that offers a seamless multi-chain experience across Ethereum, Solana, and NeoX blockchains. With enhanced security features like fingerprint authentication and an AI-driven payment monitoring system, FingerPay is designed to make blockchain payments more secure, intuitive, and efficient.



## **Table of Contents**

- [Video Demo](#Video-Demo)
- [Vision](#Vision)
- [Features](#Features)
- [Technology Stack](#Technology Stack)
- [Deployment](#Deployment)
- [Tech Stack](#tech-stack)
- [Deployment](#Deployment)

### Video Demo

- **Video Walkthrough**: [FingerPay Demo](#)
## **[Tutorial Video](https://drive.google.com/drive/folders/1iGlfKLvuEm_uSIM1fvlz-u4qAChesnHg?usp=sharing)**


## Vision

Our vision is to revolutionize blockchain payments by making them secure, accessible, and easy to use. FingerPay empowers users to make payments across multiple blockchain networks with the convenience of biometric security and real-time AI payment monitoring. By combining multi-chain support with advanced QR code payments and AI-powered analytics, we are shaping the future of digital transactions.

## Features

### 1. **Multi-chain Wallet Support**
- Integrates Ethereum, Solana, and NeoX blockchains.
- Seamless wallet creation for each chain, with unified management.
  
### 2. **Biometric Authentication**
- **Fingerprint Authentication**: Secure your wallet creation and payments with fingerprint authentication.
- **Payment Authorization**: Every payment transaction is verified through your fingerprint for enhanced security.

### 3. **QR Code Payments**
- Pay easily and quickly by scanning QR codes.
- Generate QR codes for others to receive payments.
  
### 4. **AI-Powered Payment Monitoring**
- AI system that monitors transaction patterns and provides real-time insights.
- Detects suspicious activities and alerts the user.

### 5. **Cross-Platform Support**
- Available for mobile platforms (Android and iOS).
  
### 6. **Fast Transactions**
- Optimized for low latency and high-speed transactions across blockchains.

### 7. **User-Friendly Interface**
- A clean and intuitive UI that simplifies blockchain payments for everyone.
  
## Technical Architecture

```plaintext
+---------------------------------------------------------+
|                     FingerPay App                       |
+---------------------------------------------------------+
|                 Biometric Authentication                |
|      (Fingerprint Verification for Security)            |
+---------------------------------------------------------+
|                      QR Code Module                     |
|        (Scan & Generate QR codes for Payment)           |
+---------------------------------------------------------+
|                    AI Payment Monitor                   |
|   (Monitors Transactions and Detects Irregularities)    |
+---------------------------------------------------------+
|                  Multi-Chain Layer                      |
|---------------------------------------------------------|
|    +---------------+ +--------------+ +-------------+   |
|    |   Ethereum     | |   Solana     | |    NeoX      | |
|    |     (Web3.js)  | |   (Solana.js)| |   neon-core  | |
|    +---------------+ +--------------+ +--------------+  |
|                     Blockchain Adapters                 |
+---------------------------------------------------------+
|                Wallet Management Module                 |
|         (Wallet Creation, Private Keys, Balances)       |
+---------------------------------------------------------+
|                Fingerprint Verification API             |
+---------------------------------------------------------+
```

### Technology Stack

- **Ethereum Integration**: Web3.js for Ethereum blockchain interaction.
- **Solana Integration**: Solana.js for Solana blockchain interaction.
- **NeoX Integration**: @cityofzion/neon-core for NeoX blockchain interaction.
- **AI Module**: Custom AI models integrated into the app for transaction monitoring.
- **Biometric Security**: Integrated fingerprint authentication API (compatible with Android/iOS).
- **QR Code**: QR code generation and scanning libraries for smooth payment transactions.

## Deployment

### Prerequisites

- **Node.js** (v14+)
- **Android Studio/Xcode** for mobile deployment.
- **Solana, Ethereum, NeoX wallets** for development testing.
- **Fingerprint-enabled device** for biometric testing.

### Steps to Deploy

1. **Clone the Repository**
   ```bash
   git clone https://github.com/YourUsername/FingerPay.git
   ```

2. **Install Dependencies**
   ```bash
   yarn
   ```

3. **Configure Blockchain Connections**
   - Add your Ethereum, Solana, and NeoX network keys in the `.env` file:
     ```bash
     EXPO_PUBLIC_ALCHEMY_ETH_KEY=api-key
      EXPO_PUBLIC_ALCHEMY_ETH_URL=https://eth-sepolia.g.alchemy.com/v2/
      
      EXPO_PUBLIC_ALCHEMY_SOCKET_URL=wss://eth-sepolia.g.alchemy.com/v2/
      
      EXPO_PUBLIC_ALCHEMY_SOL_URL=https://solana-devnet.g.alchemy.com/v2/
      EXPO_PUBLIC_ALCHEMY_SOL_API_KEY=url-key
      EXPO_PUBLIC_ENVIRONMENT=development/mainnet
      
      EXPO_PUBLIC_NEO_RPC_URL=https://neoxt4seed1.ngd.network
      EXPO_PUBLIC_NEO_NETWORK_MAGIC
     ```

4. **Run on Local Device**
   ```bash
    yarn 
    npx expo go    # For iOS
   ```

6. **Fingerprint Authentication Setup**
   - Ensure that you have a fingerprint-enabled device to test the authentication feature.



## Contributing

Contributions are welcome! Please follow the standard GitHub flow:

1. Fork the repository.
2. Create a new branch (`feature/your-feature`).
3. Commit your changes.
4. Push to the branch.
5. Create a pull request.

## Contact Information

- **Name**: Shivansh Chauhan
- **Email**: shivanshchauhan@example.com
- **GitHub**: [ShivanshChauhan](https://github.com/YourUsername)
- **Twitter**: [@ShivanshCh](https://twitter.com/YourHandle)
 

