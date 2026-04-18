const pptxgen = require('pptxgenjs');

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'OpenCode';
pptx.company = 'OpenCode';
pptx.subject = 'ComfyUI Generative AI Course Website Sections';
pptx.title = 'ComfyUI Course Website Section Deck';
pptx.lang = 'en-US';

const colors = {
  bg: '171126',
  panel: '1E1830',
  card: '241D38',
  cardAlt: '2A2340',
  cosmic: '4A4E8F',
  lavender: 'A490C2',
  silver: 'E6E6FA',
  soft: 'CFC8E8',
  line: '5B5178'
};

function addBackground(slide) {
  slide.background = { color: colors.bg };

  slide.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: 13.33, h: 7.5,
    fill: { color: colors.bg },
    line: { color: colors.bg }
  });

  slide.addShape(pptx.ShapeType.arc, {
    x: 11.3, y: -1.5, w: 4.2, h: 4.2,
    line: { color: colors.cosmic, transparency: 82, pt: 1.1 },
    fill: { color: colors.cosmic, transparency: 100 },
    adjustPoint: 0.38
  });

  slide.addShape(pptx.ShapeType.arc, {
    x: -1.3, y: 5.6, w: 3.9, h: 3.9,
    line: { color: colors.lavender, transparency: 90, pt: 0.9 },
    fill: { color: colors.lavender, transparency: 100 },
    adjustPoint: 0.42
  });

  slide.addShape(pptx.ShapeType.line, {
    x: 9.85, y: 0.1, w: 3.6, h: 7.2,
    line: { color: colors.lavender, transparency: 92, pt: 8 }
  });

  slide.addShape(pptx.ShapeType.line, {
    x: 12.3, y: 0.2, w: 1.3, h: 7.1,
    line: { color: colors.cosmic, transparency: 90, pt: 5 }
  });

  slide.addText('.', {
    x: 0.15, y: 1.45, w: 0.1, h: 0.1,
    fontFace: 'Arial', fontSize: 12, color: colors.lavender, margin: 0
  });
  slide.addText('.', {
    x: 11.68, y: 0.1, w: 0.1, h: 0.1,
    fontFace: 'Arial', fontSize: 10, color: colors.lavender, margin: 0
  });
}

function addShell(slide) {
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.42, y: 0.34, w: 12.62, h: 6.92,
    rectRadius: 0.18,
    fill: { color: colors.panel, transparency: 10 },
    line: { color: colors.line, transparency: 40, pt: 1 }
  });
}

function addHeader(slide, eyebrow, title, intro) {
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.74, y: 0.78, w: 1.48, h: 0.34,
    rectRadius: 0.13,
    fill: { color: colors.cardAlt, transparency: 8 },
    line: { color: colors.line, transparency: 36, pt: 0.8 }
  });

  slide.addText(eyebrow.toUpperCase(), {
    x: 0.9, y: 0.89, w: 1.18, h: 0.1,
    fontFace: 'Arial', fontSize: 8.5, color: colors.lavender,
    bold: false, charSpace: 1.5, margin: 0, align: 'center'
  });

  slide.addText(title, {
    x: 0.74, y: 1.16, w: 8.95, h: 0.6,
    fontFace: 'Arial Black', fontSize: 20, color: colors.silver,
    margin: 0, fit: 'shrink'
  });

  slide.addText(intro, {
    x: 0.74, y: 1.78, w: 6.8, h: 0.82,
    fontFace: 'Arial', fontSize: 11.5, color: colors.soft,
    margin: 0, breakLine: false, fit: 'shrink'
  });
}

function addCard(slide, x, y, w, h, title) {
  slide.addShape(pptx.ShapeType.roundRect, {
    x, y, w, h,
    rectRadius: 0.16,
    fill: { color: colors.card, transparency: 5 },
    line: { color: colors.line, transparency: 28, pt: 0.9 }
  });

  slide.addText(title, {
    x: x + 0.22, y: y + 0.22, w: w - 0.44, h: 0.28,
    fontFace: 'Arial Black', fontSize: 13.5, color: colors.silver,
    margin: 0, fit: 'shrink'
  });
}

