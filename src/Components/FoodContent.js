import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";
import { DocumentSnapshot } from "firebase/firestore";



const FoodContent = [
    {
        name: "Veg Treat",
        loc: "Borivali",
        img: ["https://media.istockphoto.com/photos/interior-of-a-modern-cozy-french-restaurant-picture-id1314951233",
            "https://b.zmtcdn.com/data/reviews_photos/d51/721fee542ddb966af28b5a30a91a4d51_1474194586.jpg",
            "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/4/b/k/p42775-15517634735c7e0811b470b.jpg?tr=tr:n-xlarge",
            "https://b.zmtcdn.com/data/pictures/8/19616508/34f3710a5e6f8142eb92a3e6792872f4.jpeg?fit=around|750:500&crop=750:500;*,*"],
        foodImg: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/04/schezwan-dosa-recipe-1.jpg",
        foodItem: "Schezwan Dosa",
        orderId: 1,
        cat: "Dosa",
        price: 80,
        quantity: 1,

        Ingredients: [
            {
                name: "Rice -Mixture",
                quantity: "3/4 cup",
                cal: 65
            },
            {
                name: "UradDal",
                quantity: "1/2 cup",
                cal: 45
            },
            {
                name: "Oil",
                quantity: "1 tsp",
                cal: 23
            }
        ],
        rat: "4 Stars",
        LID: 1

    },
    {
        name: "MunchBox",
        img: ["https://media.istockphoto.com/photos/cozy-restaurant-interior-with-sofas-and-tables-for-quick-lunch-picture-id1225747853",
            "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/v/g/p58507-16083744925fddd8dccceb4.jpg?tr=tr:n-xlarge",
            "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/v/c/p58507-164019521161c3648b66441.jpg?tr=tr:n-xlarge",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB759daN9KZATcme_HzLDAgpooqhu2afh61-aBOpTJs4Hb66mFplM55x3PGe_tVujNBq0&usqp=CAU"],
        loc: "Malad",
        cat: "Dosa",
        orderId: 2,
        price: 150,
        quantity: 1,
        foodImg: "https://media.newstrack.in/uploads/health-lifestyle/khana-khazana/Aug/02/big_thumb/dosa_5d44242f5f2f4.JPG",
        foodItem: "Spring Dosa",
        Ingredients: [{
            name: "Rice",
            quantity: "1/2 cup",
            cal: 50
        },
        {
            name: "Soya Sauce and Veggies",
            quantity: "1 bowl",
            cal: 70
        },
        {
            name: "oil",
            quantity: "1 tsp",
            cal: 20
        }],
        rat: "4 stars",
        LID: 3

    },
    {
        name: "Amar Juice Centre ",
        img: ["https://content.jdmagicbox.com/comp/mumbai/y7/022pxx22.xx22.130815091737.a8y7/catalogue/amar-fast-food-and-restaurant-pvt-ltd-vashi-navi-mumbai-home-delivery-restaurants-4iwx61q.png",
            "https://content3.jdmagicbox.com/comp/mumbai/v3/022pxx22.xx22.180104201602.l4v3/catalogue/amar-juice-centre-marol-mumbai-juice-centres-6xf4k.jpg",
            "https://b.zmtcdn.com/data/pictures/6/45596/ae35c9cd1bda65015a9ebf037b81d977.jpg?fit=around|750:500&crop=750:500;*,*",
            "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/7/g/b/p79438-1645450520621395189b540.jpg?tr=tr:n-xlarge"],
        loc: "Andheri",
        cat: "Dosa",
        orderId: 3,
        foodImg: "https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-500x500.jpg",
        quantity: 1,
        price: 110,
        foodItem: "Masala Dosa",
        Ingredients: [{
            name: "Rice Mixture",
            quantity: "1/2 cup",
            cal: 50
        },
        {
            name: "Masala Bhaji",
            quantity: "1 bowl",
            cal: 95
        },
        {
            name: "oil",
            quantity: "1 tsp",
            cal: 20
        }],
        rat: "4 stars",
        LID: 7


    },
    {
        name: "Jumbo King",
        img: ["https://content3.jdmagicbox.com/comp/thane/h6/022pxx22.xx22.181219110632.q9h6/catalogue/jumboking-thane-1ahp6cupj3.jpg,",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR03PGgYrEXJdlaKI7aG-5qzIB6XqCdApX18g&usqp=CAU",
            ""],
        loc: "Andheri",
        cat: "Burger",
        orderId: 4,
        foodImg: "https://www.mumbailive.com/images/media/images/images_1561099988288_Crispy_Veg_Jumboking__INR_45_on_a_Tuesday_.png",
        quantity: 1,
        price: 110,
        foodItem: "Veg Crispy Burger",
        Ingredients: [{
            name: "Pattie Stuffings",
            quantity: "1 piece",
            cal: 200
        },
        {
            name: "Bun",
            quantity: "1 piece",
            cal: 110
        },
        {
            name: "Cheese and sauces",
            quantity: "1 slice",
            cal: 90
        }],
        rat: "4 stars",
        LID: 7


    },
    {
        name: "Mc Donalds",
        img: ["https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/04/mcdonalds-pti-1617962583.jpg,",
            "https://curlytales.com/wp-content/uploads/2021/04/McDonalds.jpg",
            ""],
        loc: "Kandivali",
        cat: "Burger",
        orderId: 5,
        foodImg: "https://www.franchisebusiness.com.au/app/uploads/2020/01/McVeggie-1920x1264.jpg",
        quantity: 1,
        price: 200,
        foodItem: "Mc veggie with cheese",
        Ingredients: [{
            name: "Pattie Stuffings",
            quantity: "1 piece",
            cal: 200
        },
        {
            name: "Bun",
            quantity: "1 piece",
            cal: 110
        },
        {
            name: "Cheese and sauces",
            quantity: "1 slice",
            cal: 90
        }],
        rat: "5 stars",
        LID: 2
    },
    {
        name: "Burger King",
        img: ["https://nrai.org/wp-content/uploads/2016/09/1-6-660x400.jpg,",
            "https://curlytales.com/wp-content/uploads/2021/04/McDonalds.jpg",
            ""],
        loc: "Borivali",
        cat: "Burger",
        orderId: 6,
        foodImg: "http://cdn.firstwefeast.com/assets/2015/06/bk-india-paneer-melt.png",
        quantity: 1,
        price: 150,
        foodItem: "Paneer king melt",
        Ingredients: [{
            name: "Pattie Stuffings",
            quantity: "1 piece",
            cal: 200
        },
        {
            name: "Bun",
            quantity: "1 piece",
            cal: 110
        },
        {
            name: "Cheese and sauces",
            quantity: "1 slice",
            cal: 90
        }],
        rat: "5 stars",
        LID: 1
    },
    {
        name: "Dominos Pizza",
        img: ["https://img4.nbstatic.in/tr:w-500/5b617055590801000bced38c.jpghttps://img4.nbstatic.in/tr:w-500/5b617055590801000bced38c.jpg,",
            "https://media.istockphoto.com/photos/dominos-pizza-store-picture-id1132863328?k=20&m=1132863328&s=612x612&w=0&h=txQB1PwNjmcQblKiYqDVLMBQ7ibI7hML_jfGH4ScS4w=",
            ""],
        loc: "Andheri",
        cat: "Pizza",
        orderId: 7,
        foodImg: "https://www.dominos.co.in//files/items/Margherit.jpg",
        quantity: 1,
        price: 400,
        foodItem: "Margherita Pizza",
        Ingredients: [{
            name: "Pizza dough",
            quantity: "1 piece",
            cal: 350
        },
        {
            name: "Toppings",
            quantity: "1 piece",
            cal: 300
        },
        {
            name: "Cheese and sauces",
            quantity: "1 slice",
            cal: 1000
        }],
        rat: "4 stars",
        LID: 7
    },
    {
        name: "Lapino's",
        img: ["https://content.jdmagicbox.com/comp/mumbai/s6/022pxx22.xx22.180926210524.f6s6/catalogue/la-pino-z-pizza-borivali-west-mumbai-restaurants-1eds5tfec2.jpg,",
            "https://content.jdmagicbox.com/comp/mumbai/d2/022pxx22.xx22.211009095840.q8d2/catalogue/la-pinoz-kalyan-pizza-outlets-49966h5huc.jpg",
            ""],
        loc: "Borivali",
        cat: "Pizza",
        orderId: 8,
        foodImg: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/uu1dc6mbmbmkwtb1zhq5",
        quantity: 1,
        price: 205,
        foodItem: "Garden Delight",
        Ingredients: [{
            name: "Pizza dough",
            quantity: "1 piece",
            cal: 400
        },
        {
            name: "Toppings",
            quantity: "1 piece",
            cal: 200
        },
        {
            name: "Cheese and sauces",
            quantity: "1 slice",
            cal: 1000
        }],
        rat: "4 stars",
        LID: 1
    },
    {
        name: "Joey's Pizza",
        img: ["https://image3.mouthshut.com/images/imagesp/925636374s.png,",
            "https://pr1.nicelocal.in/x4qT037mpPV63hD0VAZB8g/1120x700,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2RQYYHSDJKa7NKx19fRO7SSMTrwE9teZWUzT4EyLoAgoh7HEgkpCQAzCIMrP7qMa-A",
            ""],
        loc: "Andheri",
        cat: "Pizza",
        orderId: 9,
        foodImg: "https://media-cdn.tripadvisor.com/media/photo-s/13/14/a4/db/half-half-pizza-mexican.jpg",
        quantity: 1,
        price: 215,
        foodItem: "Chef's Favorite",
        Ingredients: [{
            name: "Pizza dough",
            quantity: "1 piece",
            cal: 500
        },
        {
            name: "Toppings",
            quantity: "1 piece",
            cal: 300
        },
        {
            name: "Cheese and sauces",
            quantity: "1 slice",
            cal: 1000
        }],
        rat: "4 stars",
        LID: 7
    },
    {
        name: "Sbarro's",
        img: ["https://media.graphcms.com/resize=w:1280,h:1280,fit:crop,align:faces/compress=metadata:true/output=strip:true,f:jpg/quality=value:55/tVy9sWEoTe6LyXc8LHMx,",
            "https://media-cdn.tripadvisor.com/media/photo-s/10/0f/74/51/sbarro-outlet-from-outside.jpg",
            ""],
        loc: "Goregaon",
        cat: "Pizza",
        orderId: 10,
        foodImg: "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/rai2xnz7cmh1c1wfesur",
        quantity: 1,
        price: 600,
        foodItem: "New York Pizza",
        Ingredients: [{
            name: "Pizza dough",
            quantity: "1 piece",
            cal: 400
        },
        {
            name: "Toppings",
            quantity: "1 piece",
            cal: 200
        },
        {
            name: "Cheese and sauces",
            quantity: "1 slice",
            cal: 1000
        }],
        rat: "4 stars",
        LID: 4
    },
    {
        name: "Pizza Hut",
        img: ["https://franchise.pizzahut.com/images/home_intro_img2.jpg,",
            "https://media-cdn.tripadvisor.com/media/photo-s/0f/88/38/81/pizza-hut-shop-barra.jpg",
            ""],
        loc: "Malad",
        cat: "Pizza",
        orderId: 11,
        foodImg: "https://lh3.googleusercontent.com/frubXrbqDxRidzvtSuem_kVzYqGvAJNpgFufpSPddhdDNIiI6s0ZfLXDj2sadhJWfaaArHWP2Ddqm1TYTE9ih4PTeLrws-c2Y8rkWHc=w512",
        quantity: 1,
        price: 400,
        foodItem: "Farmhouse Pizza",
        Ingredients: [{
            name: "Pizza dough",
            quantity: "1 piece",
            cal: 700
        },
        {
            name: "Toppings",
            quantity: "1 piece",
            cal: 300
        },
        {
            name: "Cheese and sauces",
            quantity: "1 slice",
            cal: 90
        }],
        rat: "3 stars",
        LID: 3
    },
    {
        name: "Chaat Bazzar",
        img: ["https://media-cdn.tripadvisor.com/media/photo-s/1d/29/b5/be/chaat-bazaar-al-nahda.jpg,",
            "https://b.zmtcdn.com/data/pictures/6/44986/6ff0e87b9d8b467cee11e010c66543cd.jpg",
            ""],
        loc: "Goregaon",
        cat: "Chole-Bhature",
        orderId: 12,
        foodImg: "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/qxfqitxcdm7n4pmxefz5",
        quantity: 1,
        price: 400,
        foodItem: "Chole bature",
        Ingredients: [{
            name: "Spices and vegetables",
            quantity: "Indefinite",
            cal: 500
        },
        {
            name: "Chole",
            quantity: "1 bowl",
            cal: 200
        },
        {
            name: "Bature",
            quantity: "2 piece",
            cal: 300
        }],
        rat: "5 stars",
        LID: 4
    },
    {
        name: "Kailash Parbat",
        img: ["https://media-cdn.tripadvisor.com/media/photo-s/18/06/0b/5e/inside.jpg,",
            "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/7/2016/09/07092016_KailashParbat.jpg",
            ""],
        loc: "Malad",
        cat: "Chole-Bhature",
        orderId: 13,
        foodImg: "http://lh3.googleusercontent.com/GS3feXtqbsu4Hibxuu7xA1CZ3_hZYm1w4vAdPNZtjMrFODXzzLmBoZGAzAehLsR070ztqK0Itii5jGtZbRnk8SwM2AY=s750",
        quantity: 1,
        price: 300,
        foodItem: "Chole bature",
        Ingredients: [{
            name: "Spices and vegetables",
            quantity: "Indefinite",
            cal: 400
        },
        {
            name: "Chole",
            quantity: "1 bowl",
            cal: 200
        },
        {
            name: "Bature",
            quantity: "2 piece",
            cal: 300
        }],
        rat: "4 stars",
        LID: 3
    },
    {
        name: "Cream Centre",
        img: ["https://www.creamcentre.com/images/home_img_1.jpg,",
            "https://content3.jdmagicbox.com/comp/mumbai/09/022p1919809/catalogue/cream-centre-malad-west-mumbai-home-delivery-restaurants-9cngro.jpg",
            ""],
        loc: "Andheri",
        cat: "Chole-Bhature",
        orderId: 14,
        foodImg: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/b/z/p27067-1648636637624432dd3a2cc.jpg?tr=tr:n-xlarge",
        quantity: 1,
        price: 800,
        foodItem: "Chole bature",
        Ingredients: [{
            name: "Spices and vegetables",
            quantity: "Indefinite",
            cal: 500
        },
        {
            name: "Chole",
            quantity: "1 bowl",
            cal: 300
        },
        {
            name: "Bature",
            quantity: "2 piece",
            cal: 300
        }],
        rat: "5 stars",
        LID: 7
    },
    {
        name: "Starbucks",
        img: ["https://pr0.nicelocal.in/wFjZltK69wkBY0YflxKQ7w/1120x700,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2R0kz4THyh6gzEpk4Ywn08ef_7w6vTy3NkEGkdy962M_Z8vPDlT3yvrd9M35RWUewQ,",
            "https://www.mansworldindia.com/wp-content/uploads/2020/08/lkrjahgh.png",
            ""],
        loc: "Kandivali",
        cat: "Coffee",
        orderId: 15,
        foodImg: "https://pyxis.nymag.com/v1/imgs/56c/700/a2b04a43d9bf2f63c3d5d0b3c041d08fad-04-starbucks-cappuccino.rsquare.w700.jpg",
        quantity: 1,
        price: 300,
        foodItem: "cappuccino",
        Ingredients: [{
            name: "Coffee beans",
            quantity: "1 tablespoon",
            cal: 20
        },
        {
            name: "Sugar",
            quantity: "1 teaspoon",
            cal: 100
        },
        {
            name: "Milk",
            quantity: "1 cup",
            cal: 100
        }],
        rat: "5 stars",
        LID: 2
    },
    {
        name: "Cafe coffee Day",
        img: ["https://media-cdn.tripadvisor.com/media/photo-s/10/a4/e3/9f/external-view.jpg,",
            "https://media.istockphoto.com/photos/staff-working-behind-counter-in-busy-coffee-shop-picture-id900816038?k=20&m=900816038&s=612x612&w=0&h=PYTP1QdLaw2YuvrKZVe8nGgek6wa0CmYN4bRqjhYr8E=",
            ""],
        loc: "Malad",
        cat: "Coffee",
        orderId: 16,
        foodImg: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/zktjkvw0auznouy5srpo",
        quantity: 1,
        price: 210,
        foodItem: "Cafe Latte",
        Ingredients: [{
            name: "Coffee beans",
            quantity: "1 tablespoon",
            cal: 20
        },
        {
            name: "Sugar",
            quantity: "1 teaspoon",
            cal: 100
        },
        {
            name: "Milk",
            quantity: "1 cup",
            cal: 120
        }],
        rat: "5 stars",
        LID: 3
    },
    {
        name: "Bistro Cafe",
        img: ["https://pr0.nicelocal.in/wFjZltK69wkBY0YflxKQ7w/1120x700,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2R0kz4THyh6gzEpk4Ywn08ef_7w6vTy3NkEGkdy962M_Z8vPDlT3yvrd9M35RWUewQ,",
            "http://www.foodreviewonline.com/new/wp-content/uploads/2019/03/Bistro-1-cafe-02-1024x768.jpg",
            ""],
        loc: "Andheri",
        cat: "Coffee",
        orderId: 17,
        foodImg: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cwhuw7os3r7kl7swy82v",
        quantity: 1,
        price: 350,
        foodItem: "Cafe Frape",
        Ingredients: [{
            name: "Coffee beans",
            quantity: "1 tablespoon",
            cal: 20
        },
        {
            name: "Sugar and chocolate syrup",
            quantity: "1 teaspoon",
            cal: 250
        },
        {
            name: "Milk",
            quantity: "1 cup",
            cal: 150
        }],
        rat: "4 stars",
        LID: 7
    },
    {
        name: "Shivsagar",
        img: ["https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/news8736.jpg,",
            "https://img4.nbstatic.in/tr:w-500/5bc83d10cff47e000d990986.jpg",
            ""],
        loc: "Malad",
        cat: "Pav-Bhaji",
        orderId: 18,
        foodImg: "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/dpnzkxlvp7d8ed1ccy1i",
        quantity: 1,
        price: 600,
        foodItem: "Pav-Bhaji",
        Ingredients: [{
            name: "Vegetables",
            quantity: "500 grams",
            cal: 500
        },
        {
            name: "Butter and ghee",
            quantity: "1 block",
            cal: 700
        },
        {
            name: "Pav",
            quantity: "2 pieces",
            cal: 300
        }],
        rat: "5 stars",
        LID: 3
    },
    {
        name: "Garden court",
        img: ["https://content.jdmagicbox.com/comp/mumbai/18/022pgl00918/catalogue/garden-court-restaurant-malad-west-mumbai-punjabi-restaurants-0ndw8aq958.jpg?clr=#5c330a?fit=around%7C270%3A130&crop=270%3A130%3B%2A%2C%2A,",
            "https://b.zmtcdn.com/data/pictures/8/34728/212db4191c84743a64f197b2e238ca87.jpg?fit=around|750:500&crop=750:500;*,*",
            ""],
        loc: "Kandivali",
        cat: "Pav-Bhaji",
        orderId: 18,
        foodImg: "https://www.whiskaffair.com/wp-content/uploads/2019/06/Pav-Bhaji-1-1-1200x1800.jpg",
        quantity: 1,
        price: 800,
        foodItem: "Pav-Bhaji",
        Ingredients: [{
            name: "Vegetables",
            quantity: "500 grams",
            cal: 600
        },
        {
            name: "Butter and ghee",
            quantity: "1 block",
            cal: 700
        },
        {
            name: "Pav",
            quantity: "2 pieces",
            cal: 300
        }],
        rat: "5 stars",
        LID: 2
    },
    {
        name: "Vrindavan",
        img: ["https://scontent.fbom3-2.fna.fbcdn.net/v/t31.18172-8/22467377_1431932980255825_8149544181493746422_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=973b4a&_nc_ohc=x2rSigYto_MAX9WnDyE&_nc_ht=scontent.fbom3-2.fna&oh=00_AT9waZ5zUI1QWuLAftpE1PGq3kN7_M8MqPDx5yV5Hj8mQw&oe=628ADBD7,",
            "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/p/c/p23523-15131473155a30cbb3a15e7.jpg?w=400",
            ""],
        loc: "Andheri",
        cat: "Pav-Bhaji",
        orderId: 20,
        foodImg: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/i/z/p23523-15131473495a30cbd5b2a37.jpg?tr=tr:n-xlarge",
        quantity: 1,
        price: 200,
        foodItem: "Pav-Bhaji",
        Ingredients: [{
            name: "Vegetables",
            quantity: "500 grams",
            cal: 500
        },
        {
            name: "Butter and ghee",
            quantity: "1 block",
            cal: 500
        },
        {
            name: "Pav",
            quantity: "2 pieces",
            cal: 300
        }],
        rat: "4 stars",
        LID: 7
    },
    {
        name: "Biryani by Kilo",
        img: ["http://static.businessworld.in/article/article_extra_large_image/1607500355_UEBLfk_biryani_by_kilo.jpg,",
            "https://assets.limetray.com/assets/image_manager/uploads/5128/Hyd%20Biryani.png",
            ""],
        loc: "Andheri",
        cat: "Biryani",
        orderId: 21,
        foodImg: "https://assets.limetray.com/assets/user_images/menus/compressed/1621314346_vegbiryani2.jpg",
        quantity: 1,
        price: 325,
        foodItem: "Veg Hyderabadi Biryani",
        Ingredients: [{
            name: "Vegetables",
            quantity: "500 grams",
            cal: 500
        },
        {
            name: "Rice",
            quantity: "2 cups",
            cal: 800
        },
        {
            name: "Spices and ghee",
            quantity: "5 tablespoon",
            cal: 300
        }],
        rat: "4 stars",
        LID: 7
    },
    {
        name: "Behrouz",
        img: ["https://b.zmtcdn.com/data/pictures/chains/1/18368221/029922ac488133da16aee1b1b0116098.jpg?fit=around|750:500&crop=750:500;*,*,",
            "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/3/z/m/p3890-16057740245fb62ac85af11.jpg?tr=tr:n-large",
            ""],
        loc: "Borivali",
        cat: "Biryani",
        orderId: 22,
        foodImg: "https://product-assets.faasos.io/production/product/image_1603860179896_Copy%20of%20Paneer%20Subz%20Biryani_%28R%29%20With%20gulab%20jamun.jpg?d=500",
        quantity: 1,
        price: 366,
        foodItem: "Paneer Subz Biryani",
        Ingredients: [{
            name: "Vegetables",
            quantity: "500 grams",
            cal: 600
        },
        {
            name: "Rice",
            quantity: "2 cups",
            cal: 800
        },
        {
            name: "Spices and ghee",
            quantity: "5 tablespoon",
            cal: 300
        }],
        rat: "5 stars",
        LID: 1
    },
    {
        name: "Urban Tadka",
        img: ["https://image3.mouthshut.com/images/imagesp/925042447s.png,",
            "https://b.zmtcdn.com/data/pictures/7/35847/91d96b646ca661797ab6b0059aaf1103.jpg",
            ""],
        loc: "Malad",
        cat: "Biryani",
        orderId: 23,
        foodImg: "https://content3.jdmagicbox.com/comp/mumbai/16/022p8700416/catalogue/urban-tadka-restaurant-andheri-west-mumbai-north-indian-restaurants-jfydnujbkk.jpg",
        quantity: 1,
        price: 400,
        foodItem: "Aloo Choley Biryani",
        Ingredients: [{
            name: "Vegetables",
            quantity: "500 grams",
            cal: 500
        },
        {
            name: "Rice",
            quantity: "2 cups",
            cal: 800
        },
        {
            name: "Spices and ghee",
            quantity: "5 tablespoon",
            cal: 300
        }],
        rat: "4 stars",
        LID: 3
    },
    {
        name: "Pop Tates",
        img: ["https://media-cdn.tripadvisor.com/media/photo-s/15/2c/19/2a/entrance-to-pop-tates.jpg,",
            "https://imgmedia.lbb.in/media/2018/12/5c121f7491343d7871e02480_1544691572243.jpg",
            ""],
        loc: "Kandivali",
        cat: "Pasta",
        orderId: 24,
        foodImg: "https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2013/10/Penne-pasta-arrabiatta.jpg",
        quantity: 1,
        price: 495,
        foodItem: "arrabiata",
        Ingredients: [{
            name: "Vegetables",
            quantity: "Onion, garlic,olives",
            cal: 200
        },
        {
            name: "Pasta",
            quantity: "1 packet",
            cal: 500
        },
        {
            name: "Cheese and sauce",
            quantity: "1 cup each",
            cal: 300
        }],
        rat: "5 stars",
        LID: 2
    },
    {
        name: "Jughead's The Unrestaurant",
        img: ["https://content3.jdmagicbox.com/comp/mumbai/n2/022pxx22.xx22.110129125706.p6n2/catalogue/jughead-s-the-unrestaurant-andheri-west-mumbai-continental-restaurants-mnofwnxydw.jpg,",
            "https://b.zmtcdn.com/data/reviews_photos/370/20a1af92f83fda0841d48358c0b4f370_1512323680.jpg",
            ""],
        loc: "Andheri",
        cat: "Pasta",
        orderId: 25,
        foodImg: "https://www.funfoodfrolic.com/wp-content/uploads/2020/03/White-Pasta-Thumbnail.jpg",
        quantity: 1,
        price: 500,
        foodItem: "White Sauce Pasta",
        Ingredients: [{
            name: "Vegetables",
            quantity: "Onion, garlic,olives",
            cal: 200
        },
        {
            name: "Pasta",
            quantity: "1 packet",
            cal: 500
        },
        {
            name: "Cheese and sauce",
            quantity: "1 cup each",
            cal: 300
        }],
        rat: "5 stars",
        LID: 7
    },
    {
        name: "Olive Garden",
        img: ["https://www.oberoimall.com/img/food/Olive%20bistro/Olive%20Bistro%20(1).webp,",
            "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/w/g/p20052-14780858765819ccf42b799.jpg?tr=tr:n-xlarge",
            ""],
        loc: "Goregaon",
        cat: "Pasta",
        orderId: 26,
        foodImg: "https://skinnyspatula.com/wp-content/uploads/2022/01/Pink_Pasta_Sauce2.jpg.webp",
        quantity: 1,
        price: 600,
        foodItem: "Pink Sauce Pasta",
        Ingredients: [{
            name: "Vegetables",
            quantity: "Onion, garlic,olives",
            cal: 200
        },
        {
            name: "Pasta",
            quantity: "1 packet",
            cal: 400
        },
        {
            name: "Cheese and sauce",
            quantity: "1 cup each",
            cal: 350
        }],
        rat: "5 stars",
        LID: 4
    },
    {
        name: "Flag's Restaurant",
        img: ["https://b.zmtcdn.com/data/pictures/8/36018/12de9712a908076993d6ed8026a4effd.jpg,",
            "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/q/w/p2305-143998136255d45f32e3207.jpg?tr=tr:n-xlarge",
            ""],
        loc: "Malad",
        cat: "Tikka Masala",
        orderId: 27,
        foodImg: "https://experience-fresh.panasonic.eu/wp-content/uploads/2018/12/Paneer_Tikka_Masala_enjoy_181205.jpg",
        quantity: 1,
        price: 595,
        foodItem: "Paneer Tikka Maslala",
        Ingredients: [{
            name: "Vegetables",
            quantity: "Onion, garlic,olives",
            cal: 400
        },
        {
            name: "Gravy and cream",
            quantity: "1 cup",
            cal: 350
        },
        {
            name: "Paneer",
            quantity: "250 grams",
            cal: 350
        }],
        rat: "5 stars",
        LID: 3
    },
    {
        name: "Northern Tadka",
        img: ["https://b.zmtcdn.com/data/reviews_photos/2af/0612f6aae65f82197833459b433e42af_1633786279.jpg,",
            "https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/group%2F1183%2F0.jpg",
            ""],
        loc: "Andheri",
        cat: "Tikka Masala",
        orderId: 28,
        foodImg: "https://b.zmtcdn.com/data/pictures/chains/4/35764/ec4dc057f7612ec5b78ea2a854785767.jpg",
        quantity: 1,
        price: 495,
        foodItem: "Paneer Tikka Maslala",
        Ingredients: [{
            name: "Vegetables",
            quantity: "Onion, garlic,olives",
            cal: 400
        },
        {
            name: "Gravy and cream",
            quantity: "1 cup",
            cal: 300
        },
        {
            name: "Paneer",
            quantity: "250 grams",
            cal: 350
        }],
        rat: "4 stars",
        LID: 7
    },
    {
        name: "Punjab Grill",
        img: ["https://media-cdn.tripadvisor.com/media/photo-s/18/2a/a2/d3/punjab-grill-bkc.jpg,",
            "https://www.punjabgrill.in/wp-content/themes/marco/image/gallery1.jpg",
            ""],
        loc: "Andheri",
        cat: "Tikka Masala",
        orderId: 29,
        foodImg: "https://scontent.fbom3-2.fna.fbcdn.net/v/t39.30808-6/243545404_6477163478990840_4651989311801316536_n.jpg?stp=cp0_dst-jpg_e15_q65_s403x403&_nc_cat=105&ccb=1-5&_nc_sid=110474&_nc_ohc=HkR2S2eJ22AAX_BMEFZ&_nc_ht=scontent.fbom3-2.fna&oh=00_AT8FFT9b8QvcaaHnuI8sxFkjl0Ye1z6FpMlU6rUb33SeKQ&oe=626A1079",
        quantity: 1,
        price: 795,
        foodItem: "Paneer Tikka Maslala",
        Ingredients: [{
            name: "Vegetables",
            quantity: "Onion, garlic,olives",
            cal: 500
        },
        {
            name: "Gravy and cream",
            quantity: "1 cup",
            cal: 350
        },
        {
            name: "Paneer",
            quantity: "250 grams",
            cal: 350
        }],
        rat: "5 stars",
        LID: 7
    },
    {
        name: "Chinese Wok",
        img: ["https://img4.nbstatic.in/tr:w-500/5bc48d3c652205000decd6e3.jpg,",
            "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/3/n/g/p3629-16142593076037a46b89d2f.jpg?tr=tr:n-xlarge",
            ""],
        loc: "Kandivali",
        cat: "Noodles",
        orderId: 30,
        foodImg: "https://b.zmtcdn.com/data/pictures/3/18789443/2698ad46d337d25d16e44ef903768f2a.jpg?fit=around|300:273&crop=300:273;*,*",
        quantity: 1,
        price: 250,
        foodItem: "Chilli Garlic Noodles",
        Ingredients: [{
            name: "Vegetables",
            quantity: "Onion, garlic,olives",
            cal: 200
        },
        {
            name: "Noodles",
            quantity: "1 packet",
            cal: 350
        },
        {
            name: "Garlic and spices",
            quantity: "Varied",
            cal: 200
        }],
        rat: "4 stars",
        LID: 2
    },
    {
        name: "Mainland china",
        img: ["https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/i/u/p5888-1452241571568f72a3aecdf.jpg?tr=tr:n-xlarge,",
            "https://b.zmtcdn.com/data/reviews_photos/ea1/ab8938a23492827cc84f7767e9d36ea1_1522091210.jpg",
            ""],
        loc: "Malad",
        cat: "Noodles",
        orderId: 31,
        foodImg: "https://www.cookwithmanali.com/wp-content/uploads/2021/08/Schezwan-Noodles.jpg",
        quantity: 1,
        price: 450,
        foodItem: "Schezwan Noodles",
        Ingredients: [{
            name: "Vegetables",
            quantity: "Onion, garlic,olives",
            cal: 200
        },
        {
            name: "Noodles",
            quantity: "1 packet",
            cal: 350
        },
        {
            name: "Garlic and spices",
            quantity: "Varied",
            cal: 300
        }],
        rat: "5 stars",
        LID: 3
    },
    {
        name: "Flavors of china",
        img: ["https://www.infinitimall.com/wp-content/uploads/2022/01/Flavors-Of-China.jpg,",
            "https://b.zmtcdn.com/data/pictures/1/6305191/bda96e9dc6be0ca40e76e836a1020c0b.jpg",
            ""],
        loc: "Goregaon",
        cat: "Noodles",
        orderId: 32,
        foodImg: "https://s3-eu-west-1.amazonaws.com/s3-gousto-production-media/cms/mood-image/2353---10-Min-Spicy-Chilli-Paneer-Noodles-0971-1571154475632.jpg",
        quantity: 1,
        price: 200,
        foodItem: "Cheese chilli noodles",
        Ingredients: [{
            name: "Vegetables",
            quantity: "Onion, garlic,olives",
            cal: 200
        },
        {
            name: "Noodles",
            quantity: "1 packet",
            cal: 350
        },
        {
            name: "Garlic and spices",
            quantity: "Varied",
            cal: 200
        }],
        rat: "4 stars",
        LID: 4
    },
    {
        name: "Shiv sagar",
        loc: "Malad",
        img: ["https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/news8736.jpg,",
            "https://img4.nbstatic.in/tr:w-500/5bc83d10cff47e000d990986.jpg",
            ""],
        foodImg: "https://www.dwarakaorganic.com/wp-content/uploads/2012/06/Masala-Idli.jpg",
        foodItem: "Masala Idli",
        orderId: 33,
        cat: "Idli",
        price: 120,
        quantity: 1,

        Ingredients: [
            {
                name: "Rice -Mixture",
                quantity: "3/4 cup",
                cal: 65
            },
            {
                name: "UradDal",
                quantity: "1/2 cup",
                cal: 45
            },
            {
                name: "Oil",
                quantity: "1 tsp",
                cal: 23
            }
        ],
        rat: "4 Stars",
        LID: 3
    },
    {
        name: "Banana Leaf",
        loc: "Andheri",
        img: ["https://content3.jdmagicbox.com/comp/mumbai/v6/022pxx22.xx22.191112170404.t6v6/catalogue/banana-leaf-restaurant-santacruz-west-mumbai-south-indian-restaurants-syntjh5lox.jpg,",
            "https://media-cdn.tripadvisor.com/media/photo-s/17/16/3b/0a/photo5jpg.jpg",
            ""],
        foodImg: "https://media-cdn.tripadvisor.com/media/photo-s/1c/a1/a1/1f/mulgai-idli.jpg",
        foodItem: "Muglai Idli",
        orderId: 34,
        cat: "Idli",
        price: 130,
        quantity: 1,

        Ingredients: [
            {
                name: "Rice -Mixture",
                quantity: "3/4 cup",
                cal: 40
            },
            {
                name: "UradDal",
                quantity: "1/2 cup",
                cal: 40
            },
            {
                name: "Oil",
                quantity: "1 tsp",
                cal: 24
            }
        ],
        rat: "5 Stars",
        LID: 7
    },
    {
        name: "Amar Juice Centre",
        loc: "Andheri",
        img: ["https://content.jdmagicbox.com/comp/mumbai/y7/022pxx22.xx22.130815091737.a8y7/catalogue/amar-fast-food-and-restaurant-pvt-ltd-vashi-navi-mumbai-home-delivery-restaurants-4iwx61q.png",
            "https://content3.jdmagicbox.com/comp/mumbai/v3/022pxx22.xx22.180104201602.l4v3/catalogue/amar-juice-centre-marol-mumbai-juice-centres-6xf4k.jpg",
            "https://b.zmtcdn.com/data/pictures/6/45596/ae35c9cd1bda65015a9ebf037b81d977.jpg?fit=around|750:500&crop=750:500;*,*",
            "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/7/g/b/p79438-1645450520621395189b540.jpg?tr=tr:n-xlarge"],
        foodImg: "https://www.dwarakaorganic.com/wp-content/uploads/2012/06/Masala-Idli.jpg",
        foodItem: "Plain Idli",
        orderId: 35,
        cat: "Idli",
        price: 80,
        quantity: 1,

        Ingredients: [
            {
                name: "Rice -Mixture",
                quantity: "3/4 cup",
                cal: 50
            },
            {
                name: "UradDal",
                quantity: "1/2 cup",
                cal: 30
            },
            {
                name: "Oil",
                quantity: "1 tsp",
                cal: 20
            }
        ],
        rat: "5 Stars",
        LID: 7
    }

]
export default FoodContent;