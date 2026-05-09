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
})();
