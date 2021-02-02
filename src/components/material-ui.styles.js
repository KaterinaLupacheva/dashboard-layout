export const styles = () => ({
  root: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    color: "#000133",
  },
  appBar: {
    background: "#00022E",
    color: "#FC86AA",
  },
  icon: {
    padding: "10px",
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
  closed: {
    width: "0px",
    position: "static",
  },
  opened: {
    width: "240px",
    position: "unset",
    overflowY: "unset",
  },
  main: {
    flex: 1,
    background: "#f7f5f5",
    color: "black",
  },
  footer: {
    background: "#00022E",
    height: "50px",
    color: "#FC86AA",
  },
});
