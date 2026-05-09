// Indian Economy - SSC CGL
(function() {
  const T = window.TOPICS;

  const topic = (id, intro, blocks, mcq) => {
    T[id] = {
      body: `
        <h3>Why Study This?</h3>
        <p>${intro}</p>
        ${blocks.map(block).join("")}
      `,
      mcq
    };
  };

  const block = (b) => `
    <hr>
    <h3>${b.title}</h3>
    ${b.html || ""}
    ${b.points ? `<ul>${b.points.map(p => `<li>${p}</li>`).join("")}</ul>` : ""}
    ${b.table ? table(b.table) : ""}
  `;

  const table = (rows) => `
    <table>
      ${rows.map((r, i) => `<tr>${r.map(c => i === 0 ? `<th>${c}</th>` : `<td>${c}</td>`).join("")}</tr>`).join("")}
    </table>
  `;

  const commonMcq = [
    { q: "Which institution is India's central bank?", opts: ["SEBI", "RBI", "NABARD", "SIDBI"], a: 1, ex: "The Reserve Bank of India regulates currency, monetary policy, banks and payment systems." },
    { q: "GST is mainly a type of?", opts: ["Direct tax", "Indirect tax", "Wealth tax", "Corporate tax only"], a: 1, ex: "GST is an indirect tax on supply of goods and services." }
  ];

  topic("eco-intro",
    "Economy questions in SSC CGL are usually conceptual: definitions, institutions, schemes, budget terms, banking, inflation and India-specific facts. Start with the language of economics, then connect it with Indian examples.",
    [
      {
        title: "Core Branches",
        table: [
          ["Branch", "Meaning", "SSC focus"],
          ["Microeconomics", "Individual units: consumer, firm, demand, supply", "Price, demand, utility, market forms"],
          ["Macroeconomics", "Whole economy: GDP, inflation, employment, money", "National income, inflation, banking, fiscal policy"],
          ["Development economics", "Growth with poverty reduction, jobs, health, education", "HDI, poverty, unemployment, schemes"],
          ["Public finance", "Government revenue, spending and debt", "Budget, tax, deficit, FRBM"]
        ]
      },
      {
        title: "Basic Concepts",
        points: [
          "<b>Goods</b> are tangible products; <b>services</b> are intangible economic activities.",
          "<b>Final goods</b> are consumed or invested directly; <b>intermediate goods</b> are used to produce other goods.",
          "<b>Capital goods</b> help produce future output, such as machinery and tools.",
          "<b>Stock</b> is measured at a point of time, such as wealth or inventory. <b>Flow</b> is measured over a period, such as income or GDP.",
          "<b>Nominal value</b> is at current prices; <b>real value</b> removes inflation effect."
        ]
      },
      {
        title: "Exam Traps",
        points: [
          "Growth means rise in output; development includes quality of life and distribution.",
          "GDP counts production within domestic territory, not ownership.",
          "Per capita income is average income, not equal income."
        ]
      }
    ],
    [
      { q: "GDP is a?", opts: ["Stock concept", "Flow concept", "Non-economic concept", "Only wealth measure"], a: 1, ex: "GDP measures production during a period, usually a year or quarter." },
      { q: "Real GDP is calculated at?", opts: ["Current prices", "Constant prices", "Retail prices only", "Export prices only"], a: 1, ex: "Real GDP removes inflation by using constant/base-year prices." },
      { q: "Which one best describes economic development?", opts: ["Only more money supply", "Growth plus improvement in living standards", "Only more exports", "Only higher tax"], a: 1, ex: "Development is broader than growth." }
    ]
  );

  topic("eco-planning",
    "Indian planning is repeatedly asked because it connects independence-era development, Five-Year Plans, Planning Commission and NITI Aayog.",
    [
      {
        title: "Planning Timeline",
        table: [
          ["Item", "Key fact"],
          ["Planning Commission", "Set up in 1950 by executive resolution; PM was ex-officio chairman"],
          ["First Five-Year Plan", "1951-56; focus on agriculture, irrigation and rehabilitation"],
          ["Second Five-Year Plan", "1956-61; Mahalanobis model; heavy industries"],
          ["Third Plan", "1961-66; self-reliance and agriculture; disturbed by wars and drought"],
          ["Plan Holiday", "1966-69; annual plans"],
          ["Fourth Plan", "1969-74; growth with stability and self-reliance"],
          ["Fifth Plan", "1974-79; poverty removal and self-reliance; terminated early"],
          ["Eighth Plan", "1992-97; first plan after 1991 reforms"],
          ["Twelfth Plan", "2012-17; last Five-Year Plan"]
        ]
      },
      {
        title: "NITI Aayog",
        points: [
          "Formed on 1 January 2015, replacing the Planning Commission.",
          "Works as a policy think tank and promotes cooperative federalism.",
          "Chairperson is the Prime Minister.",
          "Does not allocate plan funds to states like the old Planning Commission did."
        ]
      },
      {
        title: "Must Remember",
        points: [
          "Planning Commission was non-constitutional and non-statutory.",
          "Rolling Plan is associated with the Janata Government period.",
          "Indicative planning gives broad direction without full command control."
        ]
      }
    ],
    [
      { q: "Planning Commission was established in?", opts: ["1947", "1950", "1951", "1969"], a: 1, ex: "It was set up in 1950 by executive resolution." },
      { q: "The Second Five-Year Plan is associated with?", opts: ["Harrod-Domar", "Mahalanobis model", "Gadgil formula", "Narasimham Committee"], a: 1, ex: "It focused on heavy industrialization using the Mahalanobis strategy." },
      { q: "NITI Aayog replaced?", opts: ["Finance Commission", "Planning Commission", "RBI", "SEBI"], a: 1, ex: "NITI Aayog was formed in 2015." }
    ]
  );

  topic("eco-national-income",
    "National income is the highest-yield foundation topic. SSC commonly asks GDP/GNP/NNP/NDP, factor cost vs market price, base year and per capita income.",
    [
      {
        title: "Main Aggregates",
        table: [
          ["Term", "Meaning"],
          ["GDP", "Value of final goods and services produced within domestic territory"],
          ["GNP", "GDP + Net Factor Income from Abroad"],
          ["NDP", "GDP - Depreciation"],
          ["NNP", "GNP - Depreciation"],
          ["National Income", "Usually NNP at factor cost in traditional Indian economy questions"],
          ["Per Capita Income", "National income divided by population"]
        ]
      },
      {
        title: "Three Methods",
        points: [
          "<b>Production/value added method</b>: adds value added by sectors.",
          "<b>Income method</b>: wages + rent + interest + profit.",
          "<b>Expenditure method</b>: private consumption + investment + government spending + net exports."
        ]
      },
      {
        title: "India Specific",
        points: [
          "National income estimates are released by the National Statistical Office under MoSPI.",
          "Current national accounts base year used in standard references is 2011-12.",
          "Primary sector: agriculture and allied activities. Secondary: manufacturing, construction, electricity. Tertiary: services."
        ]
      }
    ],
    [
      { q: "GNP equals?", opts: ["GDP - Depreciation", "GDP + Net Factor Income from Abroad", "NDP + Tax", "NNP - Subsidy"], a: 1, ex: "GNP adjusts GDP for factor income earned from and paid to the rest of the world." },
      { q: "Which sector includes manufacturing?", opts: ["Primary", "Secondary", "Tertiary", "Quaternary only"], a: 1, ex: "Manufacturing and construction are secondary sector activities." },
      { q: "Depreciation means?", opts: ["Rise in tax", "Wear and tear of capital", "Rise in exports", "Subsidy"], a: 1, ex: "Depreciation is consumption of fixed capital." }
    ]
  );

  topic("eco-demography",
    "Demography appears in SSC through census terms, population density, sex ratio, literacy, demographic dividend and population policy.",
    [
      {
        title: "Census Basics",
        points: [
          "Census is a decennial count of population and related characteristics.",
          "First complete synchronous census in India: 1881.",
          "The Census of 2011 remains the latest completed census data generally used in exams until the next census is officially released.",
          "Registrar General and Census Commissioner of India conducts the census."
        ]
      },
      {
        title: "Key Terms",
        table: [
          ["Term", "Meaning"],
          ["Population density", "Population per square kilometre"],
          ["Sex ratio", "Females per 1000 males"],
          ["Child sex ratio", "Females per 1000 males in age group 0-6"],
          ["Literacy rate", "Percentage of literate persons aged 7 and above"],
          ["Demographic dividend", "Growth advantage from a large working-age population"]
        ]
      },
      {
        title: "Exam Pointers",
        points: [
          "High population can be an asset only when education, health and jobs are available.",
          "Dependency ratio compares dependent age groups with working-age population.",
          "India's population policy focus shifted from control-only to reproductive health and family welfare."
        ]
      }
    ],
    [
      { q: "Sex ratio in Census is expressed as?", opts: ["Males per 100 females", "Females per 1000 males", "Children per 1000 adults", "Workers per family"], a: 1, ex: "Indian census uses females per 1000 males." },
      { q: "Literacy rate is calculated for population aged?", opts: ["0 and above", "5 and above", "7 and above", "18 and above"], a: 2, ex: "Census literacy counts persons aged 7 years and above." },
      { q: "First complete synchronous census of India was in?", opts: ["1872", "1881", "1901", "1951"], a: 1, ex: "1872 was non-synchronous; 1881 is treated as the first complete synchronous census." }
    ]
  );

  topic("eco-poverty-unemployment",
    "Poverty and unemployment questions test definitions, measurement and programme names rather than deep theory.",
    [
      {
        title: "Poverty Concepts",
        points: [
          "<b>Absolute poverty</b>: inability to meet minimum consumption needs.",
          "<b>Relative poverty</b>: poverty compared with average living standards of society.",
          "<b>Poverty line</b>: income or consumption threshold used to identify poor households.",
          "<b>Multidimensional poverty</b>: includes health, education and living standards."
        ]
      },
      {
        title: "Unemployment Types",
        table: [
          ["Type", "Meaning", "Common example"],
          ["Disguised", "More workers than needed; marginal productivity near zero", "Agriculture"],
          ["Seasonal", "Work available only in certain seasons", "Farm labour"],
          ["Frictional", "Temporary gap while changing jobs", "Job search"],
          ["Structural", "Skills do not match available jobs", "Technology change"],
          ["Cyclical", "Due to downturn in demand", "Recession"]
        ]
      },
      {
        title: "Important Programmes",
        points: [
          "MGNREGA: legal guarantee of wage employment for rural households.",
          "DAY-NRLM: rural livelihoods and self-help groups.",
          "PM-SVANidhi: support to street vendors.",
          "Skill India and PMKVY: skill training and employability."
        ]
      }
    ],
    [
      { q: "Disguised unemployment is most commonly associated with?", opts: ["Banking", "Agriculture", "Foreign trade", "Insurance"], a: 1, ex: "Too many workers are engaged on small farms." },
      { q: "MGNREGA is primarily related to?", opts: ["Urban housing", "Rural wage employment", "Bank merger", "Monetary policy"], a: 1, ex: "It provides rural wage employment guarantee." },
      { q: "Multidimensional poverty includes?", opts: ["Only income", "Health, education and living standards", "Only exports", "Only tax"], a: 1, ex: "MPI goes beyond income." }
    ]
  );

  topic("eco-agriculture",
    "Agriculture is important because it links geography, economy, poverty, food security, inflation and government schemes.",
    [
      {
        title: "Core Concepts",
        points: [
          "Agriculture belongs to the primary sector.",
          "Cropping seasons: Kharif, Rabi and Zaid.",
          "MSP is announced by the government for selected crops based on recommendations of CACP.",
          "Food Corporation of India handles procurement, storage and distribution support for foodgrains.",
          "Public Distribution System provides subsidized foodgrains to eligible households."
        ]
      },
      {
        title: "Revolutions",
        table: [
          ["Revolution", "Related area"],
          ["Green", "Foodgrains, especially wheat and rice"],
          ["White", "Milk"],
          ["Blue", "Fishery"],
          ["Yellow", "Oilseeds"],
          ["Golden", "Horticulture/honey"],
          ["Silver", "Eggs/poultry"]
        ]
      },
      {
        title: "Schemes and Institutions",
        points: [
          "PM-KISAN provides income support to eligible farmer families.",
          "PM Fasal Bima Yojana provides crop insurance.",
          "Kisan Credit Card provides short-term credit access.",
          "NABARD is the apex development bank for agriculture and rural development."
        ]
      }
    ],
    [
      { q: "MSP recommendations are made by?", opts: ["SEBI", "CACP", "TRAI", "NITI only"], a: 1, ex: "Commission for Agricultural Costs and Prices recommends MSP." },
      { q: "White Revolution is associated with?", opts: ["Milk", "Oilseeds", "Fish", "Fruits"], a: 0, ex: "Operation Flood drove the White Revolution." },
      { q: "NABARD is mainly linked with?", opts: ["Stock exchange", "Rural credit and agriculture", "Telecom", "Foreign exchange"], a: 1, ex: "NABARD supports agriculture and rural development finance." }
    ]
  );

  topic("eco-infrastructure",
    "Infrastructure supports production and quality of life. SSC questions focus on types, energy sources, transport and flagship projects.",
    [
      {
        title: "Types",
        table: [
          ["Economic infrastructure", "Social infrastructure"],
          ["Transport, power, irrigation, telecom, banking", "Education, health, sanitation, drinking water, housing"]
        ]
      },
      {
        title: "Energy Basics",
        points: [
          "Commercial energy: coal, petroleum, natural gas, electricity.",
          "Non-commercial energy: firewood, cow dung, agricultural waste.",
          "Renewable energy: solar, wind, biomass, small hydro.",
          "Non-renewable energy: coal, petroleum, natural gas.",
          "India's power mix has historically depended heavily on thermal power, while renewables are expanding."
        ]
      },
      {
        title: "Important Programmes",
        points: [
          "Bharatmala: road development.",
          "Sagarmala: port-led development.",
          "UDAN: regional air connectivity.",
          "PM Gati Shakti: integrated infrastructure planning.",
          "National Infrastructure Pipeline: infrastructure investment pipeline."
        ]
      }
    ],
    [
      { q: "Sagarmala is related to?", opts: ["Ports", "Airports", "Banking", "Insurance"], a: 0, ex: "Sagarmala promotes port-led development." },
      { q: "Which is renewable energy?", opts: ["Coal", "Petroleum", "Solar", "Natural gas"], a: 2, ex: "Solar energy is renewable." },
      { q: "Education and health are examples of?", opts: ["Social infrastructure", "Only capital market", "Foreign trade", "Indirect tax"], a: 0, ex: "They improve human capabilities." }
    ]
  );

  topic("eco-industry",
    "Industrial economy questions cover sector classification, industrial policies, MSME, Make in India and production-linked incentives.",
    [
      {
        title: "Industry Classification",
        table: [
          ["Basis", "Types"],
          ["Raw material", "Agro-based, mineral-based, forest-based, marine-based"],
          ["Size", "Cottage, small-scale, medium, large-scale"],
          ["Ownership", "Public, private, joint, cooperative"],
          ["Use", "Basic/capital goods, intermediate goods, consumer goods"]
        ]
      },
      {
        title: "Industrial Policy Milestones",
        points: [
          "Industrial Policy Resolution 1948: mixed economy approach.",
          "Industrial Policy Resolution 1956: public sector commanding heights.",
          "New Industrial Policy 1991: liberalisation, privatisation and globalisation.",
          "1991 reforms reduced licensing, opened sectors and encouraged competition."
        ]
      },
      {
        title: "MSME and Modern Programmes",
        points: [
          "MSMEs support employment, exports and regional development.",
          "Make in India aims to boost manufacturing and investment.",
          "Production Linked Incentive schemes reward incremental production in selected sectors.",
          "Start-up India supports innovation-led entrepreneurship."
        ]
      }
    ],
    [
      { q: "New Industrial Policy of 1991 is linked with?", opts: ["License Raj expansion", "Liberalisation and privatisation", "End of banking", "Abolition of taxes"], a: 1, ex: "It marked LPG reforms." },
      { q: "MSME stands for?", opts: ["Micro, Small and Medium Enterprises", "Market, Stock and Monetary Exchange", "Minimum Support Market Estimate", "Manufacturing Services Management Entity"], a: 0, ex: "MSME is an enterprise-size classification." },
      { q: "Cotton textile is mainly?", opts: ["Agro-based industry", "Marine-based industry", "Forest-based industry", "Pure service"], a: 0, ex: "It uses cotton, an agricultural raw material." }
    ]
  );

  topic("eco-public-sector",
    "Public sector questions are common around Maharatna/Navratna/Miniratna, disinvestment and reasons for state ownership.",
    [
      {
        title: "Public Sector Enterprises",
        points: [
          "PSEs are enterprises owned or controlled by the government.",
          "They were used to build heavy industry, infrastructure, strategic sectors and regional balance after independence.",
          "Public sector dominance increased after the 1956 Industrial Policy Resolution.",
          "Since 1991, policy has moved toward autonomy, competition and disinvestment."
        ]
      },
      {
        title: "Status Categories",
        table: [
          ["Category", "Meaning"],
          ["Maharatna", "Highest autonomy among select large CPSEs"],
          ["Navratna", "High-performing CPSEs with enhanced investment powers"],
          ["Miniratna", "Profitable CPSEs with limited autonomy"]
        ]
      },
      {
        title: "Disinvestment",
        points: [
          "Disinvestment means sale of government equity in public enterprises.",
          "Strategic disinvestment involves transfer of management control.",
          "Privatisation means transfer of ownership/control from government to private sector."
        ]
      }
    ],
    [
      { q: "Disinvestment means?", opts: ["Government buying more equity", "Sale of government equity", "Printing money", "Raising import duty"], a: 1, ex: "It reduces government shareholding." },
      { q: "Maharatna/Navratna status is given to?", opts: ["Private banks only", "CPSEs", "Foreign NGOs", "Panchayats"], a: 1, ex: "These are public enterprise autonomy categories." },
      { q: "Strategic disinvestment includes?", opts: ["Only name change", "Transfer of management control", "Only tax exemption", "RBI rate cut"], a: 1, ex: "Management control transfer distinguishes it from ordinary stake sale." }
    ]
  );

  topic("eco-schemes",
    "Economic schemes help connect theory with government action. For SSC, remember purpose, ministry area and beneficiary group rather than every budget number.",
    [
      {
        title: "High-Yield Schemes",
        table: [
          ["Scheme", "Main purpose"],
          ["PM Jan Dhan Yojana", "Financial inclusion through bank accounts"],
          ["PM-KISAN", "Income support for eligible farmer families"],
          ["PM Fasal Bima Yojana", "Crop insurance"],
          ["MGNREGA", "Rural wage employment guarantee"],
          ["PM Awas Yojana", "Housing support"],
          ["Ayushman Bharat PM-JAY", "Health insurance cover for eligible families"],
          ["PM Mudra Yojana", "Loans to non-corporate, non-farm small/micro enterprises"],
          ["Stand-Up India", "Bank loans for SC/ST and women entrepreneurs"],
          ["Atal Pension Yojana", "Pension scheme for unorganised sector workers"]
        ]
      },
      {
        title: "How to Study Schemes",
        points: [
          "Learn the full form and objective first.",
          "Map the scheme to sector: agriculture, health, finance, housing, employment or entrepreneurship.",
          "Keep dynamic numbers in a separate current-affairs note because amounts and targets can change."
        ]
      }
    ],
    [
      { q: "PM Jan Dhan Yojana is primarily related to?", opts: ["Financial inclusion", "Space research", "Defence procurement", "River linking"], a: 0, ex: "It focuses on bank accounts and financial access." },
      { q: "PM Mudra Yojana supports?", opts: ["Large foreign companies only", "Small/micro non-farm enterprises", "Only universities", "Only railways"], a: 1, ex: "MUDRA loans are for micro/small business needs." },
      { q: "Atal Pension Yojana is mainly for?", opts: ["Pension/social security", "Export subsidy", "Bank mergers", "Crop MSP"], a: 0, ex: "It is a pension scheme aimed especially at unorganised workers." }
    ]
  );

  topic("eco-banking",
    "Banking questions are among the most frequent in SSC economy: bank types, RBI, deposits, priority sector, NPAs and financial inclusion.",
    [
      {
        title: "Bank Types",
        table: [
          ["Type", "Examples / meaning"],
          ["Central bank", "RBI"],
          ["Commercial banks", "Public sector, private sector, foreign banks"],
          ["Regional Rural Banks", "Rural credit institutions sponsored by banks"],
          ["Cooperative banks", "Member-owned banking institutions"],
          ["Payments banks", "Can accept limited deposits; cannot lend like universal banks"],
          ["Small finance banks", "Focus on small borrowers and financial inclusion"]
        ]
      },
      {
        title: "Important Terms",
        points: [
          "Demand deposits are payable on demand, such as current and savings accounts.",
          "Time deposits are fixed for a period, such as fixed deposits and recurring deposits.",
          "NPA: loan where interest/principal is overdue for more than 90 days in standard bank classification.",
          "Priority Sector Lending directs bank credit to sectors such as agriculture, MSME, education, housing and weaker sections.",
          "Deposit insurance in India is provided by DICGC for eligible bank deposits up to the prescribed limit."
        ]
      },
      {
        title: "Financial Inclusion",
        points: [
          "Financial inclusion means access to affordable banking, credit, insurance and pension services.",
          "PMJDY, Aadhaar and mobile payments together support direct benefit transfer and inclusion.",
          "Business Correspondents help banks reach remote locations."
        ]
      }
    ],
    [
      { q: "A loan generally becomes NPA when overdue for more than?", opts: ["30 days", "60 days", "90 days", "365 days"], a: 2, ex: "Standard Indian banking classification uses more than 90 days overdue." },
      { q: "Savings account deposit is a?", opts: ["Demand deposit", "Capital receipt", "Fiscal deficit", "External debt"], a: 0, ex: "It can be withdrawn on demand." },
      { q: "Payments banks are not allowed to?", opts: ["Accept permitted deposits", "Issue debit cards", "Undertake lending like regular banks", "Use digital channels"], a: 2, ex: "Payments banks have lending restrictions." }
    ]
  );

  topic("eco-monetary-policy",
    "Monetary policy is RBI's tool to manage inflation, liquidity and growth. SSC asks instruments and which direction controls inflation.",
    [
      {
        title: "RBI Functions",
        points: [
          "Issue of currency notes except one-rupee notes and coins, which are issued by the Government of India.",
          "Banker to the government.",
          "Banker's bank and lender of last resort.",
          "Custodian of foreign exchange reserves.",
          "Regulator of banks and payment systems.",
          "Conducts monetary policy through the Monetary Policy Committee framework."
        ]
      },
      {
        title: "Policy Instruments",
        table: [
          ["Instrument", "Meaning"],
          ["Repo rate", "Rate at which RBI lends short-term funds to banks against securities"],
          ["Reverse repo", "Rate at which RBI absorbs funds from banks"],
          ["Bank rate", "Long-term lending/reference rate; also linked to some penalties"],
          ["CRR", "Cash reserve banks keep with RBI"],
          ["SLR", "Liquid assets banks maintain as percentage of demand and time liabilities"],
          ["Open Market Operations", "RBI buying/selling government securities"],
          ["Standing Deposit Facility", "Tool to absorb liquidity without collateral"]
        ]
      },
      {
        title: "Inflation Control Logic",
        points: [
          "To reduce inflation, RBI may increase policy rates or absorb liquidity.",
          "To support growth during slowdown, RBI may reduce rates or inject liquidity.",
          "Monetary Policy Committee has 6 members and the RBI Governor has a casting vote in case of tie."
        ]
      }
    ],
    [
      { q: "Repo rate is the rate at which?", opts: ["Banks lend to RBI", "RBI lends to banks", "Government taxes banks", "SEBI lends to companies"], a: 1, ex: "Repo is RBI lending to banks against securities." },
      { q: "CRR is maintained with?", opts: ["RBI", "SEBI", "NITI Aayog", "IMF"], a: 0, ex: "Cash Reserve Ratio is kept by banks with RBI." },
      { q: "To control inflation, RBI usually tends to?", opts: ["Lower interest rates sharply", "Increase policy rates or absorb liquidity", "Abolish taxes", "Print more notes"], a: 1, ex: "Tight monetary policy reduces demand pressure." }
    ]
  );

  topic("eco-financial-system",
    "This topic covers capital market, money market and regulators. SSC often asks the matching of institution and function.",
    [
      {
        title: "Financial Market Types",
        table: [
          ["Market", "Meaning", "Examples"],
          ["Money market", "Short-term funds, usually up to one year", "Treasury bills, call money, commercial paper"],
          ["Capital market", "Long-term funds", "Shares, debentures, bonds"],
          ["Primary market", "New securities issued for first time", "IPO"],
          ["Secondary market", "Existing securities traded", "Stock exchange"]
        ]
      },
      {
        title: "Regulators",
        table: [
          ["Regulator", "Main area"],
          ["RBI", "Banks, monetary policy, payment systems"],
          ["SEBI", "Securities and capital market"],
          ["IRDAI", "Insurance"],
          ["PFRDA", "Pension sector"],
          ["NABARD", "Agriculture and rural development finance"],
          ["SIDBI", "MSME development finance"]
        ]
      },
      {
        title: "Key Instruments",
        points: [
          "Treasury bills are short-term government securities.",
          "Commercial paper is an unsecured short-term corporate instrument.",
          "Certificate of Deposit is issued by banks/financial institutions.",
          "Equity represents ownership; debt represents borrowing."
        ]
      }
    ],
    [
      { q: "SEBI regulates?", opts: ["Capital market", "Census", "GST Council", "Weather"], a: 0, ex: "SEBI regulates securities markets." },
      { q: "Treasury bills belong to?", opts: ["Money market", "Real estate market", "Labour market only", "Insurance market"], a: 0, ex: "They are short-term government securities." },
      { q: "IPO happens in the?", opts: ["Primary market", "Secondary market", "Forex reserve", "Budget deficit"], a: 0, ex: "IPO is a fresh issue to investors." }
    ]
  );

  topic("eco-inflation",
    "Inflation is asked through definitions, causes, indices and policy response. This topic also connects with RBI monetary policy.",
    [
      {
        title: "Inflation Types",
        table: [
          ["Type", "Meaning"],
          ["Demand-pull", "Too much demand chasing goods"],
          ["Cost-push", "Rising input cost pushes prices up"],
          ["Creeping", "Mild inflation"],
          ["Hyperinflation", "Extremely high, uncontrolled inflation"],
          ["Stagflation", "High inflation with stagnant growth and unemployment"],
          ["Deflation", "Sustained fall in general price level"],
          ["Disinflation", "Fall in inflation rate, but prices still rising"]
        ]
      },
      {
        title: "Price Indices",
        points: [
          "CPI measures retail inflation faced by consumers.",
          "WPI measures wholesale price movement.",
          "Core inflation usually excludes volatile food and fuel items.",
          "GDP deflator is a broad measure covering all domestically produced final goods and services."
        ]
      },
      {
        title: "SSC Traps",
        points: [
          "Deflation is falling price level; disinflation is slower inflation.",
          "Inflation hurts fixed-income groups but may reduce real burden of existing borrowers.",
          "RBI's flexible inflation targeting framework uses CPI inflation."
        ]
      }
    ],
    [
      { q: "Stagflation means?", opts: ["High growth and low prices", "Inflation with stagnant growth", "Only fall in prices", "Only export growth"], a: 1, ex: "It combines stagnation and inflation." },
      { q: "CPI measures?", opts: ["Retail inflation", "Wholesale inflation only", "Fiscal deficit", "Export duty"], a: 0, ex: "Consumer Price Index reflects retail prices." },
      { q: "Disinflation means?", opts: ["Negative inflation necessarily", "Reduction in inflation rate", "No taxes", "No money supply"], a: 1, ex: "Prices may still rise, but at a slower rate." }
    ]
  );

  topic("eco-fiscal-system",
    "Fiscal system means government revenue, expenditure, borrowing and budget. SSC frequently asks budget terminology and deficit types.",
    [
      {
        title: "Budget Basics",
        points: [
          "Union Budget is the Annual Financial Statement under Article 112.",
          "Railway Budget was merged with the Union Budget from 2017-18.",
          "Budget has receipts and expenditure, each divided into revenue and capital parts.",
          "Revenue receipts do not create liability or reduce assets. Capital receipts create liability or reduce assets."
        ]
      },
      {
        title: "Deficit Measures",
        table: [
          ["Deficit", "Formula / meaning"],
          ["Revenue deficit", "Revenue expenditure - revenue receipts"],
          ["Fiscal deficit", "Total expenditure - total receipts excluding borrowings"],
          ["Primary deficit", "Fiscal deficit - interest payments"],
          ["Effective revenue deficit", "Revenue deficit - grants for creation of capital assets"]
        ]
      },
      {
        title: "FRBM",
        points: [
          "Fiscal Responsibility and Budget Management framework aims to discipline fiscal deficit and debt.",
          "Fiscal deficit shows borrowing requirement of the government.",
          "Interest payment is a committed expenditure and can reduce fiscal space."
        ]
      }
    ],
    [
      { q: "Union Budget is mentioned as Annual Financial Statement under Article?", opts: ["110", "112", "123", "280"], a: 1, ex: "Article 112 deals with Annual Financial Statement." },
      { q: "Primary deficit equals?", opts: ["Fiscal deficit - interest payments", "Revenue deficit + tax", "GDP - GNP", "Exports - imports"], a: 0, ex: "Primary deficit excludes interest burden." },
      { q: "Fiscal deficit indicates?", opts: ["Borrowing requirement", "Literacy rate", "Sex ratio", "Only imports"], a: 0, ex: "It is the gap financed mainly through borrowing." }
    ]
  );

  topic("eco-fiscal-terms",
    "This is the quick-revision vocabulary list for budget and macroeconomic terms that appear in one-line SSC questions.",
    [
      {
        title: "Revenue and Capital",
        table: [
          ["Term", "Meaning"],
          ["Revenue expenditure", "Expenditure that does not create assets, such as salaries and subsidies"],
          ["Capital expenditure", "Creates assets or reduces liabilities, such as roads and capital investment"],
          ["Revenue receipt", "Tax and non-tax receipts that do not create liability"],
          ["Capital receipt", "Borrowing, loan recovery, disinvestment"],
          ["Plan expenditure", "Old classification linked with Five-Year Plans; discontinued in Union Budget"],
          ["Charged expenditure", "Not voted by Lok Sabha, only discussed"]
        ]
      },
      {
        title: "Economic Terms",
        points: [
          "Subsidy: government support that lowers cost for consumers or producers.",
          "Crowding out: excessive government borrowing may reduce private investment.",
          "Monetisation of deficit: financing deficit by money creation.",
          "Public debt: liabilities of the government.",
          "Capital formation: addition to productive assets."
        ]
      }
    ],
    [
      { q: "Capital expenditure generally?", opts: ["Creates assets", "Only pays salaries", "Only pays pension", "Is always a tax"], a: 0, ex: "Capital expenditure creates assets or reduces liabilities." },
      { q: "Disinvestment is a?", opts: ["Capital receipt", "Revenue expenditure", "Direct tax", "CPI item"], a: 0, ex: "Sale of government assets/equity is a capital receipt." },
      { q: "Charged expenditure is?", opts: ["Voted by Lok Sabha", "Not voted, only discussed", "A private company expense", "Illegal borrowing"], a: 1, ex: "Charged expenditure is not submitted to vote." }
    ]
  );

  topic("eco-taxation",
    "Taxation questions ask classification, GST basics, progressive/regressive taxes and constitutional/institutional facts.",
    [
      {
        title: "Direct vs Indirect",
        table: [
          ["Direct tax", "Indirect tax"],
          ["Burden and impact usually on same person", "Burden can be shifted to consumer"],
          ["Income tax, corporate tax", "GST, customs duty, excise on selected goods"],
          ["Generally progressive possible", "Often regressive in effect unless designed carefully"]
        ]
      },
      {
        title: "GST",
        points: [
          "GST is a destination-based indirect tax on supply of goods and services.",
          "GST came into effect on 1 July 2017.",
          "GST Council is a constitutional body under Article 279A.",
          "CGST and SGST apply to intra-state supplies; IGST applies to inter-state supplies.",
          "Customs duty remains outside GST. Alcohol for human consumption and petroleum products have special treatment."
        ]
      },
      {
        title: "Other Terms",
        points: [
          "Cess is levied for a specific purpose.",
          "Surcharge is an additional charge on tax.",
          "Tax base is the item/income/activity being taxed.",
          "Tax buoyancy measures responsiveness of tax revenue to GDP growth."
        ]
      }
    ],
    [
      { q: "GST was implemented in India from?", opts: ["1 April 2015", "1 July 2017", "26 January 1950", "15 August 1991"], a: 1, ex: "GST rollout date was 1 July 2017." },
      { q: "GST Council is under Article?", opts: ["112", "123", "279A", "356"], a: 2, ex: "Article 279A provides for GST Council." },
      { q: "Income tax is a?", opts: ["Direct tax", "Indirect tax", "Customs duty", "Subsidy"], a: 0, ex: "Income tax is paid directly by the income earner." }
    ]
  );

  topic("eco-insurance",
    "Insurance is a small but scoring area: principles, regulators, public schemes and social security.",
    [
      {
        title: "Insurance Basics",
        points: [
          "Insurance transfers risk from individual to insurer in exchange for premium.",
          "Life insurance covers risk related to life; general insurance covers health, vehicle, property, crop and other non-life risks.",
          "Premium is the amount paid by insured; claim is compensation paid when insured event occurs.",
          "IRDAI regulates the insurance sector in India."
        ]
      },
      {
        title: "Important Principles",
        table: [
          ["Principle", "Meaning"],
          ["Utmost good faith", "Both parties disclose material facts"],
          ["Insurable interest", "Insured must suffer loss if event occurs"],
          ["Indemnity", "Compensation restores loss, not profit, in most general insurance"],
          ["Subrogation", "Insurer gets recovery rights after claim payment"]
        ]
      },
      {
        title: "Schemes",
        points: [
          "Pradhan Mantri Jeevan Jyoti Bima Yojana: life insurance.",
          "Pradhan Mantri Suraksha Bima Yojana: accidental insurance.",
          "PM Fasal Bima Yojana: crop insurance.",
          "Ayushman Bharat PM-JAY: health cover for eligible families."
        ]
      }
    ],
    [
      { q: "Insurance sector regulator in India is?", opts: ["SEBI", "IRDAI", "NABARD", "CAG"], a: 1, ex: "IRDAI regulates insurance." },
      { q: "Premium means?", opts: ["Tax refund", "Amount paid for insurance cover", "Fiscal deficit", "Repo rate"], a: 1, ex: "Premium is the price of insurance." },
      { q: "PM Fasal Bima Yojana is related to?", opts: ["Crop insurance", "Stock market", "Urban rail", "Foreign exchange"], a: 0, ex: "It covers crop risk." }
    ]
  );

  topic("eco-international-orgs",
    "International financial organisations are asked in match-the-following format: headquarters, purpose and India relation.",
    [
      {
        title: "Important Organisations",
        table: [
          ["Organisation", "Headquarters", "Main function"],
          ["IMF", "Washington, D.C.", "Exchange stability, balance of payments support"],
          ["World Bank", "Washington, D.C.", "Development finance and poverty reduction"],
          ["IBRD", "Washington, D.C.", "Loans to middle-income and creditworthy countries"],
          ["IDA", "Washington, D.C.", "Concessional support to poorer countries"],
          ["WTO", "Geneva", "Rules-based multilateral trade"],
          ["ADB", "Manila", "Development finance in Asia-Pacific"],
          ["AIIB", "Beijing", "Infrastructure finance"],
          ["NDB", "Shanghai", "BRICS development bank"]
        ]
      },
      {
        title: "Bretton Woods",
        points: [
          "IMF and World Bank are called Bretton Woods institutions.",
          "They were created after the Bretton Woods Conference of 1944.",
          "IMF focuses more on macroeconomic stability and BoP support; World Bank focuses more on development projects."
        ]
      }
    ],
    [
      { q: "IMF headquarters is in?", opts: ["Geneva", "Washington, D.C.", "Paris", "Manila"], a: 1, ex: "IMF is headquartered in Washington, D.C." },
      { q: "WTO headquarters is in?", opts: ["Geneva", "New Delhi", "Shanghai", "Rome"], a: 0, ex: "WTO is headquartered in Geneva." },
      { q: "Bretton Woods institutions include?", opts: ["IMF and World Bank", "SEBI and RBI", "NABARD and SIDBI", "GST Council and CAG"], a: 0, ex: "IMF and World Bank emerged from Bretton Woods." }
    ]
  );

  topic("eco-trade-commerce",
    "External sector questions cover balance of payments, forex, exchange rate, trade policy and current account.",
    [
      {
        title: "Balance of Payments",
        table: [
          ["Account", "Includes"],
          ["Current account", "Trade in goods, services, income, transfers"],
          ["Capital/financial account", "Investment, loans, banking capital and reserve changes"],
          ["Trade balance", "Exports of goods - imports of goods"],
          ["Current account deficit", "Current account payments exceed receipts"]
        ]
      },
      {
        title: "Forex and Exchange Rate",
        points: [
          "Foreign exchange reserves are held by RBI.",
          "Depreciation means domestic currency loses value in a market-determined exchange rate system.",
          "Devaluation is an official reduction in currency value under fixed/managed arrangements.",
          "Appreciation means domestic currency gains value.",
          "A weaker rupee can make exports cheaper but imports costlier."
        ]
      },
      {
        title: "Trade Terms",
        points: [
          "Tariff: tax on imports/exports, usually imports.",
          "Quota: quantitative restriction on trade.",
          "Dumping: exporting at unfairly low prices; anti-dumping duty may be imposed.",
          "FDI brings lasting ownership/control interest; FPI is investment in financial assets."
        ]
      }
    ],
    [
      { q: "Current account includes?", opts: ["Goods and services trade", "Only RBI employees", "Only state budgets", "Only census"], a: 0, ex: "Current account records goods, services, income and transfers." },
      { q: "Depreciation of rupee means?", opts: ["Rupee gains value", "Rupee loses value", "Tax is abolished", "GDP becomes zero"], a: 1, ex: "Depreciation means domestic currency value falls." },
      { q: "FDI usually implies?", opts: ["Only short-term share trade", "Lasting ownership/control interest", "Only government tax", "Only gold import"], a: 1, ex: "FDI is more stable and control-oriented than portfolio flows." }
    ]
  );

  topic("eco-terminology",
    "Use this as the final revision sheet before tests. These terms appear directly in SSC one-liners and options.",
    [
      {
        title: "Quick Glossary",
        table: [
          ["Term", "Meaning"],
          ["Base year", "Reference year for constant-price comparison"],
          ["GDP deflator", "Broad price index implied by nominal GDP / real GDP"],
          ["Fiscal stimulus", "Government action to boost demand through spending/tax measures"],
          ["Liquidity", "Ease of converting asset into cash"],
          ["CRAR", "Capital to Risk-weighted Assets Ratio"],
          ["Moral hazard", "More risk-taking because someone else bears the cost"],
          ["Adverse selection", "High-risk participants are more likely to buy insurance/credit"],
          ["Repo", "Repurchase agreement"],
          ["Open economy", "Economy connected through trade and capital flows"],
          ["Closed economy", "No external trade/capital link in theory"]
        ]
      },
      {
        title: "Common Confusions",
        table: [
          ["Pair", "Difference"],
          ["GDP vs GNP", "Territory vs ownership/residency income"],
          ["Deflation vs disinflation", "Falling prices vs falling inflation rate"],
          ["Depreciation vs devaluation", "Market fall vs official reduction"],
          ["Fiscal policy vs monetary policy", "Government budget vs RBI money/credit policy"],
          ["Revenue deficit vs fiscal deficit", "Revenue gap vs total borrowing gap"]
        ]
      },
      {
        title: "Revision Order",
        points: [
          "First revise GDP and national income.",
          "Then revise inflation and RBI tools.",
          "Then revise budget deficits and taxation.",
          "Finally revise schemes, organisations and terminology."
        ]
      }
    ],
    [
      { q: "Fiscal policy is mainly handled by?", opts: ["Government budget authorities", "Only Supreme Court", "Only SEBI", "Only WTO"], a: 0, ex: "Fiscal policy is about taxation, expenditure and borrowing." },
      { q: "Liquidity means?", opts: ["Ease of converting into cash", "Only agricultural land", "Only inflation", "Only census data"], a: 0, ex: "Cash is the most liquid asset." },
      { q: "GDP deflator is related to?", opts: ["Price level in GDP", "Sex ratio", "Forest cover only", "Railway zones"], a: 0, ex: "GDP deflator compares nominal and real GDP." }
    ].concat(commonMcq)
  );

  const enrich = (id, html, mcq = []) => {
    if (!T[id]) return;
    T[id].body += html;
    T[id].mcq = (T[id].mcq || []).concat(mcq);
  };

  enrich("eco-intro", `
    <hr>
    <h3>Chapter Notes: How an Economy Works</h3>
    <p>An economy is a system through which people produce, distribute and consume goods and services. In SSC CGL, economy should not be studied as formulas only. Most questions test whether you understand who produces, who regulates, who pays, who receives benefit and how the government responds to problems like inflation, unemployment and poverty.</p>
    <p>The simplest circular flow has two sides: <b>households</b> and <b>firms</b>. Households supply factors of production such as land, labour, capital and enterprise. Firms use these factors to produce goods and services. In return, households receive rent, wages, interest and profit. Households then spend income on goods and services, and this becomes revenue for firms. When government, banks and foreign trade are added, the economy becomes more realistic.</p>

    <h4>Factors of Production</h4>
    <table>
      <tr><th>Factor</th><th>Reward</th><th>Example</th></tr>
      <tr><td>Land</td><td>Rent</td><td>Natural resources, land for farming or factory</td></tr>
      <tr><td>Labour</td><td>Wages</td><td>Physical and mental work</td></tr>
      <tr><td>Capital</td><td>Interest</td><td>Machines, tools, buildings, money capital</td></tr>
      <tr><td>Entrepreneurship</td><td>Profit</td><td>Risk-taking and organisation of business</td></tr>
    </table>

    <h4>Market Economy, Socialist Economy and Mixed Economy</h4>
    <ul>
      <li><b>Capitalist/market economy</b>: private ownership dominates; price mechanism decides production. Example: USA is broadly market-oriented.</li>
      <li><b>Socialist/command economy</b>: state ownership and central planning dominate. Former USSR is the classic example.</li>
      <li><b>Mixed economy</b>: public and private sectors coexist. India adopted this after independence.</li>
    </ul>
    <p>India is called a <b>mixed economy</b> because railways, defence, atomic energy, public sector banks and many welfare functions coexist with private industry, private banks, start-ups, stock markets and market competition.</p>

    <h4>Demand and Supply</h4>
    <ul>
      <li><b>Demand</b> means willingness and ability to buy at a price. Desire alone is not demand.</li>
      <li><b>Law of demand</b>: other things constant, price rises -> quantity demanded falls.</li>
      <li><b>Supply</b> means willingness and ability to sell. Other things constant, price rises -> quantity supplied rises.</li>
      <li><b>Equilibrium price</b> is where demand and supply meet.</li>
    </ul>
    <blockquote>SSC trap: "Need" and "demand" are not same. A poor person may need a car, but it becomes economic demand only when backed by purchasing power.</blockquote>
  `, [
    { q: "In economics, demand means desire backed by?", opts: ["Population", "Purchasing power", "Government order only", "Imports"], a: 1, ex: "Demand requires willingness and ability to pay." },
    { q: "Reward for entrepreneurship is?", opts: ["Rent", "Wages", "Interest", "Profit"], a: 3, ex: "Entrepreneur bears risk and earns profit." },
    { q: "India adopted which broad economic system after independence?", opts: ["Pure capitalism", "Pure socialism", "Mixed economy", "Closed barter economy"], a: 2, ex: "India combined planning and public sector with private sector." }
  ]);

  enrich("eco-planning", `
    <hr>
    <h3>Chapter Notes: Why India Chose Planning</h3>
    <p>At independence, India inherited poverty, low industrial base, food shortage, low literacy, poor health facilities and huge regional imbalance. The private sector was not strong enough to build heavy industries, dams, power plants and national infrastructure at the required scale. Therefore, planning was chosen to direct scarce resources toward national priorities.</p>
    <p>India did not adopt Soviet-style total state control. It adopted <b>democratic planning in a mixed economy</b>. The state guided investment, controlled strategic sectors and created public enterprises, while private property and private business continued in many areas.</p>

    <h4>Five-Year Plans: Exam-Oriented Story</h4>
    <table>
      <tr><th>Plan</th><th>Main focus</th><th>Why important for SSC</th></tr>
      <tr><td>1st, 1951-56</td><td>Agriculture, irrigation, rehabilitation</td><td>Based on Harrod-Domar model; successful due to good harvests</td></tr>
      <tr><td>2nd, 1956-61</td><td>Heavy industries</td><td>Mahalanobis model; public sector expansion</td></tr>
      <tr><td>3rd, 1961-66</td><td>Self-reliance, agriculture</td><td>Failed due to wars, drought and inflation</td></tr>
      <tr><td>Annual Plans, 1966-69</td><td>Crisis management</td><td>Called Plan Holiday</td></tr>
      <tr><td>4th, 1969-74</td><td>Growth with stability</td><td>Bank nationalisation period; Garibi Hatao politics</td></tr>
      <tr><td>5th, 1974-79</td><td>Poverty removal</td><td>Terminated early by Janata Government</td></tr>
      <tr><td>6th, 1980-85</td><td>Poverty removal, technology</td><td>Beginning of stronger poverty programmes</td></tr>
      <tr><td>7th, 1985-90</td><td>Food, work, productivity</td><td>Before 1991 crisis</td></tr>
      <tr><td>8th, 1992-97</td><td>Human development, reforms</td><td>First plan after LPG reforms</td></tr>
      <tr><td>12th, 2012-17</td><td>Faster, sustainable, inclusive growth</td><td>Last Five-Year Plan</td></tr>
    </table>

    <h4>Planning Commission vs NITI Aayog</h4>
    <table>
      <tr><th>Planning Commission</th><th>NITI Aayog</th></tr>
      <tr><td>Set up in 1950</td><td>Set up in 2015</td></tr>
      <tr><td>Focused on Five-Year Plans</td><td>Focused on policy strategy and cooperative federalism</td></tr>
      <tr><td>Had role in plan fund allocation</td><td>Does not allocate funds like Planning Commission</td></tr>
      <tr><td>Top-down planning image</td><td>Team India, states as partners</td></tr>
      <tr><td>PM was chairperson</td><td>PM is chairperson</td></tr>
    </table>
    <blockquote>Memory: Planning Commission = 1950 to 2014 era of Five-Year Plans. NITI Aayog = from 2015, think tank and federal policy platform.</blockquote>
  `, [
    { q: "Plan Holiday refers to which period?", opts: ["1951-56", "1966-69", "1974-79", "1992-97"], a: 1, ex: "Three annual plans were used from 1966 to 1969." },
    { q: "Last Five-Year Plan of India was?", opts: ["10th", "11th", "12th", "13th"], a: 2, ex: "The 12th Plan, 2012-17, was the last." },
    { q: "NITI Aayog is best described as a?", opts: ["Constitutional court", "Policy think tank", "Commercial bank", "Tax tribunal"], a: 1, ex: "It replaced the Planning Commission as a policy think tank." }
  ]);

  enrich("eco-national-income", `
    <hr>
    <h3>Chapter Notes: National Income in Detail</h3>
    <p>National income accounting measures the production and income of a country. For SSC, the biggest skill is not calculation but knowing which word changes the meaning: <b>domestic vs national</b>, <b>gross vs net</b>, <b>market price vs factor cost</b>, and <b>nominal vs real</b>.</p>

    <h4>Domestic vs National</h4>
    <p><b>Domestic</b> means production within the geographical boundary of India, whether by Indians or foreigners. <b>National</b> means income of normal residents of India, whether earned in India or abroad. This is why Net Factor Income from Abroad is added to GDP to get GNP.</p>

    <h4>Gross vs Net</h4>
    <p><b>Gross</b> includes depreciation. Machines, buildings and equipment wear out during production. This loss is called depreciation or consumption of fixed capital. <b>Net</b> means depreciation has been deducted.</p>

    <h4>Market Price vs Factor Cost</h4>
    <ul>
      <li><b>Market price</b> includes indirect taxes and excludes subsidies from the buyer's viewpoint.</li>
      <li><b>Factor cost</b> is the actual payment to factors of production.</li>
      <li>Factor Cost = Market Price - Net Indirect Taxes.</li>
      <li>Net Indirect Taxes = Indirect Taxes - Subsidies.</li>
    </ul>

    <h4>Nominal vs Real GDP</h4>
    <table>
      <tr><th>Nominal GDP</th><th>Real GDP</th></tr>
      <tr><td>Measured at current prices</td><td>Measured at constant/base-year prices</td></tr>
      <tr><td>Can rise due to inflation</td><td>Better for real growth comparison</td></tr>
      <tr><td>Also called GDP at current prices</td><td>Also called GDP at constant prices</td></tr>
    </table>

    <h4>Why Double Counting Is Avoided</h4>
    <p>If wheat, flour and bread are all counted fully, the value of wheat is counted multiple times. Therefore, national income counts only <b>final goods and services</b> or uses the <b>value added method</b>. Value added = value of output - value of intermediate consumption.</p>
    <blockquote>SSC trap: Transfer payments like pension, scholarships and unemployment allowance are not counted as production because no current good or service is produced in return.</blockquote>
  `, [
    { q: "To convert GDP into GNP, we add?", opts: ["Depreciation", "Net factor income from abroad", "Only subsidies", "Only imports"], a: 1, ex: "GNP = GDP + NFIA." },
    { q: "Net value is obtained from gross value by subtracting?", opts: ["Depreciation", "Exports", "Wages", "Population"], a: 0, ex: "Net = gross - depreciation." },
    { q: "Which is excluded from national income because it is a transfer payment?", opts: ["Teacher salary", "Factory profit", "Old age pension", "Rent from land"], a: 2, ex: "Pension is income transfer, not payment for current production." }
  ]);

  enrich("eco-demography", `
    <hr>
    <h3>Chapter Notes: Population as Resource and Challenge</h3>
    <p>Demography studies population size, composition, distribution and change. In economy, population matters because it affects labour supply, savings, demand, poverty, public services and dependency burden. A large population is not automatically a problem. It becomes a demographic dividend when people are healthy, educated and employable.</p>

    <h4>Stages of Demographic Transition</h4>
    <table>
      <tr><th>Stage</th><th>Birth rate</th><th>Death rate</th><th>Population growth</th></tr>
      <tr><td>Stage 1</td><td>High</td><td>High</td><td>Low and unstable</td></tr>
      <tr><td>Stage 2</td><td>High</td><td>Falling</td><td>Very high</td></tr>
      <tr><td>Stage 3</td><td>Falling</td><td>Low</td><td>Slows down</td></tr>
      <tr><td>Stage 4</td><td>Low</td><td>Low</td><td>Stable/low</td></tr>
    </table>

    <h4>Important Census-Type Terms</h4>
    <ul>
      <li><b>Decadal growth rate</b>: percentage growth of population over ten years.</li>
      <li><b>Urbanisation</b>: rising share of population living in urban areas.</li>
      <li><b>Migration</b>: movement of people from one place to another for work, marriage, education, safety etc.</li>
      <li><b>Work participation rate</b>: proportion of workers in total population.</li>
      <li><b>Dependency ratio</b>: dependent population compared with working-age population.</li>
    </ul>

    <h4>India's Demographic Opportunity</h4>
    <p>India has a large working-age population. This can raise growth through higher labour supply, higher savings and larger markets. But if jobs and skills are missing, the same population can create unemployment and social stress. Therefore, demography links directly with education, health, skilling, manufacturing and labour-intensive growth.</p>
  `, [
    { q: "Demographic dividend depends mainly on?", opts: ["Working-age population with skills and jobs", "Only more old-age population", "Only more imports", "Only lower forests"], a: 0, ex: "A young population becomes dividend only when productively employed." },
    { q: "Dependency ratio compares dependents with?", opts: ["Working-age population", "Exports", "Banks", "Tax rates"], a: 0, ex: "It compares children/elderly with working-age people." }
  ]);

  enrich("eco-poverty-unemployment", `
    <hr>
    <h3>Chapter Notes: Poverty Measurement and Employment</h3>
    <p>Poverty is not just low income. It shows lack of food, housing, health, education, sanitation, credit and social security. For exam purposes, learn both the old poverty-line approach and the newer multidimensional approach.</p>

    <h4>Important Poverty Committees</h4>
    <table>
      <tr><th>Committee</th><th>Importance</th></tr>
      <tr><td>Y.K. Alagh Task Force</td><td>Early official poverty line based on calorie norms</td></tr>
      <tr><td>Lakdawala Committee</td><td>State-specific poverty lines using CPI-AL and CPI-IW</td></tr>
      <tr><td>Tendulkar Committee</td><td>Shifted away from calorie-only approach; included health and education spending</td></tr>
      <tr><td>Rangarajan Committee</td><td>Suggested higher poverty line than Tendulkar</td></tr>
    </table>

    <h4>Employment Measures</h4>
    <ul>
      <li><b>Usual Status</b>: employment status over a long reference period, generally one year.</li>
      <li><b>Current Weekly Status</b>: whether worked for at least one hour in a week.</li>
      <li><b>Current Daily Status</b>: captures underemployment by looking at each day.</li>
      <li><b>Labour Force</b>: employed + unemployed seeking/available for work.</li>
      <li><b>Workforce</b>: actually employed persons.</li>
    </ul>

    <h4>Why Disguised Unemployment Matters in India</h4>
    <p>In many small farms, five people may work where three are enough. If two are shifted to other productive work, farm output may not fall. This is disguised unemployment. It is hidden because people appear employed, but their marginal contribution is near zero.</p>
    <blockquote>SSC trap: Unemployment rate is not calculated on total population; it is calculated with respect to labour force.</blockquote>
  `, [
    { q: "Tendulkar Committee is related to?", opts: ["Poverty estimation", "Bank nationalisation", "Constitution drafting", "Space research"], a: 0, ex: "It suggested methodology for poverty estimation." },
    { q: "Labour force includes?", opts: ["Only employed", "Employed plus unemployed seeking/available for work", "Only children", "Only retired persons"], a: 1, ex: "Labour force = workforce + unemployed persons in labour market." }
  ]);

  enrich("eco-agriculture", `
    <hr>
    <h3>Chapter Notes: Indian Agriculture</h3>
    <p>Agriculture remains central to India because it supports livelihood, food security, rural demand and raw material for industries. Its share in GDP has fallen over time, but its share in employment remains high, which creates low productivity pressure.</p>

    <h4>Cropping Seasons</h4>
    <table>
      <tr><th>Season</th><th>Sowing</th><th>Harvest</th><th>Major crops</th></tr>
      <tr><td>Kharif</td><td>Monsoon onset</td><td>Autumn</td><td>Rice, maize, cotton, jute, soybean</td></tr>
      <tr><td>Rabi</td><td>Winter</td><td>Spring</td><td>Wheat, barley, gram, mustard</td></tr>
      <tr><td>Zaid</td><td>Between Rabi and Kharif</td><td>Summer</td><td>Watermelon, cucumber, fodder</td></tr>
    </table>

    <h4>Green Revolution</h4>
    <p>The Green Revolution used HYV seeds, assured irrigation, fertilizers, pesticides, credit and MSP procurement. It first benefited wheat-growing regions like Punjab, Haryana and western Uttar Pradesh. It made India more food secure but also created issues such as regional imbalance, groundwater stress and excessive chemical use.</p>

    <h4>MSP and Procurement Chain</h4>
    <ol>
      <li>CACP recommends MSP for notified crops.</li>
      <li>Government announces MSP before sowing seasons.</li>
      <li>FCI and state agencies procure mainly wheat and rice in large quantities.</li>
      <li>Stocks are used for buffer stock and Public Distribution System.</li>
    </ol>

    <h4>Food Security Terms</h4>
    <ul>
      <li><b>Buffer stock</b>: foodgrain stock maintained for food security and price stability.</li>
      <li><b>Issue price</b>: price at which foodgrains are supplied through PDS.</li>
      <li><b>Food subsidy</b>: difference between economic cost and issue price, plus related costs.</li>
      <li><b>e-NAM</b>: electronic National Agriculture Market.</li>
    </ul>
  `, [
    { q: "Kharif crops are mainly sown with the onset of?", opts: ["Winter", "Monsoon", "Spring", "Autumn frost"], a: 1, ex: "Kharif season depends on monsoon rains." },
    { q: "Green Revolution in India was most associated first with?", opts: ["Wheat", "Rubber", "Tea", "Coffee"], a: 0, ex: "Wheat output rose sharply in Punjab-Haryana-west UP region." },
    { q: "FCI is closely related to?", opts: ["Foodgrain procurement and storage", "Stock exchange", "Telecom", "Insurance regulation"], a: 0, ex: "Food Corporation of India supports procurement and buffer stock." }
  ]);

  enrich("eco-banking", `
    <hr>
    <h3>Chapter Notes: Banking in India</h3>
    <p>Banks accept deposits and lend money. They are important because they convert household savings into productive investment. In a developing economy like India, banking also supports financial inclusion, direct benefit transfer, agriculture credit, MSME credit and digital payments.</p>

    <h4>Scheduled vs Non-Scheduled Banks</h4>
    <p>A scheduled bank is included in the Second Schedule of the RBI Act, 1934 and satisfies conditions related to paid-up capital and functioning. Scheduled banks get access to RBI facilities and are subject to stronger regulation.</p>

    <h4>Bank Nationalisation</h4>
    <ul>
      <li><b>1969</b>: 14 major commercial banks nationalised.</li>
      <li><b>1980</b>: 6 more banks nationalised.</li>
      <li>Purpose: expand rural banking, priority sector lending, social control over credit and reduce concentration of economic power.</li>
    </ul>

    <h4>Credit Creation</h4>
    <p>Banks create credit when they lend a portion of deposits and the loan becomes a deposit elsewhere in the banking system. CRR and SLR limit how much banks can lend. Higher reserve requirements reduce credit creation; lower reserve requirements increase lending capacity.</p>

    <h4>NPAs and Bad Loans</h4>
    <ul>
      <li><b>Standard asset</b>: performing loan.</li>
      <li><b>Sub-standard asset</b>: NPA for up to 12 months.</li>
      <li><b>Doubtful asset</b>: remained sub-standard for 12 months.</li>
      <li><b>Loss asset</b>: identified as uncollectible.</li>
    </ul>
    <p>High NPAs hurt banks because they reduce profitability, restrict fresh lending and may require provisioning.</p>
  `, [
    { q: "How many banks were nationalised in 1969?", opts: ["6", "10", "14", "20"], a: 2, ex: "14 major commercial banks were nationalised in 1969." },
    { q: "Scheduled banks are listed in which schedule of RBI Act?", opts: ["First", "Second", "Fifth", "Seventh"], a: 1, ex: "Second Schedule of RBI Act, 1934." },
    { q: "Higher CRR generally does what to credit creation?", opts: ["Increases it", "Reduces it", "Has no possible effect", "Abolishes banks"], a: 1, ex: "More funds are locked with RBI, so lending capacity falls." }
  ]);

  enrich("eco-monetary-policy", `
    <hr>
    <h3>Chapter Notes: RBI and Monetary Policy</h3>
    <p>Monetary policy controls the cost and availability of money. If inflation is high, RBI uses tight policy to reduce excess demand. If growth is weak and inflation is controlled, RBI may support liquidity and cheaper credit. The challenge is balancing price stability with growth.</p>

    <h4>Expansionary vs Contractionary Policy</h4>
    <table>
      <tr><th>Policy</th><th>Used when</th><th>Common measures</th><th>Effect</th></tr>
      <tr><td>Expansionary/easy money</td><td>Slowdown, low demand</td><td>Lower repo, inject liquidity, buy securities</td><td>Credit cheaper, demand rises</td></tr>
      <tr><td>Contractionary/tight money</td><td>High inflation</td><td>Raise repo, absorb liquidity, sell securities</td><td>Credit costlier, demand cools</td></tr>
    </table>

    <h4>Currency Issue</h4>
    <ul>
      <li>RBI issues currency notes except one-rupee note.</li>
      <li>One-rupee note and coins are issued by Government of India.</li>
      <li>RBI follows minimum reserve system for note issue.</li>
    </ul>

    <h4>Monetary Policy Committee</h4>
    <p>The MPC has six members: three from RBI and three appointed by the Central Government. It decides the policy repo rate. The RBI Governor chairs the MPC and has a casting vote in case of a tie.</p>
    <blockquote>SSC trap: RBI does not print coins. Coins are minted under authority of Government of India.</blockquote>
  `, [
    { q: "One-rupee note is issued by?", opts: ["RBI", "Government of India", "SEBI", "SBI"], a: 1, ex: "One-rupee note carries signature of Finance Secretary." },
    { q: "MPC has how many members?", opts: ["4", "5", "6", "10"], a: 2, ex: "Monetary Policy Committee has six members." },
    { q: "Open Market Operations involve RBI buying/selling?", opts: ["Gold jewellery", "Government securities", "Agricultural land", "Foreign companies only"], a: 1, ex: "OMO uses government securities to manage liquidity." }
  ]);

  enrich("eco-fiscal-system", `
    <hr>
    <h3>Chapter Notes: Budget as a Study Topic</h3>
    <p>The budget shows how the government plans to collect money and spend it. It is both an accounting document and a policy document. For SSC, focus on classification and deficit formulas. Avoid memorising changing yearly numbers unless preparing current affairs separately.</p>

    <h4>Receipt Classification</h4>
    <table>
      <tr><th>Receipt</th><th>Creates liability/reduces asset?</th><th>Examples</th></tr>
      <tr><td>Revenue receipt</td><td>No</td><td>Tax revenue, fees, dividends, interest receipts</td></tr>
      <tr><td>Capital receipt</td><td>Yes</td><td>Borrowing, loan recovery, disinvestment</td></tr>
    </table>

    <h4>Expenditure Classification</h4>
    <table>
      <tr><th>Expenditure</th><th>Creates asset/reduces liability?</th><th>Examples</th></tr>
      <tr><td>Revenue expenditure</td><td>No</td><td>Salaries, pensions, subsidies, interest payments</td></tr>
      <tr><td>Capital expenditure</td><td>Yes</td><td>Roads, bridges, machinery, equity infusion, loan repayment</td></tr>
    </table>

    <h4>Budget Process Terms</h4>
    <ul>
      <li><b>Finance Bill</b>: contains tax proposals.</li>
      <li><b>Appropriation Bill</b>: authorises withdrawal from Consolidated Fund of India.</li>
      <li><b>Vote on Account</b>: temporary permission for expenditure when full budget is not passed.</li>
      <li><b>Guillotine</b>: pending demands for grants are put to vote together due to lack of time.</li>
      <li><b>Economic Survey</b>: usually presented before the budget; reviews economy and policy issues.</li>
    </ul>
  `, [
    { q: "Appropriation Bill authorises withdrawal from?", opts: ["Consolidated Fund of India", "Contingency Fund of India only", "Private bank locker", "UN fund"], a: 0, ex: "It authorises expenditure from the Consolidated Fund." },
    { q: "Interest payment is classified as?", opts: ["Capital receipt", "Revenue expenditure", "Capital receipt only", "Tax revenue"], a: 1, ex: "It does not create assets, so it is revenue expenditure." },
    { q: "Loan recovery by government is a?", opts: ["Capital receipt", "Revenue expenditure", "Direct tax", "Subsidy"], a: 0, ex: "It reduces government assets, so it is capital receipt." }
  ]);

  enrich("eco-taxation", `
    <hr>
    <h3>Chapter Notes: Tax System</h3>
    <p>Taxes finance government expenditure and also influence behaviour. Direct taxes are generally better for equity because they can be progressive. Indirect taxes are easier to collect but may burden poor consumers unless essential goods are taxed lightly or exempted.</p>

    <h4>Progressive, Proportional and Regressive</h4>
    <table>
      <tr><th>Type</th><th>Meaning</th><th>Example idea</th></tr>
      <tr><td>Progressive</td><td>Tax rate rises as income rises</td><td>Income tax slabs</td></tr>
      <tr><td>Proportional</td><td>Same rate for all levels</td><td>Flat tax</td></tr>
      <tr><td>Regressive</td><td>Burden falls more on poor as share of income</td><td>Uniform tax on essential consumption</td></tr>
    </table>

    <h4>GST Structure</h4>
    <ul>
      <li><b>CGST</b>: Centre's GST on intra-state supply.</li>
      <li><b>SGST</b>: State's GST on intra-state supply.</li>
      <li><b>UTGST</b>: GST for Union Territories without legislature.</li>
      <li><b>IGST</b>: inter-state supply and imports.</li>
      <li><b>Input Tax Credit</b>: credit for tax paid on inputs, reducing cascading effect.</li>
    </ul>

    <h4>Why GST Was Introduced</h4>
    <p>Before GST, India had multiple indirect taxes such as excise duty, service tax, VAT, entry tax and octroi. GST aimed to create one common indirect tax system, reduce cascading, improve compliance and create a common national market.</p>
  `, [
    { q: "Input Tax Credit under GST helps reduce?", opts: ["Cascading of taxes", "Literacy", "Sex ratio", "Rainfall"], a: 0, ex: "Credit for input taxes prevents tax-on-tax." },
    { q: "IGST applies mainly to?", opts: ["Inter-state supply", "Only village tax", "Only salary income", "Only property tax"], a: 0, ex: "Inter-state supplies are covered under IGST." },
    { q: "A tax where rate rises with income is?", opts: ["Progressive", "Regressive", "Proportional only", "Specific duty only"], a: 0, ex: "Progressive tax takes a higher percentage from higher income." }
  ]);

  enrich("eco-trade-commerce", `
    <hr>
    <h3>Chapter Notes: External Sector</h3>
    <p>No modern economy is fully closed. India imports crude oil, gold, electronics, machinery and many inputs; it exports services, petroleum products, gems and jewellery, pharmaceuticals, engineering goods and textiles. External sector affects rupee value, inflation, reserves, employment and growth.</p>

    <h4>Balance of Trade vs Balance of Payments</h4>
    <table>
      <tr><th>Balance of Trade</th><th>Balance of Payments</th></tr>
      <tr><td>Only visible goods exports and imports</td><td>All transactions with rest of world</td></tr>
      <tr><td>Can be deficit or surplus</td><td>Always balances in accounting sense after reserves/errors</td></tr>
      <tr><td>Narrow concept</td><td>Broader concept</td></tr>
    </table>

    <h4>Current Account Deficit</h4>
    <p>A current account deficit means India is spending more foreign exchange on goods, services, income and transfers than it is receiving. CAD is not always bad if it finances productive investment, but a very high CAD can pressure the rupee and reserves.</p>

    <h4>Exchange Rate Effects</h4>
    <ul>
      <li>Rupee depreciation makes imports like crude oil costlier.</li>
      <li>It can help exporters because Indian goods/services become cheaper for foreigners.</li>
      <li>It can increase imported inflation.</li>
      <li>RBI may intervene to reduce excessive volatility, not necessarily to fix a permanent rate.</li>
    </ul>
  `, [
    { q: "Balance of Trade covers?", opts: ["Only goods exports and imports", "All government spending", "Only bank deposits", "Only insurance"], a: 0, ex: "BoT is goods trade balance." },
    { q: "High crude oil imports affect India mainly through?", opts: ["Import bill and inflation", "Only literacy", "Only forest cover", "Only census"], a: 0, ex: "Costlier oil raises import bill and can fuel inflation." },
    { q: "BoP is broader than BoT because it includes?", opts: ["Only goods", "Goods, services, income, transfers and capital flows", "Only foodgrain stocks", "Only taxes"], a: 1, ex: "Balance of Payments covers all external economic transactions." }
  ]);

  enrich("eco-infrastructure", `
    <hr>
    <h3>Chapter Notes: Infrastructure and Growth</h3>
    <p>Infrastructure is the basic support system of an economy. Without roads, power, ports, telecom, irrigation, banking, schools and hospitals, production remains costly and people cannot fully participate in growth. SSC questions usually ask classification, schemes and energy basics.</p>

    <h4>Why Infrastructure Matters</h4>
    <ul>
      <li>Reduces cost of transport and logistics.</li>
      <li>Connects farmers to markets and workers to jobs.</li>
      <li>Attracts private investment and industry.</li>
      <li>Improves human capital through schools, hospitals, sanitation and drinking water.</li>
      <li>Raises productivity by reducing delays, power cuts and transaction costs.</li>
    </ul>

    <h4>Transport Infrastructure</h4>
    <table>
      <tr><th>Mode</th><th>Strength</th><th>Common exam link</th></tr>
      <tr><td>Roadways</td><td>Door-to-door connectivity</td><td>Bharatmala, National Highways</td></tr>
      <tr><td>Railways</td><td>Bulk long-distance movement</td><td>Dedicated Freight Corridors</td></tr>
      <tr><td>Waterways</td><td>Cheapest for heavy cargo</td><td>Sagarmala, inland waterways</td></tr>
      <tr><td>Airways</td><td>Fastest but costlier</td><td>UDAN regional connectivity</td></tr>
    </table>

    <h4>Energy: Conventional and Non-Conventional</h4>
    <ul>
      <li><b>Conventional energy</b>: coal, petroleum, natural gas, large hydropower.</li>
      <li><b>Non-conventional/renewable energy</b>: solar, wind, biomass, tidal, geothermal, small hydro.</li>
      <li><b>Thermal power</b> is generated from coal, gas or oil and has been India's dominant power source historically.</li>
      <li><b>Hydropower</b> is renewable but large dams may involve displacement and ecological concerns.</li>
      <li><b>Solar energy</b> is important for India's renewable transition because India has high solar insolation.</li>
    </ul>
    <blockquote>SSC trap: Infrastructure is not only roads and power. Education and health are social infrastructure.</blockquote>
  `, [
    { q: "UDAN scheme is related to?", opts: ["Regional air connectivity", "Crop insurance", "Tax collection", "Bank merger"], a: 0, ex: "UDAN aims to make regional air travel affordable and connected." },
    { q: "Cheapest transport for heavy long-distance cargo is generally?", opts: ["Airways", "Waterways", "Motorbike", "Courier only"], a: 1, ex: "Water transport is cheapest for bulky cargo." }
  ]);

  enrich("eco-industry", `
    <hr>
    <h3>Chapter Notes: Industrial Development in India</h3>
    <p>Industry transforms raw material into finished goods and creates jobs outside agriculture. India's industrial policy moved through three broad phases: state-led industrialisation after independence, controlled private sector under licensing, and liberalised competitive industry after 1991.</p>

    <h4>Why Heavy Industry Was Prioritised</h4>
    <p>After independence, India lacked machine-making capacity. If every machine had to be imported, long-term self-reliance was impossible. The Second Five-Year Plan therefore focused on steel, heavy engineering, machine tools and public sector enterprises. This created a base but also increased bureaucracy and licensing.</p>

    <h4>License Raj</h4>
    <ul>
      <li>Industrial licences were required for capacity, location and production in many sectors.</li>
      <li>Purpose: planned allocation of scarce resources and prevention of concentration of wealth.</li>
      <li>Problems: delays, corruption, inefficient firms, low competition and slow innovation.</li>
      <li>1991 reforms reduced industrial licensing for most sectors.</li>
    </ul>

    <h4>LPG Reforms, 1991</h4>
    <table>
      <tr><th>Component</th><th>Meaning</th></tr>
      <tr><td>Liberalisation</td><td>Reducing controls and restrictions</td></tr>
      <tr><td>Privatisation</td><td>Greater role for private sector; disinvestment</td></tr>
      <tr><td>Globalisation</td><td>Greater integration with world economy</td></tr>
    </table>

    <h4>MSME Importance</h4>
    <p>MSMEs are labour-intensive, spread industry to smaller towns, support exports and create entrepreneurship. Their common problems are credit shortage, delayed payments, technology gaps and marketing difficulty.</p>
  `, [
    { q: "LPG reforms stand for?", opts: ["Labour, Population, Growth", "Liberalisation, Privatisation, Globalisation", "Land, Power, Gold", "Loans, Prices, Grants"], a: 1, ex: "LPG describes the 1991 reform direction." },
    { q: "License Raj refers to?", opts: ["Extensive industrial licensing and controls", "Only driving licence", "Only export promotion", "Only GST"], a: 0, ex: "It describes pre-1991 controls over industry." }
  ]);

  enrich("eco-public-sector", `
    <hr>
    <h3>Chapter Notes: Public Sector in India</h3>
    <p>The public sector was created to build areas where private capital was weak or unwilling: steel, heavy machinery, defence production, railways, power, mining and infrastructure. It also aimed to prevent concentration of wealth and promote balanced regional development.</p>

    <h4>Role of Public Sector After Independence</h4>
    <ul>
      <li>Built basic and heavy industries.</li>
      <li>Provided employment and regional development.</li>
      <li>Controlled strategic sectors such as defence, atomic energy and railways.</li>
      <li>Provided goods and services where profit was not the only objective.</li>
    </ul>

    <h4>Problems Faced by PSEs</h4>
    <ul>
      <li>Political interference and overstaffing.</li>
      <li>Low autonomy in commercial decisions.</li>
      <li>Delayed projects and cost overruns.</li>
      <li>Weak accountability in loss-making units.</li>
    </ul>

    <h4>Disinvestment vs Privatisation</h4>
    <table>
      <tr><th>Disinvestment</th><th>Privatisation</th></tr>
      <tr><td>Government sells part/full equity</td><td>Ownership/control shifts to private sector</td></tr>
      <tr><td>May or may not transfer management</td><td>Management control usually changes</td></tr>
      <tr><td>Can be minority stake sale</td><td>More structural change</td></tr>
    </table>
  `, [
    { q: "Main purpose of early public sector expansion was?", opts: ["Heavy industry and strategic development", "Abolish agriculture", "End all private trade", "Stop education"], a: 0, ex: "The public sector built basic and strategic industries." },
    { q: "Minority stake sale by government is?", opts: ["Disinvestment", "Repo", "Census", "Deflation"], a: 0, ex: "Disinvestment may be partial." }
  ]);

  enrich("eco-schemes", `
    <hr>
    <h3>Chapter Notes: How to Remember Schemes</h3>
    <p>For SSC, do not study schemes as random names. Attach each scheme to a problem. PMJDY solves bank access, MGNREGA solves rural wage insecurity, PM-KISAN supports farmer income, PMFBY handles crop risk, MUDRA supports micro-enterprise credit and PMAY supports housing.</p>

    <h4>Sector-Wise Scheme Map</h4>
    <table>
      <tr><th>Sector/problem</th><th>Schemes to remember</th></tr>
      <tr><td>Financial inclusion</td><td>PM Jan Dhan Yojana, RuPay, DBT support</td></tr>
      <tr><td>Rural employment</td><td>MGNREGA</td></tr>
      <tr><td>Agriculture income/risk</td><td>PM-KISAN, PM Fasal Bima Yojana, KCC</td></tr>
      <tr><td>Entrepreneurship</td><td>PM Mudra Yojana, Stand-Up India, Start-up India</td></tr>
      <tr><td>Housing</td><td>PM Awas Yojana</td></tr>
      <tr><td>Health/social security</td><td>Ayushman Bharat PM-JAY, PMSBY, PMJJBY, APY</td></tr>
      <tr><td>Urban livelihood</td><td>PM-SVANidhi, DAY-NULM</td></tr>
    </table>

    <h4>DBT and JAM Trinity</h4>
    <p><b>JAM</b> means Jan Dhan, Aadhaar and Mobile. It helps direct benefit transfer by sending subsidy or support directly to bank accounts. The purpose is to reduce leakage, fake beneficiaries and delay.</p>
    <blockquote>Study method: for every scheme, remember target group + benefit + sector. Amounts and targets should be revised from current affairs separately because they change.</blockquote>
  `, [
    { q: "JAM Trinity stands for?", opts: ["Jan Dhan, Aadhaar, Mobile", "Jobs, Agriculture, Market", "Justice, Audit, Money", "Jute, Agro, Mining"], a: 0, ex: "JAM enables direct benefit transfer and inclusion." },
    { q: "PM-SVANidhi mainly supports?", opts: ["Street vendors", "Large steel plants", "Foreign banks", "Space missions"], a: 0, ex: "It gives working capital support to street vendors." }
  ]);

  enrich("eco-financial-system", `
    <hr>
    <h3>Chapter Notes: Financial System</h3>
    <p>The financial system moves money from savers to borrowers and investors. A person with surplus money may deposit it in a bank, buy a bond, buy shares or invest in mutual funds. A business or government that needs funds may borrow from banks, issue bonds or sell shares. Regulators exist to protect investors and maintain stability.</p>

    <h4>Bank-Based vs Market-Based Finance</h4>
    <table>
      <tr><th>Bank-based</th><th>Market-based</th></tr>
      <tr><td>Borrower gets loan from bank</td><td>Borrower raises funds from investors</td></tr>
      <tr><td>Bank takes credit risk</td><td>Investors take market/credit risk</td></tr>
      <tr><td>Deposits are major source</td><td>Shares, bonds, debentures</td></tr>
    </table>

    <h4>Equity vs Debt</h4>
    <ul>
      <li><b>Equity share</b>: ownership claim; dividend not guaranteed; voting rights usually exist.</li>
      <li><b>Debt/bond/debenture</b>: loan to issuer; interest is paid as per terms; ownership is not given.</li>
      <li><b>Mutual fund</b>: pools money from investors and invests in securities.</li>
      <li><b>Derivatives</b>: financial contracts whose value depends on an underlying asset; higher risk and used for hedging/speculation.</li>
    </ul>

    <h4>Stock Exchanges</h4>
    <p>Stock exchanges provide a platform for trading securities. Primary market brings new securities; secondary market gives liquidity to existing securities. SEBI regulates listed securities and protects investor interests.</p>
  `, [
    { q: "Equity shareholders are?", opts: ["Owners of company", "Only lenders", "Only tax collectors", "Only depositors"], a: 0, ex: "Equity represents ownership." },
    { q: "Secondary market deals with?", opts: ["Existing securities", "Only new currency notes", "Only census forms", "Only crop insurance"], a: 0, ex: "Existing securities are traded in secondary market." }
  ]);

  enrich("eco-inflation", `
    <hr>
    <h3>Chapter Notes: Inflation in Real Life</h3>
    <p>Inflation means a sustained rise in the general price level. It reduces purchasing power: if prices double and income stays the same, real income falls. But mild inflation is normal in growing economies. The problem is high, volatile or unexpected inflation.</p>

    <h4>Who Is Hurt and Who May Gain?</h4>
    <table>
      <tr><th>Group</th><th>Effect of high inflation</th></tr>
      <tr><td>Fixed-income earners</td><td>Lose purchasing power</td></tr>
      <tr><td>Savers holding cash</td><td>Real value of savings falls</td></tr>
      <tr><td>Borrowers</td><td>May gain if loan is fixed-rate and income rises</td></tr>
      <tr><td>Lenders</td><td>May lose if interest rate is fixed below inflation</td></tr>
      <tr><td>Exporters</td><td>May lose competitiveness if domestic inflation is high</td></tr>
    </table>

    <h4>Food Inflation in India</h4>
    <p>Food has a significant weight in CPI. Monsoon shocks, supply bottlenecks, fuel cost, global prices and storage problems can raise food inflation. This is why agriculture, logistics and buffer stocks matter for inflation management.</p>

    <h4>Inflation Control Tools</h4>
    <ul>
      <li>RBI can raise repo rate to reduce demand-side pressure.</li>
      <li>Government can release buffer stock, reduce import duty or improve supply.</li>
      <li>Fiscal discipline can reduce excess demand.</li>
      <li>Better logistics and storage reduce supply shocks.</li>
    </ul>
  `, [
    { q: "Inflation reduces?", opts: ["Purchasing power of money", "All prices to zero", "Population", "Land area"], a: 0, ex: "Same money buys fewer goods." },
    { q: "Food inflation in India strongly affects CPI because?", opts: ["Food has significant CPI weight", "Food is not consumed", "CPI excludes food", "RBI issues food"], a: 0, ex: "Food items matter heavily in household consumption." }
  ]);

  enrich("eco-fiscal-terms", `
    <hr>
    <h3>Chapter Notes: Fiscal Vocabulary Through Examples</h3>
    <p>Fiscal terms are easier when seen through government accounts. If the government pays salaries, it is revenue expenditure. If it builds a highway, it is capital expenditure. If it collects income tax, it is revenue receipt. If it borrows from the market, it is capital receipt because liability increases.</p>

    <h4>Funds of Government</h4>
    <table>
      <tr><th>Fund</th><th>Use</th></tr>
      <tr><td>Consolidated Fund of India</td><td>Main fund; all revenues, loans and loan recoveries go here; expenditure needs parliamentary authorisation</td></tr>
      <tr><td>Contingency Fund of India</td><td>Emergency/unforeseen expenditure; placed at disposal of President</td></tr>
      <tr><td>Public Account of India</td><td>Money held by government as banker/trustee, e.g., provident funds, small savings</td></tr>
    </table>

    <h4>Deficit Interpretation</h4>
    <ul>
      <li><b>Revenue deficit</b> is more worrying for quality of spending because borrowed money may be used for current consumption.</li>
      <li><b>Fiscal deficit</b> shows total borrowing need.</li>
      <li><b>Primary deficit</b> shows current borrowing need excluding past interest burden.</li>
      <li><b>Monetised deficit</b> historically meant RBI financing government deficit by money creation.</li>
    </ul>
  `, [
    { q: "Provident fund money is part of?", opts: ["Public Account", "Only private locker", "Foreign exchange reserve", "GST Council"], a: 0, ex: "Public Account contains money held by government as trustee." },
    { q: "Revenue deficit means government revenue receipts are less than?", opts: ["Revenue expenditure", "Population", "Exports only", "Gold stock"], a: 0, ex: "Revenue deficit = revenue expenditure - revenue receipts." }
  ]);

  enrich("eco-insurance", `
    <hr>
    <h3>Chapter Notes: Insurance and Social Security</h3>
    <p>Insurance protects people from uncertain losses. Instead of one person bearing a large loss alone, many people pay small premiums into a pool. The insurer pays those who face the insured event. This is risk pooling.</p>

    <h4>Life, General and Health Insurance</h4>
    <table>
      <tr><th>Type</th><th>Coverage</th><th>Example</th></tr>
      <tr><td>Life insurance</td><td>Risk related to life/death/survival</td><td>Term insurance, endowment</td></tr>
      <tr><td>General insurance</td><td>Non-life assets and liabilities</td><td>Motor, fire, marine, crop</td></tr>
      <tr><td>Health insurance</td><td>Medical expenditure risk</td><td>Hospitalisation cover</td></tr>
    </table>

    <h4>Social Security</h4>
    <p>Social security protects people from old age, accident, disability, sickness and income loss. In India, formal sector workers may have EPFO/ESIC support, while unorganised workers need schemes like Atal Pension Yojana, PMJJBY and PMSBY.</p>

    <h4>Common Insurance Terms</h4>
    <ul>
      <li><b>Policyholder</b>: person who owns the insurance policy.</li>
      <li><b>Nominee</b>: person nominated to receive benefit.</li>
      <li><b>Sum assured</b>: guaranteed cover amount in life insurance.</li>
      <li><b>Deductible</b>: part of loss borne by insured before insurer pays.</li>
    </ul>
  `, [
    { q: "Risk pooling is the basic principle behind?", opts: ["Insurance", "Census", "Planet motion", "Deforestation"], a: 0, ex: "Many pay premiums so losses of few can be compensated." },
    { q: "Term insurance is a type of?", opts: ["Life insurance", "Customs duty", "Repo instrument", "Capital market index"], a: 0, ex: "It provides life cover for a term." }
  ]);

  enrich("eco-international-orgs", `
    <hr>
    <h3>Chapter Notes: Global Economic Institutions</h3>
    <p>International organisations were created because economies are linked through trade, exchange rates, capital flows and development finance. A crisis in one country can affect others. Institutions like IMF, World Bank and WTO provide rules, funds, coordination and dispute settlement.</p>

    <h4>IMF vs World Bank</h4>
    <table>
      <tr><th>IMF</th><th>World Bank</th></tr>
      <tr><td>Macroeconomic and exchange stability</td><td>Development and poverty reduction</td></tr>
      <tr><td>Short/medium-term BoP support</td><td>Long-term project/programme finance</td></tr>
      <tr><td>Focus on currency, reserves, fiscal/monetary stability</td><td>Focus on infrastructure, health, education, governance</td></tr>
      <tr><td>Washington, D.C.</td><td>Washington, D.C.</td></tr>
    </table>

    <h4>World Bank Group</h4>
    <ul>
      <li><b>IBRD</b>: lending to middle-income and creditworthy poorer countries.</li>
      <li><b>IDA</b>: concessional loans/grants to poorest countries.</li>
      <li><b>IFC</b>: private sector development.</li>
      <li><b>MIGA</b>: political risk insurance.</li>
      <li><b>ICSID</b>: investment dispute settlement.</li>
    </ul>

    <h4>WTO Functions</h4>
    <ul>
      <li>Administers global trade rules.</li>
      <li>Provides forum for trade negotiations.</li>
      <li>Handles trade disputes.</li>
      <li>Reviews national trade policies.</li>
    </ul>
  `, [
    { q: "IDA is part of?", opts: ["World Bank Group", "RBI only", "SEBI only", "GST Council"], a: 0, ex: "IDA provides concessional support under World Bank Group." },
    { q: "WTO mainly deals with?", opts: ["Trade rules", "Currency printing", "Census", "Police recruitment"], a: 0, ex: "WTO administers multilateral trade rules." }
  ]);

  enrich("eco-terminology", `
    <hr>
    <h3>Chapter Notes: Last-Day Economy Revision</h3>
    <p>Before the exam, revise Economy in pairs. SSC options are often designed around close terms. You should be able to explain each term in one sentence and give one Indian example.</p>

    <h4>One-Line Revision Bank</h4>
    <table>
      <tr><th>Term</th><th>One-line meaning</th></tr>
      <tr><td>Repo rate</td><td>RBI lending rate to banks against securities</td></tr>
      <tr><td>CRR</td><td>Cash kept by banks with RBI</td></tr>
      <tr><td>SLR</td><td>Liquid assets maintained by banks</td></tr>
      <tr><td>MSP</td><td>Government-announced minimum support price for selected crops</td></tr>
      <tr><td>NPA</td><td>Loan overdue beyond standard period, generally 90 days</td></tr>
      <tr><td>CAD</td><td>Current account deficit</td></tr>
      <tr><td>FDI</td><td>Investment with lasting interest/control</td></tr>
      <tr><td>FPI</td><td>Portfolio investment in financial assets</td></tr>
      <tr><td>Subsidy</td><td>Government support reducing cost</td></tr>
      <tr><td>Cess</td><td>Tax collected for a specific purpose</td></tr>
    </table>

    <h4>Best Order for Studying This Economy Section</h4>
    <ol>
      <li>Introduction -> National Income -> Inflation.</li>
      <li>Banking -> Monetary Policy -> Financial System.</li>
      <li>Fiscal System -> Taxation -> Fiscal Terms.</li>
      <li>Agriculture -> Industry -> Infrastructure -> Public Sector.</li>
      <li>Poverty/Unemployment -> Schemes -> Insurance.</li>
      <li>International Organisations -> Trade/BoP -> Terminology revision.</li>
    </ol>
  `, [
    { q: "Cess is collected for?", opts: ["Specific purpose", "No purpose", "Only private profit", "Only imports"], a: 0, ex: "Cess is earmarked for a particular purpose." },
    { q: "FPI is investment mainly in?", opts: ["Financial assets like shares/bonds", "Only direct factory control", "Only crop seeds", "Only government schools"], a: 0, ex: "FPI is portfolio investment, usually more liquid than FDI." }
  ]);
})();
