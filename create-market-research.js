const { Document, Packer, Paragraph, Table, TableCell, TableRow, TextRun, PageBreak, HeadingLevel, BorderStyle, AlignmentType, VerticalAlign, convertInchesToTwip, Footer } = require('docx');
const fs = require('fs');

const document = new Document({
  sections: [
    {
      properties: {
        page: {
          margins: {
            top: convertInchesToTwip(1),
            right: convertInchesToTwip(1),
            bottom: convertInchesToTwip(1),
            left: convertInchesToTwip(1),
          },
        },
      },
      footers: {
        default: new Footer({
          children: [
            new Paragraph({
              text: 'Sustain — Market Research',
              alignment: AlignmentType.CENTER,
              spacing: { line: 240 },
              run: new TextRun({
                font: 'Arial',
                size: 10,
                color: '999999',
              }),
            }),
          ],
        }),
      },
      children: [
        // TITLE PAGE
        new Paragraph({
          text: '',
          spacing: { line: 240 },
        }),
        new Paragraph({
          text: '',
          spacing: { line: 240 },
        }),
        new Paragraph({
          text: '',
          spacing: { line: 240 },
        }),
        new Paragraph({
          text: 'Market Research:',
          alignment: AlignmentType.CENTER,
          spacing: { line: 240, after: 0 },
          children: [
            new TextRun({
              font: 'Arial',
              size: 48,
              bold: true,
              color: '0F0F0F',
              text: 'Market Research:',
            }),
          ],
        }),
        new Paragraph({
          text: 'Reddit Community Product Intelligence',
          alignment: AlignmentType.CENTER,
          spacing: { line: 240, after: 400 },
          children: [
            new TextRun({
              font: 'Arial',
              size: 48,
              bold: true,
              color: '0F0F0F',
              text: 'Reddit Community Product Intelligence',
            }),
          ],
        }),
        new Paragraph({
          text: 'r/BuyItForLife, r/ZeroWaste & r/Sustainability',
          alignment: AlignmentType.CENTER,
          spacing: { line: 240, after: 100 },
          children: [
            new TextRun({
              font: 'Arial',
              size: 16,
              color: 'A85121',
              text: 'r/BuyItForLife, r/ZeroWaste & r/Sustainability',
            }),
          ],
        }),
        new Paragraph({
          text: 'March 2026',
          alignment: AlignmentType.CENTER,
          spacing: { line: 240, after: 600 },
          children: [
            new TextRun({
              font: 'Arial',
              size: 14,
              color: '666666',
              text: 'March 2026',
            }),
          ],
        }),
        new Paragraph({
          text: 'Prepared for Sustain',
          alignment: AlignmentType.CENTER,
          spacing: { line: 240 },
          children: [
            new TextRun({
              font: 'Arial',
              size: 14,
              italic: true,
              color: '666666',
              text: 'Prepared for Sustain',
            }),
          ],
        }),

        // PAGE BREAK
        new PageBreak(),

        // EXECUTIVE SUMMARY
        new Paragraph({
          text: 'Executive Summary',
          heading: HeadingLevel.HEADING_1,
          spacing: { line: 240, before: 0, after: 200 },
          children: [
            new TextRun({
              font: 'Arial',
              size: 32,
              bold: true,
              color: '0F0F0F',
              text: 'Executive Summary',
            }),
          ],
        }),
        new Paragraph({
          text: 'Reddit\'s r/BuyItForLife community (2.5M+ members) is one of the most trusted product recommendation sources online. Members post products they\'ve used for decades—not based on marketing claims, but on genuine durability and repairability.',
          spacing: { line: 240, after: 200 },
          children: [
            new TextRun({
              font: 'Arial',
              size: 12,
              color: '1A1A1A',
              text: 'Reddit\'s r/BuyItForLife community (2.5M+ members) is one of the most trusted product recommendation sources online. Members post products they\'ve used for decades—not based on marketing claims, but on genuine durability and repairability.',
            }),
          ],
        }),
        new Paragraph({
          text: 'Cross-referencing BIFL picks with r/ZeroWaste and r/Sustainability communities reveals a striking pattern: the products people keep for decades are overwhelmingly made from stainless steel, cast iron, glass, and organic fibers. They are naturally zero-plastic.',
          spacing: { line: 240, after: 200 },
          children: [
            new TextRun({
              font: 'Arial',
              size: 12,
              color: '1A1A1A',
              text: 'Cross-referencing BIFL picks with r/ZeroWaste and r/Sustainability communities reveals a striking pattern: the products people keep for decades are overwhelmingly made from stainless steel, cast iron, glass, and organic fibers. They are naturally zero-plastic.',
            }),
          ],
        }),
        new Paragraph({
          text: 'The BIFL community validates our 5-category lifestyle model (Drink, Eat, Clean, Live, Move). These are exactly the categories where BIFL discussions concentrate, and where zero-plastic alternatives dominate the conversation.',
          spacing: { line: 240, after: 200 },
          children: [
            new TextRun({
              font: 'Arial',
              size: 12,
              color: '1A1A1A',
              text: 'The BIFL community validates our 5-category lifestyle model (Drink, Eat, Clean, Live, Move). These are exactly the categories where BIFL discussions concentrate, and where zero-plastic alternatives dominate the conversation.',
            }),
          ],
        }),
        new Paragraph({
          text: 'Key Insight: Reddit users prioritize durability and repairability over eco-branding. Products earn trust by lasting, not by marketing sustainability. This alignment creates a unique opportunity—our site can recommend products that are both proven BIFL staples AND naturally zero-plastic.',
          spacing: { line: 240, after: 200 },
          children: [
            new TextRun({
              font: 'Arial',
              size: 12,
              bold: true,
              color: 'A85121',
              text: 'Key Insight: Reddit users prioritize durability and repairability over eco-branding. Products earn trust by lasting, not by marketing sustainability. This alignment creates a unique opportunity—our site can recommend products that are both proven BIFL staples AND naturally zero-plastic.',
            }),
          ],
        }),

        // PAGE BREAK
        new PageBreak(),

        // DRINK SECTION
        new Paragraph({
          text: '01 — DRINK',
          heading: HeadingLevel.HEADING_1,
          spacing: { line: 240, before: 0, after: 100 },
          children: [
            new TextRun({
              font: 'Arial',
              size: 28,
              bold: true,
              color: 'A85121',
              text: '01 — DRINK',
            }),
          ],
        }),
        new Paragraph({
          text: 'Community Sentiment',
          heading: HeadingLevel.HEADING_2,
          spacing: { line: 240, before: 0, after: 100 },
          children: [
            new TextRun({
              font: 'Arial',
              size: 14,
              bold: true,
              color: '0F0F0F',
              text: 'Community Sentiment',
            }),
          ],
        }),
        new Paragraph({
          text: 'Stainless steel dominates BIFL beverage discussions. The community despises plastic lids and liners. Glass is respected for purity but fragility limits daily use. Vintage Stanley thermoses are legendary—users regularly post 40+ year old bottles in perfect condition.',
          spacing: { line: 240, after: 200 },
          children: [
            new TextRun({
              font: 'Arial',
              size: 12,
              color: '1A1A1A',
              text: 'Stainless steel dominates BIFL beverage discussions. The community despises plastic lids and liners. Glass is respected for purity but fragility limits daily use. Vintage Stanley thermoses are legendary—users regularly post 40+ year old bottles in perfect condition.',
            }),
          ],
        }),
        createProductTable([
          ['Stanley Classic Vacuum Bottle', '~$35', '"One of the most upvoted BIFL posts ever. 40+ year old Stanleys still in daily use."', 'All steel + polypropylene lid', '4/5'],
          ['Klean Kanteen Classic', '~$25', '"B Corp, recycled steel, community favorite for years"', '18/8 stainless, bamboo cap option', '5/5'],
          ['Hydro Flask Standard Mouth', '~$35', '"Durable but corporate ownership change worries some users"', 'Steel body, plastic lid', '3/5'],
          ['Chemex Classic Pour-Over', '~$47', '"The only coffee maker BIFL consistently recommends. Glass + wood, zero plastic"', 'All glass/wood', '5/5'],
          ['YETI Rambler', '~$35', '"Indestructible. Users report 8+ years of daily abuse"', 'Steel body, MagSlider plastic lid', '4/5'],
        ]),

        // PAGE BREAK
        new PageBreak(),

        // EAT SECTION
        new Paragraph({
          text: '02 — EAT',
          heading: HeadingLevel.HEADING_1,
          spacing: { line: 240, before: 0, after: 100 },
          children: [
            new TextRun({
              font: 'Arial',
              size: 28,
              bold: true,
              color: 'A85121',
              text: '02 — EAT',
            }),
          ],
        }),
        new Paragraph({
          text: 'Community Sentiment',
          heading: HeadingLevel.HEADING_2,
          spacing: { line: 240, before: 0, after: 100 },
          children: [
            new TextRun({
              font: 'Arial',
              size: 14,
              bold: true,
              color: '0F0F0F',
              text: 'Community Sentiment',
            }),
          ],
        }),
        new Paragraph({
          text: 'All-Clad and Lodge are the two most mentioned brands across all of BIFL. Cast iron and tri-ply stainless are considered the only cookware worth buying. The community has near-universal contempt for non-stick coatings and any plastic in cookware.',
          spacing: { line: 240, after: 200 },
          children: [
            new TextRun({
              font: 'Arial',
              size: 12,
              color: '1A1A1A',
              text: 'All-Clad and Lodge are the two most mentioned brands across all of BIFL. Cast iron and tri-ply stainless are considered the only cookware worth buying. The community has near-universal contempt for non-stick coatings and any plastic in cookware.',
            }),
          ],
        }),
        createProductTable([
          ['All-Clad D3 Stainless Steel', '~$700 (10-pc)', '"The single most recommended cookware brand on BIFL. 20+ year reports common."', 'No coatings, no PFAS, no plastic', '5/5'],
          ['Lodge Cast Iron Skillet', '~$20–45', '"30+ years of daily use reported regularly. Pre-seasoned with soy oil, no synthetic chemicals."', '100% cast iron', '5/5'],
          ['Le Creuset Dutch Oven', '~$350–380', '"Generational cookware. Users post grandparents\' pieces still in use."', 'Enameled cast iron', '5/5'],
          ['Victorinox Fibrox Pro Chef Knife', '~$35', '"The most recommended knife on all of Reddit. Professional quality."', 'Steel blade, Fibrox handle (thermoplastic)', '3/5'],
          ['Boos Block Cutting Board', '~$100–200', '"Used at Culinary Institute of America. Maple end-grain lasts forever."', 'Solid maple wood', '5/5'],
          ['Ahimsa Kids Stainless Steel Set', '~$30', '"Loved in zero-waste parenting communities. Recycled medical-grade steel."', '100% stainless', '5/5'],
          ['Bee\'s Wrap', '~$18', '"The go-to plastic wrap replacement across r/ZeroWaste. Compostable after 1 year."', 'Organic cotton, beeswax, tree resin', '5/5'],
        ]),

        // PAGE BREAK
        new PageBreak(),

        // CLEAN SECTION
        new Paragraph({
          text: '03 — CLEAN',
          heading: HeadingLevel.HEADING_1,
          spacing: { line: 240, before: 0, after: 100 },
          children: [
            new TextRun({
              font: 'Arial',
              size: 28,
              bold: true,
              color: 'A85121',
              text: '03 — CLEAN',
            }),
          ],
        }),
        new Paragraph({
          text: 'Community Sentiment',
          heading: HeadingLevel.HEADING_2,
          spacing: { line: 240, before: 0, after: 100 },
          children: [
            new TextRun({
              font: 'Arial',
              size: 14,
              bold: true,
              color: '0F0F0F',
              text: 'Community Sentiment',
            }),
          ],
        }),
        new Paragraph({
          text: 'Solid bars are the consensus winner for zero-waste personal care. The community is skeptical of "natural" deodorant claims but Ethique and HiBAR have earned genuine, earned trust through performance. Safety razors are hugely popular as a BIFL personal care item—users report decades of use from a single razor.',
          spacing: { line: 240, after: 200 },
          children: [
            new TextRun({
              font: 'Arial',
              size: 12,
              color: '1A1A1A',
              text: 'Solid bars are the consensus winner for zero-waste personal care. The community is skeptical of "natural" deodorant claims but Ethique and HiBAR have earned genuine, earned trust through performance. Safety razors are hugely popular as a BIFL personal care item—users report decades of use from a single razor.',
            }),
          ],
        }),
        createProductTable([
          ['Ethique Deodorant Bar', '~$13', '"Actually works. Compostable wrapper. One bar lasts 3+ months."', 'Zero plastic packaging', '5/5'],
          ['HiBAR Shampoo + Conditioner Bars', '~$15', '"Salon quality without the bottle. Each bar replaces 2 plastic bottles."', 'Plastic-free, sulfate-free', '5/5'],
          ['Merkur 34C Safety Razor', '~$35', '"The most recommended razor on BIFL. Chrome-plated brass, lasts decades."', 'All metal, recyclable blades', '5/5'],
          ['Bite Toothpaste Bits', '~$12', '"Refillable glass jar. No tube waste."', 'Glass jar, compostable refill pouches', '5/5'],
          ['Dr. Bronner\'s Castile Soap', '~$16 (32oz)', '"Reddit\'s universal cleaner. Dilute 1:10 for dishes, body, floors."', 'Recyclable bottle, concentrated', '4/5'],
          ['LastSwab Reusable Swab', '~$12', '"Replaces 1,000 single-use swabs. Polarizing but converts love it."', 'Silicone tips, nylon rod', '4/5'],
        ]),

        // PAGE BREAK
        new PageBreak(),

        // LIVE SECTION
        new Paragraph({
          text: '04 — LIVE',
          heading: HeadingLevel.HEADING_1,
          spacing: { line: 240, before: 0, after: 100 },
          children: [
            new TextRun({
              font: 'Arial',
              size: 28,
              bold: true,
              color: 'A85121',
              text: '04 — LIVE',
            }),
          ],
        }),
        new Paragraph({
          text: 'Community Sentiment',
          heading: HeadingLevel.HEADING_2,
          spacing: { line: 240, before: 0, after: 100 },
          children: [
            new TextRun({
              font: 'Arial',
              size: 14,
              bold: true,
              color: '0F0F0F',
              text: 'Community Sentiment',
            }),
          ],
        }),
        new Paragraph({
          text: 'White towels and organic cotton sheets are consensus BIFL picks. Blueland is the cleaning brand r/ZeroWaste trusts most. Swedish dishcloths are a sleeper hit—cheap, effective, and entirely compostable. The textile experts in r/BuyItForLife have elevated sheet recommendations to a science.',
          spacing: { line: 240, after: 200 },
          children: [
            new TextRun({
              font: 'Arial',
              size: 12,
              color: '1A1A1A',
              text: 'White towels and organic cotton sheets are consensus BIFL picks. Blueland is the cleaning brand r/ZeroWaste trusts most. Swedish dishcloths are a sleeper hit—cheap, effective, and entirely compostable. The textile experts in r/BuyItForLife have elevated sheet recommendations to a science.',
            }),
          ],
        }),
        createProductTable([
          ['Sferra Percale Sheets', '~$200–400', '"Reddit\'s textile experts call these the gold standard for percale."', '100% cotton, OEKO-TEX', '4/5'],
          ['Coyuchi Organic Sheets', '~$198', '"GOTS certified. Gets softer with every wash. No synthetic fibers."', 'Organic cotton', '5/5'],
          ['Blueland Clean Essentials Kit', '~$39', '"The most trusted zero-waste cleaning brand on Reddit. Refillable glass + tablets."', 'Glass bottles, dissolvable tablets', '5/5'],
          ['Swedish Wholesale Dishcloths', '~$6', '"One cloth replaces 17 rolls of paper towels. Compostable."', 'Cellulose + cotton', '5/5'],
          ['Meliora Cleaning Products', '~$12–15', '"Fully plastic-free packaging. Reddit\'s zero-waste cleaning dark horse."', 'Paper/cardboard packaging only', '5/5'],
          ['Red Land Cotton Towels', '~$30–50', '"USA-made. BIFL textile queen JessthePest approved."', '100% cotton, made in Alabama', '4/5'],
        ]),

        // PAGE BREAK
        new PageBreak(),

        // MOVE SECTION
        new Paragraph({
          text: '05 — MOVE',
          heading: HeadingLevel.HEADING_1,
          spacing: { line: 240, before: 0, after: 100 },
          children: [
            new TextRun({
              font: 'Arial',
              size: 28,
              bold: true,
              color: 'A85121',
              text: '05 — MOVE',
            }),
          ],
        }),
        new Paragraph({
          text: 'Community Sentiment',
          heading: HeadingLevel.HEADING_2,
          spacing: { line: 240, before: 0, after: 100 },
          children: [
            new TextRun({
              font: 'Arial',
              size: 14,
              bold: true,
              color: '0F0F0F',
              text: 'Community Sentiment',
            }),
          ],
        }),
        new Paragraph({
          text: 'Osprey\'s lifetime repair guarantee makes it the runaway BIFL winner for packs and bags. Darn Tough\'s unconditional lifetime warranty is legendary. Patagonia\'s Worn Wear program is respected, though some users note increasing prices. The consensus: repair, not replace.',
          spacing: { line: 240, after: 200 },
          children: [
            new TextRun({
              font: 'Arial',
              size: 12,
              color: '1A1A1A',
              text: 'Osprey\'s lifetime repair guarantee makes it the runaway BIFL winner for packs and bags. Darn Tough\'s unconditional lifetime warranty is legendary. Patagonia\'s Worn Wear program is respected, though some users note increasing prices. The consensus: repair, not replace.',
            }),
          ],
        }),
        createProductTable([
          ['Osprey Atmos AG 65', '~$350', '"Lifetime repair guarantee is the gold standard. Recycled main fabric."', 'Recycled nylon', '5/5'],
          ['Darn Tough Micro Crew Socks', '~$20', '"Unconditional lifetime warranty. Users report 5–8 years per pair."', 'Merino wool blend', '5/5'],
          ['Patagonia Capilene Cool Merino', '~$79', '"Worn Wear repairs it. Responsibly sourced merino."', 'Merino + recycled polyester', '4/5'],
          ['Red Wing Heritage Boots', '~$300–350', '"Resoleable. 10–20 year lifespan with care. Made in USA."', 'Leather, resoleable', '4/5'],
          ['Leatherman Multi-Tool', '~$65–100', '"25-year warranty. One of the most upvoted BIFL items ever."', 'Stainless steel', '4/5'],
        ]),

        // PAGE BREAK
        new PageBreak(),

        // KEY TAKEAWAYS
        new Paragraph({
          text: 'Key Takeaways & Recommendations',
          heading: HeadingLevel.HEADING_1,
          spacing: { line: 240, before: 0, after: 200 },
          children: [
            new TextRun({
              font: 'Arial',
              size: 28,
              bold: true,
              color: '0F0F0F',
              text: 'Key Takeaways & Recommendations',
            }),
          ],
        }),
        new Paragraph({
          text: 'The BIFL community\'s top recommendations naturally align with zero-plastic living. Durable products are inherently sustainable. This is not coincidence—materials that last decades (stainless steel, cast iron, untreated wood, natural fibers) are incompatible with planned obsolescence and plastic additives.',
          spacing: { line: 240, after: 200 },
          children: [
            new TextRun({
              font: 'Arial',
              size: 12,
              color: '1A1A1A',
              text: 'The BIFL community\'s top recommendations naturally align with zero-plastic living. Durable products are inherently sustainable. This is not coincidence—materials that last decades (stainless steel, cast iron, untreated wood, natural fibers) are incompatible with planned obsolescence and plastic additives.',
            }),
          ],
        }),
        new Paragraph({
          text: 'Recommended Products for Sustain (5/5 Fit Scores):',
          spacing: { line: 240, before: 100, after: 100 },
          children: [
            new TextRun({
              font: 'Arial',
              size: 12,
              bold: true,
              color: 'A85121',
              text: 'Recommended Products for Sustain (5/5 Fit Scores):',
            }),
          ],
        }),
        new Paragraph({
          text: 'Klean Kanteen, Chemex, All-Clad, Lodge, Le Creuset, Boos Block, Ahimsa, Bee\'s Wrap, Ethique, HiBAR, Merkur Razor, Bite, Blueland, Swedish Dishcloths, Meliora, Coyuchi, Osprey, Darn Tough',
          spacing: { line: 240, after: 200 },
          children: [
            new TextRun({
              font: 'Arial',
              size: 11,
              color: '1A1A1A',
              text: 'Klean Kanteen, Chemex, All-Clad, Lodge, Le Creuset, Boos Block, Ahimsa, Bee\'s Wrap, Ethique, HiBAR, Merkur Razor, Bite, Blueland, Swedish Dishcloths, Meliora, Coyuchi, Osprey, Darn Tough',
            }),
          ],
        }),
        new Paragraph({
          text: 'Content Opportunity:',
          spacing: { line: 240, before: 100, after: 100 },
          children: [
            new TextRun({
              font: 'Arial',
              size: 12,
              bold: true,
              color: 'A85121',
              text: 'Content Opportunity:',
            }),
          ],
        }),
        new Paragraph({
          text: 'An editorial feature titled "Reddit\'s r/BuyItForLife Favorites" could be compelling. These are community-validated, field-tested recommendations—not brand-promoted marketing. Readers recognize the authenticity. Consider a linked blog post or category page highlighting these cross-community picks.',
          spacing: { line: 240, after: 200 },
          children: [
            new TextRun({
              font: 'Arial',
              size: 11,
              color: '1A1A1A',
              text: 'An editorial feature titled "Reddit\'s r/BuyItForLife Favorites" could be compelling. These are community-validated, field-tested recommendations—not brand-promoted marketing. Readers recognize the authenticity. Consider a linked blog post or category page highlighting these cross-community picks.',
            }),
          ],
        }),
        new Paragraph({
          text: 'Products with 3/5 Scores:',
          spacing: { line: 240, before: 100, after: 100 },
          children: [
            new TextRun({
              font: 'Arial',
              size: 12,
              bold: true,
              color: 'A85121',
              text: 'Products with 3/5 Scores:',
            }),
          ],
        }),
        new Paragraph({
          text: 'Hydro Flask, Victorinox Knife could be featured with honest callouts about their trade-offs (plastic lids, thermoplastic handles). This transparency aligns with Sustain\'s philosophy: acknowledge the real world, celebrate progress over purity.',
          spacing: { line: 240, after: 200 },
          children: [
            new TextRun({
              font: 'Arial',
              size: 11,
              color: '1A1A1A',
              text: 'Hydro Flask, Victorinox Knife could be featured with honest callouts about their trade-offs (plastic lids, thermoplastic handles). This transparency aligns with Sustain\'s philosophy: acknowledge the real world, celebrate progress over purity.',
            }),
          ],
        }),
      ],
    },
  ],
});

