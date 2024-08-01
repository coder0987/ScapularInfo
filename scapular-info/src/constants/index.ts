import {
  SevenSorrows,
  ScapularBrown,
  ScapularRedemptorist,
  ScapularBenedict,
  LittleOffice,
} from "@/_root/pages";

export const sourcesList = {
    scapularPrayerBook: {
        ISBN: '1-936020-08-9',
        date: 'October 1, 2007',
        publisher: 'Aquinas Press',
        author: 'Unknown',
        editor: 'Bart Tesoriero',
        name: 'Scapular Prayer Book'
    }
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