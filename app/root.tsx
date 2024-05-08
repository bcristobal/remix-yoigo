import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import Header from "../app/components/header/Header";
import YoigoSection from "../app/components/yoigoSection/YoigoSection";
import Footer from "../app/components/footer/Footer";

import './global-styles.css';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
        <html lang="en">
          <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <Meta />
            <Links />
          </head>
          <body>
            <Header/> {/* Add the 'Header' component */}
            {children}
            <YoigoSection title={"Medidas para cuidar de los que ya están con nosotros"} />
            <Footer/> {/* Add the 'Footer' component */}
            <ScrollRestoration />
            <Scripts />
          </body>
        </html>
  );
}

export default function App() {
  return <Outlet />;
}
