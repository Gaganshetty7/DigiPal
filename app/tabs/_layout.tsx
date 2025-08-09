import BottomNav from "@/components/BottomNav";
import NavPanel from "@/components/NavPanel";
import SideDrawer from "@/components/SideDrawer";
import { Slot, useRouter, usePathname } from "expo-router";
import { useEffect, useState } from "react";
import { BackHandler, View, Pressable, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";

export default function TabsLayout() {
  const router = useRouter();
  const pathname = usePathname();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const isChatScreen = pathname.includes('/chat/');

  useEffect(() => {
    const backAction = () => {

      // If on a chat screen, go back to inbox tab
      if (isChatScreen) {
        router.push('/tabs/inbox_tab');
        return true;
      }

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
  }, [pathname, isChatScreen, router]);

  return(
    <>
      {!isChatScreen &&<NavPanel onMenuPress={() => setDrawerOpen(true)} />}
      <Slot />
      {!isChatScreen && <BottomNav />}
      
      {/* Render the sidebar if it's open */}
      {drawerOpen && !isChatScreen && (
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
