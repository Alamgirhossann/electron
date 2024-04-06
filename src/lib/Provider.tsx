"use client";

import { Provider } from "react-redux";
import StyledComponentsRegistry from "./AntdRegistry";
import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { ContextProvider } from "@/contexts/ContextProvider";
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <SessionProvider>
        <ContextProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ContextProvider>
      </SessionProvider>
    </Provider>
  );
};

export default Providers;
