import axios from "axios";

export default {
  async loadAnimals(context) {
    const response = await axios.get(
      "https://vue-animal-shelter-7c71c-default-rtdb.europe-west1.firebasedatabase.app/animals.json"
    );

    const responseData = await response.data;

    const animals = [];

    for (const key in responseData) {
      const animal = {
        id: key,
        name: responseData[key].name,
        sex: responseData[key].sex,
        breed: responseData[key].breed,
        birthday: responseData[key].birthday,
        type: responseData[key].type,
        microchip: responseData[key].microchip,
        gallery: responseData[key].gallery,
        treatment: responseData[key].treatment,
      };
      animals.push(animal);
    }

    context.commit("setAnimals", animals);
  },
};
