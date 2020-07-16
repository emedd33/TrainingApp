import { CATEGORY_LIST } from "../assets/const/CATEGORY";

const INITIAL_STATE = {
  exerciseList: [
    {
      name: "Pullups",
      subtitle: "Bodyweight",
      key: 0,
    },
  ],
  categoryList: CATEGORY_LIST,
  exerciseForm: {
    exercise: "",
    category: "",
    hasSubmitted: false,
    error: true,
    errorMessage: "",
  },
  routineList: [
    {
      name: "My routine",
      exercises: [
        {
          name: "Pullups",
          key: 0,
          reps: 10,
          sets: 3,
          tempo: 4010,
          weights: 0,
          break: 60,
        },
        {
          name: "Pushups",
          key: 1,
          reps: 10,
          sets: 3,
          tempo: 4010,
          weights: 5,
          break: 60,
        },
      ],
      key: 0,
    },
    {
      name: "My routine",
      exercises: [
        {
          name: "Pullups",
          reps: 10,
          sets: 3,
          tempo: 4010,
          weights: 5,
          break: 60,
        },
      ],
      key: 1,
    },
  ],
  selectedDetailItem: null,
  routineExerciseForm: {
    name: null,
    reps: null,
    sets: null,
    tempo: null,
    weights: null,
    break: null,
  },
};

export default INITIAL_STATE;
