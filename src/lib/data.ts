import EmailIcon from '@/components/icons/EmailIcon.astro';
import LinkedInIcon from '@/components/icons/LinkedInIcon.astro';
import cryptoTrackerCover from '@/images/projects/cryptotracker.jpg';
import devTermsCover from '@/images/projects/devterms.jpg';
import iconKitCover from '@/images/projects/iconkit.jpg';
import lookupToolsCover from '@/images/projects/lookuptools.jpg';
import raycastCobaltCover from '@/images/projects/raycast-cobalt.jpg';
import ucmCalendarCover from '@/images/projects/ucmerced-ical.jpg';
import PuzzleIcon from '@lucide/astro/icons/puzzle';
import RSSIcon from '@lucide/astro/icons/rss';
import BitcoinIcon from 'simple-icons-astro/Bitcoin';
import DiscordIcon from 'simple-icons-astro/Discord';
import DrizzleIcon from 'simple-icons-astro/Drizzle';
import EthereumIcon from 'simple-icons-astro/Ethereum';
import GitHubIcon from 'simple-icons-astro/Github';
import LitecoinIcon from 'simple-icons-astro/Litecoin';
import MeilisearchIcon from 'simple-icons-astro/Meilisearch';
import NextIcon from 'simple-icons-astro/Nextdotjs';
import OpenAIIcon from 'simple-icons-astro/Openai';
import PythonIcon from 'simple-icons-astro/Python';
import RaycastIcon from 'simple-icons-astro/Raycast';
import ReactIcon from 'simple-icons-astro/React';
import TailwindCSSIcon from 'simple-icons-astro/Tailwindcss';
import TypeScriptIcon from 'simple-icons-astro/Typescript';
import elyadata from '@/images/logos/elyadata_logo.png';
import eventizer from '@/images/logos/eventizer_logo.png';


import type { Experience, GemGroup, Project, SocialMediaProfile } from './types';


export const socials: SocialMediaProfile[] = [
  { icon: GitHubIcon, href: 'https://github.com/Rayen-Hamza' },
  { icon: LinkedInIcon, href: 'https://www.linkedin.com/in/hamza-rayen-a2a6a2251' },
  { icon: EmailIcon, href: 'mailto:rayen.hamza@inat.ucar.tn' }
];

export const experience: Experience[] = [
  {
    organization: 'Elyadata',
    title: 'Ai engineer intern',
    href: 'https://www.elyadata.com',
    date: 'juin 2025 – Aug 2025',
    status: 'inactive',
    logo: {
      rounded: true,
      data: elyadata
    },
    description: 'Info Apps (News)'
  },
  {
    organization: 'Eventizer',
    title: 'Full Stack Developer Intern',
    href: 'https://www.ucmerced.edu',
    date: 'Aug 2024 – May 2025',
    status: 'inactive',
    logo: {
      rounded: false,
      data: eventizer 
    },
    description:
      "I was responsible for developing Next.js apps such as Merced ID and the Guest Device Registration (Wi-Fi) Portal for UC Merced's Office of Information Technology. I also helped maintain Purrfect UI, an ADA-compliant React component library built to unify styling across UC Merced's websites."
  },

];

