import { ComingSoon } from '@/components/common/ComingSoon';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "The Armory - Weapon Database & Stats",
    description: "Complete weapon database for PUBG: Black Budget. View damage stats, recoil patterns, and best loadouts for ARs, SMGs, and Snipers.",
};

export default function ArmoryPage() {
    return <ComingSoon
        title="Restricted Armory"
        description="Detailed weapon statistics and ballistics data for Project Black Budget are currently under classification. Check back after the Closed Alpha."
    />;
}
