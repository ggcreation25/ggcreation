/**
 * GG CREATOR - PROJECTS LOGIC & INTERACTIVE FEATURES
 * Handles Projects Rendering, Category Filters, "If Bill" Invoices, Details Modals, and Add Project
 */

// Default Seed Projects (The 6 authentic projects requested by user)
const DEFAULT_PROJECTS = [
  {
    id: 'proj-mahindra-415di',
    projectNumber: 1,
    name: '1. Mahindra 415DI XP PLUS',
    shortName: 'Mahindra 415DI XP PLUS',
    category: 'tractor-diy',
    categoryLabel: 'Mini Tractors',
    image: 'assets/images/project_mahindra_415di.jpg',
    spentTime: '22.0 Hours',
    totalPrice: 3450,
    priceFormatted: '₹ 3,450',
    description: 'Scratch-built miniature Mahindra 415DI XP PLUS red tractor featuring realistic die-cut metal hood, 12V high-torque motor drive, mechanical rack steering, working front grille, authentic headlights, and deep-lug rear tires.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    youtubeWatchUrl: 'https://youtube.com/@ggcreative-x9o?si=xSec0GQZRetnup0H',
    requiredTools: [
      'iBELL 650W Impact Drill Kit (TD13-100)',
      'Sauran AG-801 Angle Grinder (100mm)',
      'INGCO 60W Simple Soldering Iron',
      'NITYA HSS Titanium Coated Drill Bit Set'
    ],
    materials: [
      'Cold-Rolled Sheet Metal (1.5mm) & Square Tubular Chassis Frame',
      '12V 775 High-Torque DC Geared Motor with Brass Pinion Hub',
      'Deep-Tread Heavy Duty Rubber Tractor Wheels (4 pcs)',
      'Front Axle Steering Linkage & Metal Tie Rods',
      'Automotive Red Enamel Paint, Headlight LEDs & Vertical Exhaust'
    ],
    steps: [
      'Cut and weld 20x20mm steel box channel chassis frame with rear motor mount.',
      'Fabricate front beam axle with dual kingpins and manual steering tie rod linkage using iBELL drill.',
      'Mount 12V high-torque motor and wire forward/reverse dual-lead power switch using INGCO soldering iron.',
      'Cut hood and side louvers from sheet metal with Sauran angle grinder and shape Mahindra curves.',
      'Degrease, apply anti-rust primer, and spray 3 coats of glossy Mahindra tractor red enamel.'
    ],
    bill: [
      { item: 'Cold-Rolled Sheet Metal & Frame Box Steel', qty: '1 set', unit: 950, total: 950 },
      { item: '12V 775 High-Torque DC Geared Motor', qty: '1 unit', unit: 1100, total: 1100 },
      { item: 'Heavy-Duty Lug Rubber Tractor Wheels', qty: '4 pcs', unit: 162.5, total: 650 },
      { item: 'Steering Tie Rods, Kingpins & Axle Bearings', qty: '1 kit', unit: 380, total: 380 },
      { item: 'Mahindra Red Enamel Paint, LEDs & Exhaust', qty: '1 lot', unit: 370, total: 370 }
    ]
  },
  {
    id: 'proj-jd-5050d-2wd',
    projectNumber: 2,
    name: '2. John Deere 5050 D 2wd',
    shortName: 'John Deere 5050 D 2wd',
    category: 'tractor-diy',
    categoryLabel: 'Mini Tractors',
    image: 'assets/images/project_johndeere_5050d.jpg',
    spentTime: '16.5 Hours',
    totalPrice: 2950,
    priceFormatted: '₹ 2,950',
    description: 'Handcrafted John Deere 5050 D 2WD green & yellow scale model tractor with dual exhaust stack, front weight bumper, custom rear reduction gearbox with brass pinions, and high-visibility steering controls.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    youtubeWatchUrl: 'https://youtube.com/@ggcreative-x9o?si=xSec0GQZRetnup0H',
    requiredTools: [
      'Sauran AG-801 Angle Grinder (100mm)',
      'Qualigen 2000 W Heavy Duty Heat Gun',
      'TechTrove 20W Mini Glue Gun with 15 Sticks',
      'SEE INSIDE Digital Vernier Caliper LCD'
    ],
    materials: [
      'Steel Channel Chassis & Pre-drilled Motor Mounts',
      'John Deere Signature Green & Yellow Automotive Spray Paint',
      'Precision CNC Brass Gearbox Reduction Gears (Measured with SEE INSIDE Caliper)',
      'Front Pivot Steering Axle with Adjustable Tie Rods',
      'High-Viscosity Synthetic SV Gear Grease & Sealant'
    ],
    steps: [
      'Design and precision-measure reduction gearbox shafts using SEE INSIDE digital caliper.',
      'Cut chassis members and axle brackets using Sauran 100mm angle grinder.',
      'Heat-shrink all electrical connections and wire harness using Qualigen 2000W heat gun.',
      'Mount dashboard gauges and battery retaining clips using TechTrove hot melt glue gun.',
      'Spray authentic John Deere green body hood and yellow wheel rim enamel coats.'
    ],
    bill: [
      { item: 'John Deere Green & Yellow Enamel Paint', qty: '2 cans', unit: 320, total: 640 },
      { item: 'Precision CNC Machined Brass Pinions & Shafts', qty: '1 set', unit: 850, total: 850 },
      { item: '12V High-Torque Drive Motor & Wiring', qty: '1 unit', unit: 800, total: 800 },
      { item: 'Tractor Lug Wheels & Hub Mounts', qty: '4 pcs', unit: 110, total: 440 },
      { item: 'Steering Linkages, Hardware & Bearings', qty: '1 kit', unit: 220, total: 220 }
    ]
  },
  {
    id: 'proj-jd-5310-4wd',
    projectNumber: 3,
    name: '3. John Deere 5310 4wd',
    shortName: 'John Deere 5310 4wd',
    category: 'tractor-diy',
    categoryLabel: 'Mini Tractors',
    image: 'assets/images/project_johndeere_5310_4wd.jpg',
    spentTime: '28.0 Hours',
    totalPrice: 4800,
    priceFormatted: '₹ 4,800',
    description: 'Heavy-duty 4WD all-wheel drive John Deere 5310 miniature tractor with dual differential driven axles, transfer case gearbox, extra-wide deep mud traction tires, roll cage, and extreme pulling torque.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    youtubeWatchUrl: 'https://youtube.com/@ggcreative-x9o?si=xSec0GQZRetnup0H',
    requiredTools: [
      'IZOM 20V Battery Operated Cordless Drill',
      'OMXE OPAL-801 950w Heavy Duty Angle Grinder',
      'SEE INSIDE Vernier Caliper LCD Display',
      'NITYA HSS Titanium Coated Drill Bit Set'
    ],
    materials: [
      'Dual Front and Rear Axle Steel Differential Gear Assemblies',
      'Center Transfer Case Drive Shaft with Universal Couplers',
      'High-Output 12V 795 DC High-Torque Motor',
      'Deep-Tread 4x4 Mud Gripper Heavy Tractor Tires (4 pcs)',
      'Reinforced 2.5mm Heavy Steel Channel Frame & Roll Cage'
    ],
    steps: [
      'Cut 2.5mm structural steel channel rails using OMXE 950W heavy duty angle grinder.',
      'Bore precision alignment holes for 4WD differential mounting bolts using NITYA titanium drill bits & IZOM cordless drill.',
      'Check axle bevel gear backlash tolerances using SEE INSIDE digital caliper.',
      'Fabricate center 4WD transfer case coupling with universal joint linkages.',
      'Mount roll-over protection structure (ROPS), front counterweights, and test 4x4 traction climb.'
    ],
    bill: [
      { item: 'Dual Steel Differential Axle Assemblies (Front & Rear)', qty: '2 units', unit: 950, total: 1900 },
      { item: '12V 795 High-Output DC Drive Motor', qty: '1 unit', unit: 1200, total: 1200 },
      { item: '4x4 Deep Mud Gripper Rubber Tires', qty: '4 pcs', unit: 175, total: 700 },
      { item: '2.5mm Heavy Steel Channel & Roll Bar', qty: '1 lot', unit: 580, total: 580 },
      { item: 'Universal Joints, Bearings & Fasteners', qty: '1 kit', unit: 420, total: 420 }
    ]
  },
  {
    id: 'proj-truck-1',
    projectNumber: 4,
    name: '4. Truck 1',
    shortName: 'Truck 1 (Cargo Carrier)',
    category: 'trucks',
    categoryLabel: 'Handmade Trucks',
    image: 'assets/images/project_truck_1.jpg',
    spentTime: '19.0 Hours',
    totalPrice: 3100,
    priceFormatted: '₹ 3,100',
    description: 'Handmade heavy cargo carrier truck featuring multi-axle suspension, open wood-slat cargo bed, detailed cabin with acrylic windshield, working rear tailgate latch, and twin rear drive axles.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    youtubeWatchUrl: 'https://youtube.com/@ggcreative-x9o?si=xSec0GQZRetnup0H',
    requiredTools: [
      'iBELL Tool Kit with Impact Drill TD13-100',
      'IZOM 20V Battery Operated Cordless Drill',
      'INGCO SI0268 60 W Simple Soldering Iron',
      'TechTrove 20W Mini Glue Gun with 15 Sticks',
      'Kiesh Holesaw Cutter Set 11pcs'
    ],
    materials: [
      'Hardwood Slats & Teak Cargo Bed Flooring',
      'Multi-Axle Steel Chassis with Tandem Leaf Spring Mockup',
      '12V Geared Drive Motor with DPDT Forward/Reverse Rocker Switch',
      'Heavy-Duty Multi-spoke Rubber Wheels (6 pcs)',
      'Cabin LEDs, Front Grille Mesh & Brass Tailgate Hinges'
    ],
    steps: [
      'Construct sturdy ladder-frame chassis with mounting brackets for dual rear axles.',
      'Cut circular wheel arch clearances and cab vents using Kiesh hole saw kit.',
      'Assemble hardwood timber cargo bay bed and fix brass tailgate hinge latches.',
      'Wire dual headlights, roof marker lights, and motor circuit with INGCO 60W soldering iron.',
      'Bond cabin interior dashboard and seats using TechTrove 20W hot melt glue gun.'
    ],
    bill: [
      { item: 'Hardwood Timber Slats & Plywood Cab Frame', qty: '1 set', unit: 750, total: 750 },
      { item: '12V Geared DC Drive Motor & Drive Axle', qty: '1 unit', unit: 950, total: 950 },
      { item: 'Multi-Spoke Heavy Rubber Truck Wheels', qty: '6 pcs', unit: 120, total: 720 },
      { item: 'Tandem Leaf Spring & Axle Rod Hardware', qty: '1 kit', unit: 380, total: 380 },
      { item: 'Tailgate Latches, LEDs & Wiring Loom', qty: '1 lot', unit: 300, total: 300 }
    ]
  },
  {
    id: 'proj-truck-2',
    projectNumber: 5,
    name: '5. Truck 2',
    shortName: 'Truck 2 (Heavy Tipper)',
    category: 'trucks',
    categoryLabel: 'Handmade Trucks',
    image: 'assets/images/project_truck_2.jpg',
    spentTime: '24.0 Hours',
    totalPrice: 3650,
    priceFormatted: '₹ 3,650',
    description: 'Handmade heavy tipper dump truck equipped with motorized screw-jack dump bed tipping mechanism, reinforced metal bed lining, wide-stance offroad tires, and rugged steel bumper.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    youtubeWatchUrl: 'https://youtube.com/@ggcreative-x9o?si=xSec0GQZRetnup0H',
    requiredTools: [
      'OMXE OPAL-801 950w Heavy Duty Angle Grinder',
      'Qualigen 2000 W Heavy Duty Heat Gun',
      'SEE INSIDE Digital Vernier Caliper LCD',
      'Kiesh Holesaw Cutter Set 11pcs',
      'Husaini Mart Silicone Mould Skytail 2 Pack'
    ],
    materials: [
      'Heavy-Gauge Sheet Metal Tipper Bed with Rear Pivot Hinge',
      'Motorized Threaded Rod Lead-Screw Tipping Lift Mechanism',
      'High-Torque 12V 555 DC Geared Motor with Steel Gears',
      'Extra-Wide Heavy Tread Truck Tires (6 pcs)',
      'Cast Resin Counterweights (Molded with Husaini Mart Moulds) & Yellow Enamel'
    ],
    steps: [
      'Fabricate high-strength tipper bed from sheet metal cut with OMXE 950W angle grinder.',
      'Cast custom epoxy chassis weights and ballast using Husaini Mart silicone moulds.',
      'Cut precision fuel tank cylinder ports and chassis holes with Kiesh hole saw kit.',
      'Measure lead-screw pitch and actuator travel clearance using SEE INSIDE digital caliper.',
      'Heat-shrink heavy wiring and cure protective clear coat with Qualigen 2000W heat gun.'
    ],
    bill: [
      { item: 'Heavy-Gauge Sheet Metal Tipper Bed & Pivot Pins', qty: '1 unit', unit: 980, total: 980 },
      { item: 'Motorized Lead-Screw Tipping Mechanism & Motor', qty: '1 unit', unit: 1150, total: 1150 },
      { item: 'Wide-Stance Heavy Tread Truck Wheels', qty: '6 pcs', unit: 130, total: 780 },
      { item: 'Chassis Box Steel & Heavy Front Bumper', qty: '1 lot', unit: 450, total: 450 },
      { item: 'Casting Resin, Fasteners & Industrial Enamel', qty: '1 lot', unit: 290, total: 290 }
    ]
  },
  {
    id: 'proj-water-pump',
    projectNumber: 6,
    name: '6. Water Pump',
    shortName: 'Water Pump (DIY 12V)',
    category: 'workshop-inventions',
    categoryLabel: 'Workshop Inventions',
    image: 'assets/images/project_water_pump.jpg',
    spentTime: '7.5 Hours',
    totalPrice: 1450,
    priceFormatted: '₹ 1,450',
    description: 'High-flow handmade 12V 775 motor centrifugal water pump with transparent acrylic impeller casing, custom resin curved vane impeller, 1/2-inch PVC inlet/outlet valves, and high-pressure water stream output.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    youtubeWatchUrl: 'https://youtube.com/@ggcreative-x9o?si=xSec0GQZRetnup0H',
    requiredTools: [
      'INGCO SI0268 60 W Simple Soldering Iron',
      'NITYA HSS Titanium Coated Drill Bit Set',
      'Kiesh Holesaw Cutter Set 11pcs',
      'Husaini Mart Silicone Mould Skytail 2 Pack'
    ],
    materials: [
      'High-Speed 12V 775 Ball Bearing DC Motor (12,000 RPM)',
      'Clear Acrylic Sheet (8mm) for Front and Rear Impeller Plates',
      'Custom Epoxy Resin Impeller with Curved Vanes (Cooled in Silicone Mould)',
      '1/2-inch PVC Pipe Fittings, Elbows, and Regulating Ball Valve',
      'Polished Teak Mounting Base, Toggle Switch & Silicone Sealant'
    ],
    steps: [
      'Cut round circular acrylic casing faceplates using Kiesh hole saw kit.',
      'Bore water inlet and shaft pass-through ports using NITYA titanium drill bits.',
      'Cast durable balanced curved impeller vanes using resin and Husaini Mart silicone moulds.',
      'Solder 12V DC motor terminals, battery clip, and power toggle switch using INGCO soldering iron.',
      'Seal chamber with food-safe silicone gasket and test pump high-pressure water discharge flow.'
    ],
    bill: [
      { item: '12V 775 High-Speed Ball Bearing DC Motor', qty: '1 unit', unit: 650, total: 650 },
      { item: 'Clear Acrylic Plates & Precision Shaft Coupler', qty: '1 set', unit: 320, total: 320 },
      { item: 'PVC Pipe Fittings, Ball Valve & Clear Hoses', qty: '1 set', unit: 220, total: 220 },
      { item: 'Casting Resin & Gasket Silicone Sealant', qty: '1 lot', unit: 160, total: 160 },
      { item: 'Teak Wooden Mount Base & Toggle Switch', qty: '1 set', unit: 100, total: 100 }
    ]
  }
];