export const projects: Project[] = [
  {
    name: 'Teleco HIRAG',
    description: 'Crowdsourced dictionary for developers',
    openSource: true,
    cover: devTermsCover,
    link: { type: 'Website', href: 'https://devterms.io' },
    icons: [DrizzleIcon, MeilisearchIcon, TailwindCSSIcon, ReactIcon, NextIcon, TypeScriptIcon]
  },
  {
    name: 'GraphForge',
    description: 'Raycast extension for downloading media',
    openSource: true,
    cover: raycastCobaltCover,
    link: { type: 'Raycast', href: 'https://www.raycast.com/aelew/cobalt' },
    icons: [ReactIcon, RaycastIcon, TypeScriptIcon]
  },
  {
    name: 'Klippy',
    description: 'AI icon generator + REST API',
    openSource: false,
    cover: iconKitCover,
    link: { type: 'Website', href: 'https://iconkit.ai' },
    icons: [DrizzleIcon, TailwindCSSIcon, ReactIcon, OpenAIIcon, NextIcon, TypeScriptIcon]
  },
  {
    name: 'CodeDuel',
    description: 'Crypto confirmation tracker for Discord',
    openSource: true,
    cover: cryptoTrackerCover,
    link: { type: 'GitHub', href: 'https://github.com/aelew/cryptotracker' },
    icons: [DiscordIcon, PythonIcon, BitcoinIcon, LitecoinIcon, EthereumIcon]
  },
  {
    name: 'SIEMZello',
    description: 'Domain, IP, & email OSINT tool',
    openSource: true,
    cover: lookupToolsCover,
    link: { type: 'Website', href: 'https://lookup.tools' },
    icons: [TailwindCSSIcon, ReactIcon, NextIcon, TypeScriptIcon]
  },
  {
    name: 'MyINSAT Events',
    description: '.ics generator for UC Merced courses',
    openSource: true,
    cover: ucmCalendarCover,
    link: { type: 'Website', href: 'https://cal.aelew.com' },
    icons: [TailwindCSSIcon, ReactIcon, NextIcon, TypeScriptIcon]
  }
];

