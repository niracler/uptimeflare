const pageConfig = {
  // Title for your status page
  title: "Niracler's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/niracler', label: 'GitHub' },
    { link: 'https://niracler.com/', label: 'Blog' },
    { link: 'mailto:i@niracler.com', label: 'Email Me', highlight: true },
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
    {
      id: 'n8n_monitor',
      name: 'n8n',
      method: 'GET',
      target: 'https://n8n.niracler.com',
      tooltip: 'Niracler\'s n8n, auto sync douban pinboard to telegram',
      statusPageLink: 'https://n8n.niracler.com',
      headers: {
        'User-Agent': 'Uptimeflare',
      },
      expectedCodes: [200]
    },
    {
      id: 'autobangumi_monitor',
      name: 'AutoBangumi',
      method: 'GET',
      target: 'https://autobangumi.niracler.com',
      tooltip: 'Niracler\'s AutoBangumi, auto download anime through Mikan RSS',
      statusPageLink: 'https://autobangumi.niracler.com',
      headers: {
        'User-Agent': 'Uptimeflare',
      },
      expectedCodes: [200]
    },
    {
      id: 'animashin_monitor',
      name: 'Animashin',
      method: 'GET',
      target: 'https://animashin.niracler.com',
      tooltip: 'Niracler\'s Animashin, auto downloader anime through RSS',
      statusPageLink: 'https://animashin.niracler.com',
      headers: {
        'User-Agent': 'Uptimeflare',
      },
      expectedCodes: [200]
    },
    {
      id: 'qbittorrent_monitor',
      name: 'Qbittorrent',
      method: 'GET',
      target: 'https://qb.niracler.com',
      tooltip: 'Niracler\'s Qbittorrent',
      statusPageLink: 'https://qb.niracler.com',
      headers: {
        'User-Agent': 'Uptimeflare',
      },
      expectedCodes: [200]
    }
    // Example TCP Monitor
    // {
    //   id: 'test_tcp_monitor',
    //   name: 'Example TCP Monitor',
    //   // `method` should be `TCP_PING` for tcp monitors
    //   method: 'TCP_PING',
    //   // `target` should be `host:port` for tcp monitors
    //   target: '1.2.3.4:22',
    //   tooltip: 'My production server SSH',
    //   statusPageLink: 'https://example.com',
    //   timeout: 5000,
    // },
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "https://apprise.example.com/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "tgram://bottoken/ChatID",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
