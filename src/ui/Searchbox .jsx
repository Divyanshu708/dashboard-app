import searchIcon from "../assets/search.svg";

export default function Searchbox() {
  return (
    <div className="searchContainer">
      <div className="searchBox">
        <img
          src={searchIcon}
          style={{ marginLeft: "0.4rem", scale: "80%" }}
          alt=""
        ></img>
        <input
          placeholder="Search...."
          className="search"
          type="text"
          style={{
            width: "100%",
            marginLeft: "4px",
            backgroundColor: "#00000000",
            fontColor: "#f87060",
          }}
        ></input>
      </div>
    </div>
  );
}
