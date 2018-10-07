export default [
  // { cmd: "mapCaret" },
  { cmd: "toggleFeatures", shouldDismissPopover: false },
  { cmd: "toggleTranslations", shouldDismissPopover: false },
  { cmd: "togglePrimers", shouldDismissPopover: false },
  // {
  //   // TODO preprocess this as needed
  //   cmd: "featureTypes",
  //   itemId: "featureTypes",
  //   //submenu of checklist of all feature types here
  //   submenu: [{ text: "TO DO...", disabled: true }]
  // },
  { cmd: "toggleParts", shouldDismissPopover: false },
  { cmd: "toggleCutsites", shouldDismissPopover: false },
  // TODO translations, cds feature translations?
  {
    cmd: "toggleOrfs",
    text: "ORFs",
    shouldDismissPopover: false,
    submenu: [
      {
        cmd: "toggleOrfs",
        shouldDismissPopover: false
      },
      {
        cmd: "toggleOrfTranslations",
        shouldDismissPopover: false
      },
      {
        cmd: "toggleCdsFeatureTranslations",
        shouldDismissPopover: false
      }
    ]
  },
  // { cmd: "complementary" },
  // { cmd: "spaces" },
  { divider: "" },
  {
    text: "Sequence Case",
    submenu: [
      {
        cmd: "toggleSequenceMapFontUpper",
        text: "Upper Case",
        shouldDismissPopover: false
      },
      {
        cmd: "toggleSequenceMapFontLower",
        text: "Lower Case",
        shouldDismissPopover: false
      }
    ]
  },
  { divider: "" },
  {
    text: "Full Sequence Translation",
    submenu: [
      {
        shouldDismissPopover: false,
        cmd: "sequenceAA_allFrames",
        text: "All Frames"
        // frameNumber: "all" // TODO ?
      },
      {
        shouldDismissPopover: false,
        cmd: "sequenceAA_frame1",
        text: "Frame 1"
        // frameNumber: 1 // TODO ?
      },
      {
        shouldDismissPopover: false,
        cmd: "sequenceAA_frame2",
        text: "Frame 2"
        // frameNumber: 2 // TODO ?
      },
      {
        shouldDismissPopover: false,
        cmd: "sequenceAA_frame3",
        text: "Frame 3"
        // frameNumber: 3 // TODO ?
      },
      {
        shouldDismissPopover: false,
        cmd: "sequenceAAReverse_allFrames",
        text: "All Reverse Frames"
        // frameNumber: "all" // TODO ?
      },
      {
        shouldDismissPopover: false,
        cmd: "sequenceAAReverse_frame1",
        text: "Frame -1"
        // frameNumber: 1 // TODO ?
      },
      {
        shouldDismissPopover: false,
        cmd: "sequenceAAReverse_frame2",
        text: "Frame -2"
        // frameNumber: 2 // TODO ?
      },
      {
        shouldDismissPopover: false,
        cmd: "sequenceAAReverse_frame3",
        text: "Frame -3"
        // frameNumber: 3 // TODO ?
      }
    ]
  },
  { divider: "" },

  { cmd: "toggleAxis", shouldDismissPopover: false },
  { cmd: "toggleAxisNumbers", shouldDismissPopover: false },
  { cmd: "toggleReverseSequence", shouldDismissPopover: false },
  { cmd: "toggleDnaColors", shouldDismissPopover: false },
  { cmd: "toggleLineageLines", shouldDismissPopover: false },

  { divider: "" },

  { cmd: "toggleFeatureLabels", shouldDismissPopover: false },
  { cmd: "togglePartLabels", shouldDismissPopover: false },
  { cmd: "toggleCutsiteLabels", shouldDismissPopover: false }
];
