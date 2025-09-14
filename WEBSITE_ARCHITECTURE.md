# CenterFire Digital - Complete Website Architecture Plan

## Current Homepage Status ✅
**Successfully implemented tactical homepage with:**
1. Hero Section - Tactical grid, massive headline, feature cards
2. Mission Control - Analytics dashboard, progress bars, team info
3. AI Arsenal - 4 AI services with custom development CTA
4. Technical Capabilities - 5 comprehensive technical offerings
5. Mission Portfolio - 4 tactical project showcases with results

**Still needed for homepage:**
- Intelligence Hub (Blog preview)
- Team Command Structure (Team overview)
- Contact & Deployment (Contact CTA)

## Complete Website Structure Plan

### 1. MAIN NAVIGATION PAGES

#### A. Homepage (/) - ✅ 80% Complete
- **Current Status**: 5/8 sections implemented
- **Remaining**: Intelligence Hub, Team preview, Contact CTA
- **Priority**: Complete remaining sections

#### B. Services Pages (/services)
**Main Services Landing** (/services)
- Overview of all service categories
- Service cards with tactical styling
- CTAs to individual service pages

**Individual Service Pages:**
- **/services/ai-solutions** - AI Arsenal detailed pages
  - Machine Learning Operations (/services/ai/mlops)
  - Computer Vision Systems (/services/ai/computer-vision)
  - Natural Language Processing (/services/ai/nlp)
  - Predictive Analytics (/services/ai/predictive-analytics)
  - Custom AI Development (/services/ai/custom)

- **/services/technical** - Technical capabilities detailed pages
  - Cloud Infrastructure (/services/tech/cloud)
  - Mobile Applications (/services/tech/mobile)
  - Web Development (/services/tech/web)
  - Cybersecurity Operations (/services/tech/cybersecurity)
  - Data Engineering (/services/tech/data)

#### C. Portfolio/Case Studies (/portfolio)
**Portfolio Landing** (/portfolio)
- Grid of all case studies
- Filter by industry/technology
- Results-focused presentation

**Individual Case Studies:**
- /portfolio/tactical-trading-platform
- /portfolio/fortress-security-suite
- /portfolio/supply-chain-command
- /portfolio/medical-intelligence-system

#### D. About Us (/about)
- Company mission and tactical approach
- Full team profiles with military-style bios
- Company values and methodology
- Office locations and capabilities

#### E. Intelligence Hub (/blog or /intel)
- Tactical tech articles and insights
- Industry intelligence reports
- Case study deep-dives
- Technical thought leadership

#### F. Contact (/contact)
- Mission briefing contact form
- Office locations and contact info
- Emergency response capabilities
- Project consultation scheduling

### 2. TEMPLATE SYSTEM DESIGN

#### A. Page Layout Templates
```
/src/components/templates/
├── PageLayout.jsx          # Base layout with header/footer
├── ServicePageTemplate.jsx # Individual service page template
├── CaseStudyTemplate.jsx   # Portfolio case study template
├── BlogPostTemplate.jsx    # Article/blog post template
└── LandingPageTemplate.jsx # Category landing pages
```

#### B. Reusable Section Components
```
/src/components/sections/
├── Hero/
│   ├── HeroService.jsx     # Service page hero
│   ├── HeroCaseStudy.jsx   # Case study hero
│   └── HeroStandard.jsx    # Standard page hero
├── Content/
│   ├── ServiceFeatures.jsx # Service details & features
│   ├── CaseStudyResults.jsx # Results & statistics
│   ├── TeamGrid.jsx        # Team member grid
│   └── ArticleContent.jsx  # Blog/article content
└── CTA/
    ├── ContactCTA.jsx      # Contact form CTA
    ├── ConsultationCTA.jsx # Schedule consultation
    └── ServiceCTA.jsx      # Service-specific CTAs
```

