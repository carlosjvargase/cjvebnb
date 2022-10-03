import {
  MdOutlineApartment,
  MdHouseSiding,
  MdOutlineWater,
  MdCabin,
} from 'react-icons/md';
import { BsSnow } from 'react-icons/bs';
import { BiHomeAlt } from 'react-icons/bi';
import {
  GiKidSlide,
  GiSpaceNeedle,
  GiCampingTent,
  GiLightningDome,
  GiEvilTree,
  GiWaveSurfer,
  GiMountainCave,
  GiCaveEntrance,
  GiGolfFlag,
} from 'react-icons/gi';
import { AiOutlineCoffee } from 'react-icons/ai';
import { FaCampground, FaUmbrellaBeach, FaSwimmingPool } from 'react-icons/fa';
import { RiEarthquakeFill } from 'react-icons/ri';

export const locationsTab = [
  { id: 1, label: 'Design', icon: <MdOutlineApartment size={24} /> },
  { id: 2, label: 'Arctic', icon: <BsSnow size={24} /> },
  { id: 3, label: 'Shared Homes', icon: <MdHouseSiding size={24} /> },
  { id: 4, label: 'LakeFront', icon: <MdOutlineWater size={24} /> },
  { id: 5, label: 'National Parks', icon: <GiKidSlide size={24} /> },
  { id: 6, label: 'Bed & Breakfast ', icon: <AiOutlineCoffee size={24} /> },
  { id: 7, label: 'OMG!', icon: <GiSpaceNeedle size={24} /> },
  { id: 8, label: 'Camping', icon: <FaCampground size={24} /> },
  { id: 9, label: 'A-frames', icon: <GiCampingTent size={24} /> },
  { id: 10, label: 'Domes', icon: <GiLightningDome size={24} /> },
  { id: 11, label: 'Tiny Homes', icon: <BiHomeAlt size={24} /> },
  { id: 12, label: 'Treehouses', icon: <GiEvilTree size={24} /> },
  { id: 13, label: 'Surfing', icon: <GiWaveSurfer size={24} /> },
  { id: 14, label: 'CountrySide', icon: <GiMountainCave size={24} /> },
  { id: 15, label: 'Caves', icon: <GiCaveEntrance size={24} /> },
  { id: 16, label: 'Golfing', icon: <GiGolfFlag size={24} /> },
  { id: 17, label: 'Cabins', icon: <MdCabin size={24} /> },
  { id: 18, label: 'Earth Homes', icon: <RiEarthquakeFill size={24} /> },
  { id: 19, label: 'Tropical', icon: <FaUmbrellaBeach size={24} /> },
  { id: 20, label: 'Amazing Pools', icon: <FaSwimmingPool size={24} /> },
];

