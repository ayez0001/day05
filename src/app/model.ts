export interface SKU {
    albumName: string;
    artistName: string;
    rate: number;
    image: string;
  };
  
  export interface list {
    sku: SKU,
    quantity: number;
  }
  
  // Coming from the database
  export const list: SKU[] = [
    {
        albumName: 'Fearless',
        artistName: 'Taylor swift',
        rate: 5,
        image: 'assets/music.jpg'
    }
    
  ];
  
