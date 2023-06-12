const products =[
    {
        id: '1',
        name: "iPhone 14",
        price: 1299.99,
        category:'telefonos',
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-compare-iphone-14-202209?wid=364&hei=508&fmt=jpeg&qlt=90&.v=1660759995969",
        stock: 50,
        description: "Sumérgete en la última frontera de la tecnología con el iPhone 14. Este revolucionario smartphone de Apple te llevará a nuevas alturas en términos de rendimiento, diseño y funcionalidad."
        },{
        id: '2',
        name: "Samsung Galaxy S21",
        price: 1099.99,
        img: "https://images.samsung.com/is/image/samsung/assets/co/2201/mktpd/galaxy-s21-5g_fe_display.jpg?$ORIGIN_JPG$",
        stock: 30,
        category:'telefonos',
        description: "Descubre la excelencia tecnológica con el Samsung Galaxy S21. Este smartphone de vanguardia combina un diseño elegante con un rendimiento de alto nivel."
        },
        {
        id: '3',
        name: "Xiaomi Mi 11",
        price: 899.99,
        img: "https://th.bing.com/th/id/R.f4e3289b40e2fe73adc632bfd514a754?rik=emloHwz0QxD2Bw&pid=ImgRaw&r=0",
        stock: 20,
        category:'telefonos',
        description: "El Xiaomi Mi 11 te brinda un mundo de posibilidades en tus manos. Este smartphone de alta gama combina un diseño elegante con un rendimiento sobresaliente."
      },{
        id: '4',
        name: "iPad Pro",
        price: 999.99,
        img: "https://tiendasishop.com/media/catalog/product/i/p/ipad_pro_wi-fi_12-9_in_6th_generation_space_gray_pdp_image_position-1b_coes_2.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
        stock: 30,
        category:"tabletas",
        description: "Experimenta un rendimiento sin precedentes con el iPad Pro. Esta potente tablet de Apple combina una pantalla impresionante, un procesador de alta velocidad y una versatilidad incomparable."
      },
      {
        id: '5',
        name: "Samsung Galaxy Tab S7",
        price: 799.99,
        img: "https://image-us.samsung.com/SamsungUS/home/mobile/tablets/galaxy-tab-s7-fe/GalaxyTabS7plusLite_Combo_001_MysticSilver_1600x1200.png",
        stock: 20,
        category:"tabletas",
        description: "Descubre una experiencia de tablet excepcional con la Samsung Galaxy Tab S7. Con su pantalla vibrante, rendimiento sobresaliente y S Pen incluido, podrás hacer más y expresarte creativamente."
      },{
        id: '6',
        name: "Microsoft Surface Pro 7",
        price: 899.99,
        img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4OUUT?ver=74e1&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
        stock: 15,
        category:"tabletas",
        description: "La Microsoft Surface Pro 7 redefine lo que una tablet puede ofrecer. Con su versatilidad 2 en 1, rendimiento de primera clase y Windows 10, te brinda la potencia de una laptop en un diseño portátil."
      },{
        id: '7',
        name: "MacBook Pro",
        price: 1999.99,
        img: "https://cdn.shopify.com/s/files/1/0604/8373/1606/products/IMG-5578993.jpg?v=1661609505",
        stock: 25,
        category:"portatiles",
        description: "Descubre el poder y la elegancia del MacBook Pro. Este portátil de Apple ofrece un rendimiento excepcional, una pantalla brillante y una batería de larga duración, todo en un diseño delgado y sofisticado."
      },
      {
        id: '8',
        name: "Dell XPS 15",
        price: 1799.99,
        img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9530/media-gallery/touch-black/notebook-xps-15-9530-t-black-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3778&hei=2323&qlt=100,1&resMode=sharp2&size=3778,2323&chrss=full&imwidth=5000",
        stock: 30,
        category:"portatiles",
        description: "El Dell XPS 15 te brinda una experiencia de portátil premium. Con una pantalla de alta resolución, un rendimiento potente y un diseño elegante, este portátil es ideal tanto para el trabajo como para el entretenimiento."
      },{
        id: '9',
        name: "Lenovo ThinkPad X1 Carbon",
        price: 1599.99,
        img: "https://www.lenovo.com/medias/laptop-thinkpad-x1-carbon-gen-9-14-hero.png?context=bWFzdGVyfC9lbWVhL2ltYWdlcy98MjIxMzU2fGltYWdlL3BuZ3wvZW1lYS9pbWFnZXMvaDczL2g2NC8xNzIyMDM5Nzc5MzMxMC5wbmd8Y2EzYzI1ZGY4Y2ZkMGY2MDcxN2NhYmU0YzY1YjUzZDVkZWI0NGQ1MzRlY2I5NDg4ZDk1ZmMxNzdkOTBiMDhkYw",
        stock: 20,
        category:"portatiles",
        description: "El Lenovo ThinkPad X1 Carbon es la combinación perfecta de potencia y portabilidad. Con su diseño duradero, un teclado cómodo y un rendimiento de alto nivel, este portátil es ideal para profesionales en movimiento."
      },{
        id: '10',
        name: "Razer Huntsman Elite",
        price: 199.99,
        img: "https://m.media-amazon.com/images/I/81Vtb-0K3-L.jpg",
        stock: 15,
        category:"perifericos",
        description: "Experimenta una velocidad y respuesta incomparables con el teclado Razer Huntsman Elite. Equipado con interruptores ópticos, retroiluminación personalizable y un reposamuñecas ergonómico, este teclado lleva tu experiencia de juego al siguiente nivel."
        },
        {
            id: '11',
            name: "Logitech G502 HERO",
            price: 79.99,
            img: "https://cometware.com/media/catalog/product/cache/502520b5e2df2494c1bb943e56026238/d/i/diagona_g502.jpg",
            stock: 20,
            category:"perifericos",
            description: "El ratón Logitech G502 HERO ofrece una precisión y rendimiento excepcionales. Con un sensor de alta precisión, pesos ajustables y botones programables, este ratón se adapta a tus necesidades de juego y te brinda una ventaja competitiva."
        },{
            id: '12',
            name: "Corsair Void RGB Wireless",
            price: 149.99,
            img: "https://m.media-amazon.com/images/I/61ZjYA2fX4L.jpg",
            stock: 25,
            category:"perifericos",
            description: "Sumérgete en el mundo del sonido envolvente con los auriculares Corsair Void RGB Wireless. Con una conexión inalámbrica confiable, iluminación personalizable y comodidad duradera, estos auriculares te permiten sumergirte por completo en tus juegos favoritos."
        }
]

export const getProducts = () => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products)
      }, 500)
  })
}

export const getProductById = (id) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products.find(prod => prod.id === id))
      }, 500)
  })
}

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products.filter(prod => prod.category === categoryId))
      }, 500)
  })
}
