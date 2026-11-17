# Task 3: FrameFlow AI

> **Tagline:** From One Idea to a Publish-Ready Story.  
> **Assignment Focus:** AI-Assisted Content Production, Interactive Carousel Studio & Workflow Architecture.

---

## 📌 Project Overview & Problem Statement

Creating impactful, visually compelling social carousels for platforms like LinkedIn and Instagram is one of the highest-leverage growth activities for modern founders, educators, and developers. However, the production workflow is burdened by friction:
- **Design Overhead & Skill Barriers:** Non-designers find tools like Figma too complex and Canva templates too generic, leading to inconsistent branding and hours spent tweaking spacing.
- **Narrative Structuring Challenges:** Creating an effective carousel requires more than just summarizing text; it demands psychological hooks, Socratic pacing, distinct slide archetypes, and actionable takeaways.
- **Export & Formatting Headaches:** LinkedIn requires multi-page square or portrait PDF documents to enable swipeable documents, while Instagram requires clean, high-resolution square PNG bundles.

**FrameFlow AI** is a complete, browser-based carousel creation studio and content production suite. It allows users to turn a single topic or thesis into a structured, branded, multi-slide social carousel ready for distribution in minutes.

---

## 👥 Target Users

1. **Founders, Solopreneurs & Tech Leaders:**
   - Need to establish social thought leadership, share product updates, and build in public without hiring an agency.
2. **Educators, Developers & Creators:**
   - Break down complex technical architectures, coding tips, AI tool comparisons, or educational frameworks into digestible visual slides.
3. **B2B Marketing & Content Teams:**
   - Rapidly draft and iterate on carousel narratives with automated brand consistency and multi-format export.

---

## 🚀 Key Implemented Features

### 1. Studio Dashboard & Project Management
- **Central Creative Hub:** Overview of recent drafts, publish-ready projects, and quick-start prompts.
- **Preloaded Showcase Project:** Includes the complete 9-slide carousel: *"5 AI Tools Every College Student Should Know in 2026"* (NotebookLM, Perplexity, ChatGPT Canvas, Canva Magic Studio, GitHub Copilot).
- **Brand Kit Integration:** Persistent brand tokens (creator name, handle, avatar presets, primary brand colors, typography) automatically branded onto all slides.

### 2. 6-Step End-to-End Carousel Creation Workspace

#### Step 1: Strategic Intent & Prompt Framing
- Capture raw idea thesis or paste rough bullet points.
- Select target platform (*LinkedIn, Instagram, or Both*).
- Select target audience (*Students, Founders, Developers, General*).
- Select tone of voice (*Educational, Conversational, Bold, Professional*).
- Adjust slide count slider (5 to 10 slides).
- Define content objective (*Educational Value, Brand Authority, Lead Generation, Viral Engagement*).

#### Step 2: AI Research & Strategic Narrative Architecture
- Formulates a structured research dossier: Topic executive summary, demographic framing, and psychological hook formula.
- Synthesizes 3 high-converting headline alternatives with 1-click selection.
- **AI Transparency & Grounding Disclosure:** Clearly flags the source verification boundary and reference benchmarks.

#### Step 3: Slide-by-Slide Content Outliner
- Complete slide deck copy breakdown: Headline, core body message, pro-tip/supporting detail, and archetype tag.
- Full manipulation capabilities: Inline text editing, add new slide, duplicate slide, delete slide, and move slides up/down.

#### Step 4: Visual Aesthetic & Design System
- **5 Curated Design Themes:**
  1. *Modern Gradient:* Vibrant violet-blue mesh, glassmorphism card surfaces.
  2. *Bold Tech:* High-contrast dark canvas, electric cyan accents, monospace labels.
  3. *Editorial Minimal:* High-contrast crisp typography, calm ivory canvas.
  4. *Professional Corporate:* Deep navy authority, structured layout, clean borders.
  5. *Playful Education:* Warm amber and coral tones with approachable creator energy.
- **Brand Token Synchronization:** 1-click button syncing the active project with custom Brand Kit colors and handles.

#### Step 5: 3-Panel Interactive Carousel Editor
- **Left Thumbnail Rail:** Drag-like quick reordering, live slide counter, duplication, deletion, and quick addition.
- **Center Canvas:**
  - Real-time live render of the active slide.
  - Social Frame Simulator: Toggle between authentic **LinkedIn Document Viewer** and **Instagram Mobile Feed** previews with navigation arrows and slide counters.
- **Right Inspector:**
  - Layout Archetype Switcher: *Hook / Hero Slide, Standard Content, Tool Showcase, Split Card, or Engagement CTA*.
  - Inline headline and body text editor.
  - Typography scale slider.
  - Accent color picker and background styling overrides.

#### Step 6: Multi-Format Export Studio
- **Multi-Page LinkedIn Document PDF:** Compiles the entire deck into a crisp, high-DPI 1080x1080 multi-page PDF document. Uploading this file to LinkedIn automatically creates a native swipeable carousel post.
- **High-Resolution PNG Export:** Download individual slides or batch-download all slides as square PNGs for Instagram feed carousels.
- **Automated Social Post Caption Generator:** Formats an engaging post caption complete with hook summary, key takeaways, swipe CTA, and relevant hashtags, with a 1-click clipboard copy button.
- **Browser Print Alternative:** System dialog fallback for immediate local printing or PDF generation.

