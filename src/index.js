import { preferences } from './utils/example.js';
import Web3 from 'web3';
import contractABI from './utils/NFTABI.json'

export const getPreferences = async (address) => {

  const contractAddress = "0xDF65bb28d201F153bE44D72f89e12BEB6132ac35"

  const web3 = new Web3("https://cloudflare-eth.com")
  const contract = new web3.eth.Contract(contractABI, contractAddress)

  contract.methods.getUserPreference(address).call((err, res) => {
    if (err) {
      return {error: err}
    }
    return res;

  })
};
