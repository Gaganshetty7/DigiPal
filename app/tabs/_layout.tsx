import BottomNav from "@/components/BottomNav";
import NavPanel from "@/components/NavPanel";
import SideDrawer from "@/components/SideDrawer";
import { Slot, useRouter, usePathname } from "expo-router";
import { useEffect, useState } from "react";
import { BackHandler, View, Pressable, StyleSheet, Text } from "react-native";
import { BlurView } from "expo-blur";

export default function TabsLayout() {
  const router = useRouter();
  const pathname = usePathname();

  const [drawerOpen, setDrawerOpen] = useState(false);

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
      <NavPanel onMenuPress={() => setDrawerOpen(true)} />
      <Slot />
      <BottomNav />
      
      {/* Render the sidebar if it's open */}
      {drawerOpen && (
        <View style={StyleSheet.absoluteFill}>
          {/* Blur the background */}
          <BlurView intensity={100} tint="light" style={StyleSheet.absoluteFill} />

          {/* Catch all touches to close sidebar */}
          <Pressable
            style={StyleSheet.absoluteFill}
            onPress={() => setDrawerOpen(false)}
          />

          {/* Render the actual sidebar */}
          <SideDrawer onClose={() => setDrawerOpen(false)} />
        </View>
      )}
    </>
    );
}