export const locations = [
  {
    id: 1,
    locationImages: [
      {
        id: 1,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-604726298950758799/original/78d55499-cb48-4e83-a75f-faa42dd7d1ff.jpeg?im_w=1200',
      },
      {
        id: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-604726298950758799/original/c1dfc6c2-1871-43d4-bf6c-b070934602e0.jpeg?im_w=720',
      },
      {
        id: 3,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-604726298950758799/original/3647b556-9d77-4200-8107-a9c60dfdb00b.jpeg?im_w=720',
      },
      {
        id: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-604726298950758799/original/4e651289-cfaf-4752-a97c-7ac556b22feb.jpeg?im_w=720',
      },
      {
        id: 5,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-604726298950758799/original/03d068ed-2979-4384-9200-bd2a3e11e0b9.jpeg?im_w=720',
      },
      {
        id: 6,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-604726298950758799/original/e175513c-db7a-417d-a604-47d4e305bc3e.jpeg?im_w=720',
      },
    ],
    location: 'Vestervig, Denmark',
    days: 'Oct 2-9',
    price: '$584 USD night',
    isNew: true,
    rating: 4.5,
  },
  {
    id: 2,
    locationImages: [
      {
        id: 1,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-48509375/original/0862735b-4abc-4d87-a8d1-f2fb6053adc8.jpeg?im_w=1200',
      },
      {
        id: 2,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-48509375/original/24a05e1f-1b03-43bc-a2d5-c757e8dbdea1.jpeg?im_w=720',
      },
      {
        id: 3,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-48509375/original/b1726498-95c5-47dd-829a-f23e8aacd93a.jpeg?im_w=720',
      },
      {
        id: 4,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-48509375/original/cc4f1bc9-d24f-4e2e-93fb-5441988ba3a0.jpeg?im_w=720',
      },
    ],
    location: 'Rockbridge, Ohio, US',
    days: 'Sep 2-11',
    price: '$730 USD night',
    isNew: false,
    rating: 4.95,
  },
  {
    id: 3,
    locationImages: [
      {
        id: 1,
        url: 'https://a0.muscache.com/im/pictures/751e1606-5d0d-44a9-aa8f-c5c62cf32481.jpg?im_w=1200',
      },
      {
        id: 2,
        url: 'https://a0.muscache.com/im/pictures/d6e949a0-b868-442e-bdb0-bb59ef8cd4f8.jpg?im_w=720',
      },
      {
        id: 3,
        url: 'https://a0.muscache.com/im/pictures/df2637ee-6cbc-4445-9e04-f99e96913e43.jpg?im_w=720',
      },
      {
        id: 4,
        url: 'https://a0.muscache.com/im/pictures/cd1758e1-1517-4775-a89a-557a14f08c90.jpg?im_w=720',
      },
    ],
    location: 'Uvita rosa, Costa Rica',
    days: 'Nov 19-22',
    price: '$291 USD night',
    isNew: true,
    rating: 4.82,
  },
  {
    id: 4,
    locationImages: [
      {
        id: 1,
        url: 'https://a0.muscache.com/im/pictures/43de7299-20ef-43bd-9c46-674283d63716.jpg?im_w=1200',
      },
      {
        id: 2,
        url: 'https://a0.muscache.com/im/pictures/1cf2f3eb-9cc2-4ea2-b956-fd54e50d64b5.jpg?im_w=720',
      },
      {
        id: 3,
        url: 'https://a0.muscache.com/im/pictures/1f97e2c2-e9b4-433b-a261-01551d6c5265.jpg?im_w=720',
      },
      {
        id: 4,
        url: 'https://a0.muscache.com/im/pictures/c9944b5e-2244-4e62-ad4d-ad0a3e991c8e.jpg?im_w=1200',
      },
    ],
    location: 'Navidad, Chile',
    days: 'Sep 13-18',
    price: '$291 USD night',
    isNew: false,
    rating: 4.2,
  },
  {
    id: 5,
    locationImages: [
      {
        id: 1,
        url: 'https://a0.muscache.com/im/pictures/4dd0aa84-b8e0-49cf-bbde-ee08df7ae452.jpg?im_w=720',
      },
      {
        id: 2,
        url: 'https://a0.muscache.com/im/pictures/d953d715-89ca-4c10-93c5-1f8e2625a5cb.jpg?im_w=720',
      },
      {
        id: 3,
        url: 'https://a0.muscache.com/im/pictures/ad429202-910a-400b-9538-4bf3af96378c.jpg?im_w=720',
      },
      {
        id: 4,
        url: 'https://a0.muscache.com/im/pictures/01816e36-d274-4df1-b8a3-94330e266211.jpg?im_w=720',
      },
    ],
    location: 'Paraty, Brazil',
    days: 'Aug 1-6',
    price: '$190 USD night',
    isNew: false,
    rating: 4.9,
  },
  {
    id: 6,
    locationImages: [
      {
        id: 1,
        url: 'https://a0.muscache.com/im/pictures/monet/Select-34444025/original/944d56fa-e9a6-48fb-a9c5-e4e3778042d7?im_w=720',
      },
      {
        id: 2,
        url: 'https://a0.muscache.com/im/pictures/monet/Select-34444025/original/622a7f24-1a55-4468-82b5-fb3abc83020f?im_w=720',
      },
      {
        id: 3,
        url: 'https://a0.muscache.com/im/pictures/monet/Select-34444025/original/68e860ea-a095-4651-b911-0394d9844316?im_w=720',
      },
      {
        id: 4,
        url: 'https://a0.muscache.com/im/pictures/monet/Select-34444025/original/1a3200a4-ad68-4d65-8a82-f738d548d043?im_w=720',
      },
    ],
    location: 'Raelington, Norway',
    days: 'Oct 9-15',
    price: '$467 USD night',
    isNew: false,
    rating: 4.6,
  },
  {
    id: 7,
    locationImages: [
      {
        id: 1,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/3d966c94-4c87-479b-8eeb-4889e9fb6ac9.jpeg?im_w=1200',
      },
      {
        id: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/eeffdea4-bbcf-4a05-bcb9-579a03bf41ab.jpeg?im_w=720',
      },
      {
        id: 3,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/39cdf5aa-a5d6-4f55-893c-73bf310dd598.jpeg?im_w=720',
      },
      {
        id: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/9d4c4d58-b9e6-4a2d-9883-eb2df68c0ba0.jpeg?im_w=720',
      },
    ],
    location: 'Terrasini, Italy',
    days: 'June 7-12',
    price: '$357 USD night',
    isNew: false,
    rating: 4.92,
  },
  {
    id: 8,
    locationImages: [
      {
        id: 1,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-42742665/original/0f2e2367-cffb-4a78-bffb-440ef1d6820a.jpeg?im_w=720',
      },
      {
        id: 2,
        url: 'https://a0.muscache.com/im/pictures/d6f48494-e49f-4fac-9526-ef5897a8803d.jpg?im_w=1200',
      },
      {
        id: 3,
        url: 'https://a0.muscache.com/im/pictures/c96bebc7-3e49-459a-befb-89ad83af634a.jpg?im_w=720',
      },
      {
        id: 4,
        url: 'https://a0.muscache.com/im/pictures/d003efe5-f652-4d2b-936d-796d4fe5a0e1.jpg?im_w=720',
      },
    ],
    location: 'San Jose, Mexico',
    days: 'Jun 11-16',
    price: '$863 USD night',
    isNew: false,
    rating: 5.0,
  },
  {
    id: 9,
    locationImages: [
      {
        id: 1,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-40012920/original/2d811bfc-9e1b-41ae-8156-c1df534191ed.jpeg?im_w=720',
      },
      {
        id: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-40012920/original/f83138c8-57fa-4c64-8381-04de7bcdaa23.jpeg?im_w=720',
      },
      {
        id: 3,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-40012920/original/22995cbc-0798-4e97-852a-6f8b192669a1.jpeg?im_w=720',
      },
      {
        id: 4,
        url: 'hhttps://a0.muscache.com/im/pictures/miso/Hosting-40012920/original/ab7266a9-56f5-4b15-877a-939645753069.jpeg?im_w=720',
      },
    ],
    location: 'Tulum, Mexico',
    days: 'Jul 1-6',
    price: '$598 USD night',
    isNew: false,
    rating: 4.98,
  },
  {
    id: 10,
    locationImages: [
      {
        id: 1,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-46775194/original/05b2184c-2350-4316-8f4a-893342d9f3cf.jpeg?im_w=960',
      },
      {
        id: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-46775194/original/5e66d8ce-b9f8-4038-b6af-b212322fbe77.jpeg?im_w=1200',
      },
      {
        id: 3,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-46775194/original/a1994e3a-dd5f-4f4d-ad1e-738af141578d.jpeg?im_w=720',
      },
      {
        id: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-46775194/original/53ed2829-c6d3-43c6-81f2-ea9ceda9c024.jpeg?im_w=720',
      },
    ],
    location: 'Inglis, Canada',
    days: 'Jun 12-18',
    price: '$399 USD night',
    isNew: false,
    rating: 4.89,
  },
  {
    id: 11,
    locationImages: [
      {
        id: 1,
        url: 'https://a0.muscache.com/im/pictures/c4c92198-fb3a-4c4b-bbb6-3aa8af8f7e73.jpg?im_w=960',
      },
      {
        id: 2,
        url: 'https://a0.muscache.com/im/pictures/313b1ffa-b52c-4aba-b51f-80e94d3f2be1.jpg?im_w=480',
      },
      {
        id: 3,
        url: 'https://a0.muscache.com/im/pictures/33d7a8ad-d549-4f0e-9c0d-a0d9870ec41b.jpg?im_w=480',
      },
      {
        id: 4,
        url: 'https://a0.muscache.com/im/pictures/76672df0-df76-490b-8f77-dee11757ceae.jpg?im_w=480',
      },
    ],
    location: 'Jenner, California',
    days: 'Nov 2-7',
    price: '$1,752 USD night',
    isNew: false,
    rating: 4.93,
  },
  {
    id: 12,
    locationImages: [
      {
        id: 1,
        url: 'https://a0.muscache.com/im/pictures/285a7e58-e677-4ba3-b87c-859d492ee689.jpg?im_w=960',
      },
      {
        id: 2,
        url: 'https://a0.muscache.com/im/pictures/92b3b553-f178-4563-8122-60aac435d9e9.jpg?im_w=720',
      },
      {
        id: 3,
        url: 'https://a0.muscache.com/im/pictures/7d4ff3f0-7ad2-4c1d-b97f-2dbd37a52519.jpg?im_w=720',
      },
      {
        id: 4,
        url: 'https://a0.muscache.com/im/pictures/6d4b9586-7188-478b-a050-52df76683b24.jpg?im_w=1200',
      },
    ],
    location: 'Cabrera, Dominican Republic',
    days: 'Jun 3-4',
    price: '$3,360 USD night',
    isNew: false,
    rating: 4.64,
  },
  {
    id: 13,
    locationImages: [
      {
        id: 1,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-46327689/original/60cdde02-16c8-4db6-9966-fb2a3c19a9c0.jpeg?im_w=960',
      },
      {
        id: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-46327689/original/7bdc5e37-1a62-461d-a903-4f0eda50d2a2.jpeg?im_w=480',
      },
      {
        id: 3,
        url: 'https://a0.muscache.com/im/pictures/f60d04dd-6c37-4e34-a608-8a5d0ec17b5b.jpg?im_w=480',
      },
      {
        id: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-46327689/original/83d3d409-4927-45b4-b699-027e3fb59691.jpeg?im_w=480',
      },
    ],
    location: 'Lambertville, New Jersey, US',
    days: 'Sep 22-25',
    price: '$899 USD night',
    isNew: true,
    rating: 4.91,
  },
  {
    id: 14,
    locationImages: [
      {
        id: 1,
        url: 'https://a0.muscache.com/im/pictures/74102172/9815f41f_original.jpg?im_w=960',
      },
      {
        id: 2,
        url: 'https://a0.muscache.com/im/pictures/57807707/e0b2123a_original.jpg?im_w=480',
      },
      {
        id: 3,
        url: 'https://a0.muscache.com/im/pictures/309bee53-311d-4f07-a2e7-14daadbbfb77.jpg?im_w=480',
      },
      {
        id: 4,
        url: 'https://a0.muscache.com/im/pictures/74102480/7186bb11_original.jpg?im_w=480',
      },
    ],
    location: 'Bolzano, Italy',
    days: 'Nov 4-10',
    price: '$274 USD night',
    isNew: true,
    rating: 4.88,
  },
  {
    id: 15,
    locationImages: [
      {
        id: 1,
        url: 'https://a0.muscache.com/im/pictures/84163175/269c4a83_original.jpg?im_w=960',
      },
      {
        id: 2,
        url: 'https://a0.muscache.com/im/pictures/84164256/801120ad_original.jpg?im_w=480',
      },
      {
        id: 3,
        url: 'https://a0.muscache.com/im/pictures/84163733/e1f4e116_original.jpg?im_w=480',
      },
      {
        id: 4,
        url: 'https://a0.muscache.com/im/pictures/84168049/3a5849c0_original.jpg?im_w=480',
      },
    ],
    location: 'Puerto Escondido, Mexico',
    days: 'Sep 25-Oct 2',
    price: '$457 USD night',
    isNew: true,
    rating: 4.85,
  },
  {
    id: 16,
    locationImages: [
      {
        id: 1,
        url: 'https://a0.muscache.com/im/pictures/8255bdb1-1d65-4325-a744-6487dc51453b.jpg?im_w=960',
      },
      {
        id: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-34577812/original/abeb8e1c-b2e8-4a09-9a7a-eb2584c6fef9.jpeg?im_w=480',
      },
      {
        id: 3,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-34577812/original/8b0bb13c-9a61-4cee-9882-9c177473124b.jpeg?im_w=480',
      },
      {
        id: 4,
        url: 'https://a0.muscache.com/im/pictures/8e062776-e4d5-4a27-a3d7-7e59f8eb7521.jpg?im_w=480',
      },
    ],
    location: 'Malibu, California, US',
    days: 'Oct 4-9',
    price: '$2,495 USD night',
    isNew: false,
    rating: 4.98,
  },
  {
    id: 17,
    locationImages: [
      {
        id: 1,
        url: 'https://a0.muscache.com/im/pictures/5f2f8e5e-5cb2-4171-a15a-3c2542c42ab8.jpg?im_w=1200',
      },
      {
        id: 2,
        url: 'https://a0.muscache.com/im/pictures/20e177a7-b139-4bcd-8f8e-caecab9cc041.jpg?im_w=1200',
      },
      {
        id: 3,
        url: 'https://a0.muscache.com/im/pictures/69d1702c-6f3b-40d7-b928-93d9e97f3042.jpg?im_w=1200',
      },
      {
        id: 4,
        url: 'https://a0.muscache.com/im/pictures/282673f7-8fe0-4911-bcca-1c09bc87af0f.jpg?im_w=1200',
      },
    ],
    location: 'Topanga, California, US',
    days: 'Jun 2-9',
    price: '$1,200 USD night',
    isNew: false,
    rating: 5.0,
  },
  {
    id: 18,
    locationImages: [
      {
        id: 1,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-38261497/original/5f573f72-c9cf-473e-9fc6-bfe8e62d6911.jpeg?im_w=960',
      },
      {
        id: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-38261497/original/a50ea588-974e-42a2-a26c-62662721fc20.jpeg?im_w=480',
      },
      {
        id: 3,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-38261497/original/8d16f8cf-dff4-41c7-a9e5-a51e62819981.jpeg?im_w=480',
      },
      {
        id: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-38261497/original/dd299fc9-efa1-435f-ae5f-522462490e38.jpeg?im_w=480',
      },
    ],
    location: 'Marion, Indiana, US',
    days: 'Oct 28-Nov 4',
    price: '$581 USD night',
    isNew: true,
    rating: 4.69,
  },
  {
    id: 19,
    locationImages: [
      {
        id: 1,
        url: 'https://a0.muscache.com/im/pictures/40ad3ba5-fab2-4d36-8586-d56fe70a8b85.jpg?im_w=1200',
      },
      {
        id: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-22319039/original/3d9bb479-04fd-41d7-a22a-11add24e41ad.jpeg?im_w=1200',
      },
      {
        id: 3,
        url: 'https://a0.muscache.com/im/pictures/1f963bde-281c-4108-af27-66d09c4d7870.jpg?im_w=720',
      },
      {
        id: 4,
        url: 'https://a0.muscache.com/im/pictures/dbb6d2b6-4457-4e84-a585-c664076899eb.jpg?im_w=1200',
      },
    ],
    location: 'Volcano, Hawaii, US',
    days: 'Jun 11-16',
    price: '$567 USD night',
    isNew: true,
    rating: 4.96,
  },
  {
    id: 20,
    locationImages: [
      {
        id: 1,
        url: 'https://a0.muscache.com/im/pictures/7ca6118f-68c7-4a32-8bbc-09ce1840a373.jpg?im_w=960',
      },
      {
        id: 2,
        url: 'https://a0.muscache.com/im/pictures/c99e5b00-a779-40e9-bd0e-5062dfdb7eb8.jpg?im_w=720',
      },
      {
        id: 3,
        url: 'https://a0.muscache.com/im/pictures/46c91a61-8408-4256-8591-873a0fc5d0d6.jpg?im_w=1200',
      },
      {
        id: 4,
        url: 'https://a0.muscache.com/im/pictures/6fa20b85-d4de-46e2-af3f-7081796013e9.jpg?im_w=1200',
      },
    ],
    location: 'Lagos, Portugal',
    days: 'Oct 2-9',
    price: '$1,909 USD night',
    isNew: true,
    rating: 4.15,
  },
];
