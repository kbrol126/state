const state = {
  data: {
    list: [],
  },
  listeners: [],

  getState() {
    return this.data;
  },

  setState(newState) {
    this.data = newState;
    for (const callback of this.listeners) {
      callback();
    }
  },
  suscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
  addItem(item: string) {
    const cs = state.getState();
    cs.list.push(item);
    this.setState(cs);
    console.log(cs);
  },
  removeItem(item: string) {
    console.log("soy el item que recibo del main" + item, typeof item);
    const cs = state.getState();
    console.log("soy el console del remove  " + cs.list);
    const nuevo = state.getState().list.filter((items) => items != item);
    console.log("soy nuevo" + nuevo);
  },
};

export { state };
