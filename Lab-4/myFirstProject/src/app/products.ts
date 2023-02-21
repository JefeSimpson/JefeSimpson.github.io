export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;

  image: string;

  rating: number;

  source: string;
}

export const products = [
  {
    id: 1,
    name: 'Мышь HyperX PulseFire Haste Wireless белый',
    price: 36800,
    description: 'тип подключения: беспроводная\n' +
        'тип сенсора: оптическая лазерная\n' +
        'интерфейс: радиоканал\n' +
        'дизайн: для правой руки\n' +
        'разрешение оптического сенсора: 16000 dpi',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha4/h0e/51353674940446/hyperx-pulsefire-haste-wireless-belyj-105199025-1.jpg',
    rating: 5.0,
    source: 'https://kaspi.kz/shop/p/hyperx-pulsefire-haste-wireless-belyi-105199025/?c=750000000#!/item',
  },
  {
    id: 2,
    name: 'Клавиатура Dareu EK815 синий',
    price: 18999,
    description: 'тип: механическая\n' +
        'дизайн: игровая\n' +
        'назначение: для ноутбука\n' +
        'тип подключения: проводная',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h22/h42/51921852629022/dareu-ek815-sinij-105517404-1.jpg',
    rating: 5.0,
    source: 'https://kaspi.kz/shop/p/dareu-ek815-sinii-105517404/?c=750000000#!/item',
  },
  {
    id: 3,
    name: 'Коврик для мыши Chenri Shrek 0095 рисунок',
    price: 400,
    description: 'игровой: Нет\n' +
        'материал покрытия: пластик\n' +
        'материал основания: резина',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h06/48391995752478/chenri-shrek-0095-risunok-103502257-1.jpg',
    rating: 4.5,
    source: 'https://kaspi.kz/shop/p/chenri-shrek-0095-risunok-103502257/?c=750000000#!/item',
  },
  {
    id: 4,
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
  },
  {
    id: 5,
    name: 'Видеокарта Palit GeForce RTX 4090 GameRock 24 ГБ',
    price: 1095375,
    description: 'серия: GeForce RTX 40 Series\n' +
        'частота графического процессора: 2520 МГц\n' +
        'объем видеопамяти: 24 ГБ\n' +
        'тип видеопамяти: GDDR6X\n' +
        'длина видеокарты: 329.4 мм\n' +
        'рекомендуемая мощность блока питания: 1000 Вт',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd5/haa/63190680829982/palit-rtx-4090-24-gb-106853192-1.jpg',
    rating: 5.0,
    source: 'https://kaspi.kz/shop/p/palit-geforce-rtx-4090-gamerock-24-gb-106853192/?c=750000000#!/item',
  },
  {
    id: 6,
    name: 'Оперативная память G.SKILL F5-5200J3636C16GX2-FX5 32 Гб',
    price: 82575,
    description: 'тип памяти: DDR5\n' +
        'форм-фактор: DIMM\n' +
        'количество модулей в комплекте: 2\n' +
        'тактовая частота: 5200 МГц',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h21/h3d/65799315947550/g-skill-f5-5200j3636c16gx2-fx5-32-gb-107595616-1.jpg',
    rating: 5.0,
    source: 'https://kaspi.kz/shop/p/g-skill-f5-5200j3636c16gx2-fx5-32-gb-107595616/?c=750000000#!/item',
  },
  {
    id: 7,
    name: 'Процессор Intel Core i5 13600KF OEM',
    price: 176560,
    description: 'тип процессора: Core i5\n' +
        'сокет: LGA1700\n' +
        'базовая частота процессора: 3500 МГц\n' +
        'максимальная частота процессора: 5100 МГц\n' +
        'тип поставки: OEM\n' +
        'количество ядер: 14',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h25/h26/65579842961438/intel-core-i5-13600kf-box-107526884-1.jpg',
    rating: 5.0,
    source: 'https://kaspi.kz/shop/p/intel-core-i5-13600kf-oem-107526884/?c=750000000#!/item',
  },
  {
    id: 8,
    name: 'Корпус Thermaltake Core P6 TG Snow белый',
    price: 119990,
    description: 'форм-фактор: ATX, ,mATX, ,Mini-ITX\n' +
        'типоразмер: Midi-Tower\n' +
        'расположение блока питания: внизу\n' +
        'цвет корпуса: белый',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha8/h2a/68082442338334/komp-yuternyi-korpus-thermaltake-core-p6-tg-snow-bez-b-p-108526517-1.jpg',
    rating: 5.0,
    source: 'https://kaspi.kz/shop/p/thermaltake-core-p6-tg-snow-belyi-108526517/?c=750000000#!/item',
  },
  {
    id: 9,
    name: 'SSD Micron MTFDDAK7T6TDS-1AW1ZABYYR 7680 ГБ',
    price: 589096,
    description: 'тип: SSD\n' +
        'форм-фактор: 2.5\n' +
        'емкость: 7680 ГБ\n' +
        'интерфейсы: SATA\n' +
        'скорость чтения: 540 МБ/с\n' +
        'скорость записи: 520 МБ/с',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd7/h8e/65079955947550/ssd-micron-mtfddak7t6tds-1aw1zabyyr-7680-gb-107344494-1.jpg',
    rating: 5.0,
    source: 'https://kaspi.kz/shop/p/ssd-micron-mtfddak7t6tds-1aw1zabyyr-7680-gb-107344494/?c=750000000#!/item',
  },
  {
    id: 10,
    name: 'Блок питания Chieftec GPE-700S 700 Вт',
    price: 35180,
    description: 'форм-фактор: ATX\n' +
        'мощность: 700 Вт\n' +
        'сертификат 80 PLUS: Bronze\n' +
        'тип разъема для материнской платы: 24 pin\n' +
        'отстегивающиеся кабели: Нет\n' +
        'кабель питания в комплекте: Нет',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h12/he6/31486377951262/chieftec-gpe-700s-700w-100552681-1-Container.jpg',
    rating: 4.5,
    source: 'https://kaspi.kz/shop/p/chieftec-gpe-700s-700-vt-100552681/?c=750000000#!/item',
  },

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/