function addBullets(slide, items, x, y, w, h, fontSize = 11.3) {
  slide.addText(items.map((text) => ({
    text,
    options: { bullet: { indent: 12 } }
  })), {
    x, y, w, h,
    fontFace: 'Arial', fontSize,
    color: colors.soft,
    margin: 0.03,
    breakLine: false,
    hanging: 0.22,
    indent: 0.22,
    paraSpaceAfterPt: 8,
    fit: 'shrink'
  });
}

function addParagraphs(slide, items, x, y, w, h, fontSize = 11.6) {
  slide.addText(items.join('\n\n'), {
    x, y, w, h,
    fontFace: 'Arial', fontSize,
    color: colors.soft,
    margin: 0,
    breakLine: false,
    fit: 'shrink'
  });
}

function addTask(slide, text, x, y, w) {
  slide.addShape(pptx.ShapeType.roundRect, {
    x, y, w, h: 0.38,
    rectRadius: 0.1,
    fill: { color: colors.cardAlt, transparency: 2 },
    line: { color: colors.line, transparency: 22, pt: 0.8 }
  });

  slide.addText(text, {
    x: x + 0.12, y: y + 0.1, w: w - 0.24, h: 0.14,
    fontFace: 'Arial', fontSize: 8.8, bold: true,
    color: colors.silver, margin: 0, fit: 'shrink'
  });
}

function addFooter(slide) {
  slide.addText('Designed in the Midnight Galaxy visual system for the ComfyUI Generative AI course.', {
    x: 4.0, y: 6.92, w: 5.4, h: 0.1,
    fontFace: 'Arial', fontSize: 6.5, color: colors.soft,
    margin: 0, align: 'center'
  });
}

function createObjectivesSlide() {
  const slide = pptx.addSlide();
  addBackground(slide);
  addShell(slide);
  addHeader(
    slide,
    'Readiness & Objectives',
    'The course balances technical comfort with creative experimentation.',
    'Participants should be comfortable navigating software interfaces, managing files, and working on a capable computer. A basic understanding of 3D tools is helpful.'
  );

  addCard(slide, 0.74, 2.62, 5.8, 4.15, 'Prerequisites');
  addBullets(slide, [
    'Familiarity with professional software layouts and file management.',
    'Basic understanding of 3D modeling workflows.',
    'A good PC or laptop with at least 8 GB GPU VRAM and 24 GB RAM is preferred.'
  ], 0.9, 3.08, 5.2, 3.15);

  addCard(slide, 6.74, 2.62, 5.8, 4.15, 'What you will learn');
  addBullets(slide, [
    'Transform sketches and 3D massing into high-fidelity renders.',
    'Build reusable custom AI workflows for repeated design tasks.',
    'Rapidly iterate across styles, materials, mood, and lighting.',
    'Animate architectural spaces and create cinematic motion outputs.',
    'From builder to expert mastering complex ComfyUI pipelines and automation systems.',
    'Combine ComfyUI with Krita, plugins, and zero-code web or app development flows.'
  ], 6.9, 3.08, 5.2, 3.3, 10.9);

  addFooter(slide);
}

function createAudienceSlide() {
  const slide = pptx.addSlide();
  addBackground(slide);
  addShell(slide);
  addHeader(
    slide,
    'Who It Serves',
    'Built for beginners who want full creative control.',
    'The course is accessible to first-time ComfyUI users but structured for serious creative production, repeatable workflows, and portfolio-grade outputs.'
  );

  addCard(slide, 0.74, 2.48, 6.06, 4.58, 'Ideal participants');
  const participantItems = [
    'People who tried ComfyUI and felt lost or overwhelmed.',
    'Total beginners to node-based systems who want a clear mental model.',
    'Creatives moving beyond drag-and-drop AI tools into reusable pipelines.',
    'Artists, makers, and automation-focused teams exploring reproducible image and video generation.',
    'Architects, interior designers, landscape architects, graphic designers, 3D artists, product designers, freelancers, and studios.'
  ];

  participantItems.forEach((text, index) => {
    const y = 3.02 + (index * 0.86);
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.98, y, w: 5.48, h: 0.66,
      rectRadius: 0.13,
      fill: { color: colors.cardAlt, transparency: 0 },
      line: { color: colors.line, transparency: 26, pt: 0.7 }
    });
    slide.addText(text, {
      x: 1.16, y: y + 0.17, w: 5.08, h: 0.26,
      fontFace: 'Arial', fontSize: 9.9, color: colors.soft,
      margin: 0, fit: 'shrink'
    });
  });

  addCard(slide, 7.0, 2.48, 5.54, 4.58, 'Core outcomes');
  addParagraphs(slide, [
    'Understand how generative AI workflows are composed at the node level.',
    'Turn sketches, drafts, and reference images into polished visual outputs.',
    'Build modular templates for faster daily production work.',
    'Extend static imagery into animation, textured 3D assets, and app experiences.',
    'Finish with a practical project that connects creative direction and technical delivery.'
  ], 7.22, 2.94, 4.98, 3.6, 10.8);

  addFooter(slide);
}

