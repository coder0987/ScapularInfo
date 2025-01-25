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
  SevenWoundsJesus,
  ScapularBlackPassion,
  Matins
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
    ipadreTwelveYearPrayer: {
      ISBN: 'Unknown',
      date: 'Unknown',
      publisher: 'iPadre',
      author: 'Unknown',
      editor: 'Unknown',
      name: '7 Prayers of St. Bridget to be Recited for 12 Years',
      link: 'https://www.ipadre.net/wp-content/uploads/2013/08/saint_bridget_prayers-12_years.pdf',
      website: 'iPadre',
      nihilObstat: 'Unknown',
      imprimatur: 'Unknown',
      imprimiPotest: 'Unknown'
    },
    catholicShoppe: {
      ISBN: 'Unknown',
      date: 'Unknown',
      publisher: 'Catholic Shoppe USA',
      author: 'Unknown',
      editor: 'Unknown',
      name: 'The Twelve Year Prayers of Saint Bridget on the Passion of Jesus',
      link: 'https://www.catholicshoppeusa.com/products/st-bridget-twelve-year-prayers-on-the-passion-of-jesus',
      website: 'Catholic Shoppe USA',
      nihilObstat: 'Unknown',
      imprimatur: 'Unknown',
      imprimiPotest: 'Unknown'
    },
    blackScapularCatholicTelegraph: {
      ISBN: 'Unknown',
      date: 'February 28, 1889',
      publisher: 'Owen Smith',
      author: 'Unknown',
      editor: 'Catholic Advocate',
      name: 'Catholic Telegraph Vol. LVIII No. 9',
      link: 'https://thecatholicnewsarchive.org/?a=d&d=TCT18890228-01.2.29&e=-------en-20--1--txt-txIN--------',
      website: 'Catholic News Archive',
      nihilObstat: 'Unknown',
      imprimatur: 'Unknown',
      imprimiPotest: 'Unknown'
    },
    blackScapularOurScapular: {
      ISBN: 'Unknown',
      date: '1949',
      publisher: 'Unknown',
      author: 'Unknown',
      editor: 'Unknown',
      name: 'Our Scapular',
      link: 'https://passionistcharism.wordpress.com/wp-content/uploads/2012/06/our-scapular-passionist-magazine-1949.pdf',
      website: 'Passionist Charism',
      nihilObstat: 'Unknown',
      imprimatur: 'Unknown',
      imprimiPotest: 'Unknown'
    },
    littleOfficeCatholicWay: {
      ISBN: '978-1-78379-351-8',
      date: '2014',
      publisher: 'Catholic Way Publishing',
      author: 'Various',
      editor: 'Unknown',
      name: 'The Little Office of the Blessed Virgin Mary',
      link: 'Unknown',
      website: 'Unknown',
      nihilObstat: 'Unknown',
      imprimatur: 'Unknown',
      imprimiPotest: 'Unknown'
    },
    littleOfficeAngelusPress: {
      ISBN: '978-1-937843-19-9',
      date: '2014',
      publisher: 'Angelus Press',
      author: 'Unknown',
      editor: 'Unknown',
      name: 'The Little Office of the Blessed Virgin Mary and The Office of the Dead',
      link: 'Unknown',
      website: 'Unknown',
      nihilObstat: 'Unknown',
      imprimatur: 'Unknown',
      imprimiPotest: 'Unknown'
    },
    littleOfficeUDayton: {
      ISBN: 'Unknown',
      date: 'Unknown',
      publisher: 'University of Dayton - Marian Library',
      author: 'Unknown',
      editor: 'Unknown',
      name: 'Little Office of the Blessed Virgin Mary',
      link: 'https://udayton.edu/imri/mary/l/little-office-of-the-blessed-virgin-mary.php',
      website: 'University of Dayton',
      nihilObstat: 'Unknown',
      imprimatur: 'Unknown',
      imprimiPotest: 'Unknown'
    },
    catholicEncyclopediaLittleOffice: {
      ISBN: 'Unknown',
      date: 'April 19, 1913',
      publisher: 'Robert Appleton Company',
      author: 'Unknown',
      editor: 'Charles G. Herbermann, Ph.D., LL.D.',
      name: 'The Catholic Encyclopedia: Scapular',
      link: 'https://www.catholic.com/encyclopedia/little-office-of-our-lady',
      website: 'Catholic Answers',
      nihilObstat: 'Remy Lafort, S.T.D',
      imprimatur: '+ John Cardinal Farley, Archbishop of New York',
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
  {
    imgURL: "/assets/icons/hours.svg",
    route: "/hours",
    label: "Hours",
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
  {
    imgURL: "/assets/icons/hours.svg",
    route: "/hours",
    label: "Hours",
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

export const littleOfficeMenu = [
  {
      route: "",
      label: "History",
      element: LittleOffice.History
  },
  {
      route: "/blessings",
      label: "Blessings",
      element: LittleOffice.Blessings
  },
  {
      route: "/rubrics",
      label: "How to Pray",
      element: LittleOffice.Rubrics
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
      route: "/scapulars/black-scapular-passion",
      label: "Black Scapular of the Passion",
      element: ScapularBlackPassion,
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
    },
    {
      imgURL: "/brownscapular.jpg",
      route: "/prayers/seven-wounds-jesus",
      alias: "/prayers/seven-sorrows-jesus",
      label: "Seven Wounds of Jesus",
      element: SevenWoundsJesus,
    },
];

export const hours = [
  {
      imgURL: "/brownscapular.jpg",
      route: "/hours/matins",
      label: "Matins",
      element: Matins,
  },
];

export const resources = [
    {
        imgURL: "/brownscapular.jpg",
        route: "/resources/little-office",
        label: "The Little Office",
        element: LittleOffice,
        subroutes: littleOfficeMenu
    }
];