import './App.css'
import s1 from "./assets/s1.svg";
import s2 from "./assets/s2.svg";
import s3 from "./assets/s3.png";
import s4 from "./assets/s4.png";
import s5 from "./assets/s5.png";
import s6 from "./assets/s6.png";
function App() {


  return (
    <>
      <header>
        <img src="https://th.bing.com/th?id=OIP.GHCjMzfUWHGej-9iinIsuAHaGL&w=273&h=228&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2" alt="" style={{width:'100px'}} />
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Offers</a></li>
        </ul>
        <div className="bb">
        <i class="fa-solid fa-magnifying-glass"></i>
        <button><i class="fa-solid fa-phone-volume"></i>Contact</button>
        </div>
      </header>
      <section className='s1'>
          <div className="s11">
              <h1 style={{fontSize:'40px'}}>Dive into Delights Of Delectable <span style={{color:'greenyellow'}}>Food</span></h1>
              <p style={{color:'gray',margin:'45px 0px'}}>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
          
<button class="button-with-icon">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    id="Play"
    class="icon"
  >
    <path
      d="M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z"
      fill="#ffffff"
      class="color000000 svgShape"
    ></path>
  </svg>
  <span class="text">YOUTUBE</span>
</button>

              <a href="#" style={{margin:'10px'}}>Watch Video</a>
          </div>
          <img src={s1} alt="" style={{width:'500px'}}/>
      </section>
      <section className='s2'>
        <p style={{color:'#FF6868',textAlign:'center', fontSize:'20px'}}>Customer Favorites</p>
        <h1 style={{textAlign:'center', fontSize:'35px'}}>Popular Catagories</h1>
        <div className="carts">
          <div className="cart">
            <img src={s2} alt="" width='100px'/>
            <h1>Main Dish</h1>
            <p>(86 dishes)</p>
          </div>
          <div className="cart">
            <img src={s2} alt="" width='100px'/>
            <h1>Main Dish</h1>
            <p>(86 dishes)</p>
          </div>
          <div className="cart">
            <img src={s2} alt="" width='100px'/>
            <h1>Main Dish</h1>
            <p>(86 dishes)</p>
          </div>
          <div className="cart">
            <img src={s2} alt="" width='100px'/>
            <h1>Main Dish</h1>
            <p>(86 dishes)</p>
          </div>
        </div>
      </section>
      <img src={s3} alt="" style={{backgroundSize:'cover', width:'1500px', margin:'100px 0px'}}/>
      <img src={s4} alt="" style={{backgroundSize:'cover', width:'1500px', }}/>
      <img src={s5} alt="" style={{backgroundSize:'cover', width:'1500px', }}/>
      <img src={s6} alt="" style={{backgroundSize:'cover', width:'1500px', }}/>

    </>
  )
}

export default App
