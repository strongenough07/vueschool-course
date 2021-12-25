import shop from "@/api/shop";

export default {
  state: { items: [] },
  getters: {
    availableProducts(state, getters) {
      return state.items.filter(product => product.inventory > 0);
    },

    productIsInStock() {
      return product => {
        return product.inventory > 0;
      };
    }
  },
  mutations: {
    setProducts(state, items) {
      state.items = items;
    },

    decrementProductInventory(state, product) {
      product.inventory--;
    }
  },
  actions: {
    fetchProducts({ commit }) {
      return new Promise((resolve, reject) => {
        // make the call
        // call setProducts mutation
        shop.getProducts(items => {
          commit("setProducts", items);
          resolve();
        });
      });
    }
  }
};