function createOutlineSlide() {
  const slide = pptx.addSlide();
  addBackground(slide);
  addShell(slide);

  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.52, y: 0.5, w: 12.26, h: 6.5,
    rectRadius: 0.14,
    fill: { color: colors.panel, transparency: 16 },
    line: { color: colors.line, transparency: 34, pt: 0.9 }
  });

  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.74, y: 0.72, w: 1.04, h: 0.22,
    rectRadius: 0.08,
    fill: { color: colors.cardAlt, transparency: 2 },
    line: { color: colors.line, transparency: 24, pt: 0.6 }
  });
  slide.addText('COURSE OUTLINE', {
    x: 0.82, y: 0.79, w: 0.88, h: 0.08,
    fontFace: 'Arial', fontSize: 5.8, color: colors.lavender,
    bold: true, charSpace: 0.8, margin: 0, align: 'center'
  });

  slide.addText('A 12-session roadmap from fundamentals to final delivery.', {
    x: 0.74, y: 1.02, w: 6.85, h: 0.28,
    fontFace: 'Arial Black', fontSize: 11.2, color: colors.silver,
    margin: 0, fit: 'shrink'
  });
  slide.addText('Sessions progress from core terminology and interface literacy to advanced enhancement, integrations, generative 3D, local video pipelines, LLM automation, AI agents, and project completion.', {
    x: 0.74, y: 1.34, w: 6.25, h: 0.38,
    fontFace: 'Arial', fontSize: 6.7, color: colors.soft,
    margin: 0, fit: 'shrink'
  });

  const sessions = [
    ['SESSION 1', 'AI Foundations & ComfyUI setup', ['AI terminology and useful websites', 'What is ComfyUI?', 'Download and install ComfyUI']],
    ['SESSION 2', 'Comfy interface & Basic Workflows', ['Interface overview', 'Simple text-to-image workflow', 'Image-to-image workflow']],
    ['SESSION 3', 'Prompting & Models', ['Prompting instructions', 'Ollama, Florence, Qwen VL, AI Studio', 'Model types: SDXL, Flux, Qwen Image, Z-Image']],
    ['SESSION 4', 'ControlNet & LoRA Workflows', ['Overview of ControlNet and IP Adapter', 'Using LoRAs', 'LoRA training'], 'Task: Train your own LoRA'],
    ['SESSION 5', 'Inpainting & Design Iteration', ['Inpainting workflows', 'Image editing models', 'Differences between normal and edit-specific inpainting'], 'Task: Update materials, context, people, objects, and atmosphere'],
    ['SESSION 6', 'Enhancement Pipeline', ['Segmentation and autodetection', 'Enhancing full images and selected parts', 'Upscaling'], 'Task: Execute a full image enhancement pipeline'],
    ['SESSION 7', 'Krita Integration', ['Photo manipulation in Photoshop', 'Intro to Krita and AI plugins', 'Generate, upscale, and organize presets', 'Insert ComfyUI workflows and custom parameters in Krita'], 'Task: Deploy a custom ComfyUI workflow within Krita'],
    ['SESSION 8', '3D Generation', ['3D generation in Hunyuan', 'Trellis with textures', '3D models to segments', 'Advanced 3D workflows'], 'Task: Construct a textured 3D asset from a 2D design'],
    ['SESSION 9', 'AI Video Generation', ['Intro to local AI video generation', 'Online video pipeline'], 'Task: Generate a professional cinematic animation'],
    ['SESSION 10', 'LLMs, MCP & Automation', ['Anything LLM', 'MCP', 'Use ComfyUI as one tool among many', 'Final project setup'], 'Task: The final project'],
    ['SESSION 11', 'Vibe Coding & AI Agents', ['Intro to vibe coding', 'Skills and AI agents', 'UI tools: OpenCode, Claude, VS Code, Antigravity, Codex', 'Project follow up'], 'Task: Develop and launch a custom web application'],
    ['SESSION 12', 'Arch Viz & Interior AI', ['AI in architectural visualization techniques', 'AI in interior design techniques', 'Final project follow up'], 'Task: Finalize the project']
  ];

  const startX = 0.74;
  const startY = 1.78;
  const colWidth = 3.06;
  const rowHeight = 1.48;
  const gapX = 0.14;
  const gapY = 0.12;

  sessions.forEach((session, index) => {
    const col = index % 3;
    const row = Math.floor(index / 3);
    const x = startX + (col * (colWidth + gapX));
    const y = startY + (row * (rowHeight + gapY));

    slide.addShape(pptx.ShapeType.roundRect, {
      x, y, w: colWidth, h: rowHeight,
      rectRadius: 0.1,
      fill: { color: colors.card, transparency: 2 },
      line: { color: colors.line, transparency: 20, pt: 0.7 }
    });

    slide.addText(session[0], {
      x: x + 0.12, y: y + 0.12, w: 0.66, h: 0.08,
      fontFace: 'Arial', fontSize: 4.9, bold: true,
      color: colors.lavender, charSpace: 0.8, margin: 0
    });

    slide.addText(session[1], {
      x: x + 0.12, y: y + 0.3, w: colWidth - 0.24, h: 0.18,
      fontFace: 'Arial Black', fontSize: 7.3,
      color: colors.silver, margin: 0, fit: 'shrink'
    });

    slide.addText(session[2].map((text) => ({
      text,
      options: { bullet: { indent: 8 } }
    })), {
      x: x + 0.12, y: y + 0.54, w: colWidth - 0.24, h: session[3] ? 0.54 : 0.7,
      fontFace: 'Arial', fontSize: 5.6,
      color: colors.soft, margin: 0.01,
      hanging: 0.12, indent: 0.12,
      paraSpaceAfterPt: 3,
      fit: 'shrink'
    });

    if (session[3]) {
      addTask(slide, session[3], x + 0.12, y + 1.05, colWidth - 0.24);
    }
  });

  addFooter(slide);
}