export const gems: GemGroup[] = [
  {
    icon: RSSIcon,
    title: 'Blog posts',
    slug: 'blog-posts',
    items: [
      {
        title: 'The UX of UUIDs',
        description: 'Andreas Thomas',
        href: 'https://www.unkey.com/blog/uuid-ux'
      },
      {
        title: "Why I don't use Prettier",
        description: 'Anthony Fu',
        href: 'https://antfu.me/posts/why-not-prettier'
      },
      {
        title: 'Python sucks, and why I use it',
        description: 'Cameron Kauffman',
        href: 'https://cameron.rs/blog/python-sucks/'
      },
      {
        title: 'A look into "GDPR compliant" analytics',
        description: 'pilcrow',
        href: 'https://pilcrowonpaper.com/blog/gdpr-compliant-analytics/'
      },
      {
        title: 'Stop using middleware to protect routes',
        description: 'pilcrow',
        href: 'https://pilcrowonpaper.com/blog/middleware-auth/'
      },
      {
        title: 'Using Bluesky posts as blog comments',
        description: 'Emily Liu',
        href: 'https://emilyliu.me/blog/comments'
      }
    ]
  },
  {
    icon: PuzzleIcon,
    title: 'Browser Extensions',
    slug: 'browser-extensions',
    items: [
      {
        title: 'uBlock Origin',
        description: 'Highly-efficient content blocker',
        href: 'https://ublockorigin.com'
      },
      {
        title: 'JSONVue',
        description: 'Validate and view JSON documents',
        href: 'https://chromewebstore.google.com/detail/jsonvue/chklaanhfefbnpoihckbnefhakgolnmc'
      },
      {
        title: 'FastForward',
        description: 'Circumvent annoying link shorteners',
        href: 'https://chrome.google.com/webstore/detail/fastforward/icallnadddjmdinamnolclfjanhfoafe'
      },
      {
        title: 'DeArrow',
        description: 'Crowdsourced YouTube titles and thumbnails',
        href: 'https://chrome.google.com/webstore/detail/dearrow/enamippconapkdmgfgjchkhakpfinmaj'
      },
      {
        title: 'Better Canvas',
        description: 'Feature-packed extension for Canvas',
        href: 'https://chromewebstore.google.com/detail/better-canvas/cndibmoanboadcifjkjbdpjgfedanolh'
      },
      {
        title: 'Refined GitHub',
        description: 'Simplifies the GitHub interface with useful features',
        href: 'https://chrome.google.com/webstore/detail/refined-github/hlepfoohegkhhmjieoechaddaejaokhf'
      },
      {
        title: 'LanguageTool',
        description: 'Grammar and spelling checker',
        href: 'https://chromewebstore.google.com/detail/ai-grammar-checker-paraph/oldceeleldhonbafppcapldpdifcinji'
      },
      {
        title: 'Disable Page Visibility API',
        description: 'Prevents websites from seeing if you are on a page',
        href: 'https://chromewebstore.google.com/detail/disable-page-visibility-a/eecfoibnnhheckhfokpihgefmlnenofb'
      },
      {
        title: 'GoFullPage',
        description: 'Capture full page screenshots reliably',
        href: 'https://chrome.google.com/webstore/detail/gofullpage-full-page-scre/fdpohaocaechififmbbbbbknoalclacl'
      },
      {
        title: 'SponsorBlock',
        description: 'Skip sponsorships and promotions in YouTube videos',
        href: 'https://chrome.google.com/webstore/detail/sponsorblock-for-youtube/mnjggcdmjocbbbhaepdhchncahnbgone'
      },
      {
        title: 'Unhook',
        description: 'Remove distractions from YouTube',
        href: 'https://chrome.google.com/webstore/detail/unhook-remove-youtube-rec/khncfooichmfjbepaaaebmommgaepoid'
      },
      {
        title: 'Open Frame',
        description: 'Adds context menu items for opening iframes',
        href: 'https://chrome.google.com/webstore/detail/open-frame/ioohmdjfjcbggpcggeeknkgbgbdajmmo'
      },
      {
        title: 'Simplify Copilot',
        description: 'Automatically fill out job applications',
        href: 'https://chromewebstore.google.com/detail/simplify-copilot-autofill/pbanhockgagggenencehbnadejlgchfc'
      },
      {
        title: 'Shazam',
        description: 'Identify music, search lyrics, and more',
        href: 'https://chromewebstore.google.com/detail/shazam-find-song-names-fr/mmioliijnhnoblpgimnlajmefafdfilb'
      },
      {
        title: 'Wappalyzer',
        description: 'Figure out what technologies websites are using',
        href: 'https://chrome.google.com/webstore/detail/wappalyzer/gppongmhjkpfnbhagpmjfkannfbllamg'
      },
      {
        title: 'Save image as type',
        description: 'Save images as PNG, JPG, or WebP files',
        href: 'https://chrome.google.com/webstore/detail/save-image-as-type/gabfmnliflodkdafenbcpjdlppllnemd'
      },
      {
        title: 'JavaScript Bundle Size',
        description: 'Adds bundle size data to npm and GitHub',
        href: 'https://chrome.google.com/webstore/detail/javascript-bundle-size/aojdnjnhhjmokccbelfdocgiedioienh'
      },
      {
        title: 'Chrome extension source viewer',
        description: 'View the source code of any browser extension',
        href: 'https://chrome.google.com/webstore/detail/chrome-extension-source-v/jifpbeccnghkjeaalbbjmodiffmgedin'
      },
      {
        title: "I still don't care about cookies",
        description: 'Automatically handle cookie consent popups',
        href: 'https://chrome.google.com/webstore/detail/i-still-dont-care-about-c/edibdbjcniadpccecjdfdjjppcpchdlm'
      },
      {
        title: 'File Icons for GitHub and GitLab',
        description: 'Adds file icons to GitHub, GitLab, Gitea, and Gogs',
        href: 'https://chrome.google.com/webstore/detail/file-icons-for-github-and/ficfmibkjjnpogdcfhfokmihanoldbfe'
      },
      {
        title: 'Redirector',
        description: 'Automatically redirect based on user-defined rules',
        href: 'https://chromewebstore.google.com/detail/redirector/ocgpenflpmgnfapjedencafcfakcekcd'
      },
      {
        title: 'Copy email links',
        description: 'Copy email addresses to your clipboard on click',
        href: 'https://chromewebstore.google.com/detail/copy-email-links/ocffkcplakjlhbaadfcokiiflaelnaib'
      }
    ]
  }
];
