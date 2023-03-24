import Letterize from "letterizejs"
import anime from "animejs";
import { useEffect } from "react";
import './LandingPage.css'

const LandingPage = () => {
    useEffect(() => {
        // modified animation referenced from https://codepen.io/WojciechWKROPCE/pen/VwLePLy
      const mainAnimation = new Letterize({
          targets: ".landingAnimation"
      });
      // creates a new animation timeline, and set the targets to the elements returned by mainAnimation
      const animation = anime.timeline({
        // applies to "mainAnimation targets
          targets: mainAnimation.listAll,
          // Each element will start at a different time
          delay: anime.stagger(100, {
            grid: [mainAnimation.list[0].length, mainAnimation.list.length],
            from: "center"
          }),
          // The animation is set to loop continuously
          loop: true
      });
      // The animation has 4 steps:
      // Scale property is set to 0.5
      // letterSpacing property is set to "10px"
      // Scale property is then set to 1
      // letterSpacing property is then set to "6px"
      animation
          .add({
            scale: 0.5})
          .add({
            letterSpacing: "10px"})
          .add({
            scale: 1})
          .add({
            letterSpacing: "6px"});
  }, []);
    return(
        <div className="crypto-animation">
        <a href="/home"><div class="landingAnimation">
          Meta Crusade
        </div>
        <div class="landingAnimation">
          Meta Crusade
        </div>
        <div class="landingAnimation">
          Meta Crusade
        </div>
        <div class="landingAnimation">
          Meta Crusade
        </div>
        <div class="landingAnimation">
          Meta Crusade
        </div>
        <div class="landingAnimation">
          Meta Crusade
        </div>
        <div class="landingAnimation">
          Meta Crusade
        </div>
        <div class="landingAnimation">
          Meta Crusade
        </div>
        <div class="landingAnimation">
          Meta Crusade
        </div>
        <div class="landingAnimation">
          Meta Crusade
        </div>
        <div class="landingAnimation">
          Meta Crusade
        </div>
        <div class="landingAnimation">
          Meta Crusade
        </div>
        <div class="landingAnimation">
          Meta Crusade
        </div>
        <div class="landingAnimation">
          Meta Crusade
        </div>
        </a>
      </div>
    )
}

export default LandingPage