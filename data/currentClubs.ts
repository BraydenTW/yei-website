const clubs = [
  {
    name: "Saratoga High School",
    email: "henryweng03@gmail.com",
    region: "Norcal",
    founding: true,
    primaryFounding: true,
  },
  {
    name: "Lynbrook High School",
    email: "ian@theyei.org",
    region: "Norcal",
    founding: true,
    primaryFounding: true,
  },
  {
    name: "Newton South High School",
    email: "li.andrew.ch@gmail.com",
    region: "Massachusetts",
    founding: true,
  },
  {
    name: "Harker School",
    email: "21arushis@students.harker.org",
    region: "Norcal",
    founding: true,
  },
  {
    name: "Monta Vista High School",
    email: "maggieyy7@gmail.com ",
    region: "Norcal",
    founding: true,
  },
  {
    name: "Waubonsie Valley High School",
    email: "ariondey@gmail.com",
    region: "Illinois",
    founding: true,
  },
  {
    name: "Eastlake High School",
    email: "s-ansingh@lwsd.org",
    region: "Washington",
    founding: true,
  },
  {
    name: "Joaquin Miller Middle School",
    email: "yzhoucalvin@gmail.com",
    region: "Norcal",
    founding: true,
  },
  {
    name: "American High School",
    email: "sathwik.eshwar05@gmail.com",
    region: "Norcal",
    founding: true,
  },
  {
    name: "Chaparral High School",
    email: "rkshishodia4@gmail.com",
    region: "Socal",
    founding: true,
  },
  {
    name: "Ardrey Kell",
    email: "linkevin465@gmail.com",
    region: "North Carolina",
    founding: true,
  },
  {
    name: "Vaels International School",
    email: "2003pallavi2003@gmail.com",
    region: "India",
    founding: true,
  },
  {
    name: "Westwood High School",
    email: "rohanbajpai024@gmail.com",
    region: "Texas",
    founding: true,
  },
  {
    name: "GEMS Wellington Academy Silicon Oasis",
    email: "rajvirkohli0@gmail.com",
    region: "United Arab Emirates",
    founding: true,
  },
  {
    name: "BASIS Scottsdale",
    email: "nbasu.456@gmail.com",
    region: "Arizona",
    founding: true,
  },
  {
    name: "Richard Montgomery High School",
    email: "dannyshao2013@gmail.com",
    region: "Maryland",
    founding: true,
  },
  {
    name: "Green Hope High School",
    email: "bhzhang4@gmail.com",
    region: "North Carolina",
    founding: true,
  },
  {
    name: "Redwood Middle School",
    email: "cheryl@theyei.org",
    region: "Norcal",
    founding: true,
  },
  {
    name: "Palo Alto High School",
    email: "mh33653@pausd.us",
    region: "Norcal",
    founding: true,
  },
  {
    name: "Homestead High School",
    email: "andraaliu@gmail.com\n",
    region: "Norcal",
    founding: true,
  },
  {
    name: "El Camino Fundamental High School",
    email: "marinjanedolan@gmail.com",
    region: "Norcal",
    founding: true,
  },
  {
    name: "Menlo High School",
    email: "connor.yu@menloschool.org",
    region: "Norcal",
    founding: true,
  },
  {
    name: "John P. Stevens High School",
    email: "snehanpatibandla@gmail.com",
    region: "New Jersey",
    founding: true,
  },
  {
    name: "Leigh High School",
    email: "jhatanmay2005@gmail.com",
    region: "Norcal",
    founding: true,
  },
  {
    name: "Seven Lakes High School",
    email: "siddharthayyagari1@gmail.com",
    region: "Texas",
    founding: true,
  },
  {
    name: "Sherwood Hall Senior Secondary School",
    email: "rafahasma@icloud.com",
    region: "India",
    founding: true,
  },
  {
    name: "Central High School",
    email: "robineluvathingal@gmail.com",
    region: "Arkansas",
    founding: true,
  },
  {
    name: "Instituto Lange Ley",
    email: "martinakurchan@gmail.com",
    region: "Argentina",
    founding: true,
  },
  {
    name: "Centennial High School",
    email: "lucasyang04@gmail.com",
    region: "Maryland",
    founding: true,
  },
  {
    name: "Christian Heritage Academy",
    email: "nathanael.wang@yahoo.com",
    region: "Illinois",
    founding: true,
  },
  {
    name: "Archbishop Mitty High School",
    email: "anirudhlahiri314@gmail.com",
    region: "Norcal",
  },
  {
    name: "Cupertino High School",
    email: "alysaxu10295@gmail.com",
    region: "Norcal",
  },
  {
    name: "Dublin High School",
    email: "forevergrace.15@gmail.com",
    region: "Norcal",
  },
  {
    name: "Viewpoint School",
    email: "j.yang22@viewpoint.org",
    region: "Socal",
  },
  {
    name: "Frisco Heritage High School",
    email: "rithikduvva@gmail.com",
    region: "Texas",
  },
  {
    name: "Lower Merion High School",
    email: "jonathaninnovations@gmail.com",
    region: "Pennsylvania",
  },
  {
    name: "Dougherty Valley High School",
    email: "ishaanbansal1001@gmail.com",
    region: "Norcal",
  },
  {
    name: "Skyline High School",
    email: "pradumna.sachdeva@gmail.com",
    region: "Washington",
  },
  {
    name: "Allen High School",
    email: "nikki.shah@student.allenisd.org",
    region: "Texas",
  },
  {
    name: "Bothell High School",
    email: "1118836@apps.nsd.org",
    region: "Washington",
  },
  {
    name: "Charlotte Country Day",
    email: "MKoya21@charlottecountryday.org",
    region: "North Carolina",
  },
  {
    name: "GEMS Modern Academy",
    email: "zahidahmed1420@gmail.com",
    region: "United Arab Emirates",
  },
  {
    name: "Obra D. Tompkins High School",
    email: "othsyei@gmail.com",
    region: "Texas",
  },
  {
    name: "Meadowbrook High School",
    region: "Virginia",
  },
  {
    name: "Milton Academy",
    region: "Massachusetts",
  },
  {
    name: "Santa Monica High School",
    region: "Norcal",
  },
  {
    name: "Bridgewater-Raritan Regional High School",
    region: "New Jersey",
  },
  {
    name: "American Academy in Tbilisi",
    region: "Tbilisi, The Republic of Georgia",
  },
  {
    name: "Santa Teresa High School",
    region: "Socal",
  },
  {
    name: "Doral Academy Preparatory",
    region: "Florida",
  },
  {
    name: "Hankuk Academy of Foreign Studies",
    region: "South Korea",
  },
  {
    name: "Najd National Schools",
    region: "Saudi Arabia",
  },
  {
    name: "Los Altos High School",
    region: "Norcal",
  },
  {
    name: "Alameda High Economics Club",
    region: "Norcal",
  },
];

export default clubs;