// Load projects from localStorage or use defaults
function getStoredProjects() {
  const stored = localStorage.getItem('gg_projects_list_v3');
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.some(p => p.id === 'proj-mahindra-415di')) {
        return parsed;
      }
    } catch (e) {
      console.error('Failed to parse stored projects', e);
    }
  }
  localStorage.setItem('gg_projects_list_v3', JSON.stringify(DEFAULT_PROJECTS));
  return DEFAULT_PROJECTS;
}

function saveProjects(projects) {
  localStorage.setItem('gg_projects_list_v3', JSON.stringify(projects));
}

function saveProjects(projects) {
  localStorage.setItem('gg_projects_list', JSON.stringify(projects));
}

// Global active projects array
let currentProjects = getStoredProjects();
let activeCategory = 'all';
let searchKeyword = '';

document.addEventListener('DOMContentLoaded', () => {
  initProjectsPage();
  initBillModal();
  initDetailsModal();
  initAddProjectModal();
});

/* ==========================================================================
   INITIALIZE PROJECTS PAGE
   ========================================================================== */
function initProjectsPage() {
  const container = document.getElementById('projectsContainer');
  if (!container) return; // Not on projects page

  // Render initial projects
  renderProjects();

  // Category filter buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.category || 'all';
      renderProjects();
    });
  });

  // Search input
  const searchInput = document.getElementById('projectSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchKeyword = e.target.value.toLowerCase().trim();
      renderProjects();
    });
  }
}

