import One from "../Assets/images/One.jpg"
import Two from "../Assets/images/Two.jpg"
import Three from "../Assets/images/Three.jpg"

function Product()
        {
          return(
          <div class="products">
                  <div class="box">
                        <img src={One} alt="One"></img>
                                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
                    </div>
                    <div class="box">
                <img src={Two} alt="Two"></img>
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
            </div>
            <div class="box">
                <img src={Three} alt="Three"></img>
                <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
            </div>
            </div>)
        }
        export default Product