
export interface Room {
  id: string;
  name: string;
  price: number;
  image: string;
  amenities: string[];
  description: string;
  size: string;
}

export interface BookingDetails {
  checkIn: string;
  checkOut: string;
  guests: number;
  roomType: string;
}

export enum Section {
  Home = 'home',
  Rooms = 'rooms',
  About = 'about',
  Gallery = 'gallery',
  Contact = 'contact'
}
