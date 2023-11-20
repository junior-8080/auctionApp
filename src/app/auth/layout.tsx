import React from "react";

function Layout(props: any) {
  return (
    <div className="flex flex-col bg-image bg-no-repeat bg-cover bg-center h-screen w-full relative items-center justify-center">
      <div className="bg-teal w-full h-screen  absolute opacity-70 " />
      <div className={"relative z-10"}>{props.children}</div>
    </div>
  );
}

export default Layout;
