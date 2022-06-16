import "../../../SCSS/_backgroundstripes.scss";

export default function BackgroundStripes() {
  return (
    <div id="stripes-container">
      <div id="pink" className="stripe">
        <p className="stripeText">Multimedia &</p>
        <p className="stripeText">Creatieve Technologie</p>
      </div>
      <div id="yellow" className="stripe">
        
      </div>
      <div id="orange" className="stripe">
        <p className="stripeText">Livestream</p>
        <p className="stripeText">24/06 19u</p>
      </div>
      <div id="red" className="stripe">
        <p className="stripeText">Infodag</p>
        <p className="stripeText">25/06 10u</p>
      </div>
      <div id="blue" className="stripe"></div>
    </div>
  );
}
