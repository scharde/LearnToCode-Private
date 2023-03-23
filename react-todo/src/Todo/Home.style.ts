import { IStyle } from "@fluentui/react";
import {
  IProcessedStyleSet,
  mergeStyleSets,
} from "@fluentui/react/lib/Styling";

export interface IHomeStyle {
  homeContainer: IStyle;
  header: IStyle;
  pivotContainer: IStyle;
  pivotRoot: IStyle;
}

const homeStyle: IProcessedStyleSet<IHomeStyle> = mergeStyleSets({
  homeContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "80%",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  },
  header: {
    backgroundColor: "cadetblue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  pivotContainer: {
    margin: 25,
  },
  pivotRoot: {
    display: "flex",
    justifyContent: "center",
  },
});

export default homeStyle;
