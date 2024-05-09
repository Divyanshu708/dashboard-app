import ContentItem from "./ContentItem";

export default function ContentPage() {
  return (
    <>
      <div className="contentPage">
        <div className="hd">
          <div className="hd1">
            <p style={{ marginLeft: "4.5rem" }}>CUSTOMER NAME</p>
          </div>
          <p style={{ paddingRight: "10rem" }}>DATE</p>
          <div className="hd2">
            <p>JOB NUMBER</p>
            <p>MOBILE NUMBER</p>
            <p style={{ marginRight: "0.4rem" }}>STATUS</p>
          </div>
          <p style={{ marginRight: "16rem" }}>ACTIONS</p>
        </div>
      </div>

      <div className="contentContainer">
        <ContentItem />
        <ContentItem />
        <ContentItem />
        <ContentItem />
        <ContentItem />
        <ContentItem />
      </div>
    </>
  );
}
