
export interface SubMenuItem {
    id: string;
    label: string;
    href: string;
    subs?: SubMenuItem[];
}

export interface MenuItem {
    id: string;
    label: string;
    href: string;
    subs?: SubMenuItem[];
}

export interface BrandItem {
    brand: string;
    href: string;
    items: MenuItem[];
}

export const ABOUT_IMG = '' // Updated
export const ABOUT_IMG_2 = '' // Updated

// Brand Structure Definition for Top-Level Navigation
export const BRANDS = {
    vaisala: {
        label: 'VAISALA',
        desc: 'World leader in environmental and industrial measurement.',
        categories: ['humidity', 'dewpoint', 'co2', 'oil', 'barometer', 'weather', 'h2o2', 'cms'],
        logo: '/templates/hs-tech/images/brands/vaisala.svg'
    },
    setra: {
        label: 'SETRA',
        desc: 'Premium pressure transducers and current switches.',
        categories: ['setra'],
        logo: '/templates/hs-tech/images/brands/setra.svg'
    },
    jumo: {
        label: 'JUMO',
        desc: 'Innovative sensors and automation solutions.',
        categories: ['jumo'],
        logo: '/templates/hs-tech/images/brands/jumo.svg'
    },
}

// Category Information - Updated with existing images
export const CATEGORY_INFO: Record<string, any> = {
    humidity: { title: "Humidity", desc: "Best-in-class humidity instruments.", images: ['/templates/hs-tech/images/products/hmt330_v1.png', '/templates/hs-tech/images/products/hmp1_9_v1.png'] },
    dewpoint: { title: "Dewpoint", desc: "Reliable dewpoint measurement.", images: ['/templates/hs-tech/images/products/38af1f4961a7a.png', '/templates/hs-tech/images/products/50e31ebdea359.png'] },
    co2: { title: "Carbon Dioxide", desc: "Accurate CO2 monitoring.", images: ['/templates/hs-tech/images/products/6251932a0e954.png', '/templates/hs-tech/images/products/eb130aca3df08.png'] },
    oil: { title: "Moisture in Oil", desc: "Transformer oil monitoring.", images: ['/templates/hs-tech/images/products/deffa2b1b398f.jpg', '/templates/hs-tech/images/products/5980bfb1851a8.png'] },
    barometer: { title: "Barometric Pressure", desc: "Digital barometers.", images: ['/templates/hs-tech/images/products/3ca83569b6d00.jpg'] },
    weather: { title: "Weather", desc: "Meteorological sensors.", images: ['/templates/hs-tech/images/products/2c2344f8b46d5.jpg', '/templates/hs-tech/images/products/2ddb0a75a50e4.jpg'] },
    h2o2: { title: "H2O2", desc: "Bio-decontamination monitoring.", images: ['/templates/hs-tech/images/products/47e994f808c6a.png'] },

    // Brands
    setra: { title: "SETRA Systems", desc: "Differential & Industrial Pressure.", images: ['/templates/hs-tech/images/products/0173971661ad2.png', '/templates/hs-tech/images/products/849fee28dfdc5.png'] },
    jumo: { title: "JUMO", desc: "Liquid Analysis & Control.", images: ['/templates/hs-tech/images/products/94259b4509a1f.png', '/templates/hs-tech/images/products/85b44cdd77766.png'] },
    jumo_temp: { title: "Temperature", desc: "PlastoSENS precision temperature sensors for plastics processing.", images: ['/templates/hs-tech/images/products/94259b4509a1f.png'] },
    cms: { title: "Data Logger / CMS", desc: "Continuous monitoring systems and wireless data loggers.", images: [] }
}

// Sub-Category Definitions
export const SUB_CATEGORIES: Record<string, any[]> = {
    // === VAISALA ===
    humidity: [
        {
            id: 'handheld', title: 'Hand-held Instrument', desc: 'HM70, Indigo80',
            items: [
                { id: 'indigo80_hmp80', label: 'Indigo80+HMP80' },
                { id: 'hm70', label: 'HM70' },
                { id: 'hm40', label: 'HM40' },
                { id: 'shm40', label: 'SHM40' },
                { id: 'hmk15', label: 'HMK15' }
            ]
        },
        {
            id: 'industrial', title: 'Industrial Transmitter', desc: 'HMT330, HMT310',
            items: [
                { id: 'hmt330', label: 'HMT330' },
                { id: 'hmt310', label: 'HMT310' },
                { id: 'hmt120', label: 'HMT120/130' },
                { id: 'hmt370ex', label: 'HMT370EX' },
                { id: 'hmt360', label: 'HMT360' }
            ]
        },
        {
            id: 'hvac', title: 'HVAC Transmitter', desc: 'HMD60, HMW90',
            items: [
                { id: 'hmd60', label: 'HMD60' },
                { id: 'hmw90', label: 'HMW90' },
                { id: 'hmdw110', label: 'HMDW110' },
                { id: 'hmdw80', label: 'HMDW80' }
            ]
        },
        {
            id: 'probe', title: 'Module/OEM', desc: 'HMP series',
            items: [
                { id: 'hmp1_9', label: 'HMP1-9' },
                { id: 'hmm170', label: 'HMM170' },
                { id: 'hmp155', label: 'HMP155' },
                { id: 'hmp60', label: 'HMP60' }
            ]
        },
        {
            // Typo fix: removed duplicate key logic by ensuring uniqueness in structure
            id: 'dewpoint_handheld', title: 'Portable Instrument', desc: 'DM70',
            items: [
                { id: 'indigo80_dmp80', label: 'Indigo80+DMP80' },
                { id: 'dm70', label: 'DM70' },
                { id: 'dss70a', label: 'DSS70A' }
            ]
        }
    ],
    dewpoint: [
        {
            id: 'portable', title: 'Portable Instrument', desc: 'DM70',
            items: [
                { id: 'indigo80_dmp80', label: 'Indigo80+DMP80' },
                { id: 'dm70', label: 'DM70' },
                { id: 'dss70a', label: 'DSS70A' }
            ]
        },
        {
            id: 'fixed', title: 'Fixed installed type', desc: 'DMT340, DMT345',
            items: [
                { id: 'dmt340', label: 'DMT340' },
                { id: 'dmt345', label: 'DMT345/346' },
                { id: 'dmp1', label: 'DMP1-8' }
            ]
        },
        {
            id: 'module', title: 'Module/OEM', desc: 'DMT132, DMT143, DMT152',
            items: [
                { id: 'dmt132', label: 'DMT132' },
                { id: 'dmt152', label: 'DMT152' },
                { id: 'dmt143', label: 'DMT143' },
                { id: 'dmt143l', label: 'DMT143L' },
                { id: 'dpt146', label: 'DPT146' },
                { id: 'dpt145', label: 'DPT145' }
            ]
        }
    ],
    co2: [
        {
            id: 'transmitter', title: 'Transmitter', desc: 'GMW90, GMD110',
            items: [
                { id: 'gmw90', label: 'GMW90' },
                { id: 'gmw80', label: 'GMW80' },
                { id: 'gmd110', label: 'GMD110' }
            ]
        },
        {
            id: 'probe', title: 'Probe', desc: 'GMP series',
            items: [
                { id: 'gmp343', label: 'GMP343' },
                { id: 'gmp251', label: 'GMP251' },
                { id: 'gmp231', label: 'GMP231' },
            ]
        },
        {
            id: 'handheld', title: 'Hand-held Meter', desc: 'GMP252',
            items: [
                { id: 'indigo80_gmp252', label: 'Indigo80+GMP252' }
            ]
        }
    ],
    oil: [
        {
            id: 'transformer', title: 'Transformer Monitor', desc: 'MHT410',
            items: [
                { id: 'mht410', label: 'MHT410' }
            ]
        },
        {
            id: 'fixed', title: 'Oil Moisture Transmitter', desc: 'MMT330',
            items: [
                { id: 'mmt330', label: 'MMT330' },
                { id: 'mmt310', label: 'MMT310' }
            ]
        },
        {
            id: 'handheld', title: 'Hand-held measurement', desc: 'MM70',
            items: [
                { id: 'mm70', label: 'MM70' }
            ]
        },
        {
            id: 'oil_module', title: 'Module/OEM', desc: 'MMT162',
            items: [
                { id: 'mmt162', label: 'MMT162' }
            ]
        }
    ],
    barometer: [
        {
            id: 'barometer', title: 'Digital Barometer', desc: 'PTB series',
            items: [
                { id: 'ptb330', label: 'PTB330' },
                { id: 'ptb210', label: 'PTB210' },
                { id: 'ptb110', label: 'PTB110' },
                { id: 'ptu300', label: 'PTU300 (Combined)' }
            ]
        }
    ],
    weather: [
        {
            id: 'trans', title: 'Weather Transmitter', desc: 'WXT530, HMP155',
            items: [
                { id: 'wxt530', label: 'WXT530' },
                { id: 'hmp155_w', label: 'HMP155' },
                { id: 'hmt337', label: 'HMT337' },
                { id: 'ptu307', label: 'PTU307' }
            ]
        },
        {
            id: 'hvac_weather', title: 'HVAC Weather Sensor', desc: 'HMS110, HMS80',
            items: [
                { id: 'hms110', label: 'HMS110' },
                { id: 'hms80', label: 'HMS80' }
            ]
        }
    ],
    h2o2: [
        {
            id: 'sensor', title: 'H2O2 Sensor', desc: 'HPP series',
            items: [
                { id: 'hpp271', label: 'HPP271/272' }
            ]
        }
    ],

    // === SETRA ===
    setra: [
        {
            id: 'diff_ind', title: 'Differential Pressure (Visual)', desc: 'Setra Lite',
            items: [
                { id: 'setra_lite', label: 'Setra Lite' },
                { id: 'setra_flex', label: 'Setra Flex' }
            ]
        },
        {
            id: 'diff_sen', title: 'Differential Pressure (Sensor)', desc: 'HVAC & Filter monitoring',
            items: [
                { id: 'model_mrc', label: 'Model MRC' },
                { id: 'model_mrg', label: 'Model MRG' },
                { id: 'model_264', label: 'Model 264' },
                { id: 'pdt101', label: 'PDT101' },
                { id: 'pdt102', label: 'PDT102' }
            ]
        },
        {
            id: 'industrial', title: 'Industrial Pressure', desc: 'High performance transducers',
            items: [
                { id: 'model_axd', label: 'Model AXD' },
                { id: 'model_206', label: 'Model 206' },
                { id: 'model_209', label: 'Model 209' }
            ]
        }
    ],

    // === JUMO ===
    jumo: [
        {
            id: 'liquid', title: 'Liquid Analysis', desc: 'pH, Conductivity',
            items: [
                { id: 'ph_sensor', label: 'tecline pH' },
                { id: 'ph_trans', label: 'ecoTRANS pH 03' },
                { id: 'dtrans_ph02', label: 'dTRANS pH 02' },
                { id: 'cond_trans', label: 'ecoTRANS Lf 03' }
            ]
        },
        {
            id: 'control', title: 'Control & Recording', desc: 'Recorders, Controllers',
            items: [
                { id: 'recording', label: 'LOGOSCREEN 600' },
                { id: 'dtron_300', label: 'dTRON 300' }
            ]
        }
    ],

    // === CMS (Data Logger / Continuous Monitoring System) ===
    cms: [
        {
            id: 'data_logger', title: 'Data Logger', desc: 'DL2000, DL4000, DL1700',
            items: [
                { id: 'dl2000', label: 'DL2000' },
                { id: 'dl4000', label: 'DL4000' },
                { id: 'dl1700', label: 'DL1700' }
            ]
        },
        {
            id: 'network_logger', title: 'Network Data Logger', desc: 'DL1000/1400, DL1016/1416, vNET',
            items: [
                { id: 'dl1000_1400', label: 'DL1000/1400' },
                { id: 'dl1016_1416', label: 'DL1016/1416' },
                { id: 'vnet_wireless', label: 'Wireless vNET' },
                { id: 'poe_logger', label: 'POE' }
            ]
        },
        {
            id: 'cms_software', title: 'Monitoring Software', desc: 'CMS Software',
            items: [
                { id: 'cms_sw', label: 'CMS Software' }
            ]
        }
    ]
}

