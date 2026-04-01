<template>
  <main>
    <h1>Brew & Save</h1>

    <section>
      <h2>Create Beverage</h2>

      <div>
        <label for="base">Base</label>
        <select id="base" v-model="beverageStore.selectedBase">
          <option
            v-for="base in beverageStore.bases"
            :key="base.id"
            :value="base.id"
          >
            {{ base.name }}
          </option>
        </select>
      </div>

      <div>
        <label for="creamer">Creamer</label>
        <select id="creamer" v-model="beverageStore.selectedCreamer">
          <option
            v-for="creamer in beverageStore.creamers"
            :key="creamer.id"
            :value="creamer.id"
          >
            {{ creamer.name }}
          </option>
        </select>
      </div>

      <div>
        <label for="syrup">Syrup</label>
        <select id="syrup" v-model="beverageStore.selectedSyrup">
          <option
            v-for="syrup in beverageStore.syrups"
            :key="syrup.id"
            :value="syrup.id"
          >
            {{ syrup.name }}
          </option>
        </select>
      </div>

      <div>
        <label for="temperature">Temperature</label>
        <select id="temperature" v-model="beverageStore.selectedTemperature">
          <option
            v-for="temperature in beverageStore.temperatures"
            :key="temperature"
            :value="temperature"
          >
            {{ temperature }}
          </option>
        </select>
      </div>

      <div>
        <label for="name">Name</label>
        <input id="name" v-model="beverageStore.beverageName" type="text" />
      </div>

      <button @click="beverageStore.makeBeverage()">Make Beverage</button>
    </section>

    <section>
      <h2>Mug Display</h2>

      <div v-if="beverageStore.currentBeverage">
        <p><strong>Name:</strong> {{ beverageStore.currentBeverage.name }}</p>
        <p><strong>Base:</strong> {{ beverageStore.currentBeverage.base.name }}</p>
        <p><strong>Creamer:</strong> {{ beverageStore.currentBeverage.creamer.name }}</p>
        <p><strong>Syrup:</strong> {{ beverageStore.currentBeverage.syrup.name }}</p>
        <p><strong>Temperature:</strong> {{ beverageStore.currentBeverage.temperature }}</p>
      </div>

      <div v-else>
        <p>No beverage selected.</p>
      </div>
    </section>

    <section>
      <h2>Saved Beverages</h2>

      <div id="beverage-container">
        <button
          v-for="(beverage, index) in beverageStore.savedBeverages"
          :key="index"
          @click="beverageStore.showBeverage(beverage)"
        >
          {{ beverage.name }}
        </button>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useBeverageStore } from "./stores/beverageStore";

const beverageStore = useBeverageStore();
</script>

<style scoped>
main {
  padding: 32px;
  font-family: Arial, sans-serif;
  max-width: 700px;
}

section {
  margin-bottom: 28px;
}

div {
  margin-bottom: 12px;
}

label {
  display: inline-block;
  width: 110px;
  font-weight: bold;
}

select,
input,
button {
  padding: 8px;
  font-size: 14px;
}

input,
select {
  min-width: 180px;
}

button {
  cursor: pointer;
  margin-top: 4px;
}

#beverage-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
  align-items: flex-start;
}
</style>