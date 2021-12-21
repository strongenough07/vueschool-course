

<script>
export default {
  functional: true,
  name: "UserAvatar",

  render(h) {
    return h("div", { attrs: { class: "avatar" } }, [
      h("figure", [
        h("img", {
          attrs: {
            src: "/avatar.png",
            alt: "Jane Doe",
          },
        }),
      ]),
    ]);
  },
};
</script>