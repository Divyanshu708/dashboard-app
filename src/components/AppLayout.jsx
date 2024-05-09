import { Breadcrumb, Layout, Menu, theme } from "antd";
import React from "react";
import Background from "../assets/bg.png";
import PaginationBar from "./PaginationBar";
import Searchbox from "./Searchbox ";
import Header from "../ui/Header";
import SliderContent from "./SliderContent";
import ContentPage from "../components/ContentPage";

const { Sider } = Layout;

export default function AppLayout() {
  return (
    <div>
      <Layout style={{ height: "100vh", width: "100vw" }}>
        <Header />

        <Layout>
          <Sider
            width={230}
            style={{
              background: "#f3f3f3",
            }}
            className="sliderBox"
          >
            <SliderContent />
          </Sider>
          <Layout
            style={{
              padding: "0 24px 24px",
              backgroundImage: `url(${Background})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
          >
            <h1 className="customerh1">Customer</h1>

            <div className="content-tab">
              <Searchbox />
              <ContentPage />
              <PaginationBar />
            </div>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}
