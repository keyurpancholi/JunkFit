import React from "react";
import './Hotels.css'
import Card from "./Card";
class Hotels extends React.Component{
    
    render()
    {
        const hotel=[{
            name:"Dosa",
            type:"Veg",
            Carbs:"18.8g",
            Fats:"3.7g",
            Protein:"2.7g",
            Calorie:"133 ",
            quantity:1,
            img:"https://images.news18.com/ibnkhabar/uploads/2021/08/masala-dosa-recipe.jpg"
        },
        {
            name:"Idli",
            type:"Veg",
            Carbs:"10g",
            Fats:"3.7g",
            Protein:"2g",
            Calorie:"39 ",
            quantity:2,
            img:"https://img.onmanorama.com/content/dam/mm/en/food/foodie/images/2019/10/1/idli.jpg.transform/schema-4x3/image.jpg"
        },
        {
            name:"Chole-Bhature",
            type:"Veg",
            Carbs:"50.3g",
            Fats:"20.1g",
            Protein:"10.8g",
            Calorie:"427",
            quantity:1,
            img:"https://static.toiimg.com/photo/53314156.cms"
        },
        {
            name:"Pav-Bhaji",
            type:"Veg",
            Carbs:"57.9g",
            Fats:"14.5g",
            Protein:"9.4g",
            Calorie:"400 ",
            quantity:"1 serving",
            img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/11/pav-bhaji.jpg"
        }
        ,
           { 
            name:"Burger",
            type:"Veg",
            Carbs:"33",
            Fats:"14g",
            Protein:"15g",
            Calorie:"313 ",
            quantity:1,
            img:"https://assets.cntraveller.in/photos/60ba26c0bfe773a828a47146/4:3/w_1440,h_1080,c_limit/Burgers-Mumbai-Delivery.jpg"
        },
        { 
            name:"Paneer Paratha",
            type:"Veg",
            Carbs:"22.2g",
            Fats:"13.5g",
            Protein:"6.9g",
            Calorie:"234 ",
            quantity:1,
            img:"https://cdn.tarladalal.com/members/9306/big/big_paneer_parathas,_punjabi_paneer_paratha-14043.jpg"
        },
        { 
            name:"Nachos",
            type:"Veg",
            Carbs:"70.2g",
            Fats:"42.4g",
            Protein:"26.5g",
            Calorie:"827",
            quantity:"1 serving",
            img:"https://static.toiimg.com/thumb/63625118.cms?width=1200&height=900"
        },
        { 
            name:"Biryani",
            type:"Veg",
            Carbs:"18.5",
            Fats:"13.5g",
            Protein:"3.4g",
            Calorie:"101 ",
            quantity:"1 serving",
            img:"https://i0.wp.com/vegecravings.com/wp-content/uploads/2016/07/veg-biryani-recipe-step-by-step-instructions.jpg?fit=3563%2C2976&quality=65&strip=all&ssl=1"
        },
        { 
            name:"Pasta",
            type:"Veg",
            Carbs:"37",
            Fats:"1.1g",
            Protein:"7.5g",
            Calorie:"174 ",
            quantity:"1 serving",
            img:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2020%2F09%2F17%2Fcream-tomato-rigatoni-FT-RECIPE1020.jpg"
        },
        { 
            name:"Noodles",
            type:"Veg",
            Carbs:"25",
            Fats:"2.1g",
            Protein:"4.5g",
            Calorie:"138 ",
            quantity:"1 serving",
            img:"https://hot-thai-kitchen.com/wp-content/uploads/2021/11/chili-garlic-noodles-blog.jpg"
        },
        { 
            name:"Fried-Rice",
            type:"Veg",
            Carbs:"14.7",
            Fats:"2.3g",
            Protein:"2.5g",
            Calorie:"208 ",
            quantity:"1 serving",
            img:"https://www.whiskaffair.com/wp-content/uploads/2018/11/Vegetable-Fried-Rice-2-3.jpg"
        },
        { 
            name:"Milshake",
            type:"Chocolate",
            Carbs:"32",
            Fats:"3.4g",
            Protein:"8g",
            Calorie:"211 ",
            quantity:"1 glass",
            img:"https://www.tarladalal.com/members/9306/procstepimgs/cold-cocoa-milkshake-(8)-8-187201.jpg"
        }



    ]
    const food= hotel.map(hotels=> <Card  img={hotels.img} name={hotels.name} type={hotels.type } Carbs={hotels.Carbs} Protein={hotels.Protein}
        Fats={hotels.Fats} Calorie={hotels.Calorie} Quantity={hotels.quantity}/>)
        return(
            <section id="menu">
              <h1>Recommended Food-Items for you</h1>
              <section id="food">
               {food}
                
              </section>

            </section>
          
        )
    }

}
export default Hotels;