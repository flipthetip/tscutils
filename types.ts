export interface Owner {
    address: string
    associatedTokenAccountAddress: string
  }

  export interface Nft {
    symbol: String
    name: string
    address: string
    description: string
    image: string
    mintAddress: string
    owner: Owner
    updateAuthority: string
  }