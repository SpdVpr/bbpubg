import { ComingSoon } from '@/components/common/ComingSoon';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Intel Map - Coming Soon",
    description: "Interactive map of Coli Island for PUBG: Black Budget is coming soon.",
};

export default function IntelPage() {
    return <ComingSoon
        title="Satellite Offline"
        description="High-resolution satellite imagery of Coli Island is currently being processed. Interactive map and extraction points will be available soon."
    />;
}
