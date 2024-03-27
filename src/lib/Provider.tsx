"use client";

import { Provider } from "react-redux";
import StyledComponentsRegistry from "./AntdRegistry";
import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <SessionProvider>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </SessionProvider>
    </Provider>
  );
};

export default Providers;