#### C. Content Data Structure
```
/src/data/
├── services.js             # All service information
├── caseStudies.js          # Portfolio case studies
├── teamMembers.js          # Team profiles
├── articles.js             # Blog/intel articles
└── siteConfig.js           # Global site configuration
```

### 3. ROUTING & NAVIGATION

#### A. React Router Setup
- Implement React Router for multi-page navigation
- Tactical-themed loading transitions
- SEO-friendly URLs and meta tags
- Breadcrumb navigation for deep pages

#### B. Navigation Enhancement
- Update Header component with dropdown menus
- Mobile-responsive hamburger menu
- Active page indicators
- Search functionality for intel/blog

### 4. CONTENT MANAGEMENT STRATEGY

#### A. Static Content (Phase 1)
- Hard-coded content in React components
- Easy to maintain and fast loading
- Version controlled in Git

#### B. Dynamic Content (Phase 2 - Future)
- Headless CMS integration (Strapi/Contentful)
- Admin panel for content updates
- Blog publishing workflow

### 5. UX PILOT DESIGN REQUIREMENTS

**For each new page type, we need UX Pilot designs:**

#### Priority 1 - Service Page Template
**Prompt for UX Pilot:**
"Design a tactical/military-themed service detail page for a tech consulting company. Dark theme with fire orange (#ff6b35), steel blue (#4a90e2), and tactical green (#2ecc71) accents. Include:
- Hero section with service title and tactical icon
- Service overview with key benefits
- Technical specifications and features list
- Process/methodology section
- Case study examples
- Pricing/consultation CTA
- Related services sidebar
Use tactical fonts (Orbitron for headings, Inter for body) and military-style UI elements."

#### Priority 2 - Case Study Template  
**Prompt for UX Pilot:**
"Design a tactical case study page showing project results. Dark military theme with tactical color scheme. Include:
- Hero with project image and key stats
- Challenge/objective section
- Solution methodology
- Implementation timeline
- Results with large impact metrics
- Technology stack used
- Client testimonial
- Next project CTA
Professional presentation with data visualization."

#### Priority 3 - About Page
**Prompt for UX Pilot:**
"Design a tactical About page for elite tech consultancy. Military command center aesthetic. Include:
- Company mission statement
- Leadership team grid with military-style profiles
- Core values with tactical icons
- Company methodology/process
- Office locations with tactical styling
- Join the team CTA
- Company timeline/milestones"

### 6. IMPLEMENTATION PHASES

#### Phase 1: Complete Homepage (1-2 sessions)
- Finish remaining homepage sections
- Polish existing components

#### Phase 2: Service Pages (2-3 sessions)
- Create service page templates
- Implement individual service pages
- Add navigation and routing

#### Phase 3: Portfolio & Case Studies (2-3 sessions)
- Case study template and pages
- Portfolio filtering and navigation

#### Phase 4: About & Contact (1-2 sessions)
- About page with team profiles
- Contact page with forms

#### Phase 5: Intelligence Hub (2-3 sessions)
- Blog/article system
- Content management

### 7. TECHNICAL REQUIREMENTS

#### A. New Dependencies Needed
- React Router DOM for navigation
- React Helmet for SEO meta tags
- Framer Motion for page transitions
- React Hook Form for contact forms

#### B. Performance Optimization
- Code splitting by route
- Image optimization and lazy loading
- Component preloading for smooth navigation

## RECOMMENDATION

**Yes, absolutely use UX Pilot again!** The tactical theme is working perfectly, and we need:

1. **Service page template design** (highest priority)
2. **Case study template design** 
3. **About page design**

This will give us the visual foundation to build a complete, cohesive website that maintains the excellent tactical aesthetic we've established.

**Next Steps:**
1. Create UX Pilot designs for the priority page templates
2. Set up React Router and page infrastructure  
3. Systematically implement each page type
4. Build reusable template system

The methodical approach that worked so well for the homepage will scale perfectly to the full website!