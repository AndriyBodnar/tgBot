module.exports = {
  vaccinatedOptions: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          { text: "Yes", callback_data: "yes" },
          { text: "No", callback_data: "no" },
        ],
      ],
    }),
  },
  nastiaOptions: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: "About drugs", callback_data: "d" }],
        [{ text: "About Ze", callback_data: "pr" }],
      ],
    }),
  },

  nastia1Options: {
    reply_markup: JSON.stringify({
      inline_keyboard: [[{ text: "About drugs", callback_data: "d" }]],
    }),
  },
  nastia2Options: {
    reply_markup: JSON.stringify({
      inline_keyboard: [[{ text: "About Ze", callback_data: "pr" }]],
    }),
  },

  linkOptions: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "https://vaccination.covid19.gov.ua",
            url: "https://vaccination.covid19.gov.ua",
            callback_data: "link1",
          },
        ],
      ],
    }),
  },

  anotherCommandsOptions: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          { text: "Nastia", callback_data: `/nastia` },
          { text: "Info", callback_data: `/info` },
        ],
      ],
    }),
  },
};
