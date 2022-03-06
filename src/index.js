import { ethers } from 'ethers';
import { Web3Storage } from 'web3.storage'
import contractABI from './utils/abi.js'
import Axios from 'axios'

export const getPreferences = async (address, API_TOKEN) => {
  const provider = new ethers.providers.AlchemyProvider("maticmum");
  const contractAddress = "0xDF65bb28d201F153bE44D72f89e12BEB6132ac35"

  const connectedContract = new ethers.Contract(contractAddress, contractABI.abi, provider )

  try {
    const CID = await connectedContract.userPreferences(address)
    const client = new Web3Storage({ token: API_TOKEN })
    const res = await client.get(CID)

    if (!res.ok) throw new Error(`failed to get ${CID}`)

    const files = await res.files()
    const ipfsURL = `https://${files[0].cid}.ipfs.dweb.link`
    
    Axios.get(ipfsURL).then(response => {
      return response.data
    })
  } catch (err) {
    return {error: err}
  }
};
