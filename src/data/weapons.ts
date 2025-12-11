export type WeaponCategory = 'Assault Rifle' | 'SMG' | 'DMR' | 'Sniper Rifle' | 'Shotgun' | 'LMG' | 'Pistol';

export interface Weapon {
    id: string;
    name: string;
    category: WeaponCategory;
    ammo: string;
    baseDamage: number;
    fireRate: number; // RPM
    slots: number; // Inventory size (e.g. 2x4 = 8 slots)
    confidenceLevel: 'Confirmed' | 'High' | 'Medium' | 'Low';
    description: string;
    imageUrl?: string;
    status: 'confirmed' | 'rumored';
}

export const tools = [
    // ...
];

export const weapons: Weapon[] = [
    {
        id: "m416",
        name: "M416",
        category: "Assault Rifle",
        ammo: "5.56mm",
        baseDamage: 40,
        fireRate: 700,
        slots: 10, // 2x5
        confidenceLevel: "Confirmed",
        description: "The gold standard of reliability. Offers controllable recoil and high versatility with 5 attachment slots.",
        status: 'confirmed'
    },
    {
        id: "beryl-m762",
        name: "Beryl M762",
        category: "Assault Rifle",
        ammo: "7.62mm",
        baseDamage: 44,
        fireRate: 697,
        slots: 10,
        confidenceLevel: "High",
        description: "Hard-hitting 7.62mm AR with high recoil but devastating damage output. A rumored favorite for CQB.",
        status: 'confirmed'
    },
    {
        id: "vector",
        name: "Vector",
        category: "SMG",
        ammo: "9mm",
        baseDamage: 31,
        fireRate: 1100,
        slots: 6, // 2x3
        confidenceLevel: "High",
        description: "King of close-range DPS. Requires an extended mag to be truly effective. Shreds armor instantly.",
        status: 'confirmed'
    },
    {
        id: "awm",
        name: "AWM",
        category: "Sniper Rifle",
        ammo: ".300 Magnum",
        baseDamage: 105,
        fireRate: 35,
        slots: 12, // 2x6
        confidenceLevel: "Medium",
        description: "The only gun capable of one-shotting a Level 3 helmet. Expected to be high-tier crate loot only.",
        status: 'rumored'
    },
    {
        id: "kar98k",
        name: "Kar98k",
        category: "Sniper Rifle",
        ammo: "7.62mm",
        baseDamage: 79,
        fireRate: 30,
        slots: 10,
        confidenceLevel: "Confirmed",
        description: "Classic bolt-action sniper. High widespread availability makes it a staple for early extraction defense.",
        status: 'confirmed'
    }
];
