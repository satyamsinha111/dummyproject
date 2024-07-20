import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: any[] = [
    {
      id:1,
      name:"POCO C65 (Pastel Blue, 128 GB)",
      image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/u/8/c65-mzb0g8nin-poco-original-imagw6j2kp5t5jek.jpeg?q=70",
      description:"You can get yourself a POCO C65, a stunning smartphone which is powered to glide you through your day-to-day activities with ease. Featuring a large display, this smartphone brings all the visuals to life with its fast refresh rate of 90 Hz.",
      price:6799
    },
    {
      id:2,
      name:"Motorola G85 5G (Cobalt Blue, 128 GB)  (8 GB RAM)",
      image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/p/l/-original-imah2fjcxjdjykpc.jpeg?q=70",
      description:"Discover the Moto G85 5G, which has a revolutionary 3D Curved pOLED 120 Hz Display protected by Gorilla Glass 5 for remarkable longevity. With the 50 MP OIS Sony LYTIA 600 Camera system, you can take beautiful pictures in any kind of illumination. Utilise Smart Connect to share content with ease and make use of the built-in 12 GB RAM and 256 GB storage. Immersive sound is produced by its Dolby Atmos Dual Stereo Speakers, and its Snapdragon 6s Gen 3 engine guarantees lightning-fast 5G speeds over 13 bands. Android 14 delivers the newest advancements in mobile technology and security, with a 5000 mAh battery and 33 W TurboPower charging.",
      price:17999
    },
    {
      id:3,
      name:"Motorola G34 5G (Ice Blue, 128 GB)  (8 GB RAM)",
      image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/k/9/g34-5g-pb1v0001in-motorola-original-imagwu4r4xze9jwz.jpeg?q=70",
      description:"Look no further than the amazing Moto G34 5G smartphone, which is built to improve performance and add sophistication to your life. Powered by the LPDDR4X RAM and the Snapdragon 695 5G octa-core CPU, the Moto G34 5G offers the performance needed to fully utilise 5G networks. The Moto G34 5G sticks out with its slim, elegant, and light design. There's a vegan leather special edition for an added bit of refinement. Take incredibly clear and vibrant pictures with the sophisticated 50 MP Quad Pixel camera with Image Auto Enhance, the Quad pixel camera system helps you take stunning pictures even in dim lighting. Plus it comes with advanced 16 MP Selfie Camera.",
      price:3625
    },
    {
      id:4,
      name:"POCO C65 (Pastel Blue, 128 GB)",
      image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/1/t/z/-original-imagys8jdrs47dhc.jpeg?q=70",
      description:"Experience the lightning-fast speed and seamless performance with the MediaTek Dimensity 6100+ 5G processor. The POCO M6 takes a giant leap in processing power, ensuring swift app launches, smoother navigation, and lag-free multitasking. Say goodbye to the frustration of app reloads and sluggish performance – the POCO M6 is here to redefine spee",
      price:10000
    },
    {
      id:5,
      name:"realme 12x 5G (Twilight Purple, 128 GB)  (6 GB RAM)",
      image:null,
      description:"The Realme 12x 5G is a sleek powerhouse redefining mobile technology. Swift charging meets endurance with 45 W SUPERVOOC Charge and a 5000 mAh battery, ensuring you're always connected. The Dimensity 6100+ 6nm chipset delivers lightning-fast 5G speeds for seamless connectivity wherever you are. Immerse yourself in the 12.07 cm (6.72) 120 Hz FHD+ Display, offering crystal-clear visuals with its ultra-smooth",
      price:6000
    }
  ];

  constructor() { }

  getProducts():any[] {
   return this.productList;
  }


}
