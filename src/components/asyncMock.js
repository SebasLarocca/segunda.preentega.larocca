 const products = [
      {
        titulo: "Sillon individual",
        url: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580746573-250L-C_~_(VO)_VOBLK_FZ.jpg?crop=1xw:1xh;center,top&resize=980:*",
        descripcion: "Cómodo, ergonómico y resistente. Su diseño moderno y elegante se adapta a cualquier espacio. ¡Disfruta de la comodidad que mereces!",
        categoria: "Sillas y sillones", 
        id:'1',
        precio: 700,
        stock: 5
      },
      {
        titulo: "Sofa",
        url: "https://cdn.shopify.com/s/files/1/0548/7670/0860/products/product-image-1632338517.jpg?v=1617487700",
        descripcion: "Confortable, espacioso y con un diseño moderno y elegante que se adapta a cualquier espacio. Ideal para descansar, ver televisión o compartir con amigos y familiares. ¡transforma tu living o ambiente en un espacio de confort!",
        categoria: "Sillas y sillones",
        id:'2',
        precio: 1500,
        stock: 7
      },
      {
        titulo: "Mesa",
        url: "https://foter.com/photos/424/industrial-farmhouse-dining-table.jpeg",
        descripcion: "La mesa perfecta para tu hogar o lugar de trabajo. Hecha de madera resistente con una superficie plana y lisa, proporciona un amplio espacio para tus necesidades. Funcional, versátil y elegante. ¡Hazte con ella ahora!",
        categoria: "Mesas",
        id:'3',
        precio: 2700,
        stock: 3
      },
      {
        titulo: "Cofee table",
        url: "https://cdn.shopify.com/s/files/1/2001/3223/files/Mid-century_coffee_table_1024x1024.jpg?v=1643797505",
        descripcion: "Funcional y elegante, su diseño moderno se adapta a cualquier estilo decorativo. Perfecta para compartir en familia o con amigos, disfruta de un café o té en su superficie lisa y resistente.",
        categoria: "Mesas",
        id:'4',
        precio: 900,
        stock: 9
      },
      {
        titulo: "Guardarropas a medida",
        url: "https://i.pinimg.com/originals/94/2d/33/942d33178218224933c7f91b007cd2ed.jpg",
        descripcion: "Amplio, resistente y con un diseño moderno. Su interior te permite organizar tus prendas de manera cómoda y accesible.",
        categoria: "Otros",
        id:'5',
        precio: 3100,
        stock: 6
      },
      {
        titulo: "Estantería industrial",
        url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81OKuxNqcmL.jpg",
        descripcion: "Su diseño moderno se adapta a cualquier estilo decorativo. Perfecta para organizar libros, objetos decorativos o herramientas",
        categoria: "Otros",
        id:'6',
        precio: 2300,
        stock: 10
      },
      {
        titulo: "Mesa circular",
        url: "https://st.hzcdn.com/simgs/5e110115029433ba_4-5267/home-design.jpg",
        descripcion: "¿Cansado de cuadrados aburridos? ¡Prueba nuestra mesa redonda! Perfecta para compartir, sus bordes suaves evitan lesiones en discusiones acaloradas. Además, su diseño circular te permitirá dar vueltas sin perder de vista tu bebida.",
        categoria: "Mesas",
        id:'7',
        precio: 700,
        stock: 2
      },
      {
        titulo: "Mesa de luz",
        url: "https://images.fravega.com/f500/bdee5bf0338dc0dc3a077437c977e948.jpg",
        descripcion: "Mejora tu espacio con nuestra mesa de luz de madera. Funcionalidad y estilo en un solo mueble. ¡Consigue la tuya ahora!",
        categoria: "Mesas",
        id:'8',
        precio: 600,
        stock: 9
      }
    ]
  
export const getProducts = ()=>{
  return new Promise ((resolve)=>{
    setTimeout(()=>{
      resolve(products)
    }, 500)
  })
}

export const getProductById = (productId)=>{
  return new Promise ((resolve)=>{
    setTimeout(()=>{
      resolve(products.find( prod => prod.id  == productId) )
    }, 500)
  })
}

export const getProductByCategory = (categoria)=>{
  return new Promise ((resolve)=>{
    setTimeout(()=>{
      resolve(products.filter( prod => categoria === prod.categoria ) )
    }, 500)
  })
}