/* ==========================================================================
   RENDER PROJECT CARDS (Matching Step 4 in Wireframe)
   ========================================================================== */
function renderProjects() {
  const container = document.getElementById('projectsContainer');
  if (!container) return;

  const countBadge = document.getElementById('projectsCountBadge');

  const filtered = currentProjects.filter(p => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = !searchKeyword || 
      p.name.toLowerCase().includes(searchKeyword) || 
      p.description.toLowerCase().includes(searchKeyword) ||
      p.categoryLabel.toLowerCase().includes(searchKeyword);
    return matchesCategory && matchesSearch;
  });

  if (countBadge) {
    countBadge.textContent = `${filtered.length} Projects`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
        <i class="fa-solid fa-folder-open" style="font-size: 3rem; color: var(--accent-red); margin-bottom: 16px;"></i>
        <h3 style="font-family: var(--font-heading); font-size: 1.4rem; margin-bottom: 8px;">No DIY Projects Found</h3>
        <p style="color: var(--text-secondary); max-width: 450px; margin: 0 auto 20px;">We couldn't find any projects matching "${searchKeyword}". Try resetting your filter or search query.</p>
        <button class="btn btn-secondary btn-sm" onclick="resetFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(proj => {
    return `
      <article class="project-card" id="card-${proj.id}">
        <div class="project-card-media">
          <img src="${proj.image}" alt="${proj.name}" loading="lazy" onerror="this.src='assets/images/hero.jpg'">
          <span class="badge badge-category card-badge-category">${proj.categoryLabel}</span>
          <span class="badge badge-spent-time card-badge-time">
            <i class="fa-regular fa-clock"></i> ${proj.spentTime}
          </span>
        </div>
        
        <div class="project-card-body">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
            <span class="badge" style="background: rgba(255, 77, 109, 0.15); color: var(--accent-red-light); font-weight: 700; font-size: 0.72rem; padding: 2px 8px; border-radius: 4px;">
              Project 0${proj.projectNumber || '1'}
            </span>
            <a href="products.html?project=${proj.projectNumber || 1}" class="badge-proj-tag" title="View Flipkart tools used in this build">
              <i class="fa-solid fa-screwdriver-wrench"></i> ${proj.requiredTools ? proj.requiredTools.length : 4} Tools &rarr;
            </a>
          </div>

          <h3 class="project-card-title">${proj.name}</h3>
          <p class="project-card-desc">${proj.description}</p>
          
          <div class="project-card-footer">
            <div class="price-box">
              <span class="price-label">Total Price</span>
              <span class="price-amount">${proj.priceFormatted || '₹ ' + proj.totalPrice}</span>
            </div>
            
            <div class="card-btn-group">
              <!-- Wireframe Step 4: "If Bill" Itemized Invoice breakdown -->
              <button class="btn-bill" onclick="openBillModal('${proj.id}')" title="View Itemized Cost & Bill">
                <i class="fa-solid fa-receipt"></i> If Bill
              </button>
              
              <!-- Project Details -->
              <button class="btn btn-secondary btn-sm" onclick="openDetailsModal('${proj.id}')" title="View Details & Instructions">
                <i class="fa-solid fa-circle-info"></i> Details
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function resetFilters() {
  activeCategory = 'all';
  searchKeyword = '';
  const searchInput = document.getElementById('projectSearchInput');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.category === 'all');
  });
  renderProjects();
}

/* ==========================================================================
   "IF BILL" INVOICE MODAL (Matching Wireframe Page 4 "If Bill")
   ========================================================================== */
function initBillModal() {
  const billModal = document.getElementById('billModalBackdrop');
  const closeBtn = document.getElementById('billModalCloseBtn');

  if (billModal && closeBtn) {
    closeBtn.addEventListener('click', () => {
      billModal.classList.remove('show');
    });

    billModal.addEventListener('click', (e) => {
      if (e.target === billModal) {
        billModal.classList.remove('show');
      }
    });
  }
}

function openBillModal(projectId) {
  const proj = currentProjects.find(p => p.id === projectId);
  if (!proj) return;

  const modal = document.getElementById('billModalBackdrop');
  const modalTitle = document.getElementById('billModalProjectTitle');
  const invoiceContainer = document.getElementById('billInvoiceContent');
  const printBtn = document.getElementById('billPrintBtn');

  if (!modal || !invoiceContainer) return;

  modalTitle.textContent = `${proj.name} - Itemized Bill`;

  const billRows = (proj.bill || []).map(item => `
    <tr>
      <td>${item.item}</td>
      <td style="color: var(--text-secondary);">${item.qty}</td>
      <td class="cost-col">₹ ${Number(item.total).toLocaleString('en-IN')}</td>
    </tr>
  `).join('');

  invoiceContainer.innerHTML = `
    <div class="bill-invoice-box">
      <div class="invoice-header-meta">
        <div>
          <strong style="color: var(--text-primary); font-size: 1.05rem;">GG CREATION PROJECT INVOICE</strong><br>
          <span>Channel: GG Creation (@GGCreative-x9o)</span>
        </div>
        <div style="text-align: right;">
          <span>Project ID: <strong style="color: var(--accent-red);">${proj.id.toUpperCase()}</strong></span><br>
          <span>Craft Time: ${proj.spentTime}</span>
        </div>
      </div>
      
      <table class="bill-table">
        <thead>
          <tr>
            <th>Material / Tooling Component</th>
            <th>Quantity</th>
            <th style="text-align: right;">Cost (INR)</th>
          </tr>
        </thead>
        <tbody>
          ${billRows}
          <tr class="bill-total-row">
            <td colspan="2">TOTAL PROJECT COST ("If Bill")</td>
            <td class="cost-col">${proj.priceFormatted || '₹ ' + proj.totalPrice}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style="font-size: 0.85rem; color: var(--text-muted); display: flex; align-items: center; justify-content: space-between; padding: 0 4px;">
      <span><i class="fa-solid fa-check-circle" style="color: #10b981;"></i> Exact bill breakdown as seen in YouTube video</span>
      <span>Estimated valuation in Indian Rupees (₹)</span>
    </div>
  `;

  if (printBtn) {
    printBtn.onclick = () => {
      window.print();
    };
  }

  modal.classList.add('show');
}

/* ==========================================================================
   PROJECT DETAILS MODAL (Step 3: Details from Wireframe)
   ========================================================================== */
function initDetailsModal() {
  const detailsModal = document.getElementById('detailsModalBackdrop');
  const closeBtn = document.getElementById('detailsModalCloseBtn');

  if (detailsModal && closeBtn) {
    closeBtn.addEventListener('click', () => {
      detailsModal.classList.remove('show');
    });

    detailsModal.addEventListener('click', (e) => {
      if (e.target === detailsModal) {
        detailsModal.classList.remove('show');
      }
    });
  }
}

function openDetailsModal(projectId) {
  const proj = currentProjects.find(p => p.id === projectId);
  if (!proj) return;

  const modal = document.getElementById('detailsModalBackdrop');
  const title = document.getElementById('detailsModalTitle');
  const body = document.getElementById('detailsModalBody');

  if (!modal || !body) return;

  title.textContent = proj.name;

  const stepsList = (proj.steps || []).map((step, idx) => `
    <li style="margin-bottom: 10px; padding-left: 6px;">
      <strong style="color: var(--accent-red);">Step ${idx + 1}:</strong> ${step}
    </li>
  `).join('');

  const materialsPills = (proj.materials || []).map(mat => `
    <span class="badge" style="background: var(--bg-secondary); border: 1px solid var(--border-color); color: var(--text-secondary); margin: 3px;">
      <i class="fa-solid fa-screwdriver-wrench" style="color: var(--accent-red); font-size: 0.75rem;"></i> ${mat}
    </span>
  `).join('');

  body.innerHTML = `
    <div style="margin-bottom: 20px; border-radius: var(--radius-md); overflow: hidden; height: 260px; border: 1px solid var(--border-color);">
      <img src="${proj.image}" alt="${proj.name}" style="width: 100%; height: 100%; object-fit: cover;">
    </div>

    <div style="display: flex; gap: 12px; margin-bottom: 20px; flex-wrap: wrap;">
      <span class="badge badge-spent-time"><i class="fa-regular fa-clock"></i> Spent Time: ${proj.spentTime}</span>
      <span class="badge badge-price"><i class="fa-solid fa-tag"></i> Total Price: ${proj.priceFormatted || '₹ ' + proj.totalPrice}</span>
      <span class="badge badge-category">${proj.categoryLabel}</span>
    </div>

    <h4 style="font-family: var(--font-heading); font-size: 1.15rem; margin-bottom: 8px;">Project Overview</h4>
    <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 20px;">${proj.description}</p>

    <h4 style="font-family: var(--font-heading); font-size: 1.15rem; margin-bottom: 10px;">Materials & Supplies Used</h4>
    <div style="display: flex; flex-wrap: wrap; margin-bottom: 24px;">
      ${materialsPills}
    </div>

    <h4 style="font-family: var(--font-heading); font-size: 1.15rem; margin-bottom: 12px;">Step-by-Step Maker Process</h4>
    <ol style="color: var(--text-primary); padding-left: 20px; margin-bottom: 24px; line-height: 1.7;">
      ${stepsList}
    </ol>

    <h4 style="font-family: var(--font-heading); font-size: 1.15rem; margin-bottom: 10px;">
      <i class="fa-solid fa-screwdriver-wrench" style="color: var(--accent-red);"></i> Workshop Tools Used (From PDF Catalog)
    </h4>
    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px;">
      ${(proj.requiredTools || []).map(tool => `
        <span class="badge" style="background: rgba(255, 77, 109, 0.08); border: 1px solid var(--accent-red-border); color: var(--accent-red-light); padding: 5px 12px; font-size: 0.8rem;">
          <i class="fa-solid fa-wrench"></i> ${tool}
        </span>
      `).join('')}
    </div>
    <div style="margin-bottom: 24px;">
      <a href="products.html?project=${proj.projectNumber || 1}" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 8px;">
        <i class="fa-solid fa-cart-shopping"></i> View All Flipkart Buy Links for Project ${proj.projectNumber || 1} &rarr;
      </a>
    </div>

    <div style="background: var(--bg-secondary); padding: 16px 20px; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between; border: 1px solid var(--border-color);">
      <div>
        <div style="font-weight: 700;">Watch Video on YouTube</div>
        <div style="font-size: 0.85rem; color: var(--text-secondary);">Full 4K tutorial with close-ups & timestamps</div>
      </div>
      <a href="https://youtube.com/@ggcreative-x9o?si=xSec0GQZRetnup0H" target="_blank" class="btn btn-primary btn-sm">
        <i class="fa-brands fa-youtube"></i> Watch on YouTube
      </a>
    </div>
  `;

  modal.classList.add('show');
}

/* ==========================================================================
   ADD PROJECT MODAL (Dynamic Creator Feature)
   ========================================================================== */
function initAddProjectModal() {
  const addModal = document.getElementById('addProjectModalBackdrop');
  const openBtn = document.getElementById('openAddProjectBtn');
  const closeBtn = document.getElementById('addProjectModalCloseBtn');
  const form = document.getElementById('addProjectForm');

  if (openBtn && addModal) {
    openBtn.addEventListener('click', () => {
      addModal.classList.add('show');
    });
  }

  if (closeBtn && addModal) {
    closeBtn.addEventListener('click', () => {
      addModal.classList.remove('show');
    });
    addModal.addEventListener('click', (e) => {
      if (e.target === addModal) addModal.classList.remove('show');
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const title = document.getElementById('newProjTitle').value.trim();
      const category = document.getElementById('newProjCategory').value;
      const spentTime = document.getElementById('newProjSpentTime').value.trim();
      const totalPrice = document.getElementById('newProjTotalPrice').value.trim();
      const description = document.getElementById('newProjDesc').value.trim();
      const materialsRaw = document.getElementById('newProjMaterials').value.trim();

      if (!title || !spentTime || !totalPrice || !description) {
        showToast('Please fill out all required fields', 'error');
        return;
      }

      const categoryLabels = {
        'dye-craft': 'Dye & Fabric Art',
        'resin-wood': 'Resin & Wood DIY',
        'custom-tech': 'Custom Gear & DIY Tech',
        'sneakers': 'Sneaker Customization'
      };

      const materialsArray = materialsRaw ? materialsRaw.split(',').map(m => m.trim()) : ['High quality DIY supplies'];

      const newProject = {
        id: 'proj-' + Date.now(),
        name: title,
        category: category,
        categoryLabel: categoryLabels[category] || 'DIY Project',
        image: 'assets/images/project-1.jpg',
        spentTime: spentTime,
        totalPrice: Number(totalPrice),
        priceFormatted: '₹ ' + Number(totalPrice).toLocaleString('en-IN'),
        description: description,
        materials: materialsArray,
        steps: [
          'Prepare workspace and verify all safety gear (gloves, ventilation).',
          'Surface preparation, measurements, and base material priming.',
          'Application of dyes and pigments with precision technique.',
          'Curing, batching, or drying for recommended duration.',
          'Final inspection, sealing, and photography for YouTube video.'
        ],
        bill: [
          { item: 'Base Material / Core Blank', qty: '1 unit', unit: Math.round(totalPrice * 0.5), total: Math.round(totalPrice * 0.5) },
          { item: 'Dyes, Pigments & Activators', qty: '1 set', unit: Math.round(totalPrice * 0.3), total: Math.round(totalPrice * 0.3) },
          { item: 'Finishing Sealants & Consumables', qty: '1 set', unit: Math.round(totalPrice * 0.2), total: Math.round(totalPrice * 0.2) }
        ]
      };

      currentProjects.unshift(newProject);
      saveProjects(currentProjects);
      renderProjects();

      form.reset();
      addModal.classList.remove('show');
      showToast(`Project "${title}" added successfully!`, 'success');
    });
  }
}
