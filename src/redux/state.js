const state = {
    menu: {
        menuFields: [
            {
                id: 0,
                since: 50,
                selectId: 'ham',
                ingredient: 'Ветчина',
                priceToOne: 15,
                selectName: 'ham'
            },
            {
                id: 1,
                since: 50,
                selectId: 'pineapple',
                ingredient: 'Ананас',
                priceToOne: 12,
                selectName: 'pineapple'
            },
            {
                id: 2,
                since: 100,
                selectId: 'cheese',
                ingredient: 'Сыр',
                priceToOne: 18,
                selectName: 'cheese'
            }
        ],
    },
    headerMenu: {
        menuItems: [
            {
                id: 0,
                path: '',
                menuItemName: 'Home',
                activeClassName: 'active'
            },
            {
                id: 1,
                path: 'menu',
                menuItemName: 'Menu',
                activeClassName: 'active'
            },
            {
                id: 2,
                path: 'delivery',
                menuItemName: 'Delivery',
                activeClassName: 'active'
            },
            {
                id: 3,
                path: 'about',
                menuItemName: 'About',
                activeClassName: 'active'
            },
            {
                id: 4,
                path: 'calculator',
                menuItemName: 'Calculator',
                activeClassName: 'active'
            },
            {
                id: 5,
                path: 'contacts',
                menuItemName: 'Contacts',
                activeClassName: 'active'
            }
        ],
    },
    products: {
        productFields: [
            {
                id: 1,
                path: '1',
                imgSrc: 'https://s1.eda.ru/StaticContent/Photos/120131085053/171027192707/p_O.jpg',
                productName: 'Пицца Пеперони',
                productPrice: 250
            },
            {
                id: 2,
                path: '2',
                imgSrc: 'https://static.1000.menu/img/content-v2/63/46/809/pitstsa-domashnyaya_1591686572_16_max.jpg',
                productName: 'Пицца Домашняя',
                productPrice: 275
            },
            {
                id: 3,
                path: '3',
                imgSrc: 'https://roll-club.kh.ua/wp-content/uploads/2014/08/mjasnoj-bum.jpg',
                productName: 'Пицца Мясной Бум',
                productPrice: 325
            },
            {
                id: 4,
                path: '4',
                imgSrc: 'https://roll-club.kh.ua/wp-content/uploads/2014/08/mjasnoj-bum.jpg',
                productName: 'Пицца Мясной Бум',
                productPrice: 325
            },
            {
                id: 5,
                path: '5',
                imgSrc: 'https://roll-club.kh.ua/wp-content/uploads/2014/08/dary-morja.jpg',
                productName: 'Пицца Дары Моря',
                productPrice: 350
            },
            {
                id: 6,
                path: '6',
                imgSrc: 'https://roll-club.kh.ua/wp-content/uploads/2014/08/ukrainskaja.jpg',
                productName: 'Пицца Украинская',
                productPrice: 135
            },
            {
                id: 7,
                path: '7',
                imgSrc: 'https://roll-club.kh.ua/wp-content/uploads/2021/04/4-mjasa-1.jpg',
                productName: 'Пицца 4 мяса',
                productPrice: 215
            },
            {
                id: 8,
                path: '8',
                imgSrc: 'https://academy.oetker.ru/upload/iblock/195/19519a82c8131d46d8e7a4718fb7e2d2.png',
                productName: 'Греческая Пицца',
                productPrice: 100
            },
            {
                id: 9,
                path: '9',
                imgSrc: 'https://pizza-mix.zp.ua/wp-content/uploads/2020/08/14.jpg',
                productName: 'Пицца Баварская',
                productPrice: 70
            },
            {
                id: 10,
                path: '10',
                imgSrc: 'https://s1.eda.ru/StaticContent/Photos/120131085053/171027192707/p_O.jpg',
                productName: 'Пицца Пеперони',
                productPrice: 250
            },
            {
                id: 11,
                path: '11',
                imgSrc: 'https://s1.eda.ru/StaticContent/Photos/120131085053/171027192707/p_O.jpg',
                productName: 'Пицца Пеперони',
                productPrice: 250
            },
            {
                id: 12,
                path: '12',
                imgSrc: 'https://s1.eda.ru/StaticContent/Photos/120131085053/171027192707/p_O.jpg',
                productName: 'Пицца Пеперони',
                productPrice: 250
            }
        ]
    },

};

export default state;