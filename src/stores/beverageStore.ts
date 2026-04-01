import { defineStore } from "pinia";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";
import tempretures from "../data/tempretures.json";

interface Ingredient {
  id: string;
  name: string;
  color: string;
}

interface Beverage {
  name: string;
  base: Ingredient;
  creamer: Ingredient;
  syrup: Ingredient;
  temperature: string;
}

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    bases: bases as Ingredient[],
    creamers: creamers as Ingredient[],
    syrups: syrups as Ingredient[],
    temperatures: tempretures as string[],

    selectedBase: bases[0]?.id || "",
    selectedCreamer: creamers[0]?.id || "",
    selectedSyrup: syrups[0]?.id || "",
    selectedTemperature: tempretures[0] || "",

    beverageName: "",

    savedBeverages: [] as Beverage[],
    currentBeverage: null as Beverage | null,
  }),

  actions: {
    makeBeverage() {
      const trimmedName = this.beverageName.trim();
      if (!trimmedName) return;

      const base = this.bases.find((item) => item.id === this.selectedBase);
      const creamer = this.creamers.find((item) => item.id === this.selectedCreamer);
      const syrup = this.syrups.find((item) => item.id === this.selectedSyrup);

      if (!base || !creamer || !syrup || !this.selectedTemperature) return;

      const newBeverage: Beverage = {
        name: trimmedName,
        base,
        creamer,
        syrup,
        temperature: this.selectedTemperature,
      };

      this.savedBeverages.push(newBeverage);
      this.currentBeverage = newBeverage;
      this.beverageName = "";
    },

    showBeverage(beverage: Beverage) {
      this.currentBeverage = beverage;
    },
  },

  persist: true,
});