const INITIAL_STATE = {
  exerciseList: [
    {
      name: "Pullups",
      subtitle: "Bodyweight",
      key: 0,
    },
  ],
  categoryList: [
    { label: "Bodyweight", value: "Bodywight", key: 0 },
    { label: "Weights", value: "Bodyweight", key: 1 },
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
