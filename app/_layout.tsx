import BottomNav from "@/components/BottomNav";
import NavPanel from "@/components/NavPanel";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <NavPanel />
      <Stack screenOptions={{headerShown: false}} />
      <BottomNav />
    </>
  );
}