function createProductTable(products) {
  const rows = [
    new TableRow({
      children: [
        new TableCell({
          children: [new Paragraph({
            text: 'Product',
            children: [new TextRun({ font: 'Arial', size: 11, bold: true, color: 'FFFFFF', text: 'Product' })],
          })],
          shading: { fill: '1A1A1A' },
          verticalAlign: VerticalAlign.CENTER,
          margins: { top: 100, bottom: 100, left: 100, right: 100 },
        }),
        new TableCell({
          children: [new Paragraph({
            text: 'Price',
            children: [new TextRun({ font: 'Arial', size: 11, bold: true, color: 'FFFFFF', text: 'Price' })],
          })],
          shading: { fill: '1A1A1A' },
          verticalAlign: VerticalAlign.CENTER,
          margins: { top: 100, bottom: 100, left: 100, right: 100 },
        }),
        new TableCell({
          children: [new Paragraph({
            text: 'Reddit Consensus',
            children: [new TextRun({ font: 'Arial', size: 11, bold: true, color: 'FFFFFF', text: 'Reddit Consensus' })],
          })],
          shading: { fill: '1A1A1A' },
          verticalAlign: VerticalAlign.CENTER,
          margins: { top: 100, bottom: 100, left: 100, right: 100 },
        }),
        new TableCell({
          children: [new Paragraph({
            text: 'Zero-Plastic Status',
            children: [new TextRun({ font: 'Arial', size: 11, bold: true, color: 'FFFFFF', text: 'Zero-Plastic Status' })],
          })],
          shading: { fill: '1A1A1A' },
          verticalAlign: VerticalAlign.CENTER,
          margins: { top: 100, bottom: 100, left: 100, right: 100 },
        }),
        new TableCell({
          children: [new Paragraph({
            text: 'Website Fit',
            children: [new TextRun({ font: 'Arial', size: 11, bold: true, color: 'FFFFFF', text: 'Website Fit' })],
          })],
          shading: { fill: '1A1A1A' },
          verticalAlign: VerticalAlign.CENTER,
          margins: { top: 100, bottom: 100, left: 100, right: 100 },
        }),
      ],
    }),
  ];

  products.forEach((product) => {
    rows.push(
      new TableRow({
        children: [
          new TableCell({
            children: [new Paragraph({
              text: product[0],
              children: [new TextRun({ font: 'Arial', size: 11, color: '1A1A1A', text: product[0] })],
            })],
            margins: { top: 80, bottom: 80, left: 80, right: 80 },
            borders: {
              bottom: { color: 'CCCCCC', space: 1, style: BorderStyle.SINGLE, size: 6 },
              right: { color: 'CCCCCC', space: 1, style: BorderStyle.SINGLE, size: 6 },
            },
          }),
          new TableCell({
            children: [new Paragraph({
              text: product[1],
              children: [new TextRun({ font: 'Arial', size: 10, color: '1A1A1A', text: product[1] })],
            })],
            margins: { top: 80, bottom: 80, left: 80, right: 80 },
            borders: {
              bottom: { color: 'CCCCCC', space: 1, style: BorderStyle.SINGLE, size: 6 },
              right: { color: 'CCCCCC', space: 1, style: BorderStyle.SINGLE, size: 6 },
            },
          }),
          new TableCell({
            children: [new Paragraph({
              text: product[2],
              children: [new TextRun({ font: 'Arial', size: 10, color: '1A1A1A', text: product[2] })],
            })],
            margins: { top: 80, bottom: 80, left: 80, right: 80 },
            borders: {
              bottom: { color: 'CCCCCC', space: 1, style: BorderStyle.SINGLE, size: 6 },
              right: { color: 'CCCCCC', space: 1, style: BorderStyle.SINGLE, size: 6 },
            },
          }),
          new TableCell({
            children: [new Paragraph({
              text: product[3],
              children: [new TextRun({ font: 'Arial', size: 10, color: '1A1A1A', text: product[3] })],
            })],
            margins: { top: 80, bottom: 80, left: 80, right: 80 },
            borders: {
              bottom: { color: 'CCCCCC', space: 1, style: BorderStyle.SINGLE, size: 6 },
              right: { color: 'CCCCCC', space: 1, style: BorderStyle.SINGLE, size: 6 },
            },
          }),
          new TableCell({
            children: [new Paragraph({
              text: product[4],
              alignment: AlignmentType.CENTER,
              children: [new TextRun({ font: 'Arial', size: 10, bold: true, color: 'A85121', text: product[4] })],
            })],
            margins: { top: 80, bottom: 80, left: 80, right: 80 },
            borders: {
              bottom: { color: 'CCCCCC', space: 1, style: BorderStyle.SINGLE, size: 6 },
            },
          }),
        ],
      })
    );
  });

  return new Table({
    rows: rows,
    width: { size: 100, type: 'auto' },
    borders: {
      top: { color: 'CCCCCC', space: 1, style: BorderStyle.SINGLE, size: 6 },
      left: { color: 'CCCCCC', space: 1, style: BorderStyle.SINGLE, size: 6 },
      bottom: { color: 'CCCCCC', space: 1, style: BorderStyle.SINGLE, size: 6 },
      insideHorizontal: { color: 'CCCCCC', space: 1, style: BorderStyle.SINGLE, size: 6 },
      insideVertical: { color: 'CCCCCC', space: 1, style: BorderStyle.SINGLE, size: 6 },
    },
  });
}

Packer.toBuffer(document).then((buffer) => {
  fs.writeFileSync('Market-Research-Reddit-BIFL.docx', buffer);
  console.log('Document created successfully: Market-Research-Reddit-BIFL.docx');
});
