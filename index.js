import { Platform } from "react-native";

import MovToMp4Ios from "./index.ios";
import MovToMp4Android from "./index.android";

const MovToMp4 = Platform.OS === "ios"
  ? MovToMp4Ios
  : MovToMp4Android;

export default MovToMp4;
