import { ComingSoon } from '@/components/common/ComingSoon';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Theorycrafting - Coming Soon",
    description: "Loadout builder for PUBG: Black Budget is coming soon.",
};

export default function LoadoutPage() {
    return <ComingSoon
        title="Theorycrafting Unavailable"
        description="The loadout builder is currently being calibrated for the Alpha patch. Configure your operator's gear and perks once the database is live."
    />;
}
