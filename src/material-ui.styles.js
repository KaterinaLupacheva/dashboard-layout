export const styles = (theme) => ({
  root: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    color: "#000133",
  },
  appBar: {
    zIndex: 1,
    background: "#00022E",
    color: "#FC86AA",
  },
  toolbar: {
    display: "flex",
    width: "100%",
  },
  icon: {
    padding: "1vmax",
  },
  title: {
    margin: "auto",
  },
  container: {
    display: "flex",
    flex: 1,
  },
  drawer: {
    background: "#D8DCD6",
    width: "0px",
    transition: "width .7s",
  },
  paper: {
    width: "0px",
    zIndex: 0,
    position: "static",
  },
  opened: {
    width: "240px",
    position: "unset",
    overflowY: "unset",
  },
  main: {
    flex: 1,
    background: "rgb(247, 245, 245)",
    color: "black",
    padding: "20px",
  },
  footer: {
    background: "#00022E",
    height: "7vh",
    color: "#FC86AA",
    alignItems: "center",
  },
});
