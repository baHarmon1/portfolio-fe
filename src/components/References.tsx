import { FunctionComponent } from "react";
import "../scss/styles.scss"

interface ReferencesProps {
    
}
 
const References: FunctionComponent<ReferencesProps> = () => {
    return ( 
        <div className="references-container">
            <div className="ref ref1">
            <img src="" alt=""  className="selfie-avatar"/>
            <h3 className="ref1-text"><span className="quote">“</span>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt pharetra iaculis. Vestibulum scelerisque volutpat vestibulum. Nam ac nisl odio. Donec maximus neque quis lorem malesuada aliquet. Nullam arcu massa, accumsan eget facilisis sit amet, congue a dui. Pellentesque porta ipsum non rutrum fermentum. Vestibulum gravida augue eu sodales faucibus. Nulla lacinia erat at tortor sodales, eu condimentum orci ultricies. Aenean sed nibh nec est hendrerit pretium non nec lorem. Ut consectetur quam sed dolor vulputate lacinia quis in purus. Fusce a sem sit amet leo elementum venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <span className="quote">”</span></h3>
            </div>
            <div className="ref ref2">
            <h3 className="ref2-text"><span className="quote">“</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt pharetra iaculis. Vestibulum scelerisque volutpat vestibulum. Nam ac nisl odio. Donec maximus neque quis lorem malesuada aliquet. Nullam arcu massa, accumsan eget facilisis sit amet, congue a dui. Pellentesque porta ipsum non rutrum fermentum. Vestibulum gravida augue eu sodales faucibus. Nulla lacinia erat at tortor sodales, eu condimentum orci ultricies. Aenean sed nibh nec est hendrerit pretium non nec lorem. Ut consectetur quam sed dolor vulputate lacinia quis in purus. Fusce a sem sit amet leo elementum venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <span className="quote">”</span></h3>
            <img src="" alt=""  className="selfie-avatar"/>
            </div>
        </div>
     );
}
 
export default References;