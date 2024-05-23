import { FunctionComponent } from "react";
import "../scss/styles.scss"

interface ReferencesProps {
    
}
 
const References: FunctionComponent<ReferencesProps> = () => {
    return ( 
        <div className="references-container">
            <div className="ref ref1">
                <img src="" alt=""  className="ref1-selfie-avatar"/>
                {/* <span className="quote">“</span> */}
                <h3 className="ref1-text">
                During our time at devCodeCamp, Brycen showed tremendous tenacity in the face of demanding situations. No matter how difficult things got for our group, Brycen was there to cheer us up and motivate the team. Brycen shows amazing leadership potential and will be an asset to those around him no matter what he does in life. His charisma and empathy will not only make you want to be his friend, but his uplifting character gives you something to look forward to at work.
                <br />
                <br />
                Brycen's strong family values and outgoing personality have given him the ability to lead with kindness instead of force. That same kindness infects everyone around him, bringing the best out of even the grumpiest of people. As a software developer, his growth was astounding. Within just a couple of months, Brycen could build an entire website from the ground up. I'm glad that I got to meet and work with such a great person, my life has genuinely improved due to the experience. 
                </h3>
                {/* <span className="quote">”</span> */}
            </div>
            <div className="ref ref2">
                {/* <span className="quote">“</span> */}
                <h3 className="ref2-text">
                Brycen is one of those guys that all employers are searching for. He has an obvious passion for coding and a skillset to match. On top of being one of the best students in the class he is extremely genuine, kind and just an overall great person. He personally motivated me and I'm sure others in our class by just being himself and that's a rare gift. Even right out of the gate after graduation Brycen will make an incredible asset to ANY team!
                </h3>
                {/* <span className="quote">”</span> */}
                <img src="" alt=""  className="ref2-selfie-avatar"/>
            </div>
        </div>
     );
}
 
export default References;