import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function RedirectToTabs() {
    const router = useRouter();

    useEffect(() => {
        const timeout = setTimeout(() => {
        router.replace('/tabs');
        }, 0);

    return () => clearTimeout(timeout);
}, []);
}