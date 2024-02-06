"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							My name is Lester. I am a dedicated and results-oriented Software Engineer with around
							5 years of experience in the industry.
						</p>
						<p>
							My expertise lies in translating complex requirements into streamlined, user-friendly
							applications. I am proficient in a variety of modern programming languages and
							technologies. My journey in software engineering has been marked by my commitment to
							crafting cutting-edge solutions.
						</p>
						<p className="my-3.5">
							I have a proven track record of leading successful projects under tight deadlines,
							optimizing code efficiency, and enhancing user experiences.
						</p>
						<p>
							I am committed to continuous learning and staying up-to-date with industry trends and
							technologies, which helps me drive innovation in my projects.
						</p>
						<p className="my-3.5">
							As a collaborative team player, I possess strong problem-solving skills and a deep
							passion for creating impactful software.
						</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
