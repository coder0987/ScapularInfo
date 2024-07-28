import { Routes, Route } from "react-router-dom";

import {
  Home,
  Prayers,
  SevenDolours,
  Scapulars,
  BrownScapular,
  Resources,
  LittleOffice,
} from "@/_root/pages";
import RootLayout from "./_root/RootLayout";

import { Toaster } from "@/components/ui/toaster";

import "./globals.css";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/prayers">
            <Route index element={<Prayers />} />
            <Route path="/prayers/seven-dolours" element={<SevenDolours />} />
          </Route>
          <Route path="/scapulars">
            <Route index element={<Scapulars />} />
            <Route path="/scapulars/brown-scapular" element={<BrownScapular />} />
          </Route>
          <Route path="/resources">
            <Route index element={<Resources />} />
            <Route path="/resources/little-office" element={<LittleOffice />} />
          </Route>
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
};

export default App;