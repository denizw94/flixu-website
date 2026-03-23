export interface Hero {
    metaTitle: string;
    metaDescription: string;
    badgeLabel: string;
    h1: string;
    sub: string;
    btnPrimary: string;
    btnSecondary: string;
    badge: string;
}

export interface Widget {
    label: string;
    h2: string;
    sub: string;
    placeholder: string;
    translationReady: string;
    translationEmpty: string;
    processing: string;
    translateBtn: string;
    translating: string;
}

export interface FeatureItem {
    title: string;
    body: string;
    icon: string;
    image?: string;
    visualVariant: string;
}

export interface Features {
    h2: string;
    items: FeatureItem[];
}

export interface LogicItem {
    title: string;
    body: string;
    icon: any;
}

export interface Logic {
    h2: string;
    c1: LogicItem;
    c2: LogicItem;
    c3: LogicItem;
}

export interface CTA {
    h2: string;
    sub: string;
    btn: string;
}

export interface About {
    metaTitle: string;
    metaDescription: string;
    title: string;
    subtitle: string;
    bgLabel: string;
    p1: string;
    p2: string;
    quote: string;
    p3pre: string;
    p3linkContext: string;
    p3mid: string;
    p3linkMethod: string;
    p3post: string;
    p4pre: string;
    p4linkProblems: string;
    p4mid: string;
    p4linkContext2: string;
    p4post: string;
    sign: string;
    role: string;
    bio: string;
    bioLinkText: string;
    lastUpdated: string;
}

export interface Contact {
    metaTitle: string;
    metaDescription: string;
    badge: string;
    h1: string;
    sub: string;
    cards: {
        badge: string;
        h3: string;
        p: string;
        note?: string;
        noteLinkText?: string;
        noteLinkHref?: string;
        ctaText: string;
        ctaHref: string;
    }[];
    faq: {
        title: string;
        items: { question: string; answer: string; linkText?: string; linkHref?: string }[];
    };
    hq: {
        h2: string;
        p: string;
        aboutLinkText: string;
        aboutLinkHref: string;
    };
    lastUpdated: string;
}

export interface Status {
    title: string;
    sub: string;
}

export interface PricingHero {
    h1: string;
    sub: string;
}

export interface PoolItem {
    title: string;
    sub: string;
}

export interface PricingPool {
    fair: PoolItem;
    media: PoolItem;
    rollover: PoolItem;
}

export interface SpecRow {
    label: string;
    free: string;
    ind: string;
    team: string;
    biz: string;
    ent: string;
}

export interface SpecCategory {
    category: string;
    items: SpecRow[];
}

export interface PricingSpecs {
    title: string;
    headers: {
        feature: string;
        free: string;
        ind: string;
        team: string;
        biz: string;
        ent: string;
    };
    enterprise: {
        text: string;
        link: string;
    };
    rows: SpecCategory[];
}

export interface Pricing {
    pageTitle: string;
    pageDesc: string;
    hero: PricingHero;
    pool: PricingPool;
    specs: PricingSpecs;
}

export interface NavItem {
    title: string;
    desc?: string;
}

export interface NavSection {
    title: string;
    items: Record<string, NavItem>;
}

export interface FooterNav {
    privacy: string;
    terms: string;
    status: string;
    brandText: string;
    solutions: string;
    resources: string;
    company: string;
    copyright: string;
}

export interface Actions {
    signIn: string;
}

export interface PricingPlan {
    name: string;
    price?: string;
    desc: string;
    pool: string;
    features: string[];
    cta: string;
    billing?: string | { monthly: string; yearly: string };
    poolNote?: string;
    badge?: string;
}

export interface EnterpriseCard {
    title: string;
    badge: string;
    desc: string;
    features: string[];
    cta: string;
}

export interface Navigation {
    solutions: NavSection;
    whofor: NavSection;
    resources: NavSection;
    company: NavSection;
    footer: FooterNav;
    actions: Actions;
    common: { select: string; precision: string; };
    method: { title: string };
    pricing: { title: string };
}

export interface ComparisonLayout {
    preTitle: string;
    whyTitle: string;
    whyDesc: string;
    ctaPricing: string;
    ctaTrial: string;
    disclaimer: string;
}

export interface TopicLayout {
    railLabel: string;
    badge: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaButton: string;
}

export interface ProductLayout {
    ctaTrial: string;
    ctaHow: string;
    specsTitle: string;
}

