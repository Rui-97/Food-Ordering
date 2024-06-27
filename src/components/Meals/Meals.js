import { Fragment } from "react";

import MealsSummary from "./MealsSummary.js";
import AvailableMeals from "./AvailableMeals.js";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <main>
        <AvailableMeals />
      </main>
    </Fragment>
  );
};

export default Meals;
