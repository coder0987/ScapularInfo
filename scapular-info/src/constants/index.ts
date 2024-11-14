import {
  SevenSorrows,
  ScapularBrown,
  ScapularRedemptorist,
  ScapularRed,
  ScapularBenedict,
  ScapularBlue,
  ScapularGreen,
  ScapularBlackDolors,
  LittleOffice,
  ScapularWhite,
} from "@/_root/pages";

export interface source {
    ISBN: string;
    date: string;
    publisher: string;
    author: string;
    editor: string;
    name: string;
    link: string;
    website: string;
    nihilObstat: string;
    imprimatur: string;
    imprimiPotest: string;
};

export const sourcesList = {
    scapularPrayerBook: {
        ISBN: '1-936020-08-9',
        date: 'October 1, 2007',
        publisher: 'Aquinas Press',
        author: 'Unknown',
        editor: 'Bart Tesoriero',
        name: 'Scapular Prayer Book',
        link: 'Unknown',
        website: 'Unknown',
        nihilObstat: 'Reverend Francis Vivona, S.T.M., J.C.L',
        imprimatur: 'Most Reverend Joseph A. Pepe, D.D., J.C.D',
        imprimiPotest: 'Unknown'
    },
    catholicEncyclopediaScapular: {
        ISBN: 'Unknown',
        date: 'April 19, 1913',
        publisher: 'Robert Appleton Company',
        author: 'Unknown',
        editor: 'Charles G. Herbermann, Ph.D., LL.D.',
        name: 'The Catholic Encyclopedia: Scapular',
        link: 'https://www.catholic.com/encyclopedia/scapular',
        website: 'Catholic Answers',
        nihilObstat: 'Remy Lafort, S.T.D',
        imprimatur: '+ John Cardinal Farley, Archbishop of New York',
        imprimiPotest: 'Unknown'
    },
    fiveScapulars: {
        ISBN: 'Unknown',
        date: 'January 1957',
        publisher: 'Unknown',
        author: 'Raymond J. Miller, C.SS.R',
        editor: 'Unknown',
        name: 'The Five Scapulars',
        link: 'https://archive.org/details/five-scapulars',
        website: 'Internet Archive',
        nihilObstat: 'Unknown',
        imprimatur: '+ Joseph E. Ritter, Archbishop of St. Louis',
        imprimiPotest: 'John N. McCormick, C.SS.R. Provincial, St. Louis Province, Redemptorist Fathers'
    },
    greenScapularCC: {
      ISBN: 'Unknown',
      date: 'September 29, 2017',
      publisher: 'The Catholc Company',
      author: 'Ashley Olik',
      editor: 'Unknown',
      name: 'Guide to the Green Scapular: A Powerful (and Surprisingly Simple) Devotion',
      link: 'https://www.catholiccompany.com/magazine/green-scapular-devotion-6141',
      website: 'The Catholic Company',
      nihilObstat: 'Unknown',
      imprimatur: 'Unknown',
      imprimiPotest: 'Unknown'
    },
    greenScapular: {
      ISBN: 'Unknown',
      date: '2023',
      publisher: 'Society of the Green Scapular',
      author: 'Unknown',
      editor: 'Unknown',
      name: 'What is the Green Scapular?',
      link: 'https://www.greenscapular.com/',
      website: 'Society of the Green Scapular',
      nihilObstat: 'Unknown',
      imprimatur: 'Unknown',
      imprimiPotest: 'Unknown'
    },
    greenScapularFavors: {
      ISBN: 'Unknown',
      date: '1923',
      publisher: 'Society of the Green Scapular',
      author: 'Rev Father Marie Edouard Mott C.M.',
      editor: 'Unknown',
      name: 'The Green Scapular and Its Favors',
      link: 'https://www.greenscapular.com/pdf/Green-Scapular-and-Its-Favors_MOTT.pdf',
      website: 'Society of the Green Scapular',
      nihilObstat: 'Unknown',
      imprimatur: 'Unknown',
      imprimiPotest: 'Unknown'
    },
    blackScapularMaryPages: {
      ISBN: 'Unknown',
      date: 'Unknown',
      publisher: 'Foundation Marypages',
      author: 'Unknown',
      editor: 'Unknown',
      name: 'Black Scapular of the Seven Sorrows of Mary',
      link: 'https://www.marypages.com/black-scapular.html',
      website: 'Mary Pages',
      nihilObstat: 'Unknown',
      imprimatur: 'Unknown',
      imprimiPotest: 'Unknown'
    },
    blueScapularPadriMariani: {
      ISBN: 'Unknown',
      date: 'Unknown',
      publisher: 'Marians of the Immaculate Conception',
      author: 'Unknown',
      editor: 'Unknown',
      name: 'Scapular of the Immaculate Concpetion',
      link: 'https://padrimariani.org/en/the-blue-scapular/',
      website: 'Padri Mariani - Marians of the Immaculate Conception',
      nihilObstat: 'Unknown',
      imprimatur: 'Unknown',
      imprimiPotest: 'Unknown'
    },
    redScapularMaryPages: {
      ISBN: 'Unknown',
      date: 'Unknown',
      publisher: 'Foundation Marypages',
      author: 'Unknown',
      editor: 'Unknown',
      name: 'Red Scapular of the Passion',
      link: 'https://www.marypages.com/red-scapular.html',
      website: 'Mary Pages',
      nihilObstat: 'Unknown',
      imprimatur: 'Unknown',
      imprimiPotest: 'Unknown'
    },
    manualOfDevotions: {
      ISBN: 'Unknown',
      date: '1861',
      publisher: 'Catholic Publishing & Bookselling Company, Limited',
      author: 'Unknown',
      editor: 'Unknown',
      name: 'A Manual of Devotions to Our Holy Father Saint Benedict, Abbot and Patriarch of the Western Monks; to His Sister Saint Scholastica, Virgin and Abbess; and to All Saints of His Holy Order',
      link: 'https://books.google.com/books?id=QVl2gto5TIQC&dq=Scapular+of+Saint+Benedict&pg=PA212',
      website: 'Google Books',
      nihilObstat: 'Unknown',
      imprimatur: 'Domnus Placidus Burchall',
      imprimiPotest: 'Unknown'
    },
};

