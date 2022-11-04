import { createStore } from 'vuex';

const what = {
  state: () => ({
    items: [
      {
        title: "Get online week",
        text: "Lorem ipsum dolor sit amet",
        cta: "#",
      },
      {
        title: "Learn my way",
        text: "Lorem ipsum dolor sit amet",
        cta: "#",
      },
      {
        title: "Make it click",
        text: "Lorem ipsum dolor sit amet",
        cta: "#",
      },
      {
        title: "Digital you",
        text: "Lorem ipsum dolor sit amet",
        cta: "#",
      },
    ]
  }),
}

export const store = createStore({
  modules: {
    what
  }
});