export interface UI {
    // ... existing ...
    hero: Hero;
    widget: Widget;
    features: Features;
    logic: Logic;
    cta: CTA;
    about: About;
    contact: Contact;
    status: Status;
    home: {
        accelerated: string;
        nvidiaInception: string;
        googleStartups: string;
        tldr: { label: string; text: string };
        missingMiddle: {
            preTitle: string;
            h2: string;
            intro: string;
            lowEnd: { label: string; h3: string; p: string; specs: string[] };
            flixu: { label: string; h3: string; p: string; specs: string[] };
            highEnd: { label: string; h3: string; p: string; specs: string[] };
        };
        trust: {
            preTitle: string;
            h2: string;
            cards: { quote: string; name: string; role: string }[];
        };
        comparator: { preTitle: string; h2: string; p: string };
        manifesto: { label: string; quote: string; signoff: string };
        platform: {
            preTitle: string;
            h2: string;
            capabilities: { h3: string; p: string; linkText: string; linkHref: string }[];
        };
        faq: {
            title: string;
            items: { question: string; answer: string; linkText?: string; linkHref?: string }[];
        };
        footerCta: { text: string; cta: string };
    };
    pricing: {
        title: string;
        specs: PricingSpecs;
    };
    methodPage: MethodPage;
    navigation: Navigation;
    rail: Record<string, string>;
    pricingGrid: PricingPlan[];
    enterpriseCard: EnterpriseCard;
    comparison: ComparisonLayout;
    topic: TopicLayout;
    product: ProductLayout;
    languageSelector: { searchPlaceholder: string; noResults: string; };
    languageSwitch: { 
        regions: { global: string; nordics: string; asia: string; middleEast: string; restOfWorld: string; } 
    };
    forFreelancers: {
        hero: { label: string; h1: string; sub: string; };
        problem: { label: string; h2: string; body: string; items: { num: string; label: string; body: string; dim: boolean }[] };
        workflow: { label: string; h2: string; steps: { step: string; title: string; body: string }[] };
        formats: { label: string; h2: string; list: string[] };
        cta: { h2: string; sub: string; primary: string; secondary: string; };
    };
    forAgencies: {
        hero: { label: string; h1: string; sub: string; };
        problem: { label: string; h2: string; body: string; items: { num: string; label: string; body: string; dim: boolean }[] };
        features: { label: string; h2: string; items: { title: string; body: string }[] };
        plans: { label: string; h2: string; sub: string; trigger: string; };
        cta: { h2: string; sub: string; primary: string; secondary: string; };
    };
    forEnterprise: {
        hero: { label: string; h1: string; sub: string; };
        problem: { label: string; h2: string; body: string; comparison: { tool: string; verdict: string; issue: string; dim: boolean }[] };
        usecases: { label: string; h2: string; items: { title: string; body: string }[] };
        pillars: { label: string; h2: string; items: { title: string; body: string }[] };
        cta: { h2: string; sub: string; primary: string; secondary: string; };
    };
    productContext: {
        specs: { label: string; value: string }[];
        pipeline: { label: string; h2: string; desc: string; disclaimer: string; steps: { step: string; desc: string }[] };
        layers: { label: string; h2: string; diffLabel: string; items: { num: string; label: string; body: string }[] };
        related: { label: string; textLink: string; textDesc: string; docLink: string; docDesc: string };
    };
    productDocuments: {
        specs: { label: string; value: string }[];
        problem: { label: string; h2: string; p1: string; p2: string };
        integrity: { h3: string; p: string; list: string[] };
    };
    productText: {
        specs: { label: string; value: string }[];
        challenge: { label: string; h2: string; p1: string; p2: string };
        mechanic: { h3: string; p: string; list: string[] };
        agencies: { label: string; h3: string; p: string; link: string; card: { header: string; f: string; f_val: string; d: string; d_val: string; t: string; t_val: string; g: string; g_val: string; footer: string } };
    };
}

export interface MethodPage {
    metaTitle: string;
    metaDescription: string;
    hero: {
        badge: string;
        title: string;
        description: string;
    };
    tldr: {
        label: string;
        text: string;
    };
    concept: {
        h2: string;
        p1: string;
        p2: string;
        linkText: string;
        linkHref: string;
    };
    architecture: {
        h2: string;
        badge: string;
        intro: string;
        steps: {
            num: string;
            title: string;
            body: string;
            linkText?: string;
            linkHref?: string;
            linkText2?: string;
            linkHref2?: string;
        }[];
        dimensions: {
            headers: string[];
            rows: string[][];
        };
    };
    learning: {
        h2: string;
        p1: string;
        p2: string;
    };
    comparison: {
        h2: string;
        headers: string[];
        rows: string[][];
        note: string;
        linkText: string;
        linkHref: string;
    };
    faq: {
        title: string;
        items: { question: string; answer: string; linkText?: string; linkHref?: string }[];
    };
    cta: {
        h2: string;
        primary: string;
        secondary: string;
    };
    author: {
        name: string;
        role: string;
        bio: string;
        bioLinkText: string;
        bioLinkHref: string;
        lastUpdated: string;
    };
}