### 3. Production Workflow & Automation Architecture
- Dedicated **Workflow Specification Page** presenting an 8-stage production pipeline:
  *Founder Idea → AI Topic Research → Content Structuring → Slide Copy → Visual Direction → Carousel Generation → Human Review → Export*.
- Detailed inputs, outputs, human-in-the-loop checkpoints, and estimated API unit costs (~$0.0215 per generated deck).
- Complete normalized JSON schema representation for API interoperability.

---

## 🛠️ Technology Stack

- **Framework:** React 18 (React Context API for global state management)
- **Language:** TypeScript 5 (Strict domain types)
- **Bundler:** Vite 6
- **Styling:** Tailwind CSS 3 (Custom dark-mode palette, custom glassmorphism, glowing gradients)
- **Iconography:** Lucide React
- **Export Engines:**
  - `html-to-image`: High-fidelity client-side DOM-to-canvas rasterization at 2x retina pixel ratio.
  - `jspdf`: Programmatic compilation of multi-page 1080x1080 PDF documents.

---

## 📂 Architecture & Component Structure

```
Task-3-FrameFlow-AI/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── src/
    ├── App.tsx                         # Main layout, view switching (Studio, Workflow, BrandKit, Settings)
    ├── main.tsx                        # React DOM entry point
    ├── index.css                       # Tailwind layers and dark studio theme rules
    ├── types/
    │   └── index.ts                    # TypeScript types (CarouselProject, Slide, Theme, BrandKit, etc.)
    ├── context/
    │   └── AppContext.tsx              # React Context providing global state, CRUD operations, and toasts
    ├── data/
    │   ├── sampleProject.ts            # Preloaded 9-slide college student AI tools carousel
    │   ├── templates.ts                # Content starter templates
    │   ├── themes.ts                   # 5 complete design theme token definitions
    │   ├── workflowSteps.ts            # 8-stage production workflow and real-world automation specification
    │   └── mockAiGenerator.ts          # Intelligent client-side generation engine
    ├── utils/
    │   ├── storage.ts                  # LocalStorage persistence helpers
    │   └── exportUtils.ts              # html-to-image & jsPDF high-res export functions
    └── components/
        ├── layout/                     # Header, Sidebar, ToastNotification
        ├── overview/                   # OverviewDashboard with project list and stats
        ├── brand/                      # BrandKitView (brand token customization)
        ├── workflow/                   # WorkflowPage (interactive production pipeline blueprint)
        ├── editor/                     # SlidePreviewCard, SlideThumbnail, SocialFrameWrapper
        └── create/                     # Multi-step creation workspace:
            ├── CreateCarouselWorkspace.tsx # Step wizard container
            ├── Step1IdeaInput.tsx          # Topic, platform, audience, tone
            ├── Step2AiResearch.tsx         # Strategic narrative & hook formulas
            ├── Step3SlideContent.tsx       # Slide-by-slide copy outliner
            ├── Step4VisualDesign.tsx       # Theme selection & brand sync
            ├── Step5CarouselEditor.tsx     # 3-panel visual canvas editor
            └── Step6Export.tsx             # Multi-page PDF, PNG, caption copier
```

---

## ⚙️ Installation & Running Locally

Navigate to the project directory:

```bash
cd Task-3-FrameFlow-AI
```

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 🔍 Implementation Transparency & Disclosures

| Feature | Current Implementation Status | Notes |
| :--- | :--- | :--- |
| **Complete 6-Step Workspace** | ✅ **Fully Implemented** | Full wizard navigation, slide editing, adding/deleting/reordering, and theme selection work seamlessly. |
| **3-Panel Visual Editor** | ✅ **Fully Implemented** | Live updates, layout archetype switcher, and LinkedIn/Instagram social frames are interactive. |
| **Client-Side PDF & PNG Export** | ✅ **Fully Implemented** | Uses `html-to-image` and `jsPDF` to compile 1080x1080 square vector-wrapped PDFs and high-res PNG images directly in the browser. |
| **Caption Generator** | ✅ **Fully Implemented** | Formats social caption with hooks and hashtags; copies to clipboard. |
| **AI Generation Engine** | 🔶 **Intelligent Client-Side Simulation** | Generates tailored multi-slide narratives based on input parameters (topic, tone, audience) without requiring external paid API keys. |
| **Gemini / Perplexity / n8n Pipeline** | 🔷 **Proposed Production Specification** | The Workflow Specification page documents the full production pipeline, prompt schemas, and webhook architecture as an engineering blueprint for future backend deployment. |

---

## 🚀 Limitations & Future Improvements

1. **Live LLM Integration:** Connect an optional user-provided Google Gemini 1.5 Pro API key or Perplexity API key for open-ended web research queries.
2. **Batch ZIP Export:** Package all slide PNGs into a single `.zip` file archive using `JSZip`.
3. **Custom Asset Uploads:** Allow users to upload custom PNG icons and logos into individual slide canvases.
4. **Direct Cloud Publishing:** Integrate LinkedIn and Meta Graph APIs for direct 1-click scheduling.
