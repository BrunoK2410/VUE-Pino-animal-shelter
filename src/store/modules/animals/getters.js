export default {
  animals(state) {
    return state.animals;
  },
  hasAnimals(state) {
    return state.animals && state.animals.length > 0;
  },
  dogs(state) {
    return state.animals.filter((animal) => animal.type === "dog");
  },
  cats(state) {
    return state.animals.filter((animal) => animal.type === "cat");
  },
  hasDogs(state) {
    return state.animals.filter((animal) => animal.type === "dog").length > 0;
  },
  hasCats(state) {
    return state.animals.filter((animal) => animal.type === "cat").length > 0;
  },
};
