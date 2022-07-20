const colors = {
  components: {
    positiveButton: {
      background: {
        color: "#2EAD7C",
        opacity: 0.1,
      },
      fontColor: "#2EAD7C",
    },
    negativeButton: {
      background: "#FE3F7F",
      fontColor: "#E54848",
      outline: "#417463",
    },
    neutralButton: {
      background: "#FFFDCD",
      fontColor: "#FFAB5D",
    },
    arrivalButton: {
      fontColor: {
        normal: "#5F5186",
        opacityColor: "rgba(93, 86, 112, 0.7)",
      },
      borderColor: {
        normal: "#5D5670",
        opacityColor: "rgba(93, 86, 112, 0.7)",
      },
    },
    absentButton: {
      fontColor: {
        normal: "#E60012",
        opacityColor: "rgba(93, 86, 112, 0.7)",
      },
      borderColor: {
        normal: "#E74C3C",
        opacityColor: "rgba(93, 86, 112, 0.7)",
      },
    },
    tags: {
      birthdayTag: "rgba(255, 242, 175, 0.5)",
      wheelchairTag: "#AFE2FF",
      highchairTag: "#E1FFAF",
      tagColorList: ["#86E3CE", "#D0E6A5", "#FFDD94", "#FA897B", "#CCABDB", "#B5EAD7", "#E2F0CB"],
      HovertagColorList: [
        "#c4f1e7",
        "#ecf5db",
        "#ffeec9",
        "#fcc4bc",
        "#eaddf0",
        "#daf4eb",
        "#E2F0CB",
      ],
    },
    loginButton: {
      background: "#77A48E",
      hover: "#5F8C6A",
    },
    profileButton: {
      fontColor: "#fff",
    },
    queueContainer: {
      background: "#F7F7F7",
    },
    leftSideMenu: {
      background: "#e5e5e5",
      fontColor: "#606060",
    },
    modal: {
      fontColor: "#606060",
    },
  },
  page: {
    main: "#77A48E",
    secondary: "#EDF4F4",
  },
  fonts: {
    main: "#514C55",
    secondary: "#666666",
    activeRoute: "#516D98",
    inactiveRoute: "#C4C4C4",
    inactiveMenu: "#9A9A9A",
  },
  separateLine: {
    main: "#DFDFDF",
  },
};

const fontSizes = {
  xxxxs: "10px",
  xxs: "12px",
  sm: "14px",
  md: "16px",
  lg: "18px",
  "1x": "22px",
  "2x": "26px",
  "3x": "32px",
  "4x": "46px",
  "5x": "58px",
};

export default {
  colors,
  fontSizes,
};
