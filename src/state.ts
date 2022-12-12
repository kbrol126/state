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
    console.log("soy el item que recibo del main " + item);
    const cs = state.getState();
    const resultado = cs.list.filter((i) => {
      return i !== item;
    });
    console.log(resultado);
  },
};

export { state };
