export type DestinationType = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
};

export type CrewType = {
  id: number;
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
};

export type TechnologyType = {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
};