// Product Database - Mapped to Real Scraped Images
export const DB: Record<string, any[]> = {
    // VAISALA
    humidity: [
        {
            id: 'hmp1_9',
            title: 'Indigo Smart Probes',
            subtitle: 'HMP1-HMP9 SERIES',
            category: 'probe',
            image: '/templates/hs-tech/images/products/hmp1_9_v1.png',
            gallery: ["/templates/hs-tech/images/products/hmp1_9_v1.png"],
            desc: 'Intelligent, interchangeable probes for the Vaisala Indigo family.',
            specs: [
                { label: 'Models', value: 'HMP1, HMP3, HMP4, HMP5, HMP7, HMP8, HMP9' },
                { label: 'HMP75 Probe (118 mm)', value: 'General purpose\nRH: 0…100% / T: -20…+60°C\nAccuracy: ±1 %RH (0…90%)' },
                { label: 'HMP76 Probe (328 mm)', value: 'Duct spot-checking (stainless steel)\nRH: 0…100% / T: -50…+120°C\nAccuracy: ±1 %RH (0…90%)' },
                { label: 'HMP77 Probe (5 m cable)', value: 'Difficult-to-reach areas, on-site calibration\nRH: 0…100% / T: -70…+180°C\nAccuracy: ±1 %RH (0…90%)' },
                { label: 'Output', value: 'RS-485 Modbus RTU (Indigo compatible)' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMP1-9-Datasheet-B211706EN.pdf'
        },
        {
            id: 'hmm170',
            title: 'HMM170',
            subtitle: 'HIGH TEMP MODULE',
            category: 'probe',
            image: '/templates/hs-tech/images/products/hmm170_v1.png',
            gallery: ["/templates/hs-tech/images/products/hmm170_v1.png"],
            desc: 'Robust humidity module for high temperature applications.',
            specs: [
                { label: 'Application', value: 'Food processing, Baking, Drying' },
                { label: 'Temp', value: '-70 ... +180 °C' },
                { label: 'Sensor', value: 'HUMICAP R2' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMM170-Datasheet-B211698EN.pdf'
        },
        {
            id: 'hmp155',
            title: 'HMP155',
            subtitle: 'METEOROLOGICAL PROBE',
            category: 'probe',
            image: '/templates/hs-tech/images/products/hmp155_v1.png',
            gallery: ["/templates/hs-tech/images/products/hmp155_v1.png"],
            desc: 'Premium humidity and temperature probe for meteorological applications.',
            specs: [
                { label: 'Application', value: 'Meteorology, Aviation, Roads' },
                { label: 'Range', value: '0 ... 100 %RH\n-80 ... +60 °C' },
                { label: 'Accuracy', value: '±1.0 %RH' },
                { label: 'Protection', value: 'IP66' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMP155-Datasheet-B210993EN.pdf'
        },
        {
            id: 'hmp60',
            title: 'HMP60 / HMP110',
            subtitle: 'COMPACT PROBE',
            category: 'probe',
            image: '/templates/hs-tech/images/products/hmp60_v1.png',
            gallery: ["/templates/hs-tech/images/products/hmp60_v1.png"],
            desc: 'Miniature and compact probes for volume applications.',
            specs: [
                { label: 'Application', value: 'OEM, Volume applications' },
                { label: 'Models', value: 'HMP60 (Intercap), HMP110 (Humicap)' },
                { label: 'Accuracy', value: '±3 %RH (HMP60)\n±1.5 %RH (HMP110)' },
                { label: 'Housing', value: 'Stainless steel (IP65)' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMP60-Datasheet-B210973EN.pdf'
        },
        {
            id: 'hmt370ex',
            title: 'HMT370EX Series',
            subtitle: 'EXPLOSION PROOF TRANSMITTER',
            category: 'explosion_proof',
            image: '/templates/hs-tech/images/products/hmt370ex_v1.png',
            gallery: [],
            desc: 'Designed for hazardous areas. Ideal for fuel storage, chemicals, and pharmaceutical manufacturing.',
            specs: [
                { label: 'HMT371 (Wall)', value: 'RH: 0…100% RH\nT: -40...+60°C (-40...+140°F)\nProbe diameter: 12 mm' },
                { label: 'HMT373 (Confined Spaces)', value: 'RH: 0…100% RH\nT (teflon): -40...+120°C\nT (rubber): -40...+80°C\nCable length: 2, 5 or 10 m' },
                { label: 'HMT374 (Pressurized)', value: 'RH: 0…100% RH\nT: -70…+180°C (-94…+356°F)\nP: 0...10 MPa' },
                { label: 'HMT375 (High Temp)', value: 'RH: 0…100% RH\nT: -70…+180°C (-94…+356°F)' },
                { label: 'HMT377 (High Humidity)', value: 'RH: 0…100% RH\nT: -70…+180°C (-94…+356°F)' },
                { label: 'HMT378 (Pipeline)', value: 'RH: 0…100% RH\nT: -70…+180°C (-94…+356°F)\nP: 0…4 MPa' },
                { label: 'Accuracy', value: '±0.8 %RH (0…90%)\n±0.1°C @ 23°C PT1000' },
                { label: 'Output', value: '2-Wire Current (4…20 mA)' },
                { label: 'IP Rating', value: 'IP66 (NEMA4)' },
                { label: 'Operating Environment', value: 'Electronics: -40…+60°C\nWith display: -20…+60°C\nStorage: -40…+70°C' },
                { label: 'Classification', value: 'Korea (KTL): Ex ia IIC T4 Ga\nGlobal (IECEx): Ex ia IIC T4 Ga\nEU (ATEX): II 1G Ex ia IIC T4 Ga\nJapan (CML): Ex ia IIC T4 Ga\nChina (NEPSI): Ex ia IIC T4 Ga' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMT370EX-Datasheet-B211738EN.pdf'
        },
        {
            id: 'hmt360',
            title: 'HMT360 Series',
            subtitle: 'INTRINSICALLY SAFE TRANSMITTER',
            category: 'explosion_proof',
            image: '/templates/hs-tech/images/products/hmt360_v1.png',
            gallery: [],
            desc: 'Intrinsically safe humidity and temperature transmitter for hazardous environments.',
            specs: [
                { label: 'HMT361 (Wall)', value: 'RH: 0…100% RH\nT: -40...+60°C (-40...+140°F)\nProbe diameter: 12 mm' },
                { label: 'HMT363 (Duct)', value: 'RH: 0…100% RH\nT (teflon): -40...+120°C\nT (rubber): -40...+80°C\nCable length: 2, 5 or 10 m' },
                { label: 'HMT364 (High Pressure)', value: 'RH: 0…100% RH\nT: -70…+180°C (-94…+356°F)\nP: 0...10 MPa' },
                { label: 'HMT365 (High Temp)', value: 'RH: 0…100% RH\nT: -70…+180°C (-94…+356°F)' },
                { label: 'HMT367 (High Humidity)', value: 'RH: 0…100% RH\nT: -70…+180°C (-94…+356°F)' },
                { label: 'HMT368 (Pipeline)', value: 'RH: 0…100% RH\nT: -70…+180°C (-94…+356°F)\nP: 0…4 MPa' },
                { label: 'Accuracy', value: '±1 %RH (0…90%)\n±0.2°C @ 20°C PT1000' },
                { label: 'Output', value: '2-Wire Current (4…20 mA)' },
                { label: 'IP Rating', value: 'IP66' },
                { label: 'Operating Environment', value: 'Electronics: -40…+60°C\nWith display: -20…+60°C\nStorage: -40…+70°C (-40…+158°F)' },
                { label: 'Classification', value: 'Korea (KOSHA): Ex ia IIC T4\nEU (ATEX): II 1G Ex ia IIC T4 Ga' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMT360-Datasheet-B211737EN.pdf'
        },
        {
            id: 'hmd60',
            title: 'HMD60 Series',
            subtitle: 'HVAC TRANSMITTER (DUCT)',
            category: 'hvac',
            image: '/templates/hs-tech/images/products/hmd60_v1.png',
            gallery: [],
            desc: 'All-metal body transmitter optimized for building automation and industrial HVAC.',
            specs: [
                { label: 'Application', value: 'HVAC, Cleanroom\nAluminium body, IP66 (NEMA 4X)\nProbe length: 250 mm (100 mm short probe option)' },
                { label: 'HMD62 / HMD65 (RH+T, Duct)', value: 'RH: 0…100% RH\nT: -20...+80°C (-4...+176°F)\nAccuracy: ±1.5 %RH / ±0.1°C @ 20°C PT1000' },
                { label: 'TMD62 (T-only, Duct)', value: 'T: -20...+80°C (-4...+176°F)\nAccuracy: ±0.1°C @ 20°C PT1000' },
                { label: 'HMD62 Output', value: '2 analog outputs: 4…20 mA' },
                { label: 'HMD65 Output', value: '2 analog outputs: 0…10 V\nDigital: BACnet MS/TP, Modbus RTU' },
                { label: 'HMD60 Output', value: 'Configurable outputs and scale\nShort probe option available' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMD60-Datasheet-B211704EN.pdf'
        },
        {
            id: 'hmw90',
            title: 'HMW90 Series',
            subtitle: 'HVAC TRANSMITTER (WALL)',
            category: 'hvac',
            image: '/templates/hs-tech/images/products/hmw90_v1.png',
            gallery: [],
            desc: 'Indoor humidity and temperature transmitter for high-end environments.',
            specs: [
                { label: 'Application', value: 'HVAC, Cleanroom\nWall type transmitter\nDisplay option available (D: HMW92D, HMW93D)' },
                { label: 'HMW92/93 Measurement Range', value: 'RH: 0…100% RH\nT: -5...+55°C (-23...+131°F)' },
                { label: 'HMW92 (RH+T)', value: '2-Wire Current (4…20 mA)' },
                { label: 'HMW93 (RH+T)', value: '3-Wire Voltage (0…5 or 10 V)' },
                { label: 'HMW95 (RH+T)', value: 'Digital: BACnet / Modbus' },
                { label: 'HMW90 (RH+T)', value: 'Configurable analog output' },
                { label: 'TMW90 Series (T-only)', value: 'T only measurement\n2-Wire Current or 3-Wire Voltage or Configurable' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMW90-Datasheet-B211703EN.pdf'
        },
        {
            id: 'hmdw110',
            title: 'HMDW110 Series',
            subtitle: 'IP65 HVAC TRANSMITTER',
            category: 'hvac',
            image: '/templates/hs-tech/images/products/hmdw110_v1.png',
            gallery: [],
            desc: 'Versatile transmitter for duct, wall, and outdoor applications with IP65 protection.',
            specs: [
                { label: 'Measurement Range', value: 'RH: 0…100% RH\nT: -40...+60°C\nCalculated: Td, Mixing ratio, Absolute humidity, Wet bulb temp, Enthalpy' },
                { label: 'HMW110 (Wall)', value: '2-Wire Current (4…20 mA) or Modbus RTU' },
                { label: 'HMW112 (Wall)', value: '2-Wire Current (4…20 mA)' },
                { label: 'HMD110 (Duct)', value: '2-Wire Current (4…20 mA) or Modbus RTU' },
                { label: 'HMD112 (Duct)', value: '2-Wire Current (4…20 mA)' },
                { label: 'HMS110 (Outdoor)', value: 'RH+T measurement\n2-Wire Current (4…20 mA) or Modbus RTU' },
                { label: 'HMS112 (Outdoor)', value: 'RH+T measurement\n2-Wire Current (4…20 mA)' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMDW110-Datasheet-B211705EN.pdf'
        },
        {
            id: 'hmdw80',
            title: 'HMDW80 Series',
            subtitle: 'VERSATILE HVAC TRANSMITTER',
            category: 'hvac',
            image: '/templates/hs-tech/images/products/hmdw80_v1.png',
            gallery: [],
            desc: 'Versatile wall and duct mounting for standard HVAC applications.',
            specs: [
                { label: 'Application', value: 'Standard HVAC building automation' },
                { label: 'Range', value: '0 ... 100 %RH\n-5 ... +55 °C' },
                { label: 'Accuracy', value: '±3 %RH\n±0.5 °C' },
                { label: 'Output', value: '4...20 mA, 0...10V' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMDW80-Datasheet-B211603EN.pdf'
        },
        {
            id: 'indigo80_hmp80',
            title: 'Indigo80',
            subtitle: 'HANDHELD INDICATOR',
            category: 'handheld',
            image: '/templates/hs-tech/images/products/indigo80_hmp80_v1.jpg',
            gallery: [],
            desc: 'High-end handheld indicator and probe.',
            specs: [
                { label: 'MI70 Indicator', value: 'Operating temp: -10…+40°C\nLCD with backlight\nData logging: 2,700 points\nAudible alarm' },
                { label: 'HMP75 Probe (118 mm)', value: 'General purpose\nRH: 0…100% / T: -20…+60°C\nAccuracy: RH ±1 %RH (0…90%) / T ±0.2°C' },
                { label: 'HMP76 Probe (328 mm)', value: 'Long stainless steel, duct spot-checking\nRH: 0…100% / T: -50…+120°C\nAccuracy: RH ±1 %RH (0…90%)' },
                { label: 'HMP77 Probe (5 m cable)', value: 'Small probe for difficult-to-reach areas\nRH: 0…100% / T: -70…+180°C\nAccuracy: RH ±1 %RH (0…90%)' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/Indigo80-Datasheet-B211699EN.pdf'
        },
        {
            id: 'hm70',
            title: 'HM70',
            subtitle: 'HANDHELD METER',
            category: 'handheld',
            image: '/templates/hs-tech/images/products/hm70_v1.jpg',
            gallery: ["/templates/hs-tech/images/products/hm70_v1.jpg"],
            desc: 'Professional handheld humidity and temperature meter.',
            specs: [
                { label: 'MI70 Indicator', value: 'Operating temp: -10…+40°C\nLCD with backlight\nData logging: 2,700 points\nAudible alarm' },
                { label: 'HMP75 Probe (118 mm)', value: 'General purpose\nRH: 0…100% / T: -20…+60°C\nAccuracy: RH ±1 %RH (0…90%) / T ±0.2°C' },
                { label: 'HMP76 Probe (328 mm)', value: 'Long stainless steel, duct spot-checking\nRH: 0…100% / T: -50…+120°C\nAccuracy: RH ±1 %RH (0…90%)' },
                { label: 'HMP77 Probe (5 m cable)', value: 'Small probe for difficult-to-reach areas\nRH: 0…100% / T: -70…+180°C\nAccuracy: RH ±1 %RH (0…90%)' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HM70-Datasheet-B210974EN.pdf'
        },
        {
            id: 'hm40',
            title: 'HM40',
            subtitle: 'COMPACT HANDHELD',
            category: 'handheld',
            image: '/templates/hs-tech/images/products/hm40_v1.png',
            gallery: ["/templates/hs-tech/images/products/hm40_v1.png"],
            desc: 'Compact and easy-to-use handheld meter.',
            specs: [
                { label: 'HM41 (General use)', value: 'Fixed probe, sensor replaceable\nRH: 0…100% / T: -10…+60°C\nAccuracy: ±1.5 %RH (0…90%)' },
                { label: 'HM42 (Tight spaces)', value: 'Thin 4 mm diameter probe, 150 mm cable\nRH: 0…100% / T: -40…+100°C\nAccuracy: ±1.5 %RH (0…90%)' },
                { label: 'HM45 (Remote probe)', value: 'Sensor replaceable, 120 mm cable\nRH: 0…100% / T: -40…+60°C\nAccuracy: ±1.5 %RH (0…90%)' },
                { label: 'HM46 (Extra reach)', value: 'Stainless steel probe, brass filter, 150 mm cable\nRH: 0…100% / T: -40…+100°C\nAccuracy: ±1.5 %RH (0…90%)' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HM40-Datasheet-B210975EN.pdf'
        },
        {
            id: 'shm40',
            title: 'SHM40',
            subtitle: 'CONCRETE MOISTURE',
            category: 'handheld',
            image: '/templates/hs-tech/images/products/shm40_v1.jpg',
            gallery: [],
            desc: 'Specialized for structural humidity measurement (concrete).',
            specs: [
                { label: 'HM40 Indicator', value: 'Alkaline batteries: 2×AA, 1.5 V\nLCD display\nCalculated variables: Td, Tw, a, x, h\nIP54' },
                { label: 'HMP40S Probe', value: 'TRRS male 3.5 mm cable connector\nBorehole diameter needed: 16 mm\nStainless steel probe\nMeasurement range: 0…100% RH' }
            ]
        },
        {
            id: 'hmk15',
            title: 'HMK15',
            subtitle: 'HUMIDITY CALIBRATOR',
            category: 'handheld',
            image: '/templates/hs-tech/images/products/hmk15_v1.png',
            gallery: [],
            desc: 'Saturated salt calibrator for on-site humidity probe calibration.',
            specs: [
                { label: 'Chamber', value: 'Covers for 12 / 13.5 / 18.5 mm probe diameter\nThermometer for temperature monitoring' },
                { label: 'LiCl Solution', value: '11 %RH ± 1.3 %RH' },
                { label: 'MgCl₂ Solution', value: '33 %RH ± 1.2 %RH' },
                { label: 'NaCl Solution', value: '75 %RH ± 1.5 %RH' },
                { label: 'K₂SO₄ Solution', value: '97 %RH ± 2.0 %RH' }
            ]
        },
        {
            id: 'hmt330',
            title: 'HMT330 Series',
            subtitle: 'HUMIDITY AND TEMPERATURE TRANSMITTERS',
            category: 'industrial',
            image: '/templates/hs-tech/images/products/hmt330_v1.png',
            gallery: ["/templates/hs-tech/images/products/hmt330_v1.png"],
            desc: 'Designed for demanding industrial applications. Six models available for various installation needs.',
            specs: [
                { label: 'HMT331 (Wall)', value: 'RH: 0…100% RH\nT: -40...+60°C (-40...+140°F)' },
                { label: 'HMT333 (Duct)', value: 'RH: 0…100% RH\nT: -40...+80°C (rubber) / -40...+120°C (teflon)' },
                { label: 'HMT334 (High Pressure)', value: 'RH: 0…100% RH\nT: -70...+180°C (-94...+356°F)\nP: 0...10 MPa (0...100 bar)' },
                { label: 'HMT335 (High Temp)', value: 'RH: 0…100% RH\nT: -70...+180°C (-94...+356°F)' },
                { label: 'HMT337 (High Humidity)', value: 'RH: 0…100% RH\nT: -70...+180°C (-94...+356°F)' },
                { label: 'HMT338 (Pipeline)', value: 'RH: 0…100% RH\nT: -70...+180°C (-94...+356°F)\nP: 0...4 MPa (0…40 bar)' },
                { label: 'Accuracy', value: '±1 %RH (0…90%)\n±0.2°C @ 20°C PT100' },
                { label: 'Operating Voltage', value: '10...35 VDC, 24 VAC ±20%\n(optional: 100...240 VAC, 50/60 Hz)' },
                { label: 'Output', value: 'Current: 0...20 mA or 4…20 mA\nVoltage: 0…1 V / 5 V / 10 V\nDigital: RS232, RS485 (optional)\n(optional) WLAN, Relay outputs: 0.5 A, 250 VAC' },
                { label: 'IP Rating', value: 'IP66 / IP65 with local display' },
                { label: 'Calculated Variables', value: 'Dew point (Td), Mixing ratio, Absolute humidity,\nWet bulb temperature, Enthalpy, Water vapor pressure' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMT330-Datasheet-B211735EN.pdf'
        },
        {
            id: 'hmt310',
            title: 'HMT310',
            subtitle: 'HUMIDITY AND TEMPERATURE TRANSMITTER',
            category: 'industrial',
            image: '/templates/hs-tech/images/products/hmt310_v1.png',
            gallery: ["/templates/hs-tech/images/products/hmt310_v1.png"],
            desc: 'Compact transmitter with excellent stability for demanding industrial applications.',
            specs: [
                { label: 'HMT311 (Wall)', value: 'RH: 0…100% RH\nT: -40...+60°C (-40...+140°F)' },
                { label: 'HMT313 (Duct)', value: 'RH: 0…100% RH\nT: -40...+80°C (rubber) / -40...+120°C (teflon)' },
                { label: 'HMT314 (High Pressure)', value: 'RH: 0…100% RH\nT: -70...+180°C (-94...+356°F)\nP: 0...10 MPa (0...100 bar)' },
                { label: 'HMT315 (High Temp)', value: 'RH: 0…100% RH\nT: -70...+180°C (-94...+356°F)' },
                { label: 'HMT317 (High Humidity)', value: 'RH: 0…100% RH\nT: -70...+180°C (-94...+356°F)' },
                { label: 'HMT318 (Pipeline)', value: 'RH: 0…100% RH\nT: -70...+180°C (-94...+356°F)\nP: 0...4 MPa (0…40 bar)' },
                { label: 'Accuracy', value: '±1 %RH (0…90%)\n±0.2°C @ 20°C PT1000' },
                { label: 'Operating Voltage', value: '12...28 V (with serial port: 15...28 V)' },
                { label: 'Output', value: 'Two analog outputs (selectable & scalable)\n0...20 mA or 4...20 mA / 1...5 V, 0…5 V or 0…10 V\nSerial: RS-232 (M12/8 pin connector)' },
                { label: 'IP Rating', value: 'IP66 / IP65 with local display' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMT310-Datasheet-B211734EN.pdf'
        },
        {
            id: 'hmt120',
            title: 'HMT120 / HMT130',
            subtitle: 'HUMIDITY AND TEMPERATURE TRANSMITTERS',
            category: 'industrial',
            image: '/templates/hs-tech/images/products/hmt120_v1.png',
            gallery: ["/templates/hs-tech/images/products/hmt120_v1.png"],
            desc: 'Optimized for cleanrooms and light industrial applications with interchangeable probes.',
            specs: [
                { label: 'Application', value: 'Humidity and Temperature monitoring in cleanrooms\nWall / Duct / Outdoor installation' },
                { label: 'Measurement Range', value: 'RH: 0…100% RH\nT: -40...+80°C (-40...+176°F)' },
                { label: 'Accuracy', value: '±1.5 %RH (0…90%)\n±0.2°C @ 20°C PT1000' },
                { label: 'HMT120', value: '2-Wire Current (4…20 mA)\nSensor one-to-one replaceable\nDisplay option available' },
                { label: 'HMT130', value: '3-Wire Voltage (0…1 V / 5 V / 10 V), RS485\nMax cable length 20 m\nDewpoint output function' },
                { label: 'IP Rating', value: 'IP65' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HMT120-Datasheet-B211733EN.pdf'
        },
    ],
    dewpoint: [
        {
            id: 'dmp1', title: 'DMP1-8', subtitle: 'DEWPOINT PROBE SERIES', category: 'fixed',
            image: '/templates/hs-tech/images/products/38af1f4961a7a.png',
            gallery: ['/templates/hs-tech/images/products/38af1f4961a7a.png'],
            desc: 'Intelligent Indigo-compatible dewpoint probes for compressed air, dryers, and process gas applications. The DRYCAP® sensor provides fast response and excellent stability.',
            specs: [
                { label: 'Measurement Range', value: '-60 ... +60 °Ctd (DMP1, DMP3, DMP5)\n-40 ... +60 °Ctd (DMP7, DMP8)' },
                { label: 'Accuracy', value: '±2 °Ctd (@ 20 °Ctd)\n±3 °Ctd (@ -60 °Ctd)' },
                { label: 'Sensor', value: 'Vaisala DRYCAP® 180' },
                { label: 'Output', value: 'RS-485 Modbus RTU (Indigo compatible)' },
                { label: 'Response time', value: '< 15 s (90% step change)' },
                { label: 'Application', value: 'Compressed air, Industrial dryers\nCleanrooms, Process gas' },
                { label: 'Protection', value: 'IP65' },
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/DMP1-8-Datasheet-B211707EN.pdf'
        },
        {
            id: 'dmt340', title: 'DMT340', subtitle: 'DEWPOINT TRANSMITTER', category: 'fixed',
            image: '/templates/hs-tech/images/products/50e31ebdea359.png',
            gallery: ['/templates/hs-tech/images/products/50e31ebdea359.png'],
            desc: 'Dewpoint transmitter for condensing environments. The heated sensor head prevents condensation on the sensor, enabling accurate measurement even in 100% RH conditions.',
            specs: [
                { label: 'DMT341 (Wall)', value: 'Td: -70…+80°C (±2°C, up to 20 bar)\nT: 0…+80°C (±0.2°C)\nRH: 0…70% (±0.004 %RH + 20% of reading)\nGraphical LCD monitoring' },
                { label: 'DMT342 (Flange Probe)', value: 'Large equipment or high pressure\nPressure range: 0…50 bar\nMechanical durability: up to 250 bar\n(option) Sampling cell' },
                { label: 'DMT344 (High Pressure)', value: 'High pressure and vacuum (up to 100 bar)\nPressure range: 0…50 bar\nMechanical durability: up to 100 bar' },
                { label: 'DMT347 (Thread Probe)', value: 'Small probe for tight spaces\nPressure range: 0…10 bar\nMechanical durability: up to 10 bar' },
                { label: 'DMT348 (Pipeline)', value: 'Ball valve option for hot-swap\nPressure range: 0…40 bar\nMechanical durability: up to 70 bar\n(option) Ball-valve set or sampling cell' },
                { label: 'Output', value: '0/4...20 mA, 0...1/5/10 V\n(2 analog outputs, 3rd optional)\nRS485 (option)' },
                { label: 'Operating Temperature', value: 'Probe: -40...+80°C\nMechanical durability: up to +180°C\nTransmitter: -40...+60°C\nWith display: 0...+60°C' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/DMT340-Datasheet-B211742EN.pdf'
        },
        {
            id: 'dmt345', title: 'DMT345/346', subtitle: 'HIGH TEMPERATURE DEWPOINT', category: 'fixed',
            image: '/templates/hs-tech/images/products/5cf3bcd453c32.png',
            gallery: ['/templates/hs-tech/images/products/5cf3bcd453c32.png'],
            desc: 'High temperature dewpoint transmitter for process streams up to +180 °C. Ideal for plastic drying, industrial ovens, and compressed air systems with high temperatures.',
            specs: [
                { label: 'DMT345 (High Temp)', value: 'Accurate in hot and dry environments (up to +180°C)\nTd: -40…+100°C (±2°C)\nT: 0…+180°C (±0.4°C @ 100°C)\nRH: 0…100% / Mixing ratio: 0…1000 g/kg' },
                { label: 'DMT346 (Cooling Flange)', value: 'Reliable in very hot processes (up to +350°C)\nTd: -25…+100°C (±2°C)\nMixing ratio: 0…1000 g/kg' },
                { label: 'Output', value: '0/4...20 mA, 0...1/5/10 V\n(2 analog outputs, 3rd optional)\nRS485 (option)' },
                { label: 'Operating Environment', value: 'Mechanical durability: up to +180°C (DMT345)\nMechanical durability: up to +350°C (DMT346)' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/DMT345-Datasheet-B211743EN.pdf'
        },
        {
            id: 'dmt132', title: 'DMT132', subtitle: 'DEWPOINT & HUMIDITY MODULE', category: 'module',
            image: '/templates/hs-tech/images/products/2d44fea596554.png', gallery: [],
            desc: 'OEM dewpoint and humidity module for integration into instruments and systems.',
            specs: [
                { label: 'Features', value: 'For refrigerant dryers\nAuto-calibration\nChemical purging\nOptional LED warning light' },
                { label: 'Measurement Range', value: 'Td: -30…+50°C (±1°C @ -3…+20°C)' },
                { label: 'Output', value: '4...20 mA (2-wire)' },
                { label: 'Operating Voltage', value: '10…28 VDC (low power)' }
            ]
        },
        {
            id: 'dmt152', title: 'DMT152', subtitle: 'LOW DEWPOINT MODULE', category: 'module',
            image: '/templates/hs-tech/images/products/2d44fea596554.png',
            gallery: ['/templates/hs-tech/images/products/2d44fea596554.png'],
            desc: 'OEM module for very low dewpoint measurement in dry air and inert gas applications.',
            specs: [
                { label: 'Features', value: 'Auto-calibration\nChemical purging\nCompressed air, dry chambers' },
                { label: 'Measurement Range', value: 'Td: -100…+20°C (±2°C @ -80…-40°C)' },
                { label: 'Output', value: '0/4...20 mA, 0...5/10 V (2 analog outputs)\nRS485 (option)' },
                { label: 'Operating Environment', value: 'T: -40…+70°C / RH: 0…100%' }
            ]
        },
        {
            id: 'dmt143', title: 'DMT143', subtitle: 'COMPACT OEM MODULE', category: 'module',
            image: '/templates/hs-tech/images/products/6d596692e24f1.png',
            gallery: ['/templates/hs-tech/images/products/6d596692e24f1.png'],
            desc: 'Ultra-compact dewpoint transmitter module for OEM and space-limited applications.',
            specs: [
                { label: 'Features', value: 'Auto-calibration\nChemical purging\nLED alarm\nMiniature dewpoint measurement' },
                { label: 'Measurement Range', value: 'Td: -70…+60°C (±2°C)' },
                { label: 'Output', value: '4...20 mA, 0…1/5/10 V\nRS485 or Modbus RTU' },
                { label: 'Operating Environment', value: 'T: -40…+60°C / RH: 0…100%' },
            ]
        },
        {
            id: 'dmt143l', title: 'DMT143L', subtitle: 'EXTENDED PROBE MODULE', category: 'module',
            image: '/templates/hs-tech/images/products/289587707561d.png',
            gallery: ['/templates/hs-tech/images/products/289587707561d.png'],
            desc: 'DMT143 module with extended probe for deep installation into pipelines and vessels.',
            specs: [
                { label: 'Probe Length', value: 'Extended (selectable)' },
                { label: 'Dewpoint Range', value: '-70 ... +60 °Ctd' },
                { label: 'Output', value: 'Analog / Digital' },
                { label: 'Application', value: 'Pipelines, Deep installations\nPressure vessels' },
            ]
        },
        {
            id: 'dpt146', title: 'DPT146', subtitle: 'DEWPOINT & PRESSURE TRANSMITTER', category: 'module',
            image: '/templates/hs-tech/images/products/04ad79c254fa2.png',
            gallery: ['/templates/hs-tech/images/products/04ad79c254fa2.png'],
            desc: 'Combined dewpoint and pressure transmitter for compressed air quality monitoring (ISO 8573 compliance).',
            specs: [
                { label: 'Parameters', value: 'Dewpoint (Td) + Pressure (P)' },
                { label: 'Dewpoint Range', value: '-40 ... +60 °Ctd' },
                { label: 'Pressure Range', value: '0 ... 12 bar (abs)' },
                { label: 'Output', value: '4...20 mA × 2, RS-485' },
                { label: 'Application', value: 'Compressed air systems\nISO 8573 quality monitoring' },
            ]
        },
        {
            id: 'dpt145', title: 'DPT145', subtitle: 'SF6 GAS DEWPOINT MONITOR', category: 'module',
            image: '/templates/hs-tech/images/products/04ad79c254fa2.png',
            gallery: [],
            desc: 'Dewpoint measurement in SF6 gas systems for high-voltage switchgear monitoring.',
            specs: [
                { label: 'Features', value: 'For SF6 gas measurement without sampling\nDetects leakage with pressure sensor' },
                { label: 'Measurement Range', value: 'Td: -50…+30°C (±3°C)\nPressure (absolute): 1…12 bar (±0.5% FS)' },
                { label: 'Output', value: 'RS-485, Modbus RTU' },
                { label: 'Operating Environment', value: 'T: -40…+60°C / RH: 0…100%\nPressure: 0…50 bar' }
            ]
        },
        {
            id: 'indigo80_dmp80', title: 'Indigo80 + DMP80', subtitle: 'PORTABLE DEWPOINT SYSTEM', category: 'portable',
            image: '/templates/hs-tech/images/products/1388fffe59c2e.png',
            gallery: ['/templates/hs-tech/images/products/1388fffe59c2e.png'],
            desc: 'Portable dewpoint measurement system combining the Indigo80 handheld indicator with the DMP80 probe. Color display, data logging, and Bluetooth connectivity.',
            specs: [
                { label: 'System', value: 'Indigo80 indicator + DMP80 probe' },
                { label: 'Dewpoint Range', value: '-60 ... +60 °Ctd' },
                { label: 'Accuracy', value: '±2 °Ctd' },
                { label: 'Display', value: 'Color touchscreen (3.5")' },
                { label: 'Data logging', value: 'Internal memory (5.5M data points)' },
                { label: 'Connectivity', value: 'Bluetooth, USB' },
                { label: 'Application', value: 'Spot-checking, Verification\nField calibration' },
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/Indigo80-Datasheet-B211699EN.pdf'
        },
        {
            id: 'dm70', title: 'DM70', subtitle: 'HANDHELD DEWPOINT METER', category: 'portable',
            image: '/templates/hs-tech/images/products/fc840485431f5.png',
            gallery: ['/templates/hs-tech/images/products/fc840485431f5.png'],
            desc: 'Professional handheld dewpoint meter with interchangeable probe. Used for field measurement, calibration verification, and spot-checking in industrial processes.',
            specs: [
                { label: 'MI70 Indicator', value: 'Operating temp: -10…+40°C\nLCD with backlight\nData logging: 2,700 points\nAudible alarm' },
                { label: 'DMP74A Probe (Higher Td)', value: 'Pressure tight probe\nTd: -50…+60°C Td (±2°C Td)\nT: -10…+60°C (±0.2°C @ 20°C)' },
                { label: 'DMP74B Probe (Low Td)', value: 'Pressure tight probe\nTd: -70…+30°C Td (±2°C Td)\nT: -10…+60°C (±0.2°C @ 20°C)' },
                { label: 'DMP74C Probe (SF6 Gas)', value: 'For SF6 gas measurement\nTd: -70…+30°C Td (±2°C Td)\nT: -10…+60°C (±0.2°C @ 20°C)' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/DM70-Datasheet-B210978EN.pdf'
        },
        {
            id: 'dss70a', title: 'DSS70A', subtitle: 'SAMPLING SYSTEM FOR DM70', category: 'portable',
            image: '/templates/hs-tech/images/products/96ddd2e578412.png',
            gallery: ['/templates/hs-tech/images/products/96ddd2e578412.png'],
            desc: 'Sampling cell system for dewpoint measurement in pressurized gas lines.',
            specs: [
                { label: 'DSS70A', value: 'Metal treatment and plastics drying processes\nOperating gases: Air, N₂, and other non-toxic inert gases\nInlet/outlet connections for pressurized gas' },
                { label: 'DSC74 (Sampling cell)', value: 'For pressurized gases\nPressure limit: 1 MPa\nMultiple connection adaptors' },
                { label: 'DSC74B (Two pressure cell)', value: 'Pressure limit: 1 MPa\nSuitable for SF6 gas (with DMP74C)' },
                { label: 'DSC74C', value: 'DSC74B + DMCOIL (cooling/venting coil)\nOptionally applicable to other sampling cells' },
                { label: 'DMT242SC', value: 'Sampling cell, pressure limit: 10 MPa' },
                { label: 'DMT242SC2', value: 'Sampling cell + Swagelok connectors (1/4" pipeline)\nPressure limit: 4 MPa' }
            ]
        },
    ],
    co2: [
        {
            id: 'gmw90', title: 'GMW90', subtitle: 'WALL-MOUNT CO₂ TRANSMITTER', category: 'transmitter',
            image: '/templates/hs-tech/images/products/6251932a0e954.png',
            gallery: ['/templates/hs-tech/images/products/6251932a0e954.png'],
            desc: 'Multi-parameter wall transmitter measuring CO2, temperature, and humidity. Features Vaisala CARBOCAP® dual-channel sensor for superior long-term stability — no zero drift.',
            specs: [
                { label: 'GMW93 / GMW93D (Wall)', value: 'CO₂+T measurement\n3-wire voltage output\nDisplay option (D suffix)' },
                { label: 'GMW94 / GMW94D (Wall)', value: 'CO₂+T measurement\n3-wire current output' },
                { label: 'GMW93R / GMW93RD / GMW93RA (Wall)', value: 'CO₂+T+RH measurement\n3-wire voltage output\nRA: Display + LED indicator' },
                { label: 'GMW94R / GMW94RD (Wall)', value: 'CO₂+T+RH measurement\n3-wire current output' },
                { label: 'GMW95 / GMW95D (Wall)', value: 'CO₂+T measurement\nDigital: BACnet / Modbus' },
                { label: 'GMW95R / GMW95RD (Wall)', value: 'CO₂+T+RH measurement\nDigital: BACnet / Modbus' },
                { label: 'GMW90 / GMW90R (Wall)', value: 'Configurable analog/digital output\nR suffix: +RH measurement' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/GMW90-Datasheet-B211008EN.pdf'
        },
        {
            id: 'gmw80', title: 'GMW80', subtitle: 'CO₂ TRANSMITTER', category: 'transmitter',
            image: '/templates/hs-tech/images/products/cfd2828db31bd.png',
            gallery: ['/templates/hs-tech/images/products/cfd2828db31bd.png'],
            desc: 'Economical CO2 transmitter for standard indoor air quality monitoring and demand-controlled ventilation.',
            specs: [
                { label: 'Parameter', value: 'CO₂' },
                { label: 'CO₂ Range', value: '0 ... 2000 ppm' },
                { label: 'CO₂ Accuracy', value: '±(40 ppm + 3% of reading)' },
                { label: 'Output', value: '0...10 V, 4...20 mA' },
                { label: 'Application', value: 'Office buildings, Schools\nDemand-controlled ventilation' },
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/GMW80-Datasheet-B211007EN.pdf'
        },
        {
            id: 'gmd110', title: 'GMD110', subtitle: 'DUCT CO₂ TRANSMITTER', category: 'transmitter',
            image: '/templates/hs-tech/images/products/c846ecca3733c.png',
            gallery: ['/templates/hs-tech/images/products/c846ecca3733c.png'],
            desc: 'CO2 transmitter for duct mounting in HVAC air handling units. Measures CO2 directly in the airflow.',
            specs: [
                { label: 'GMD20 (Duct)', value: 'IP65\nDisplay (optional)\nEasy one-to-one replacement\nExcellent long-term stability' },
                { label: 'CO₂ Range / Accuracy', value: '0…2000 ppm (±2% + 2% of reading)' },
                { label: 'Output', value: '0...20 mA, 4...20 mA\n0...10 V\nRelay (option)' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/GMD110-Datasheet-B211006EN.pdf'
        },
        {
            id: 'gmp343', title: 'GMP343', subtitle: 'INDUSTRIAL CO₂ PROBE', category: 'probe',
            image: '/templates/hs-tech/images/products/eb130aca3df08.png',
            gallery: ['/templates/hs-tech/images/products/eb130aca3df08.png'],
            desc: 'High-accuracy CO2 probe for soil respiration, ambient monitoring, plant growth chambers and OEM applications.',
            specs: [
                { label: 'Features', value: 'Excellent accuracy and stability\nSilicon-based NDIR sensor\nDual wavelength measurement\nDiffusion and flow-through design' },
                { label: 'Measurement Range', value: '0…1000/2000/3000/4000/5000 ppm\n0…2%' },
                { label: 'Accuracy', value: '±(3 ppm + 1% of reading) @ 1000 ppm' },
                { label: 'IP Rating', value: 'IP65' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/GMP343-Datasheet-B210879EN.pdf'
        },
        {
            id: 'gmp251', title: 'GMP251', subtitle: 'HIGH-RANGE CO₂ PROBE', category: 'probe',
            image: '/templates/hs-tech/images/products/f6933d55699f3.png',
            gallery: ['/templates/hs-tech/images/products/f6933d55699f3.png'],
            desc: 'CO2 probe for life science incubators, cold storages, fruit and vegetable transportation.',
            specs: [
                { label: 'GMP251', value: 'Range: 0…20% (±0.1 %CO₂ @ 5% CO₂)\nIP65 classified housing\nSensor head heated for reliable operation\nOperating temp: -40…+60°C' },
                { label: 'GMP (Agriculture/Refrigeration)', value: 'Range: 0…10,000 ppm (±40 ppm @ 0…3000 ppm)\nIP65 housing\nSensor head heated' },
                { label: 'INDIGO201 Transmitter', value: 'Plug & Play transmitter\nCH3: Analog output (V & mA), 2 relays\nDisplay options\nIP65, 24 V input' },
                { label: 'INDIGO202 Transmitter', value: 'RS485 isolated with Modbus RTU\n2 relays, display version only' },
                { label: 'Output', value: 'Digital output via Indigo transmitter' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/GMP251-Datasheet-B210878EN.pdf'
        },
        {
            id: 'gmp231', title: 'GMP231', subtitle: 'INCUBATOR CO₂ PROBE', category: 'probe',
            image: '/templates/hs-tech/images/products/8b82ea8dea629.png',
            gallery: ['/templates/hs-tech/images/products/8b82ea8dea629.png'],
            desc: 'CO2 probe designed for life science incubators. High accuracy and stability at elevated temperatures.',
            specs: [
                { label: 'Features', value: 'Max temperature durability in standby (sensor head only)\nHigh accuracy and stability as temp changes' },
                { label: 'Measurement Range', value: '0…20% CO₂\nAccuracy: ±0.1% CO₂ (@ 5% CO₂)' },
                { label: 'Output', value: 'Digital: I²C 5 V, RS-485 (2-wire w/ Modbus)' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/GMP231-Datasheet-B210877EN.pdf'
        },
        {
            id: 'indigo80_gmp252', title: 'Indigo80 + GMP252', subtitle: 'PORTABLE CO₂ METER', category: 'handheld',
            image: '/templates/hs-tech/images/products/41a5c8353e901.png',
            gallery: ['/templates/hs-tech/images/products/41a5c8353e901.png'],
            desc: 'Portable CO2 measurement system combining the Indigo80 handheld indicator with the GMP252 high-range CO2 probe. Ideal for spot-checking and verification.',
            specs: [
                { label: 'System', value: 'Indigo80 indicator + GMP252 probe' },
                { label: 'CO₂ Range', value: '0 ... 30 %vol (ppm range available)' },
                { label: 'Display', value: 'Color touchscreen (3.5")' },
                { label: 'Data logging', value: 'Internal memory (5.5M data points)' },
                { label: 'Connectivity', value: 'Bluetooth, USB' },
                { label: 'Application', value: 'Spot-checking, Calibration verification\nFood storage, Greenhouses' },
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/Indigo80-Datasheet-B211699EN.pdf'
        },
    ],
    oil: [
        {
            id: 'mht410', title: 'MHT410', subtitle: 'ONLINE TRANSFORMER MONITOR', category: 'transformer',
            image: '/templates/hs-tech/images/products/deffa2b1b398f.jpg',
            gallery: ['/templates/hs-tech/images/products/deffa2b1b398f.jpg'],
            desc: 'Online multi-parameter monitor for power transformers. Simultaneously measures dissolved hydrogen gas and moisture in insulating oil to detect early-stage faults.',
            specs: [
                { label: 'Features', value: 'Real-time transformer condition measurement\nDirect installation in transformers\nDNV certified for marine applications' },
                { label: 'Hydrogen in Oil', value: '0...5000 ppmv (±20% of reading or ±25 ppmv)' },
                { label: 'Moisture in Oil', value: 'Measurement range: aw 0…1\nTemperature: -40…+180°C' },
                { label: 'Installation Type', value: 'Main: Online type\n(Option) Display: External installation' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/MHT410-Datasheet-B211757EN.pdf'
        },
        {
            id: 'mmt330', title: 'MMT330', subtitle: 'ONLINE OIL MOISTURE TRANSMITTER', category: 'fixed',
            image: '/templates/hs-tech/images/products/5980bfb1851a8.png',
            gallery: ['/templates/hs-tech/images/products/5980bfb1851a8.png'],
            desc: 'Online moisture measurement in insulating oils. MAN Diesel & Turbo certified, DNV certified.',
            specs: [
                { label: 'Measurement Range', value: 'Water activity: aw 0…1\nTemperature: -40…+180°C' },
                { label: 'Output', value: '2 analog outputs (3rd optional)\n0/4...20 mA, 0…5/10 V\nRS-485 Modbus (optional)' },
                { label: 'MMT332 (Flange)', value: 'Pressure: 0…250 bar\nTemp: -40…+180°C' },
                { label: 'MMT337 (Swagelok)', value: 'Pressure: 0…10 bar\nTemp: -40…+180°C\nFitting: R 3/8" ISO, 1/2" ISO or NPT 1/2"' },
                { label: 'MMT338 (Ball Valve)', value: 'Pressure: 0…10 bar\nTemp: -40…+180°C\nFitting: R 1/2" ISO or NPT 1/2"' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/MMT330-Datasheet-B210993EN.pdf'
        },
        {
            id: 'mmt310', title: 'MMT310', subtitle: 'COMPACT OIL MOISTURE TRANSMITTER', category: 'fixed',
            image: '/templates/hs-tech/images/products/3ca83569b6d00.jpg',
            gallery: ['/templates/hs-tech/images/products/3ca83569b6d00.jpg'],
            desc: 'Compact transmitter for continuous moisture measurement in oils.',
            specs: [
                { label: 'Features', value: 'Continuous measurement of moisture in oil\nMax cable length: 10 m\nIP66' },
                { label: 'Measurement Range', value: 'Water activity: aw 0…1 (0…100 %RS)\nTemperature: -40…+180°C' },
                { label: 'Output', value: '2 analog outputs (3rd optional)' },
                { label: 'MMT317', value: 'Small pressure tight probe\nSwagelok: NPT 1/2", ISO 3/8" or ISO 1/2"\nPressure: 0…10 bar' },
                { label: 'MMT318', value: 'Pressurized pipelines\nFitting: ISO 1/2", NPT 1/2"' }
            ]
        },
        {
            id: 'mm70', title: 'MM70', subtitle: 'HANDHELD OIL MOISTURE METER', category: 'handheld',
            image: '/templates/hs-tech/images/products/a39c6508f2ff2.png',
            gallery: ['/templates/hs-tech/images/products/a39c6508f2ff2.png'],
            desc: 'Portable handheld instrument for spot-checking moisture in insulating and industrial oils.',
            specs: [
                { label: 'MI70 Indicator', value: 'Operating temp: -10…+40°C\nLCD with backlight\nData logging: 2,700 points\nAudible alarm' },
                { label: 'MM70 Probe (In-line)', value: 'Moisture in oil sensor\nIn-line process checking via ball valve\nAw measurement, ppm calculation' }
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/MM70-Datasheet-B210976EN.pdf'
        },
        {
            id: 'mmt162', title: 'MMT162', subtitle: 'OEM OIL MOISTURE MODULE', category: 'oil_module',
            image: '/templates/hs-tech/images/products/deffa2b1b398f.jpg', gallery: [],
            desc: 'Economical online detection of moisture in oil. Direct installation in pipeline.',
            specs: [
                { label: 'Features', value: 'Economical online moisture in oil detection\nDirect installation in pipeline\nMI70 compatible for display' },
                { label: 'Metal Type - Working Range', value: 'Water activity: aw 0…1 (±0.02 aw)\nTemperature: -40…+80°C (±0.2°C)\nPressure: up to specified rating' },
                { label: 'Plastic Type - Working Range', value: 'Water activity: aw 0…1 (±0.02 aw)\nTemperature: -40…+80°C (±0.2°C)' },
                { label: 'Output', value: '2 analog outputs (3rd optional)\n0/4...20 mA, 0…5/10 V\nRS-485 non-isolated (Vaisala protocol)' }
            ]
        },
    ],
    barometer: [
        {
            id: 'ptb330', title: 'PTB330', subtitle: 'CLASS A DIGITAL BAROMETER', category: 'barometer',
            image: '/templates/hs-tech/images/products/3ca83569b6d00.jpg',
            gallery: ['/templates/hs-tech/images/products/3ca83569b6d00.jpg', '/templates/hs-tech/images/products/2ddb0a75a50e4.jpg'],
            desc: 'Reference-level Class A digital barometer for meteorology, aviation, and research. Dual-sensor design provides redundancy and highest accuracy.',
            specs: [
                { label: 'Accuracy Class', value: 'A (±0.3 hPa @ +20 °C, ref to WMO)' },
                { label: 'Pressure Range', value: '500 ... 1100 hPa' },
                { label: 'Stability', value: '< 0.1 hPa/year' },
                { label: 'Output', value: 'RS-232, RS-485, 4...20 mA, 0...5 V' },
                { label: 'Display', value: 'Graphical LCD (optional)' },
                { label: 'Application', value: 'Meteorological networks\nAviation (METAR), Research' },
                { label: 'Calibration', value: 'NIST-traceable, ISO/IEC 17025' },
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/PTB330-Datasheet-B210982EN.pdf'
        },
        {
            id: 'ptb210', title: 'PTB210', subtitle: 'CLASS B DIGITAL BAROMETER', category: 'barometer',
            image: '/templates/hs-tech/images/products/2e8820b69ea2b.jpg',
            gallery: ['/templates/hs-tech/images/products/2e8820b69ea2b.jpg'],
            desc: 'Industrial-grade Class B digital barometer for HVAC, weather stations, and environmental monitoring.',
            specs: [
                { label: 'Accuracy Class', value: 'B (±0.5 hPa @ +20 °C)' },
                { label: 'Pressure Range', value: '600 ... 1100 hPa' },
                { label: 'Output', value: 'RS-232, 4...20 mA, 0...5 V' },
                { label: 'Application', value: 'Weather stations, HVAC\nIndustrial environmental monitoring' },
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/PTB210-Datasheet-B210981EN.pdf'
        },
        {
            id: 'ptb110', title: 'PTB110', subtitle: 'BAROMETRIC PRESSURE TRANSMITTER', category: 'barometer',
            image: '/templates/hs-tech/images/products/b2209059580dc.jpg',
            gallery: ['/templates/hs-tech/images/products/b2209059580dc.jpg'],
            desc: 'Compact barometric pressure transmitter with analog output for building automation and HVAC systems.',
            specs: [
                { label: 'Pressure Range', value: '600 ... 1100 hPa' },
                { label: 'Accuracy', value: '±0.5 hPa' },
                { label: 'Output', value: '0...1 V, 0...5 V, 0...10 V, 4...20 mA' },
                { label: 'Application', value: 'Building automation, HVAC\nAltitude compensation' },
                { label: 'Protection', value: 'IP65' },
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/PTB110-Datasheet-B210980EN.pdf'
        },
        {
            id: 'ptu300', title: 'PTU300', subtitle: 'COMBINED P + T + RH TRANSMITTER', category: 'barometer',
            image: '/templates/hs-tech/images/products/deffa2b1b398f.jpg',
            gallery: ['/templates/hs-tech/images/products/deffa2b1b398f.jpg', '/templates/hs-tech/images/products/2e8820b69ea2b.jpg'],
            desc: 'Combined transmitter measuring barometric pressure, temperature, and relative humidity in a single unit. Calculates derived parameters such as absolute humidity and enthalpy.',
            specs: [
                { label: 'Parameters', value: 'Pressure (P), Temperature (T), Humidity (RH)' },
                { label: 'Pressure Range', value: '600 ... 1100 hPa / Accuracy: ±0.5 hPa' },
                { label: 'T Range / Accuracy', value: '-40 ... +60 °C / ±0.2 °C' },
                { label: 'RH Range / Accuracy', value: '0 ... 100 %RH / ±1.5 %RH' },
                { label: 'Output', value: 'RS-232, RS-485, 4...20 mA × 3' },
                { label: 'Application', value: 'Meteorology, Weather stations\nEnvironmental monitoring' },
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/PTU300-Datasheet-B210983EN.pdf'
        },
    ],
    weather: [
        { id: 'wxt530', title: 'WXT530', subtitle: 'WEATHER STATION', category: 'trans', image: '/templates/hs-tech/images/products/2c2344f8b46d5.jpg', gallery: ['/templates/hs-tech/images/products/2c2344f8b46d5.jpg'], desc: 'All-in-one multi-parameter weather sensor measuring wind, rain, pressure, temperature, and humidity.', specs: [{ label: 'Parameters', value: 'Wind speed/direction, Rain, Pressure, T, RH' }, { label: 'Output', value: 'SDI-12, RS-232, RS-485, Modbus' }, { label: 'Application', value: 'Weather monitoring, Aviation, Marine' }], datasheet: 'https://www.vaisala.com/sites/default/files/documents/WXT530-Datasheet-B211961EN.pdf' },
        { id: 'hmp155_w', title: 'HMP155', subtitle: 'WEATHER PROBE', category: 'trans', image: '/templates/hs-tech/images/products/2ddb0a75a50e4.jpg', gallery: ['/templates/hs-tech/images/products/2ddb0a75a50e4.jpg'], desc: 'High-accuracy humidity and temperature probe for meteorological applications.', specs: [{ label: 'Range', value: '0...100 %RH / -80...+60 °C' }, { label: 'Accuracy', value: '±1.0 %RH' }, { label: 'Application', value: 'Meteorology, Roads, Aviation' }, { label: 'Protection', value: 'IP66' }] },
        { id: 'hmt337', title: 'HMT337', subtitle: 'OUTDOOR TRANSMITTER', category: 'trans', image: '/templates/hs-tech/images/products/2ddb0a75a50e4.jpg', gallery: [], desc: 'Humidity and temperature transmitter for outdoor and challenging environments.', specs: [{ label: 'Range', value: '0...100 %RH / -40...+60 °C' }, { label: 'Accuracy', value: '±1 %RH' }, { label: 'Output', value: '4...20 mA, RS-485' }, { label: 'Protection', value: 'IP65' }] },
        { id: 'ptu307', title: 'PTU307', subtitle: 'COMBINED WEATHER TRANSMITTER', category: 'trans', image: '/templates/hs-tech/images/products/deffa2b1b398f.jpg', gallery: [], desc: 'Combined pressure, humidity, and temperature transmitter for weather applications.', specs: [{ label: 'Parameters', value: 'P + T + RH' }, { label: 'Pressure range', value: '500...1100 hPa' }, { label: 'Application', value: 'Meteorology, Environmental monitoring' }] },
        { id: 'hms110', title: 'HMS110', subtitle: 'WALL/DUCT HVAC SENSOR', category: 'hvac_weather', image: '/templates/hs-tech/images/products/2ddb0a75a50e4.jpg', gallery: [], desc: 'Combined humidity and temperature transmitter for wall/duct mounting in HVAC applications.', specs: [{ label: 'Range', value: '0...100 %RH / -40...+80 °C' }, { label: 'Output', value: '4...20 mA, 0...10 V' }, { label: 'Application', value: 'HVAC, Building automation' }] },
        { id: 'hms80', title: 'HMS80', subtitle: 'COMPACT HVAC SENSOR', category: 'hvac_weather', image: '/templates/hs-tech/images/products/2ddb0a75a50e4.jpg', gallery: [], desc: 'Compact humidity and temperature transmitter for building automation and HVAC.', specs: [{ label: 'Range', value: '0...100 %RH' }, { label: 'Output', value: '4...20 mA, 0...10 V' }, { label: 'Application', value: 'HVAC, Building automation, Energy management' }] }
    ],
    h2o2: [
        {
            id: 'hpp271', title: 'HPP271 / HPP272', subtitle: 'H₂O₂ VAPOR PROBE', category: 'sensor',
            image: '/templates/hs-tech/images/products/47e994f808c6a.png',
            gallery: ['/templates/hs-tech/images/products/47e994f808c6a.png'],
            desc: 'Vaporized hydrogen peroxide (VHP/H2O2) measurement probe for bio-decontamination process monitoring. Enables real-time control of decontamination cycles in pharmaceutical and healthcare environments.',
            specs: [
                { label: 'Gas', value: 'H₂O₂ vapor (VHP)' },
                { label: 'H₂O₂ Range', value: 'HPP271: 0 ... 2000 ppm\nHPP272: 0 ... 1000 ppm' },
                { label: 'Accuracy', value: '± 10 % of reading (at steady state)' },
                { label: 'Response Time', value: 't90 < 30 s (HPP271)' },
                { label: 'Output', value: 'RS-485 Modbus (Indigo compatible)\n4...20 mA (HPP272)' },
                { label: 'Application', value: 'Pharmaceutical bio-decontamination\nIsolators, Cleanrooms, Hospital rooms' },
                { label: 'Protection', value: 'IP65 (probe head H₂O₂-resistant)' },
            ],
            datasheet: 'https://www.vaisala.com/sites/default/files/documents/HPP270-Datasheet-B211876EN.pdf'
        }
    ],

    // SETRA
    setra: [
        {
            id: 'setra_lite', title: 'Setra Lite', subtitle: 'ROOM PRESSURE VISUAL INDICATOR', category: 'diff_ind',
            image: '/templates/hs-tech/images/products/849fee28dfdc5.png',
            gallery: ['/templates/hs-tech/images/products/849fee28dfdc5.png'],
            desc: 'Simple and reliable visual differential pressure indicator using tri-color LED lights to show positive, negative, or neutral room pressure at a glance.',
            specs: [
                { label: 'Display', value: 'Tri-color LED (Green / Red / Amber)' },
                { label: 'Pressure Range', value: '0 ... ±0.25" WC (±62.3 Pa)' },
                { label: 'Accuracy', value: '±2% FS' },
                { label: 'Input Power', value: '24 VDC / VAC' },
                { label: 'Application', value: 'Cleanrooms (ISO Class 1-8)\nOperating rooms, Isolation rooms' },
                { label: 'Installation', value: 'Wall mount' },
            ]
        },
        {
            id: 'setra_flex', title: 'Setra Flex', subtitle: 'TOUCHSCREEN ROOM PRESSURE MONITOR', category: 'diff_ind',
            image: '/templates/hs-tech/images/products/849fee28dfdc5.png',
            gallery: ['/templates/hs-tech/images/products/849fee28dfdc5.png'],
            desc: 'Advanced touchscreen room pressure monitor with numeric display and configurable alarms. Provides visual and audible alerts when room pressure goes out of range.',
            specs: [
                { label: 'Display', value: '4.3" color touchscreen' },
                { label: 'Pressure Range', value: '0 ... ±1.25" WC (±311 Pa)' },
                { label: 'Accuracy', value: '±1% FS' },
                { label: 'Alarms', value: 'Visual (LED) + Audible + Relay output' },
                { label: 'Output', value: '4...20 mA, 0...10 V' },
                { label: 'Application', value: 'Isolation rooms, Cleanrooms\nPharmaceutical, Healthcare' },
            ]
        },
        {
            id: 'model_mrc', title: 'Model MRC', subtitle: 'MULTI-RANGE CONFIGURABLE DP SENSOR', category: 'diff_sen',
            image: '/templates/hs-tech/images/products/0173971661ad2.png',
            gallery: ['/templates/hs-tech/images/products/0173971661ad2.png', '/templates/hs-tech/images/products/0b98ec3d71c52.png', '/templates/hs-tech/images/products/866d1ed724ffa.png', '/templates/hs-tech/images/products/ba117fd1862c9.png', '/templates/hs-tech/images/products/20542e1ba6c31.png'],
            desc: 'Field-configurable multi-range differential pressure sensor with selectable ranges. No hardware changes required — range selected via DIP switch.',
            specs: [
                { label: 'Pressure Ranges', value: '0...0.1", 0...0.25", 0...0.5", 0...1.0" WC\n(Bi-directional options available)' },
                { label: 'Accuracy', value: '±1% FS' },
                { label: 'Output', value: '4...20 mA, 0...5 V, 0...10 V' },
                { label: 'Input Power', value: '24 VDC / VAC' },
                { label: 'Application', value: 'HVAC air handling units\nFilter condition monitoring' },
                { label: 'Protection', value: 'IP65 (NEMA 4)' },
            ]
        },
        {
            id: 'model_mrg', title: 'Model MRG', subtitle: 'GENERAL PURPOSE DP SENSOR', category: 'diff_sen',
            image: '/templates/hs-tech/images/products/0b98ec3d71c52.png',
            gallery: ['/templates/hs-tech/images/products/0b98ec3d71c52.png', '/templates/hs-tech/images/products/866d1ed724ffa.png'],
            desc: 'Cost-effective differential pressure sensor for standard HVAC and building automation applications.',
            specs: [
                { label: 'Pressure Ranges', value: '0...0.1" to 0...10" WC (fixed range)' },
                { label: 'Accuracy', value: '±2% FS' },
                { label: 'Output', value: '4...20 mA, 0...5 V, 0...10 V' },
                { label: 'Input Power', value: '24 VDC / VAC' },
                { label: 'Application', value: 'Building automation\nVAV boxes, Fan control' },
            ]
        },
        {
            id: 'model_264', title: 'Model 264', subtitle: 'LOW DIFFERENTIAL PRESSURE TRANSDUCER', category: 'diff_sen',
            image: '/templates/hs-tech/images/products/866d1ed724ffa.png',
            gallery: ['/templates/hs-tech/images/products/866d1ed724ffa.png', '/templates/hs-tech/images/products/ba117fd1862c9.png'],
            desc: 'Low differential pressure transducer with exceptional stability. Used for HVAC pressure measurement in VAV boxes, fan pressure control, and filter monitoring.',
            specs: [
                { label: 'Pressure Ranges', value: '0...±0.25" WC to 0...±10" WC' },
                { label: 'Accuracy', value: '±1% FS (±0.5% optional)' },
                { label: 'Output', value: '4...20 mA, 0...5 V, 0...10 V' },
                { label: 'Input Power', value: '24 VDC / VAC' },
                { label: 'Application', value: 'HVAC VAV boxes, Fan pressure\nFilter monitoring, Cleanrooms' },
            ]
        },
        {
            id: 'pdt101', title: 'PDT101', subtitle: 'OEM DIFFERENTIAL PRESSURE SENSOR', category: 'diff_sen',
            image: '/templates/hs-tech/images/products/20542e1ba6c31.png',
            gallery: ['/templates/hs-tech/images/products/20542e1ba6c31.png'],
            desc: 'Compact OEM differential pressure sensor for filter condition monitoring and HVAC OEM applications.',
            specs: [
                { label: 'Type', value: 'OEM sensor (PCB mount)' },
                { label: 'Pressure Range', value: '0...0.5" WC to 0...10" WC' },
                { label: 'Output', value: '0.5...4.5 V (ratiometric)' },
                { label: 'Supply', value: '5 VDC' },
                { label: 'Application', value: 'Filter condition monitoring\nOEM HVAC equipment' },
            ]
        },
        {
            id: 'pdt102', title: 'PDT102', subtitle: 'DIFFERENTIAL PRESSURE TRANSMITTER', category: 'diff_sen',
            image: '/templates/hs-tech/images/products/20542e1ba6c31.png', gallery: [],
            desc: 'High-accuracy differential pressure transmitter for HVAC and cleanroom filter condition monitoring with industry-standard 4-20 mA output.',
            specs: [
                { label: 'Pressure Range', value: '0...0.1" to 0...10" WC' },
                { label: 'Accuracy', value: '±1% FS' },
                { label: 'Output', value: '4...20 mA, 0...10 V' },
                { label: 'Input Power', value: '24 VDC' },
                { label: 'Application', value: 'HVAC, Cleanrooms\nFilter monitoring' },
                { label: 'Protection', value: 'IP65' },
            ]
        },
        {
            id: 'model_axd', title: 'Model AXD', subtitle: 'HIGH ACCURACY INDUSTRIAL TRANSDUCER', category: 'industrial',
            image: '/templates/hs-tech/images/products/af2c3e1c0d3d0.png',
            gallery: ['/templates/hs-tech/images/products/af2c3e1c0d3d0.png'],
            desc: 'High accuracy, ultra-stable industrial pressure transducer for demanding process applications. Stainless steel wetted parts for corrosive media.',
            specs: [
                { label: 'Pressure Ranges', value: '0...100 inH2O to 0...10,000 PSI' },
                { label: 'Accuracy', value: '±0.11% FS BSL (incl. linearity, hysteresis, repeatability)' },
                { label: 'Output', value: '4...20 mA, 0...5 V, 0...10 V, 1...5 V' },
                { label: 'Material', value: '316L stainless steel wetted parts' },
                { label: 'Application', value: 'Industrial process control\nHigh-accuracy measurement' },
                { label: 'Protection', value: 'IP65 (NEMA 4)' },
            ]
        },
        {
            id: 'model_206', title: 'Model 206', subtitle: 'RUGGED STAINLESS STEEL TRANSDUCER', category: 'industrial',
            image: '/templates/hs-tech/images/products/5175822708f3a.png',
            gallery: ['/templates/hs-tech/images/products/5175822708f3a.png'],
            desc: 'Rugged stainless steel pressure transducer for harsh industrial environments. Fully welded, hermetic construction for maximum reliability.',
            specs: [
                { label: 'Pressure Ranges', value: '0...15 to 0...3000 PSI (gauge/absolute)' },
                { label: 'Accuracy', value: '±0.25% FS' },
                { label: 'Output', value: '4...20 mA, 0...5 V, 1...5 V' },
                { label: 'Material', value: '316 stainless steel (all wetted parts)' },
                { label: 'Application', value: 'Chemical, Petrochemical\nHarsh environments, Corrosive media' },
                { label: 'Protection', value: 'IP67' },
            ]
        },
        {
            id: 'model_209', title: 'Model 209', subtitle: 'COMPACT OEM PRESSURE SENSOR', category: 'industrial',
            image: '/templates/hs-tech/images/products/a153aa767ba86.png',
            gallery: ['/templates/hs-tech/images/products/a153aa767ba86.png'],
            desc: 'Compact, cost-effective OEM pressure sensor for industrial equipment integration.',
            specs: [
                { label: 'Type', value: 'OEM compact sensor' },
                { label: 'Pressure Range', value: '0...15 to 0...300 PSI' },
                { label: 'Accuracy', value: '±0.25% FS' },
                { label: 'Output', value: '4...20 mA, 0...5 V' },
                { label: 'Application', value: 'OEM equipment integration\nIndustrial machines' },
            ]
        },
    ],

    // JUMO
    jumo: [
        {
            id: 'plastosens_pt0', title: 'PlastoSENS PT0', subtitle: 'SURFACE TEMPERATURE SENSOR', category: 'temperature',
            image: '/templates/hs-tech/images/products/94259b4509a1f.png',
            gallery: ['/templates/hs-tech/images/products/94259b4509a1f.png'],
            desc: 'PlastoSENS PT0 — Flush-mount surface temperature sensor for plastics processing. Designed for injection molding machines, extruders, and hot runner systems. Provides direct melt temperature measurement for process optimization.',
            specs: [
                { label: 'Type', value: 'Thermocouple Type J / Type K (application-specific)' },
                { label: 'Measuring range', value: '0 ... +400 °C (Type J)' },
                { label: 'Response time', value: 't₀.₉ < 0.5 s' },
                { label: 'Mounting', value: 'Flush-mount (screw-in, nozzle-tip)' },
                { label: 'Protection', value: 'Stainless steel, food-grade versions available' },
                { label: 'Application', value: 'Injection molding, Extrusion\nHot runner systems, Plastics processing' },
            ]
        },
        {
            id: 'plastosens_pt2', title: 'PlastoSENS PT2', subtitle: 'MELT TEMPERATURE SENSOR', category: 'temperature',
            image: '/templates/hs-tech/images/products/94259b4509a1f.png',
            gallery: ['/templates/hs-tech/images/products/94259b4509a1f.png'],
            desc: 'PlastoSENS PT2 — High-pressure melt temperature sensor for continuous melt temperature measurement in high-temperature plastics processes. Spring-loaded tip ensures permanent contact with melt for reliable readings.',
            specs: [
                { label: 'Type', value: 'Thermocouple Type J / Type K' },
                { label: 'Temperature range', value: '0 ... +450 °C' },
                { label: 'Pressure rating', value: 'Up to 2,000 bar (melt pressure compatible)' },
                { label: 'Tip design', value: 'Spring-loaded (permanent contact)' },
                { label: 'Connection', value: 'Miniature thermocouple connector' },
                { label: 'Application', value: 'Extrusion lines, Compounding\nHigh-pressure melt processes' },
            ]
        },
        {
            id: 'ph_sensor', title: 'tecline pH', subtitle: 'pH COMBINATION ELECTRODE', category: 'ph_electrode',
            image: '/templates/hs-tech/images/products/1c2022c06d474.png',
            gallery: ['/templates/hs-tech/images/products/1c2022c06d474.png'],
            desc: 'High-quality combination pH electrode for liquid analysis in water treatment and process industries. Available in glass and plastics (PEI, PVDF) for various media.',
            specs: [
                { label: 'Measurement', value: 'pH 0 ... 14' },
                { label: 'Temperature Range', value: '0 ... +80 °C' },
                { label: 'Electrode body', value: 'Glass / PEI / PVDF (application-specific)' },
                { label: 'Reference system', value: 'Ag/AgCl double junction' },
                { label: 'Connector', value: 'BNC connector (standard)' },
                { label: 'Application', value: 'Water treatment, Process industry\nChemical, Food & Beverage' },
            ]
        },
        {
            id: 'ph_trans', title: 'ecoTRANS pH 03', subtitle: 'pH TRANSMITTER (DIN RAIL)', category: 'ph_transmitter',
            image: '/templates/hs-tech/images/products/94259b4509a1f.png',
            gallery: ['/templates/hs-tech/images/products/94259b4509a1f.png'],
            desc: 'Compact panel/DIN rail pH transmitter with display. Converts electrode signal to standard 4-20 mA output for PLC/SCADA integration.',
            specs: [
                { label: 'Measurement', value: 'pH 0 ... 14 / Temperature' },
                { label: 'Accuracy', value: '±0.05 pH' },
                { label: 'Input', value: 'pH electrode (BNC/S7/Pg13.5)' },
                { label: 'Output', value: '4...20 mA (active/passive), 2× relay' },
                { label: 'Mounting', value: 'DIN rail 35 mm / Panel cut-out' },
                { label: 'Display', value: 'LCD (pH, temp, mV)' },
                { label: 'Application', value: 'Water treatment, Process monitoring\nPLC/SCADA integration' },
            ]
        },
        {
            id: 'dtrans_ph02', title: 'dTRANS pH 02', subtitle: 'PROCESS pH TRANSMITTER', category: 'ph_transmitter',
            image: '/templates/hs-tech/images/products/8d15ded8da6eb.png',
            gallery: ['/templates/hs-tech/images/products/8d15ded8da6eb.png'],
            desc: 'Industrial field-mount pH transmitter with IP65 protection. HART communication for smart instrumentation integration. Supports JUMO and third-party electrodes.',
            specs: [
                { label: 'Measurement', value: 'pH 0 ... 14 / ORP / Temperature' },
                { label: 'Accuracy', value: '±0.01 pH' },
                { label: 'Output', value: '4...20 mA (HART 5.x/6.x), 2× relay' },
                { label: 'Mounting', value: 'Field mount (wall/pipe)' },
                { label: 'Protection', value: 'IP65 / IP67 (optional)' },
                { label: 'Communication', value: 'HART 5.x / 6.x' },
                { label: 'Application', value: 'Industrial processes\nWaste water, Chemical' },
            ]
        },
        {
            id: 'cond_trans', title: 'ecoTRANS Lf 03', subtitle: 'CONDUCTIVITY TRANSMITTER', category: 'conductivity',
            image: '/templates/hs-tech/images/products/75b212a123a21.png',
            gallery: ['/templates/hs-tech/images/products/75b212a123a21.png'],
            desc: 'Compact conductivity and temperature transmitter for water quality monitoring. DIN rail mounting with 4-20 mA output for integration into PLC/BMS systems.',
            specs: [
                { label: 'Measurement', value: 'Conductivity (μS/cm ... mS/cm) / Temperature' },
                { label: 'Conductivity Range', value: '0 ... 500 μS/cm to 0 ... 500 mS/cm (cell constant dependent)' },
                { label: 'Accuracy', value: '±1% FS' },
                { label: 'Output', value: '4...20 mA, 2× relay' },
                { label: 'Mounting', value: 'DIN rail 35 mm' },
                { label: 'Application', value: 'Drinking water, Process water\nWater treatment, Boiler feed water' },
            ]
        },
        {
            id: 'recording', title: 'LOGOSCREEN 600', subtitle: 'PAPERLESS CHART RECORDER', category: 'control',
            image: '/templates/hs-tech/images/products/85b44cdd77766.png',
            gallery: ['/templates/hs-tech/images/products/85b44cdd77766.png'],
            desc: 'High-performance paperless chart recorder with large touchscreen. Up to 12 universal inputs for temperature, process, and digital signals. Data stored on internal flash + SD card.',
            specs: [
                { label: 'Display', value: '10.4" color TFT touchscreen' },
                { label: 'Inputs', value: 'Up to 12 universal inputs\n(T/C, RTD, mV, mA, Resistance, Pulse)' },
                { label: 'Sampling rate', value: 'Up to 500 ms per channel' },
                { label: 'Memory', value: 'Internal flash 512 MB + SD card slot' },
                { label: 'Communication', value: 'Ethernet, RS-485 (Modbus RTU/TCP)\nUSB, CF card' },
                { label: 'Alarms', value: '4 relay outputs' },
                { label: 'Application', value: 'Process visualization & recording\nGxP/FDA 21 CFR Part 11 compliant' },
            ]
        },
        {
            id: 'dtron_300', title: 'dTRON 300', subtitle: 'PANEL MOUNT PID CONTROLLER', category: 'control',
            image: '/templates/hs-tech/images/products/2ddb0a75a50e4.jpg',
            gallery: ['/templates/hs-tech/images/products/2ddb0a75a50e4.jpg'],
            desc: 'Compact panel-mount PID controller for temperature and process variable control. Supports multiple sensor types with auto-tuning PID and ramp-soak programming.',
            specs: [
                { label: 'Panel cutout', value: '48 × 48 mm (1/16 DIN)' },
                { label: 'Input', value: 'Thermocouple (T/C), RTD (Pt100)\n4...20 mA, 0...10 V' },
                { label: 'Control', value: 'PID with auto-tuning\nRamp/Soak program (up to 99 segments)' },
                { label: 'Output', value: 'Relay, SSR, 4...20 mA (controller-dependent)' },
                { label: 'Communication', value: 'RS-485 Modbus RTU (optional)' },
                { label: 'Application', value: 'Temperature process control\nOvens, Furnaces, Incubators, Reactors' },
            ]
        },
    ],

    // CMS (Data Logger / Continuous Monitoring System)
    cms: [
        { id: 'dl2000', title: 'DL2000', subtitle: 'ADVANCED DATA LOGGER', category: 'data_logger', image: '/templates/hs-tech/images/products/dl2000_v1.jpg', gallery: [], desc: 'Advanced standalone data logger for multi-channel environmental monitoring with display.', specs: [{ label: 'Channels', value: 'Multi-channel inputs' }, { label: 'Display', value: 'Built-in LCD' }, { label: 'Application', value: 'Cleanrooms, Labs, Warehouses' }, { label: 'Communication', value: 'LAN, USB' }] },
        { id: 'dl4000', title: 'DL4000', subtitle: 'HIGH CHANNEL LOGGER', category: 'data_logger', image: '/templates/hs-tech/images/products/dl4000_v1.jpg', gallery: [], desc: 'High-density data logger for large-scale continuous monitoring systems.', specs: [{ label: 'Channels', value: 'High density (up to 32+)' }, { label: 'Application', value: 'Industrial CMS, Large facilities' }, { label: 'Communication', value: 'LAN, RS-485, Modbus' }] },
        { id: 'dl1700', title: 'DL1700', subtitle: 'COMPACT DATA LOGGER', category: 'data_logger', image: '/templates/hs-tech/images/products/dl1700_v1.jpg', gallery: [], desc: 'Compact data logger for small to medium scale environmental monitoring.', specs: [{ label: 'Size', value: 'Compact DIN rail' }, { label: 'Application', value: 'Pharmaceutical, Food storage' }, { label: 'Communication', value: 'LAN, USB' }] },
        { id: 'dl1000_1400', title: 'DL1000/1400', subtitle: 'NETWORK LOGGER SERIES', category: 'network_logger', image: '/templates/hs-tech/images/products/dl1000_v1.jpg', gallery: [], desc: 'Network-enabled data loggers for distributed monitoring across facilities.', specs: [{ label: 'Network', value: 'LAN / PoE' }, { label: 'Application', value: 'Distributed monitoring, GxP' }, { label: 'Certification', value: '21 CFR Part 11 compliant' }] },
        { id: 'dl1016_1416', title: 'DL1016/1416', subtitle: 'MULTI-INPUT LOGGER', category: 'network_logger', image: '/templates/hs-tech/images/products/dl1016_v1.jpg', gallery: [], desc: 'Multi-input network logger supporting various sensor types for comprehensive monitoring.', specs: [{ label: 'Inputs', value: 'Up to 16 channels' }, { label: 'Sensors', value: 'T, RH, Pressure, CO2 compatible' }, { label: 'Network', value: 'LAN, Modbus TCP' }] },
        { id: 'vnet_wireless', title: 'Wireless vNET', subtitle: 'WIRELESS LOGGER NETWORK', category: 'network_logger', image: '', gallery: [], desc: 'Wireless monitoring network for flexible deployment in areas where cabling is impractical.', specs: [{ label: 'Wireless', value: 'IEEE 802.15.4 (mesh)' }, { label: 'Application', value: 'Retrofits, Temporary monitoring' }, { label: 'Battery', value: 'Long-life battery option' }] },
        { id: 'poe_logger', title: 'POE Logger', subtitle: 'POWER OVER ETHERNET', category: 'network_logger', image: '/templates/hs-tech/images/products/poe_logger_v1.jpg', gallery: [], desc: 'Data logger powered and connected via a single Ethernet cable using Power over Ethernet.', specs: [{ label: 'Power', value: 'IEEE 802.3af PoE' }, { label: 'Application', value: 'Easy installation, No power outlet needed' }] },
        { id: 'cms_sw', title: 'CMS Software', subtitle: 'MONITORING PLATFORM', category: 'cms_software', image: '/templates/hs-tech/images/products/cms_sw_v1.jpg', gallery: [], desc: 'Centralized software platform for real-time monitoring, alarm management, and compliance reporting.', specs: [{ label: 'Platform', value: 'Windows Server / Web browser' }, { label: 'Features', value: 'Real-time alarms, Reports, Audit trail' }, { label: 'Compliance', value: 'GMP/GxP, FDA 21 CFR Part 11' }] }
    ]
}
