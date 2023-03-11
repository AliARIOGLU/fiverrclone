import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";
import Features from "../../components/features/Features";
import Explore from "../../components/explore/Explore";
import BusinessFeatures from "../../components/businessFeatures/BusinessFeatures";

function Home() {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide
        slidesToShow={5}
        arrowsScroll={5}
        title="Popular professional services"
      >
        {cards.map((card) => (
          <CatCard key={card.id} card={card} category={card.category} />
        ))}
      </Slide>
      <Features />
      <Explore />
      <BusinessFeatures />
      <Slide
        slidesToShow={4}
        arrowsScroll={4}
        title="Get inspired with projects made by our freelancers"
      >
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;
