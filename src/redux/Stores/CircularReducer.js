let counterToActiviateLoadDataOnce = 0;

const initialState = {
  appliedFilters: [],
};

export const addCircularData = (payload) => ({
  type: "ADD_CIRCULAR_DATA",
  payload,
});

export const loadCircularData = (payload) => ({
  type: "LOAD_CIRCULAR_DATA",
  payload,
});
export const deleteCircularData = (payload) => ({
  type: "DELETE_CIRCULAR_DATA",
  payload,
});
export const modifyCircularData = (payload) => ({
  type: "MODIFY_CIRCULAR_DATA",
  payload,
});
export const filterCircularData = (payload) => ({
  type: "FILTER_CIRCULAR_DATA",
  payload,
});

const circularReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER_CIRCULAR_DATA":
      let {date,subject} = action.payload.value;
        console.log(date)
      state.filteredCirculars = state.circulars.filter((circular) => {
          console.log(date.getTime()==circular.date.getTime())
        return (
            (date.getTime()==circular.date.getTime()) &&
            circular.subject.toLowerCase().includes(subject) 
        );
      });

      if (!(subject || date))
        state.filteredCirculars = state.circulars;
      console.log(state.filteredCirculars)
      return Object.assign({}, state);

    case "ADD_CIRCULAR_DATA":
      console.log(action.payload.value)
      state.filteredCirculars.push(action.payload.value);
      console.log(state.filteredCirculars)
      return Object.assign({}, state, {
        filteredCirculars: state.filteredCirculars,
      });

    case "DELETE_CIRCULAR_DATA":
      state.filteredCirculars.splice(action.payload.value, 1);
      return Object.assign({}, state);

    case "MODIFY_CIRCULAR_DATA":
      let key = action.payload.value.key;

      state.filteredCirculars.map((circular) => {
        if (circular.key === key)
          return Object.assign(circular, action.payload.value);
        return circular;
      });

      return Object.assign({}, state);
    case "LOAD_CIRCULAR_DATA":
      const circulars = [
        
      ];

      counterToActiviateLoadDataOnce++;

      if (counterToActiviateLoadDataOnce === 1)
        return Object.assign({}, state, {
            circulars,
            filteredCirculars: circulars,
        });

      return Object.assign({}, state);

    default:
      return state;
  }
};

export default circularReducer;
