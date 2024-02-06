import { motion } from "framer-motion";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import LightningAnimation from "public/assets/svg/LightningAnimation.json";

const LightningBolt = () => {
	const boltVariants = {
		initial: {
			opacity: 0.6,
			scale: 0.95
		},
		animate: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.5,
				yoyo: Infinity // yoyo will animate it back and forth indefinitely
			}
		}
	};

	return (
		<Player
			autoplay
			loop
			src={LightningAnimation}
			speed={0.5}
			style={{ height: "500px", width: "500px" }}
		></Player>
	);
};

export default LightningBolt;
