const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      imgSrc:
        'https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129804.jpg?w=1060&t=st=1691091913~exp=1691092513~hmac=69edab31759abb4a970ac9b079d43ab465a4892110676ffb30d8f1410acd2d9f',
      // old price added for testing purposes
      oldPrice: 35,
      isFavorite: true,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      imgSrc:
        'https://img.freepik.com/free-photo/picture-frame-by-velvet-armchair_53876-132788.jpg?w=740&t=st=1691092051~exp=1691092651~hmac=29a0927b717ac30003578f5e65c4534743e810bf01a7dd0c73de41f0e4a92bd6',
      // old price added for testing purposes
      oldPrice: 35,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,

      isFavorite: false,
      imgSrc:
        'https://img.freepik.com/free-photo/empty-flat-interrior-with-elements-decoration_1303-23910.jpg?w=1060&t=st=1691092096~exp=1691092696~hmac=5553d73cef167f9636899c7c10ed201833aa7322872624cf09c9321d8bf79381',
      classFav: false,
      classCom: false,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      imgSrc:
        'https://img.freepik.com/free-photo/wooden-sideboard-table-with-books-vase_53876-144976.jpg?w=740&t=st=1691092114~exp=1691092714~hmac=4da81c9eb3ac98a12bd76143084651df4ea2eef418c5371307a603cccc052917',
      classFav: true,
      classCom: true,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      imgSrc:
        'https://img.freepik.com/free-photo/mockup-frames-living-room-interior-with-chair-decorscandinavian-style_41470-5148.jpg?w=740&t=st=1691092130~exp=1691092730~hmac=e1e8b7e32370eff0e53577028449897d30995e7892d19157ac1f51e74487e57d',
      classFav: false,
      classCom: false,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      imgSrc:
        'https://img.freepik.com/free-photo/wood-sideboard-living-room-interior-with-copy-space_43614-828.jpg?w=996&t=st=1691092208~exp=1691092808~hmac=85e1fe43d3dbbcc62b3fbb904a884f10a85a76c57b75bd6007762511cb935c11',
      classFav: false,
      classCom: false,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      imgSrc:
        'https://img.freepik.com/free-photo/tropical-authentic-dining-room-interior-design-with-gallery-wall_53876-126792.jpg?w=1060&t=st=1691092236~exp=1691092836~hmac=026d0da3e9327635a484530dd527724313df7118de8350051fffc6125ef37753',
      classFav: false,
      classCom: false,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      imgSrc:
        'https://img.freepik.com/free-photo/blank-picture-frame-by-pink-velvet-armchair_53876-134083.jpg?w=740&t=st=1691092258~exp=1691092858~hmac=9cf262221e75b129ee78c1d2c2ef3f9dc1b5ee905a2328fa4fecc16d79c612f4',
      classFav: false,
      classCom: false,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
    },
  ],
  cart: {
    products: [],
  },
  mode: 'laptop',
};

export default initialState;
