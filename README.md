# Citizen-centric FIR System Prototype on Blockchain
 
This is an e-FIR system which leverage blockchain and smart contract to address the challenges in the traditional FIR system, enhancing security, transparency,corruption and efficiency in crime reporting and investigations.

------  

### Technologies Used:
1) Next.js : It's a React Framework used to build the frond-end of our project.   
2) Solidity : It's the language used to develope smart contract that run on Ethereum.
3) ThirdWeb : Used to build and deploy smart contract on the Mumbai testnet.
4) Polygon Mumbai Testnet : A Blockchain Network.

------  

### Use Case Diagrams:
 
#### 1) Complainer's Use Case: 
![Imgur](https://imgur.com/ScPkmgC.jpg)

#### 2) Officer's Use Case:
![Imgur](https://imgur.com/PxLhpAn.jpg)

------  

### Flow Diagram:
![Imgur](https://imgur.com/SbMTsrb.jpg)

------  

## Current Progress Screenshots:
#### 1) Complain Registration Page:
![Imgur](https://imgur.com/PAR56Vm.jpg)

#### 2) Officer's Dashboard:
![Imgur](https://imgur.com/Drtfdmo.jpg)

------  

## Prject Setup Steps:
1. Clone the repository:
```
git clone https://github.com/Bhupendrachouhan19/Citizen-centric-FIR-system-Prototype-using-blockchain.git
```
2. Install all essential dependencies using commands:  
    ```
    npm install
    yarn install
    ```

3. Deploy the Complaint.sol smart contract using [Thridweb](https://thirdweb.com/dashboard) and get your deployed smart contract's address.
Make sure to put the Officer account's public address inside the "_officer" field while deploying the smart contract.

4. Create a " .env.local " file in the root directory and inside it add the deployed contract' address to the variable name:  NEXT_PUBLIC_SMART_CONTRACT

5. Lastly run the below command:
```
yarn dev
```
check the website here: http://localhost:3000/