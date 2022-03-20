import React from "react";

import Chip from "@mui/material/Chip";

import MouseIcon from "@mui/icons-material/Mouse";
import LaptopIcon from "@mui/icons-material/Laptop";
import MonitorIcon from "@mui/icons-material/Monitor";
import KeyboardIcon from "@mui/icons-material/Keyboard";

export default function WorkstationChip({ type }) {
  function switchType() {
    switch (
      type // Monitor, Laptop, Mouse, Keyboard
    ) {
      case "Mouse":
        return <Chip icon={<MouseIcon />} label="Mouse" />;
      case "Laptop":
        return <Chip icon={<LaptopIcon />} label="Laptop" />;
      case "Monitor":
        return <Chip icon={<MonitorIcon />} label="Monitor" />;
      case "Keyboard":
        return <Chip icon={<KeyboardIcon />} label="Keyboard" />;
    }
  }
  return switchType();
}
