import React from 'react';
import Title from "Components/title/Title";
import CardNutriment from "Components/cardNutrition/CardNutriment";
import calories from "assets/calories.png";
import carbohydrate from "assets/carbohydrate.png";
import protein from "assets/protein.png";
import lipid from "assets/lipid.png";






const Profil = () => {
  return (
		<>
			<Title />
			<section className="profil__container">
				<Title firstName={firstName} />

				<CardNutriment />
			</section>
		</>
  );
};

export default Profil;