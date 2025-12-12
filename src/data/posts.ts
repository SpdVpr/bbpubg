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
