export type PhotoCategory = 'nature' | 'urban' | 'people';

export type PhotoData = {
  src: string;
  alt: string;
  category: PhotoCategory;
};

const photo = (
  src: string,
  alt: string,
  category: PhotoCategory
): PhotoData => ({
  src,
  alt,
  category
});

export const photos = [
  photo('/photos/forest.jpg', 'Light through forest trees', 'nature')
] as const;