export const sidebarLinks = [
  {
    route: "/",
    label: "Home",
    imgURL: "/assets/icons/home.svg",
  },
  {
    route: "/scapulars",
    label: "Scapulars",
    imgURL: "/assets/icons/scapular.svg",
  },
  {
    route: "/prayers",
    label: "Prayers",
    imgURL: "/assets/icons/prayer.svg",
  },
  {
    route: "/resources",
    label: "Resources",
    imgURL: "/assets/icons/resources.svg",
  },
];

export const bottombarLinks = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/scapular.svg",
    route: "/scapulars",
    label: "Scapulars",
  },
  {
    imgURL: "/assets/icons/prayer.svg",
    route: "/prayers",
    label: "Prayers",
  },
  {
    imgURL: "/assets/icons/resources.svg",
    route: "/resources",
    label: "Resources",
  },
];

export const scapularMenu = [
    {
        route: "",
        label: "History"
    },
    {
        route: "/blessings",
        label: "Blessings"
    },
    {
        route: "/construction",
        label: "Construction"
    },
    {
        route: "/requirements",
        label: "Requirements"
    },
];

export const scapulars = [
    {
        imgURL: "/brownscapular.jpg",
        route: "/scapulars/brown-scapular",
        label: "Brown Scapular",
        element: ScapularBrown,
    },
    {
        imgURL: "/brownscapular.jpg",
        route: "/scapulars/redemptorist-scapular",
        label: "Five-Fold Scapular",
        element: ScapularRedemptorist,
    },
    {
        imgURL: "/brownscapular.jpg",
        route: "/scapulars/benedict-scapular",
        label: "Benedictine Scapular",
        element: ScapularBenedict,
    },
    {
      imgURL: "/brownscapular.jpg",
      route: "/scapulars/green-scapular",
      label: "Green Scapular",
      element: ScapularGreen,
    },
    {
      imgURL: "/brownscapular.jpg",
      route: "/scapulars/black-scapular",
      label: "Black Scapular",
      element: ScapularBlackDolors,
    },
    {
      imgURL: "/brownscapular.jpg",
      route: "/scapulars/blue-scapular",
      label: "Blue Scapular",
      element: ScapularBlue,
    },
    {
      imgURL: "/brownscapular.jpg",
      route: "/scapulars/red-scapular",
      label: "Red Scapular",
      element: ScapularRed,
    },
    {
      imgURL: "/brownscapular.jpg",
      route: "/scapulars/white-scapular",
      label: "White Scapular",
      element: ScapularWhite,
    },
];

export const prayers = [
    {
        imgURL: "/brownscapular.jpg",
        route: "/prayers/seven-sorrows",
        label: "Seven Sorrows",
        element: SevenSorrows,
    }
];

export const resources = [
    {
        imgURL: "/brownscapular.jpg",
        route: "/resources/little-office",
        label: "The Little Office",
        element: LittleOffice,
    }
];