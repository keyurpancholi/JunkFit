import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";
import { DocumentSnapshot } from "firebase/firestore";



const FoodContent=[
    {
        name:"Veg Treat",
        loc:"Borivali(W)",
        img:["https://media.istockphoto.com/photos/interior-of-a-modern-cozy-french-restaurant-picture-id1314951233",
        "https://b.zmtcdn.com/data/reviews_photos/d51/721fee542ddb966af28b5a30a91a4d51_1474194586.jpg",
        "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/4/b/k/p42775-15517634735c7e0811b470b.jpg?tr=tr:n-xlarge",
        "https://b.zmtcdn.com/data/pictures/8/19616508/34f3710a5e6f8142eb92a3e6792872f4.jpeg?fit=around|750:500&crop=750:500;*,*"],
        foodImg:"https://www.vegrecipesofindia.com/wp-content/uploads/2017/04/schezwan-dosa-recipe-1.jpg",
        foodItem: "Schezwan Dosa" ,
        orderId:1,
        cat:"Dosa",
        price:80,
        quantity:1,
        
        Ingredients:[
        {   name:"Rice -Mixture",
            quantity:"3/4 cup",
            cal:65
        },
        {      name:"UradDal",
            quantity:"1/2 cup",
            cal:45
        },
        {   name:"Oil",
            quantity:"1 tsp",
            cal:23
        }
        ],
        rat: "4 Stars",
        
       
    },
    {
        name:"MunchBox",
        img:["https://media.istockphoto.com/photos/cozy-restaurant-interior-with-sofas-and-tables-for-quick-lunch-picture-id1225747853",
         "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/v/g/p58507-16083744925fddd8dccceb4.jpg?tr=tr:n-xlarge",
        "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/v/c/p58507-164019521161c3648b66441.jpg?tr=tr:n-xlarge",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB759daN9KZATcme_HzLDAgpooqhu2afh61-aBOpTJs4Hb66mFplM55x3PGe_tVujNBq0&usqp=CAU"],
        loc:"Malad west",
        cat:"Dosa",
        orderId:2,
        price:150,
        quantity:1,
        foodImg:"https://media.newstrack.in/uploads/health-lifestyle/khana-khazana/Aug/02/big_thumb/dosa_5d44242f5f2f4.JPG",
        foodItem:"Spring Dosa",
        Ingredients:[{
            name:"Rice",
            quantity:"1/2 cup",
            cal:50
        },
          {name:"Soya Sauce and Veggies",
            quantity:"1 bowl",
            cal:70
        },
        { name:"oil",
            quantity:"1 tsp",
            cal:20
        }],
        rat:"4 stars"
       
    },
    {
        name:"Amar Juice Centre ",
        img:["https://content.jdmagicbox.com/comp/mumbai/y7/022pxx22.xx22.130815091737.a8y7/catalogue/amar-fast-food-and-restaurant-pvt-ltd-vashi-navi-mumbai-home-delivery-restaurants-4iwx61q.png",
           "https://content3.jdmagicbox.com/comp/mumbai/v3/022pxx22.xx22.180104201602.l4v3/catalogue/amar-juice-centre-marol-mumbai-juice-centres-6xf4k.jpg",
        "https://b.zmtcdn.com/data/pictures/6/45596/ae35c9cd1bda65015a9ebf037b81d977.jpg?fit=around|750:500&crop=750:500;*,*",
         "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/7/g/b/p79438-1645450520621395189b540.jpg?tr=tr:n-xlarge" ],
        loc:"Borivali West",
        cat:"Dosa",
        orderId:3,
        foodImg:"https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-500x500.jpg",
        quantity:1,
        price:110,
        foodItem:"Masala Dosa",
        Ingredients:[{
            name:"Rice Mixture",
            quantity:"1/2 cup",
            cal:50
        },
          {name:"Masala Bhaji",
            quantity:"1 bowl",
            cal:95
        },
        { name:"oil",
            quantity:"1 tsp",
            cal:20
        }],
        rat:"4 stars"
       
        
    },
    {
        name:"Jumbo King",
        img:["https://content3.jdmagicbox.com/comp/thane/h6/022pxx22.xx22.181219110632.q9h6/catalogue/jumboking-thane-1ahp6cupj3.jpg,",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR03PGgYrEXJdlaKI7aG-5qzIB6XqCdApX18g&usqp=CAU",
         ""],
        loc:"Andheri West",
        cat:"Burger",
        orderId:4,
        foodImg:"https://www.mumbailive.com/images/media/images/images_1561099988288_Crispy_Veg_Jumboking__INR_45_on_a_Tuesday_.png",
        quantity:1,
        price:110,
        foodItem:"Veg Crispy Burger",
        Ingredients:[{
            name:"Pattie Stuffings",
            quantity:"1 piece",
            cal:200
        },
          {name:"Bun",
            quantity:"1 piece",
            cal:110
        },
        { name:"Cheese and sauces",
            quantity:"1 slice",
            cal:90
        }],
        rat:"4 stars"
       
        
    },
    
]
export default FoodContent;