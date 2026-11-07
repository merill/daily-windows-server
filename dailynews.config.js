// Product configuration for Daily.WindowsServer.Admin.News.
//
// CommonJS rather than JSON because the classification rules are RegExps.
// Everything the engine needs that is specific to Windows Server lives here;
// the code in @merill/dailynews-engine is product-neutral and reads from this
// file.
//
// The source is merill/windows-server-docs-mirror. learn-mirror rebuilds the
// Windows Server pages from Microsoft Learn four times a day, one commit per
// crawl that found a change, at the path of the source file Learn built each
// page from (MicrosoftDocs/windowsserverdocs-pr, which is not public).
//
// Pages live under WindowsServerDocs/<role>/..., so the role folder settles the
// product. The paths keep the source repository's mixed case (OpenSSH,
// AD-DS-Deployment, ...); Learn lowercases them but ignores case, so the routed
// URLs resolve either way.

const ICONS = 'https://github.com/DanielBradley1/msicons';

module.exports = {
  site: {
    name: 'Daily Windows Server News',
    host: 'daily.windowsserver.admin.news',
    url: 'https://daily.windowsserver.admin.news',
    description: 'A readable record of what changed across Windows Server documentation.',
    productName: 'Windows Server',
    audience: 'Windows Server administrators'
  },

  // v1 is the site alone: no subscriber email, no Kit workflow.
  email: { enabled: false },

  brand: {
    wordmark: 'Daily Windows Server News',
    ogAlt: 'Daily Windows Server News: Windows Server change intelligence',
    themeStorageKey: 'windows-server-news-theme',
    tokenStorageKey: 'windows-server-news-github-token',
    emailEyebrow: 'Daily Windows Server News',
    // msicons has no Windows Server mark of its own. Windows Admin Center's is
    // the closest: a server tile in the Windows palette.
    logo: 'windows-server-news-logo.png',
    aboutIcon: '/assets/products/windows-server.svg',
    uiAssets: ['windows-server-news-logo.png'],
    extraCss: ''
  },

  // Written into persisted state and published records. Never change these
  // once the site is live: see the engine README.
  identity: {
    docEventPrefix: 'windows-server-docs',
    batchEventPrefix: 'windows-server-news',
    kitMarkerPrefix: 'daily-windows-server-news'
  },

  build: { docsCloneDir: 'windows-server-docs', detailDays: 30 },

  discord: { botName: 'Windows Server Scout' },

  ai: {
    schemaPrefix: 'windows_server',
    subject: 'Windows Server',
    forbiddenOpeners: ['Windows Server documentation', 'The Windows Server docs', 'Microsoft Windows Server documentation'],
    impactBoost: /active directory|domain controller|kerberos|ntlm|ldap|tls|certificate|hyper-v|failover cluster|dns|dhcp|group policy|wsus|hotpatch|end of support|deprecat|remove/
  },

  docs: {
    source: { owner: 'merill', repo: 'windows-server-docs-mirror', branch: 'main' },
    // Learn's rendered titles end in this; it is not part of the page's name.
    titleSuffix: / \| Microsoft Learn$/,
    learnRootUrl: 'https://learn.microsoft.com/en-us/windows-server/',

    // Any article under WindowsServerDocs/, except the fragment directories,
    // which are included into other pages and have no URL of their own.
    trackedPaths: /^(WindowsServerDocs)\/(?!(?:.*\/)?(?:includes?|media|breadcrumb)\/).+\.md$/,

    learnRoutes: [
      { match: /^WindowsServerDocs\/(.*)\.md$/, path: 'windows-server/$1' }
    ],

    // Ordered: first match wins. Narrower identity and storage roles first.
    areas: {
      stripPrefix: /^WindowsServerDocs\//,
      rules: [
        { match: /^identity\/ad-fs\//, name: 'AD FS' },
        { match: /^identity\/ad-cs\//, name: 'AD CS' },
        { match: /^identity\/ad-rms\//, name: 'AD RMS' },
        { match: /^identity\//, name: 'Active Directory and identity' },
        { match: /^networking\/dns\/|^networking\/technologies\/(dhcp|ipam|wins)\//, name: 'DNS, DHCP and IPAM' },
        { match: /^networking\//, name: 'Networking' },
        { match: /^remote\/remote-desktop-services\//, name: 'Remote Desktop Services' },
        { match: /^remote\//, name: 'Remote Access' },
        { match: /^storage\//, name: 'Storage and file services' },
        { match: /^failover-clustering\//, name: 'Failover Clustering' },
        { match: /^virtualization\//, name: 'Hyper-V' },
        { match: /^administration\/windows-server-update-services\//, name: 'WSUS' },
        { match: /^administration\/windows-commands\//, name: 'Windows commands' },
        { match: /^administration\//, name: 'Administration' },
        { match: /^manage\//, name: 'Management and Azure Arc' },
        { match: /^security\//, name: 'Security' },
        { match: /^ai\//, name: 'Local AI' },
        { match: /^troubleshoot\//, name: 'Troubleshooting' }
      ],
      fallback: 'Windows Server'
    }
  },

  analytics: { piqoSite: '' },

  // Not bare "Windows": that is the client, and would flood the site with it.
  messageCenter: { servicePattern: /\bWindows Server\b/i },

  links: {
    related: [],
    footer: [],
    stayCurrent: [
      { url: 'https://learn.microsoft.com/en-us/windows-server/get-started/whats-new-windows-server-2025', label: "What's new in Windows Server 2025" },
      { url: 'https://learn.microsoft.com/en-us/windows/release-health/windows-server-release-info', label: 'Windows Server release information' }
    ],
    followProject: [
      { url: 'https://merill.net', label: 'merill.net' },
      { url: 'https://github.com/merill', label: 'GitHub' }
    ]
  },

  taxonomy: {
    products: [
      { slug: 'windows-server', name: 'Windows Server', short: 'Windows Server', learn: 'https://learn.microsoft.com/en-us/windows-server/', icon: { sourceName: 'WAC', sourcePath: 'other/10355-icon-service-WAC.svg', match: 'closest' } },
      { slug: 'active-directory', name: 'Active Directory Domain Services', short: 'Active Directory', learn: 'https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/active-directory-domain-services', icon: { sourceName: 'Entra Domain Services', sourcePath: 'identity/10222-icon-service-Entra-Domain-Services.svg', match: 'closest' } },
      { slug: 'ad-fs', name: 'Active Directory Federation Services', short: 'AD FS', learn: 'https://learn.microsoft.com/en-us/windows-server/identity/active-directory-federation-services', icon: { sourceName: 'Enterprise Applications', sourcePath: 'identity/10225-icon-service-Enterprise-Applications.svg', match: 'closest' } },
      { slug: 'ad-cs', name: 'Active Directory Certificate Services', short: 'AD CS', learn: 'https://learn.microsoft.com/en-us/windows-server/identity/ad-cs/active-directory-certificate-services-overview', icon: { sourceName: 'Certificate', sourcePath: 'Microsoft/dark-blue-Certificate.svg', match: 'closest' } },
      { slug: 'networking', name: 'Windows Server networking', short: 'Networking', learn: 'https://learn.microsoft.com/en-us/windows-server/networking/', icon: { sourceName: 'Virtual Networks', sourcePath: 'networking/10061-icon-service-Virtual-Networks.svg', match: 'closest' } },
      { slug: 'dns-dhcp', name: 'DNS, DHCP and IPAM', short: 'DNS and DHCP', learn: 'https://learn.microsoft.com/en-us/windows-server/networking/dns/dns-overview', icon: { sourceName: 'DNS Zones', sourcePath: 'networking/10064-icon-service-DNS-Zones.svg', match: 'closest' } },
      { slug: 'remote-access', name: 'Remote Access and Always On VPN', short: 'Remote Access', learn: 'https://learn.microsoft.com/en-us/windows-server/remote/remote-access/remote-access', icon: { sourceName: 'Virtual Network Gateways', sourcePath: 'networking/10063-icon-service-Virtual-Network-Gateways.svg', match: 'closest' } },
      { slug: 'remote-desktop', name: 'Remote Desktop Services', short: 'Remote Desktop', learn: 'https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/remote-desktop-services-overview', icon: { sourceName: 'Azure Virtual Desktop', sourcePath: 'other/00327-icon-service-Azure-Virtual-Desktop.svg', match: 'closest' } },
      { slug: 'storage', name: 'Storage and file services', short: 'Storage', learn: 'https://learn.microsoft.com/en-us/windows-server/storage/storage', icon: { sourceName: 'Azure Fileshares', sourcePath: 'storage/10400-icon-service-Azure-Fileshares.svg', match: 'closest' } },
      { slug: 'failover-clustering', name: 'Failover Clustering', short: 'Failover Clustering', learn: 'https://learn.microsoft.com/en-us/windows-server/failover-clustering/failover-clustering-overview', icon: { sourceName: 'Service Fabric Clusters', sourcePath: 'compute/10036-icon-service-Service-Fabric-Clusters.svg', match: 'closest' } },
      { slug: 'hyper-v', name: 'Hyper-V', short: 'Hyper-V', learn: 'https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/overview', icon: { sourceName: 'Virtual Machine', sourcePath: 'compute/10021-icon-service-Virtual-Machine.svg', match: 'closest' } },
      { slug: 'wsus', name: 'Windows Server Update Services', short: 'WSUS', learn: 'https://learn.microsoft.com/en-us/windows-server/administration/windows-server-update-services/get-started/windows-server-update-services-wsus', icon: { sourceName: 'Update Management Center', sourcePath: 'other/02846-icon-service-Update-Management-Center.svg', match: 'closest' } },
      { slug: 'administration', name: 'Administration and Windows commands', short: 'Administration', learn: 'https://learn.microsoft.com/en-us/windows-server/administration/', icon: { sourceName: 'Toolbox', sourcePath: 'general/10844-icon-service-Toolbox.svg', match: 'closest' } },
      { slug: 'management', name: 'Windows Admin Center and Azure Arc', short: 'Management', learn: 'https://learn.microsoft.com/en-us/windows-server/manage/', icon: { sourceName: 'Azure Arc', sourcePath: 'management-governance/00756-icon-service-Azure-Arc.svg', match: 'closest' } },
      { slug: 'security', name: 'Windows Server security', short: 'Security', learn: 'https://learn.microsoft.com/en-us/windows-server/security/', icon: { sourceName: 'Security', sourcePath: 'identity/00321-icon-service-Security.svg', match: 'closest' } },
      { slug: 'local-ai', name: 'Local AI on Windows Server', short: 'Local AI', learn: 'https://learn.microsoft.com/en-us/windows-server/ai/', icon: { sourceName: 'AI Studio', sourcePath: 'ai-machine-learning/03513-icon-service-AI-Studio.svg', match: 'closest' } }
    ],
    defaultProduct: 'windows-server',

    topics: [
      { slug: 'commands', name: 'Command reference', icon: { sourceName: 'Dev Console', sourcePath: 'general/10796-icon-service-Dev-Console.svg', match: 'closest' } },
      { slug: 'upgrade', name: 'Releases, upgrades and migration', icon: { sourceName: 'Versions', sourcePath: 'general/10845-icon-service-Versions.svg', match: 'closest' } },
      { slug: 'licensing', name: 'Licensing and activation', icon: { sourceName: 'Cost Management and Billing', sourcePath: 'general/00004-icon-service-Cost-Management-and-Billing.svg', match: 'closest' } },
      { slug: 'performance', name: 'Performance and monitoring', icon: { sourceName: 'Metrics', sourcePath: 'management-governance/00020-icon-service-Metrics.svg', match: 'closest' } },
      { slug: 'architecture', name: 'Planning and deployment', icon: { sourceName: 'Blueprints', sourcePath: 'management-governance/00006-icon-service-Blueprints.svg', match: 'closest' } },
      { slug: 'troubleshooting', name: 'Troubleshooting', icon: { sourceName: 'Troubleshoot', sourcePath: 'general/10341-icon-service-Troubleshoot.svg', match: 'exact' } },
      { slug: 'developer', name: 'PowerShell and automation', icon: { sourceName: 'Powershell', sourcePath: 'general/10825-icon-service-Powershell.svg', match: 'closest' } },
      { slug: 'fundamentals', name: 'Fundamentals', icon: { sourceName: 'Guide', sourcePath: 'general/10810-icon-service-Guide.svg', match: 'closest' } },
      { slug: 'general', name: 'General', icon: { sourceName: 'Information', sourcePath: 'general/10005-icon-service-Information.svg', match: 'closest' } }
    ],
    defaultTopic: 'general',

    iconSource: { repository: ICONS, revision: '3d57443ed4445be9465ee2fee6a6ce6fd02cf90c' },

    stopwords: 'microsoft windows server documentation docs update updated updates change changes new for with from into about that this your their has have will are and the how use using overview configure configuration guide learn support service services preview',

    searchAliases: {
      adds: 'active directory domain services',
      adfs: 'active directory federation services',
      adcs: 'active directory certificate services',
      rds: 'remote desktop services',
      wsus: 'windows server update services',
      wac: 'windows admin center',
      aovpn: 'always on vpn',
      csv: 'cluster shared volumes',
      s2d: 'storage spaces direct',
      laps: 'local administrator password solution',
      sdn: 'software defined networking'
    }
  },

  // First match wins, over "<path> <title> <body>" lowercased, so a pattern
  // anchored with `^windowsserverdocs\/` reads the path. The role folder is
  // definitive; the few root-level identity pages fall through to AD DS.
  classify: {
    products: [
      { slug: 'ad-fs', match: /^windowsserverdocs\/identity\/ad-fs\// },
      { slug: 'ad-cs', match: /^windowsserverdocs\/identity\/ad-cs\// },
      { slug: 'active-directory', match: /^windowsserverdocs\/identity\// },
      { slug: 'dns-dhcp', match: /^windowsserverdocs\/(networking\/dns\/|networking\/technologies\/(dhcp|ipam|wins)\/|troubleshoot\/[^ ]*(dhcp|dynamic-host|tcpip))/ },
      { slug: 'networking', match: /^windowsserverdocs\/networking\// },
      { slug: 'remote-desktop', match: /^windowsserverdocs\/remote\/remote-desktop-services\// },
      { slug: 'remote-access', match: /^windowsserverdocs\/remote\// },
      { slug: 'storage', match: /^windowsserverdocs\/(storage\/|troubleshoot\/[^ ]*dfsr)/ },
      { slug: 'failover-clustering', match: /^windowsserverdocs\/failover-clustering\// },
      { slug: 'hyper-v', match: /^windowsserverdocs\/virtualization\// },
      { slug: 'wsus', match: /^windowsserverdocs\/administration\/windows-server-update-services\// },
      { slug: 'administration', match: /^windowsserverdocs\/administration\// },
      { slug: 'management', match: /^windowsserverdocs\/manage\// },
      { slug: 'security', match: /^windowsserverdocs\/security\// },
      { slug: 'local-ai', match: /^windowsserverdocs\/ai\// }
    ],
    topics: [
      { slug: 'commands', match: /^windowsserverdocs\/administration\/windows-commands\// },
      { slug: 'troubleshooting', scope: 'title', match: /\b(troubleshoot|known issue|error|faq|frequently asked|fix)\w*/ },
      { slug: 'licensing', scope: 'title', match: /\b(licens|activat|kms|mak|azure hybrid benefit|pay-as-you-go)\w*/ },
      { slug: 'upgrade', scope: 'title', match: /\b(upgrad|migrat|what's new|whats new|release|removed|deprecat|end of support|hotpatch|compar)\w*/ },
      { slug: 'performance', scope: 'title', match: /\b(performance|tuning|monitor|insights|counters?|logging)\b/ },
      { slug: 'developer', scope: 'title', match: /\b(powershell|cmdlet|api|wmi|scripting|automat)\w*/ },
      { slug: 'architecture', scope: 'title', match: /\b(deploy|install|plan|set up|prerequisit|requirements|architecture|design)\w*/ },
      { slug: 'fundamentals', scope: 'title', match: /\b(overview|what is|introduction|concepts?|understand)\w*/ }
    ]
  },

  copy: {
    rssFeedLabel: 'Subscribe to the Daily Windows Server News RSS feed',
    messageCenterHeading: 'Windows Server in Message Center',
    landing: {
      heading: 'Today in Windows Server',
      blurb: 'Every tracked change across Windows Server documentation, in plain English.'
    },
    directory: {
      productsLede: 'Every Windows Server role and feature tracked here, with what changed in each.',
      topicsLede: 'Cross-role themes, from releases and licensing to commands and troubleshooting.'
    },
    search: {
      inputLabel: 'Search Windows Server changes',
      placeholder: 'Search Windows Server documentation changes'
    },
    compare: {
      pageTitle: 'Compare Windows Server documentation revisions',
      lede: 'Paste a Microsoft Learn URL to see exactly what changed between two revisions.',
      placeholderUrl: 'https://learn.microsoft.com/en-us/windows-server/get-started/whats-new-windows-server-2025',
      mapping: 'Windows Server pages map to MicrosoftDocs/windowsserverdocs.'
    },
    dailyEmail: {
      eyebrow: 'Daily Windows Server News',
      intro: 'A short daily summary of what changed across Windows Server documentation.'
    },
    detail: {
      adminHeading: 'What Windows Server admins need to know',
      adminImpactLabel: 'For Windows Server administrators',
      summaryLabel: 'Change summary',
      summaryDisclosure: 'Summaries are generated from the documentation change itself.'
    },
    footer: {
      featureBlurb: 'Maester Cloud continuously tests your Microsoft 365 and hybrid identity security configuration.',
      tagline: 'Daily.WindowsServer.Admin.News: an independent record of Windows Server documentation changes.'
    },
    about: {
      heading: 'About Daily.WindowsServer.Admin.News',
      lede: 'A readable daily record of what Microsoft changed across the Windows Server documentation set.',
      whyItExists: [
        'Windows Server documentation covers Active Directory, networking, storage, clustering, Hyper-V and more than eight hundred command references, and it changes constantly. Most changes are never announced anywhere.',
        'This site reads a history of the published pages rebuilt from Microsoft Learn and writes down what changed, so an administrator does not have to diff the docs themselves.'
      ],
      howItWorks: [
        'Four times a day merill/windows-server-docs-mirror fetches every Windows Server page on Microsoft Learn and commits the ones that changed.',
        'Every six hours this site reads that history. Each change is summarised, classified by role and theme, and published with a link to the exact revision that produced it.',
        'Nothing here is official. It is a reading of the public documentation.'
      ],
      emailEyebrow: 'Daily Windows Server News',
      emailBody: 'A short daily summary of what changed across Windows Server documentation.',
      extraSections: [],
      community: [
        'Built by Merill Fernando as part of the Admin.News network of daily and weekly Microsoft admin editions.'
      ],
      quote: 'The documentation changes every day. Somebody should be reading it.',
      bio: 'Merill Fernando builds tools for Microsoft identity, security and infrastructure administrators.'
    }
  }
};
