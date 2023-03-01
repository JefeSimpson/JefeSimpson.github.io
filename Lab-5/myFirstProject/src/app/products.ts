export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;

  image: string;

  rating: number;

  source: string;

  completed: boolean;

  likes: number;

  category: number;
}

export const products = [
  {
    id: 1,
    name: 'Монитор ASUS ROG STRIX XG43UQ белый',
    price: 1015810,
    description: 'диагональ: 42 дюйм\n' +
        'разрешение: 3840x2160\n' +
        'яркость: 1000 кд/м2\n' +
        'время отклика: 1 мс\n' +
        'макс. частота обновления кадров: 144 Гц\n' +
        'входы: аудио стерео, ,USB, ,HDMI, ,DisplayPort',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfe/h46/65440849362974/monitor-43-asus-xg43uq-va-16-9-uhd-3840x2160x144hz-750cd-m2-4000-1-178-178-1ms-4hdmi-dp-sp10w-107462967-1.jpg',
    rating: 4.0,
    source: 'https://kaspi.kz/shop/p/asus-rog-strix-xg43uq-belyi-107462967/?c=750000000#!/item',
    completed: false,
    likes: 0,
    category: 1,
  },
  {
    id: 2,
    name: 'Монитор LG 24GN60R черный',
    price: 109663,
    description: 'диагональ: 23.8 дюйм\n' +
        'разрешение: 1920x1080\n' +
        'тип ЖК-матрицы: IPS\n' +
        'яркость: 300 кд/м2\n' +
        'время отклика: 1 мс\n' +
        'макс. частота обновления кадров: 144 Гц\n' +
        'входы: HDMI, ,DisplayPort',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4d/hb1/65500267839518/lg-24gn60r-chernyi-107490032-1.jpg',
    rating: 5.0,
    source: 'https://kaspi.kz/shop/p/lg-24gn60r-chernyi-107490032/?c=591010000#!/item',
    completed: false,
    likes: 0,
    category: 1,
  },
  {
    id: 3,
    name: 'Монитор BenQ ZOWIE XL2411K черный',
    price: 137895,
    description: 'диагональ: 24 дюйм\n' +
        'разрешение: 1920x1080\n' +
        'тип ЖК-матрицы: TN\n' +
        'яркость: 320 кд/м2\n' +
        'время отклика: 1 мс\n' +
        'макс. частота обновления кадров: 144 Гц\n' +
        'входы: HDMI, ,DisplayPort',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb7/h4c/34374199869470/benq-zowie-xl2411k-cernyj-101306445-1-Container.jpg',
    rating: 5.0,
    source: 'https://kaspi.kz/shop/p/benq-zowie-xl2411k-chernyi-101306445/?c=591010000#!/item',
    completed: false,
    likes: 0,
    category: 1,
  },
  {
    id: 4,
    name: 'Монитор Xiaomi Mi Curved Gaming XMMNTWQ34 черный',
    price: 233425,
    description: 'диагональ: 34 дюйм\n' +
        'разрешение: 3440x1440\n' +
        'тип ЖК-матрицы: TFT *VA\n' +
        'яркость: 300 кд/м2\n' +
        'время отклика: 4 мс\n' +
        'макс. частота обновления кадров: 144 Гц\n' +
        'входы: HDMI, ,DisplayPort',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/ha5/49787239858206/xiaomi-mi-curved-gaming-xmmntwq34-cernyj-100129635-1-Container.jpg',
    rating: 5.0,
    source: 'https://kaspi.kz/shop/p/xiaomi-mi-curved-gaming-xmmntwq34-chernyi-100129635/?c=591010000#!/item',
    completed: false,
    likes: 0,
    category: 1,
  },
  {
    id: 5,
    name: 'Монитор DELL S2721HS серебристый',
    price: 106784,
    description: 'диагональ: 27 дюйм\n' +
        'разрешение: 1920x1080\n' +
        'тип ЖК-матрицы: IPS\n' +
        'яркость: 300 кд/м2\n' +
        'время отклика: 4 мс\n' +
        'макс. частота обновления кадров: 75 Гц\n' +
        'входы: HDMI, ,DisplayPort',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb6/h06/33118178607134/dell-s2721hs-cernyj-100760723-1-Container.jpg',
    rating: 4.0,
    source: 'https://kaspi.kz/shop/p/dell-s2721hs-serebristyi-100760723/?c=591010000#!/item',
    completed: false,
    likes: 0,
    category: 1,
  },
  {
    id: 6,
    name: 'Клавиатура VARMILO MA108M V2 Peking Opera черный',
    price: 131490,
    description: 'тип: механическая\n' +
        'дизайн: игровая\n' +
        'назначение: для настольного компьютера\n' +
        'тип подключения: проводная\n' +
        'тип механических клавиш: Varmilo EC Daisy V2',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2d/h91/61945449512990/varmilo-ma108m-v2-peking-opera-cernyj-106171591-1.jpg',
    rating: 0.0,
    source: 'https://kaspi.kz/shop/p/varmilo-ma108m-v2-peking-opera-chernyi-106171591/?c=591010000#!/item',
    completed: false,
    likes: 0,
    category: 2,
  },
  {
    id: 7,
    name: 'Клавиатура Ajazz STK61 белый',
    price: 20400,
    description: 'тип: механическая\n' +
        'дизайн: эргономическая\n' +
        'назначение: для настольного компьютера\n' +
        'тип подключения: проводная\n' +
        'тип механических клавиш: GX Red',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haf/hb8/62121952903198/ajazz-stk61-belyj-106268306-1.jpg',
    rating: 5.0,
    source: 'https://kaspi.kz/shop/p/ajazz-stk61-belyi-106268306/?c=591010000#!/item',
    completed: false,
    likes: 0,
    category: 2,
  },
  {
    id: 8,
    name: 'ККлавиатура AKKO 3061 World Tour Tokyo R2, Jelly Pink, розовый',
    price: 39989,
    description: 'тип: механическая\n' +
        'дизайн: игровая\n' +
        'назначение: для настольного компьютера\n' +
        'тип подключения: проводная',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h72/hb9/49076355432478/klaviatura-akko-3061-world-tour-tokyo-r2-rus-103935227-1.jpg',
    rating: 5.0,
    source: 'https://kaspi.kz/shop/p/akko-3061-world-tour-tokyo-r2-jelly-pink-rozovyi-103935227/?c=591010000#!/item',
    completed: false,
    likes: 0,
    category: 2,
  },
  {
    id: 9,
    name: 'Клавиатура Ajazz K870t Red Switches черный',
    price: 28400,
    description: 'тип: механическая\n' +
        'дизайн: игровая\n' +
        'назначение: для настольного компьютера\n' +
        'тип подключения: проводная\n' +
        'тип механических клавиш: GX Red',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h39/h7b/51131118387230/ajazz-k870t-red-switches-cernyj-105072211-1.jpg',
    rating: 5.0,
    source: 'https://kaspi.kz/shop/p/ajazz-k870t-red-switches-chernyi-105072211/?c=591010000#!/item',
    completed: false,
    likes: 0,
    category: 2,
  },
  {
    id: 10,
    name: 'Клавиатура Logitech POP Keys 920-010718 розовый',
    price: 59990,
    description: 'тип: механическая\n' +
        'дизайн: классическая\n' +
        'назначение: для настольного компьютера\n' +
        'тип подключения: беспроводная',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h04/h65/49598074847262/klaviatura-besprovodnaa-logitech-pop-keys-heartbreaker-rose-m-n-yr0080-cu0021-104246717-1.jpg',
    rating: 5.0,
    source: 'https://kaspi.kz/shop/p/logitech-pop-keys-920-010718-rozovyi-104246717/?c=591010000#!/item',
    completed: false,
    likes: 0,
    category: 2,
  },
  {
    id: 11,
    name: 'КМышь HyperX Pulsefire Haste HMSH1-A-BK/G черный',
    price: 22990,
    description: 'тип подключения: проводная\n' +
        'тип сенсора: оптическая светодиодная\n' +
        'интерфейс: USB\n' +
        'дизайн: для правой руки\n' +
        'игровая: Да\n' +
        'разрешение оптического сенсора: 16000 dpi',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0f/h27/50518974660638/kingston-hyperx-pulsefire-haste-cernyj-101010109-1-Container.jpg',
    rating: 5.0,
    source: 'https://kaspi.kz/shop/p/hyperx-pulsefire-haste-hmsh1-a-bk-g-chernyi-101010109/?c=591010000#!/item',
    completed: false,
    likes: 0,
    category: 3,
  },
  {
    id: 12,
    name: 'Мышь Lenovo Yoga Presenter GY50U59626 серый',
    price: 24264,
    description: 'тип подключения: беспроводная\n' +
        'тип сенсора: оптическая светодиодная\n' +
        'интерфейс: USB, ,Bluetooth\n' +
        'дизайн: для правой и левой руки\n' +
        'игровая: Нет\n' +
        'разрешение оптического сенсора: 1600 dpi',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc2/he4/34339404808222/lenovo-yoga-presenter-gy50u59626-seryj-101342529-1.jpg',
    rating: 5.0,
    source: 'https://kaspi.kz/shop/p/lenovo-yoga-presenter-gy50u59626-seryi-101342529/?c=591010000#!/item',
    completed: false,
    likes: 0,
    category: 3,
  },
  {
    id: 13,
    name: 'Мышь SteelSeries Prime Neo Noir Edition серебристый',
    price: 29500,
    description: 'тип подключения: проводная\n' +
        'тип сенсора: оптическая светодиодная\n' +
        'интерфейс: USB\n' +
        'дизайн: для правой руки\n' +
        'игровая: Да\n' +
        'разрешение оптического сенсора: 18000 dpi',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha8/h64/47791134277662/steelseries-prime-neo-noir-edition-62535-serebristyj-103190151-1.jpg',
    rating: 5.0,
    source: 'https://kaspi.kz/shop/p/steelseries-prime-neo-noir-edition-serebristyi-103190151/?c=591010000#!/item',
    completed: false,
    likes: 0,
    category: 3,
  },
  {
    id: 14,
    name: 'Мышь HP 150 Wireless 2S9L1AA черный',
    price: 4980,
    description: 'тип подключения: беспроводная\n' +
        'тип сенсора: оптическая светодиодная\n' +
        'интерфейс: радиоканал\n' +
        'дизайн: для правой и левой руки\n' +
        'игровая: Нет\n' +
        'разрешение оптического сенсора: 1600 dpi',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0c/h74/61997197754398/hp-150-wireless-2s9l1aa-cernyj-106198691-1.jpg',
    rating: 0.0,
    source: 'https://kaspi.kz/shop/p/hp-150-wireless-2s9l1aa-chernyi-106198691/?c=591010000#!/item',
    completed: false,
    likes: 0,
    category: 3,
  },
  {
    id: 15,
    name: 'Мышь Defender Ultra Classic MB-280 черный',
    price: 1300,
    description: 'тип подключения: проводная\n' +
        'тип сенсора: оптическая светодиодная\n' +
        'интерфейс: USB\n' +
        'дизайн: для правой и левой руки\n' +
        'игровая: Нет\n' +
        'разрешение оптического сенсора: 1000 dpi',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfc/h41/31956439040030/defender-ultra-classic-mb-280-black-9101490-1.jpg',
    rating: 4.0,
    source: 'https://kaspi.kz/shop/p/defender-ultra-classic-mb-280-chernyi-9101490/?c=591010000#!/item',
    completed: false,
    likes: 0,
    category: 3,
  },
  {
    id: 16,
    name: 'Коврик для мыши ILAN RGB800',
    price: 6000,
    description: 'игровой: Да\n' +
        'материал покрытия: ткань\n' +
        'материал основания: резина\n' +
        'особенности: RGB-подсветка, ,прошитые края',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7a/hac/61795414016030/ilan-rgb800-300-4mm-106111650-1.jpg',
    rating: 5.0,
    source: 'https://kaspi.kz/shop/p/ilan-rgb800-106111650/?c=591010000#!/item',
    completed: false,
    likes: 0,
    category: 4,
  },
  {
    id: 17,
    name: 'Коврик для мыши NG 180810 Не давите на меня',
    price: 1180,
    description: 'игровой: Нет\n' +
        'материал покрытия: ткань\n' +
        'материал основания: резина',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he7/he8/48238426423326/ng-180810-ne-davite-na-mena-103429467-1.jpg',
    rating: 5.0,
    source: 'https://kaspi.kz/shop/p/ng-180810-ne-davite-na-menja-103429467/?c=591010000#!/item',
    completed: false,
    likes: 0,
    category: 4,
  },
  {
    id: 18,
    name: 'Коврик для мыши 2E Gaming Mouse Pad Control L 2E-PG310B черный',
    price: 3663,
    description: 'игровой: Да\n' +
        'материал покрытия: ткань\n' +
        'материал основания: резина',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h73/h26/33803560288286/2e-gaming-control-l-2e-pg310b-cernyj-101746865-1-Container.jpg',
    rating: 4.5,
    source: 'https://kaspi.kz/shop/p/2e-gaming-mouse-pad-control-l-2e-pg310b-chernyi-101746865/?c=591010000#!/item',
    completed: false,
    likes: 0,
    category: 4,
  },
  {
    id: 19,
    name: 'Коврик для мыши Genshin Impact',
    price: 8000,
    description: 'игровой: Да\n' +
        'материал покрытия: резина\n' +
        'материал основания: резина\n' +
        'особенности: RGB-подсветка',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h36/h65/69002626531358/genshin-impakt-komp-yuternyi-kovrik-108656127-1.jpg',
    rating: 0.0,
    source: 'https://kaspi.kz/shop/p/genshin-impact-108656127/?c=591010000#!/item',
    completed: false,
    likes: 0,
    category: 4,
  },
  {
    id: 20,
    name: 'Коврик для мыши DEXP OM-XS Polar bear',
    price: 1099,
    description: 'игровой: Нет\n' +
        'материал покрытия: ткань\n' +
        'материал основания: резина',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5b/hcc/61698164195358/dexp-om-xs-polar-bear-106061520-1.jpg',
    rating: 5.0,
    source: 'https://kaspi.kz/shop/p/dexp-om-xs-polar-bear-106061520/?c=591010000#!/item',
    completed: false,
    likes: 0,
    category: 4,
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/