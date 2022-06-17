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
      fontColor: "#5F5186",
      borderColor: {
        normal: "#5D5670",
        opacityColor: "rgba(93, 86, 112, 0.7)",
      },
    },
    absentButton: {
      fontColor: "#E74C3C",
      borderColor: "#E60012",
    },
    tags: {
      birthdayTag: "#FFF2AF",
      wheelchairTag: "#AFE2FF",
      highchairTag: "#E1FFAF",
      tagColorList: ["#86E3CE", "#D0E6A5", "#FFDD94", "#FA897B", "#CCABDB", "#B5EAD7", "#E2F0CB"],
    },
    loginButton: {
      background: "#77A48E",
      hover: "#5F8C6A",
    },
    queueContainer: {
      background: "#F7F7F7",
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
