export interface Post {
    slug: string;
    title: string;
    excerpt: string;
    content?: string;
    date: string;
    category: 'Leak' | 'Official' | 'Guide' | 'Rumor';
    author: string;
}

export const posts: Post[] = [
    {
        slug: "second-week-closed-alpha-notice",
        title: "PUBG: Black Budget — 2nd Week Closed Alpha Test Notice",
        excerpt: "As announced earlier, the Week 2 session of the Closed Alpha Test is scheduled to begin soon. Please review the details and updates below.",
        date: "2025-12-19",
        category: "Official",
        author: "PUBG Team",
        content: `
            <p><strong>Hello @everyone,</strong></p>
            <p>As announced earlier, the Week 2 session of the Closed Alpha Test is scheduled to begin soon.<br/>
            Please review the details and updates below.</p>

            <h3>Test Build Notes</h3>
            <p>This build is an Alpha version, and various technical issues, including crashes, bugs, and other errors, may occur during gameplay.</p>
            <ul>
                <li>If you encounter any bugs or errors, please report them via the official Discord channel ( <strong>⁠🪲│bug-report</strong> ).</li>
                <li>Make sure to review the minimum and recommended system requirements for a smoother experience.</li>
            </ul>

            <h3>Test Schedule</h3>
            <ul>
                <li><strong>Week 2:</strong> December 19, 01:00 ~ December 21, 23:59 PST</li>
            </ul>
            <p><em>Raids will be open until 1 hour before the session ends; after that, only the Hideout will remain available.</em></p>

            <h3>Week 2 Updates</h3>
            
            <h4 class="text-white font-bold mt-4 mb-2">Strengthened Anti-Cheat Measures</h4>
            <p>To prevent disruptions caused by unauthorized programs, we have implemented new security solutions and enhanced detection patterns.</p>
            <p>These improvements were applied late last week and resulted in retroactive sanctions on a total of <strong>1,673 accounts</strong>. Additional processes have been established to enable faster and stricter responses throughout Week 2.</p>
            <p>If you encounter a player suspected of using an unauthorized program, please report them via the official Discord channel ( <strong>⁠😡│report-a-player</strong> ) with their account name and, if possible, supporting video evidence. Your reports greatly help us respond more quickly.</p>

            <h4 class="text-white font-bold mt-4 mb-2">Drops Event Closure</h4>
            <p>Due to participation far exceeding expectations, all prepared key quantities were fully claimed, and the Drops event has been closed earlier than planned.</p>
            <p>However, playtest access continues to be granted in waves to users who applied through the Steam Playtest Request Access. Please check your Steam Library and linked email for updates.</p>

            <p>We will continue improving the experience to provide a more stable and enjoyable test environment.<br/>
            Thank you for your continued interest and support.</p>

            <hr class="border-slate-800 my-8" />

            <h3>Additional Play Support Rewards</h3>
            <p>To compensate for the inconvenience experienced during the first week, we have prepared the following rewards for Week 1 participants. Rewards can be claimed from your in-game mailbox upon logging in.</p>

            <div class="grid gap-4 mt-6">
                <div class="bg-slate-800/50 border border-slate-700 p-4 rounded-lg">
                    <h4 class="text-yellow-400 font-bold uppercase mb-2">Stygian Money Package</h4>
                    <ul class="space-y-1 text-slate-300 text-sm">
                        <li class="flex items-center gap-2"><span class="text-cyan-400">◆</span> 50,000 obol</li>
                    </ul>
                </div>

                <div class="bg-slate-800/50 border border-slate-700 p-4 rounded-lg">
                    <h4 class="text-orange-400 font-bold uppercase mb-2">XCAL Weapon Package</h4>
                    <ul class="space-y-1 text-slate-300 text-sm">
                        <li class="flex items-center gap-2"><span class="text-cyan-400">◆</span> Spear 3</li>
                        <li class="flex items-center gap-2"><span class="text-cyan-400">◆</span> Spear 3 5.56x45 Magazine x 3</li>
                        <li class="flex items-center gap-2"><span class="text-cyan-400">◆</span> Spear 3 Light Stock</li>
                        <li class="flex items-center gap-2"><span class="text-cyan-400">◆</span> Spear 3 Modular Handguard</li>
                        <li class="flex items-center gap-2"><span class="text-cyan-400">◆</span> Spear 3-XC Long Barrel</li>
                        <li class="flex items-center gap-2"><span class="text-cyan-400">◆</span> XCal Deheater</li>
                    </ul>
                </div>

                <div class="bg-slate-800/50 border border-slate-700 p-4 rounded-lg">
                    <h4 class="text-cyan-400 font-bold uppercase mb-2">Gnosys Weapon Package</h4>
                    <ul class="space-y-1 text-slate-300 text-sm">
                        <li class="flex items-center gap-2"><span class="text-cyan-400">◆</span> AKN-32-GS</li>
                        <li class="flex items-center gap-2"><span class="text-cyan-400">◆</span> AKN-12 5.45x39 Drum Magazine x 1</li>
                        <li class="flex items-center gap-2"><span class="text-cyan-400">◆</span> AKN-12 Custom Pistol Grip</li>
                        <li class="flex items-center gap-2"><span class="text-cyan-400">◆</span> AKN-32-GS Heavy Stock</li>
                        <li class="flex items-center gap-2"><span class="text-cyan-400">◆</span> AKN-32-GS Compensator</li>
                        <li class="flex items-center gap-2"><span class="text-cyan-400">◆</span> Prototype Curved Foregrip</li>
                    </ul>
                </div>
                
                <div class="bg-slate-800/50 border border-slate-700 p-4 rounded-lg">
                    <h4 class="text-emerald-400 font-bold uppercase mb-2">Baehko Weapon Package</h4>
                    <ul class="space-y-1 text-slate-300 text-sm">
                        <li class="flex items-center gap-2"><span class="text-cyan-400">◆</span> RDB</li>
                        <li class="flex items-center gap-2"><span class="text-cyan-400">◆</span> RDB 5.56x45 Magazine x 3</li>
                        <li class="flex items-center gap-2"><span class="text-cyan-400">◆</span> RDB Cutlass Pistol Grip</li>
                        <li class="flex items-center gap-2"><span class="text-cyan-400">◆</span> RDB Heavy Stock</li>
                        <li class="flex items-center gap-2"><span class="text-cyan-400">◆</span> RDB Long Barrel</li>
                        <li class="flex items-center gap-2"><span class="text-cyan-400">◆</span> Reinforced RDB Compensator</li>
                        <li class="flex items-center gap-2"><span class="text-cyan-400">◆</span> RDB Burst-Fire</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        slug: "compensation-apology-notice",
        title: "Compensation & Apology Notice regarding Test Issues",
        excerpt: "We sincerely apologize for recent authorized program issues and server instability. Compensation details inside.",
        date: "2025-12-14",
        category: "Official",
        author: "PUBG Team",
        content: `
            <p><strong>Hello @Contractor,</strong></p>
            <p>We sincerely apologize for the inconvenience caused by recent issues, including unauthorized programs, temporary maintenance, and crashes, which have disrupted normal test participation and overall gameplay experience.</p>
            <p>Although we have issued several notices and apologies, we understand that these messages alone do not fully address the frustration and disruptions you have experienced.</p>

            <h3>Action Against unauthorized Programs</h3>
            <p>The impact of unauthorized programs, in particular, has significantly undermined the gameplay environment, and we take this matter extremely seriously.</p>
            <p>To ensure a fair testing environment, we have strengthened our enforcement criteria and procedures, and these enhanced measures are now being applied immediately to deliver faster and more decisive actions against the use of unauthorized programs.</p>

            <h3>Compensation Details</h3>
            <p>To address the inconvenience experienced during gameplay, we have prepared compensation. Please refer to the details below.</p>
            
            <ul>
                <li><strong>Target:</strong> Players who have created in-game accounts before the Distribution Time</li>
                <li><strong>Distribution Time:</strong> 14. prosince 2025 11:00</li>
                <li><strong>Note:</strong> The rewards will be distributed sequentially</li>
            </ul>

            <div class="bg-yellow-500/10 border border-yellow-500/30 p-4 rounded-lg my-6">
                <h4 class="text-yellow-400 font-bold uppercase mb-2">Rewards Package</h4>
                <ul class="space-y-1 text-slate-300">
                    <li class="flex items-center gap-2"><span class="text-cyan-400">◆</span> Currency: <strong>50,000</strong></li>
                    <li class="flex items-center gap-2"><span class="text-cyan-400">◆</span> Clearance Level 1 Key: <strong>5x</strong></li>
                    <li class="flex items-center gap-2"><span class="text-cyan-400">◆</span> Clearance Level 2 Key: <strong>5x</strong></li>
                    <li class="flex items-center gap-2"><span class="text-cyan-400">◆</span> Clearance Level 3 Key: <strong>5x</strong></li>
                    <li class="flex items-center gap-2"><span class="text-cyan-400">◆</span> Clearance Level 4 Key: <strong>3x</strong></li>
                </ul>
            </div>

            <p>We will continue working to improve and deliver a more stable and enjoyable gameplay experience.</p>
            <p>Thank you.</p>
        `
    },
    {
        slug: "drops-changes-announcement",
        title: "PUBG: Black Budget Announcement on Drops Changes",
        excerpt: "We are announcing a change in the way Twitch Drops are conducted to help you receive rewards more smoothly.",
        date: "2025-12-13",
        category: "Official",
        author: "PUBG Team",
        content: `
            <p><strong>Hello, this is the PUBG: Black Budget team.</strong></p>
            <p>Thank you for your support for Drops, and to help you receive rewards more smoothly, we are announcing a change in the way Twitch Drops are conducted as follows.</p>

            <h3>Twitch Drops mechanics will be changed as below:</h3>
            <ul>
                <li>07:00 PST reset will be removed.</li>
                <li>During the first week test period, the Drops reward quantity will be reset daily at 04:00a, 11:00a, 22:00p PST (Pacific Standard Time).</li>
            </ul>
        `
    },
    {
        slug: "closed-alpha-test-begins",
        title: "PUBG: Black Budget Closed Alpha Test Begins Today",
        excerpt: "The long wait is over. Coli Island awaits. Check the schedule, participation details, and join the extraction.",
        date: "2025-12-12",
        category: "Official",
        author: "TecK",
        content: `
            <img src="/images/PBB_Screenshot_04.png" alt="PUBG Black Budget Alpha Test" class="w-full rounded-sm border border-slate-800 mb-8" />
            <p><strong>Hello @everyone!</strong></p>
            <p>The long wait is finally over — the <strong>PUBG: Black Budget Closed Alpha Test</strong> begins today, in just a few moments!</p>
            <p>You’ve heard the name whispered across the community — <strong>Coli Island</strong>. Now it’s your turn to step into that world for the very first time. The secrets buried deep within the island await your discovery.</p>
            
            <h3>Test Schedule</h3>
            <ul>
                <li><strong>Week 1:</strong> December 12, 01:00 ~ December 14, 23:59 PST</li>
                <li><strong>Week 2:</strong> December 19, 01:00 ~ December 22, 23:59 PST</li>
            </ul>
            <p><em>Raids will be accessible until 1 hour before the session ends; after that, only the Hideout will remain available.</em></p>

            <h3>How to Participate</h3>
            <p>Players who applied for “Request Access” on the Steam Store page are being granted access in waves. Check your Steam Library or registered email to see if you’ve been selected.</p>

            <h3>Notes</h3>
            <ul>
                <li>This build is an Alpha version, so technical issues may occur.</li>
                <li>If you encounter any bugs or errors, please report them via the official Discord channel.</li>
                <li>Make sure to review the minimum and recommended system requirements for a smoother experience.</li>
            </ul>

            <p>The Closed Alpha is <strong>NDA-free</strong>, meaning you can freely stream, record, and share your moments, from intense firefights to tense extractions and everything in between.</p>

            <p>Now, we will see you soon on Coli Island.</p>
        `
    },
    {
        slug: "drops-notice-campaign",
        title: "PUBG: Black Budget Drops Notice",
        excerpt: "Important info regarding the Drops campaign. Codes reset daily at 16:00.",
        date: "2025-12-11",
        category: "Official",
        author: "Krafton",
        content: `
            <p><strong>Hello players,</strong></p>
            <p>Here's some important information regarding the Drops campaign starting tomorrow.</p>

            <h3>Game Code Redemption</h3>
            <ul>
                <li>You can earn Drops rewards by watching streams from Drops-enabled creators on Chzzk and Twitch for at least 30 minutes.</li>
                <li>Please note that codes are available in limited quantities daily, and code availability resets at 16:00 each day.</li>
                <li>We will notify you separately when the daily quantity is exhausted, so please keep an eye on our announcements.</li>
                <li>If you've met the Drops requirements, you can claim your code immediately upon reset without additional watch time.</li>
                <li>The Drops campaign may be discontinued without prior notice.</li>
            </ul>
        `
    },
    {
        slug: "twitch-drops-guide",
        title: "Closed Alpha Test FAQs & Gameplay Tips",
        excerpt: "How to apply, drops guide, known issues, and gameplay tips for the Closed Alpha.",
        date: "2025-12-11",
        category: "Guide",
        author: "TecK",
        content: `
            <p>Hello, players! We've compiled frequently asked questions and answers to help you prepare for your test participation.</p>
            
            <h3>How to Apply</h3>
            <p><strong>1. Steam Playtest Application:</strong> Visit the Store Page and click "Request Access".</p>
            <p><strong>2. Twitch/Chzzk Drops:</strong> Watch approved streamers. Important: Link your Krafton ID first!</p>

            <h3>Gameplay Tips</h3>
            <p>Check the <a href="#" class="text-cyan-400">Gameplay Tips</a> channel in Discord for:</p>
            <ul>
                <li>Beginner's Guide</li>
                <li>Combat Tips and Strategies</li>
                <li>Extraction Methods</li>
            </ul>

            <h3>Known Issues</h3>
            <p>The game is in Alpha. Please report bugs via Discord. Known issues include specific crashes and audio glitches.</p>
        `
    },
    {
        slug: "interview-recruitment",
        title: "Interviewee Recruitment Notice",
        excerpt: "We are recruiting players for 30-min interview sessions. Participants receive G-COIN.",
        date: "2025-12-08",
        category: "Official",
        author: "TecK",
        content: `
            <p>The PUBG: Black Budget development team is recruiting players for interview sessions to gather direct feedback.</p>
            <p>Participants who complete the interview will receive a small amount of PUBG G-COIN as a token of appreciation.</p>
            
            <h3>Details</h3>
            <ul>
                <li><strong>Dates:</strong> Dec 17 (Wed) ~ Dec 22 (Mon)</li>
                <li><strong>Format:</strong> Zoom interview, approx 30 mins.</li>
                <li><strong>Languages:</strong> Korean or English.</li>
            </ul>
            <p>Video is optional. Voice only is accepted.</p>
        `
    },
    {
        slug: "playtest-access-rolling-out",
        title: "Playtest Access is Now Rolling Out!",
        excerpt: "A big thank you to everyone who applied! Access is now being granted via Steam. Check your library or get keys via Twitch Drops.",
        date: "2025-12-11",
        category: "Official",
        author: "PUBG: BB Team",
        content: `
            <p><strong>Hello Contractors,</strong></p>
            <p>A big thank you to everyone who have applied for the Closed Alpha. The response has far exceeded our expectations, and we deeply appreciate your support.</p>
            
            <h3>Steam Access Granted</h3>
            <p>To honor the enthusiasm, Playtest access is now being granted via Steam. Please check your Steam library or the email linked to your account to see if access has been granted.</p>
            <p>Due to the extraordinary level of interest, we kindly ask for your understanding that not everyone can be invited. We may also limit the number of participants throughout the test period for a better gaming experience. Access distribution may resume or end without prior notice.</p>

            <h3>Twitch & Chzzk Drops</h3>
            <p>If you haven’t received access, you can still earn test keys through <strong>Twitch and Chzzk Drops</strong>.</p>
            <p>Drops integration site is now open, so link your platform and KRAFTON ID ahead of time to ensure you're eligible when Drops start. But please note that quantities are limited, and Drops may also end without prior notice.</p> 
            <p><a href="https://drops.krafton.com/en/pubgblackbudget" target="_blank">PUBG: Black Budget Drops Website</a></p>

            <p>Thank you for your interest, patience, and incredible enthusiasm. We hope to see you soon on Coli Island.</p>
        `
    },
    {
        slug: "announcing-closed-alpha",
        title: "PUBG: Black Budget — Closed Alpha Test Announcement",
        excerpt: "We’re holding our first external playtest! Closed Alpha Test starts Dec 12. Check full schedule and system requirements.",
        date: "2025-12-08",
        category: "Official",
        author: "Krafton",
        content: `
            <p>Hello Contractors, and welcome to the world of <strong>PUBG: Black Budget</strong>!</p>
            <p>With the official reveal of the game, we’re holding our first external playtest - and applications for this Closed Alpha Test start today. The test will run over two weeks, from Friday to Monday each week.</p>
            <p>This Closed Alpha Test will run <strong>without an NDA</strong>, allowing participants to share, stream, and discuss freely.</p>

            <hr />

            <h2>CLOSED ALPHA TEST INFO</h2>
            <p><strong>Main Test Sessions:</strong></p>
            <ul>
                <li>Week 1: 12/12(Fri) 01:00 ~ 12/14(Sun) 23:59 PST</li>
                <li>Week 2: 12/19(Fri) 01:00 ~ 12/21(Sun) 23:59 PST</li>
            </ul>
            <p><strong>Regions:</strong> North America, Europe, and Asia</p>
            <p><strong>Supported Languages:</strong> English, Korean, Chinese, Russian</p>
            <p><strong>Mode:</strong> FPP only</p>

            <hr />

            <h2>TEST OBJECTIVE</h2>
            <p>This Closed Alpha Test focuses on:</p>
            <ul>
                <li>early-game systems</li>
                <li>combat pacing</li>
                <li>extraction balance</li>
                <li>player progression</li>
            </ul>
            <p>Please keep in mind that the game is in an Alpha state - technical issues may occur. In such cases, feel free to report them via our Discord channels.</p>

            <hr />

            <h2>MINIMUM SYSTEM REQUIREMENTS</h2>
            <ul>
                <li><strong>OS:</strong> Windows 10 (Minimum), Windows 11 (Recommended)</li>
                <li><strong>CPU:</strong> 6-Core Processor (Intel or AMD equivalent)</li>
                <li><strong>GPU:</strong> NVIDIA RTX 2060 / AMD equivalent (8GB VRAM minimum)</li>
                <li><strong>RAM:</strong> 16 GB</li>
                <li><strong>DirectX:</strong> Version 12</li>
                <li><strong>Disk Space:</strong> 30 GB</li>
                <li><strong>Internet:</strong> Stable broadband connection required</li>
            </ul>

            <hr />

            <h2>FAQ</h2>
            <p><strong>Q: How will I know if I’ve been invited to Steam Playtest?</strong><br/>
            You will get a notification and an email from Steam. You can also check your status directly on the PUBG: Black Budget Steam store page.</p>

            <p><strong>Q: Is the test under NDA?</strong><br/>
            No. Players are free to stream, record, and share gameplay content during the Closed Alpha Test.</p>

            <p><strong>Q: Will there be other ways to join the test, other than by signing?</strong><br/>
            Yes! Once the test starts, players will be able to earn test keys through Twitch and Chzzk Drops. To earn Keys, you must first link your Krafton ID to your streaming platform ID.</p>
        `
    },
    {
        slug: "release-window-2026",
        title: "Project Black Budget: Late 2026 Release Window Likely",
        excerpt: "Analysis of Krafton's Q3 financial report suggests the extraction shooter has moved to the next phase of development.",
        date: "2025-12-05",
        category: "Official",
        author: "IntelOps",
        content: "<p>Analysis of Krafton's Q3 financial report suggests the extraction shooter has moved to the next phase of development.</p>"
    },
    {
        slug: "inventory-grid-leak",
        title: "Inventory Grid System Leaked: What 5x10 Means for Loot",
        excerpt: "A blurry screenshot from a QA tester reveals the new inventory management UI. Time to practice your Tetris skills.",
        date: "2025-12-08",
        category: "Leak",
        author: "Dataminer_X",
        content: "<p>A blurry screenshot from a QA tester reveals the new inventory management UI.</p>"
    },
    {
        slug: "neon-city-map",
        title: "Neon City Map Concept Art Breakdown",
        excerpt: "Verticality is key in the new urban map concept. We analyze sniper sightlines and potential extraction zones.",
        date: "2025-11-20",
        category: "Rumor",
        author: "Tactician",
        content: "<p>Verticality is key in the new urban map concept.</p>"
    }
];
