import BottomNav from "@/components/BottomNav";
import NavPanel from "@/components/NavPanel";
import { Slot, useRouter, usePathname } from "expo-router";
import { useEffect } from "react";
import { BackHandler } from "react-native";

export default function TabsLayout() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const backAction = () => {
      if (pathname !== "/tabs") {
        router.replace("/tabs");
        return true;
      }
      return false; // Allow app to close
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove(); // Cleanup on unmount
  }, [pathname]);

  return(
    <>
      <NavPanel/>
      <Slot />
      <BottomNav />
    </>
    );
}
