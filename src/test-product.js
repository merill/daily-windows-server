// Daily Windows Server News against the engine's shared product checks, plus
// what is particular to Windows Server: role folders settle the product, and
// the source keeps mixed-case paths that Learn lowercases.
const path = require('node:path');
const { defineProductConformance } = require('@merill/dailynews-engine/product-conformance');

defineProductConformance({
  root: path.join(__dirname, '..'),
  // Only names that cannot belong here. Entra, Intune and Defender appear in
  // Windows Server documentation in their own right.
  foreignNames: /\b(memdocs|purview|autopilot)\b/i,
  mirrorState: 'windows-server-docs/.learn-mirror/state.json',
  mirrorExceptions: {},
  trackedSamples: ['WindowsServerDocs/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview.md', 'WindowsServerDocs/administration/OpenSSH/OpenSSH_KeyManagement.md'],
  routeCases: {
    'WindowsServerDocs/administration/OpenSSH/OpenSSH_KeyManagement.md': 'windows-server/administration/OpenSSH/OpenSSH_KeyManagement',
    'WindowsServerDocs/get-started/whats-new-windows-server-2025.md': 'windows-server/get-started/whats-new-windows-server-2025'
  },
  productCases: {
    'windowsserverdocs/identity/ad-fs/ad-fs-overview.md': 'ad-fs',
    'windowsserverdocs/identity/ad-cs/active-directory-certificate-services-overview.md': 'ad-cs',
    'windowsserverdocs/identity/ad-ds/deploy/ad-ds-deployment.md': 'active-directory',
    'windowsserverdocs/identity/laps/laps-overview.md': 'active-directory',
    'windowsserverdocs/networking/dns/dns-overview.md': 'dns-dhcp',
    'windowsserverdocs/networking/technologies/dhcp/dhcp-top.md': 'dns-dhcp',
    'windowsserverdocs/troubleshoot/troubleshoot-dhcp-issue.md': 'dns-dhcp',
    'windowsserverdocs/networking/sdn/software-defined-networking.md': 'networking',
    'windowsserverdocs/remote/remote-desktop-services/rds-overview.md': 'remote-desktop',
    'windowsserverdocs/remote/remote-access/remote-access.md': 'remote-access',
    'windowsserverdocs/storage/refs/refs-overview.md': 'storage',
    'windowsserverdocs/failover-clustering/cluster-affinity.md': 'failover-clustering',
    'windowsserverdocs/virtualization/hyper-v/overview.md': 'hyper-v',
    'windowsserverdocs/administration/windows-server-update-services/get-started/windows-server-update-services-wsus.md': 'wsus',
    'windowsserverdocs/administration/windows-commands/robocopy.md': 'administration',
    'windowsserverdocs/manage/windows-admin-center/overview.md': 'management',
    'windowsserverdocs/security/secured-core-server.md': 'security',
    'windowsserverdocs/ai/local-ai-inference.md': 'local-ai',
    'windowsserverdocs/get-started/whats-new-windows-server-2025.md': 'windows-server'
  }
});
