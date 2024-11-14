import { Routes, Route } from "react-router-dom";

import { scapulars, prayers, resources } from "@/constants";

import {
  Home,
  Prayers,
  Scapulars,
  ScapularRoot,
  Resources,
  FairUse,
  License,
  ScapularConstruction,
  ScapularMedal
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
          <Route path="/fair-use" element={<FairUse />} />
          <Route path="/license" element={<License />} />
          <Route path="/prayers">
            <Route index element={<Prayers />} />
            {prayers.map(i => {
              return (
                <Route path={i.route} element={i.element()} key={"prayer-"+i.label} />
              )
            })
          }
          </Route>
          <Route path="/scapulars">
            <Route index element={<Scapulars />} />
            <Route path="/scapulars/construction" element={<ScapularConstruction />} />
            <Route path="/scapulars/medal" element={<ScapularMedal />} />
            {
              scapulars.map(i => {
                  console.log(i)
                  return (
                    <Route path={i.route} element={<ScapularRoot/>} key={"scapular-"+i.label}>
                        <Route index element={i.element()} />
                        <Route path={i.route+'/blessings'} element={i.element.blessings()} />
                        <Route path={i.route+'/construction'} element={i.element.construction()} />
                        <Route path={i.route+'/requirements'} element={i.element.requirements()} />
                    </Route>
                  )
            })
          }
          </Route>
          <Route path="/resources">
            <Route index element={<Resources />} />
            {
              resources.map(i => {
                return (
                  <Route path={i.route} element={i.element()} key={"resource-"+i.label} />
                )
              })
            }
          </Route>
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
};

export default App;