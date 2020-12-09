import React from "react";
import { themes as storybookThemes } from "@storybook/theming";
import { select } from "@storybook/addon-knobs";

import * as dsPreview from "@design-systems/storybook/preview";

const brand = {
  brandTitle: "{{name}} Storybook",
  brandUrl: "{{repoUrl}}",
};

const compare = (order) => (a, b) => {
  let first = order.findIndex((str) => str === a.toLowerCase());
  let second = order.findIndex((str) => str === b.toLowerCase());

  if (first === -1) first = order.length;
  if (second === -1) second = order.length;

  return first < second ? -1 : second < first ? 1 : 0;
};

const sectionOrder = ["getting started", "components", "utilities"];

const sectionCompare = compare(sectionOrder);

const storyOrder = [
  "welcome",
  "gallery",
  "overview",
  "playground",
  "visual guide",
  "features",
  "examples",
];

const storyCompare = compare(storyOrder);

export const decorators = [...dsPreview.decorators];

export const parameters = {
  ...dsPreview.parameters,
  jsx: { skip: 0 },
  options: {
    showPanel: true,
  },
  options: {
    showPanel: true,
    panelPosition: "right",
    storySort: ([, a], [, b]) => {
      const [aSection, aComponent, aType] = a.kind.split("/");
      const [bSection, bComponent, bType] = b.kind.split("/");

      if (aComponent === bComponent) {
        const aFolderDepth = a.kind.replace("/Overview", "").split("/").length;
        const bFolderDepth = b.kind.replace("/Overview", "").split("/").length;

        // Make sure folder inside folders come last
        if (aFolderDepth !== bFolderDepth) {
          return aFolderDepth - bFolderDepth;
        }

        return storyCompare(aType || a.name, bType || b.name);
      }

      if (aSection === bSection) {
        if (aSection === "Getting Started") {
          return storyCompare(aComponent, bComponent);
        }

        // Sort components alphabetically
        return aComponent.localeCompare(bComponent);
      }

      // Sort sections according to order defined above
      return sectionCompare(aSection, bSection);
    },
  },
};
