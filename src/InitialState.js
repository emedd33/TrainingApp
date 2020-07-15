const INITIAL_STATE = {
  exerciseList: [
    {
      name: "Pullups",
      subtitle: "Bodyweight",
    },
  ],
  categoryList: [
    { label: "Bodyweight", value: "Bodywight" },
    { label: "Weights", value: "Bodyweight" },
  ],
  exerciseForm: {
    exercise: "",
    category: "",
    hasSubmitted: false,
    error: false,
    errorMessage: "",
  },
};

export default INITIAL_STATE;