function createLogisticsSlide() {
  const slide = pptx.addSlide();
  addBackground(slide);
  addShell(slide);

  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.18, y: 0.6, w: 4.95, h: 0.04,
    rectRadius: 0.01,
    fill: { color: colors.line, transparency: 70 },
    line: { color: colors.line, transparency: 100, pt: 0 }
  });

  addHeader(
    slide,
    'Logistics',
    'Delivery format and key notes.',
    ''
  );

  const cards = [
    ['Duration', '12 weeks, 1 day per week, 3 hours per session.'],
    ['Total Time', '36 guided hours across a progressive hands-on curriculum.'],
    ['Course Note', 'Topics and duration may be modified by the instructor based on participant knowledge and skill level.']
  ];

  cards.forEach((card, index) => {
    const x = 0.74 + (index * 2.98);
    addCard(slide, x, 2.52, 2.72, 1.46, card[0]);
    slide.addText(card[1], {
      x: x + 0.16, y: 3.0, w: 2.38, h: 0.55,
      fontFace: 'Arial', fontSize: 7.1, color: colors.soft,
      margin: 0, fit: 'shrink'
    });
  });

  addFooter(slide);
}

createObjectivesSlide();
createAudienceSlide();
createOutlineSlide();
createLogisticsSlide();

pptx.writeFile({ fileName: 'C:/Users/mosta/Desktop/Course/midnight-galaxy-redesign/ComfyUI-Course-Website-Sections.pptx' });
