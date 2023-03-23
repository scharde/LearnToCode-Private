import { IProcessedStyleSet, IStyle, mergeStyleSets } from "@fluentui/react";

interface ITaskListClassName {
  rootContainer: IStyle;
  taskItemContainer: IStyle;
  icon: IStyle;
}

const classNames: IProcessedStyleSet<ITaskListClassName> = mergeStyleSets({
  rootContainer: { marginTop: 20 },
  taskItemContainer: {
    maxHeight: 50,
    width: "100%",
    padding: 10,
    background: "lavender",
    margin: 5,
    selectors: {
      "&:hover": { background: "rgb(243, 242, 241)" },
    },
  },
  icon: {
    fontSize: 20,
    height: 20,
    width: 20,
    marginLeft: "5px",
    selectors: {
      "&:hover": { cursor: "pointer" },
    },
  },
});

export default classNames;
