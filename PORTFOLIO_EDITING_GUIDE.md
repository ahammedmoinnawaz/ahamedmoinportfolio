# Portfolio Editing Guide

This guide explains how to update your data analyst portfolio without needing technical knowledge.

## Quick Update Instructions

### 1. Personal Information
**File:** `client/src/lib/data.ts`
**Section:** `personalInfo`

Update your:
- Name
- Job title
- Contact details (phone, email)
- Social media links
- Professional objective

### 2. Core Skills
**File:** `client/src/lib/data.ts`
**Section:** `skills.coreSkills`

Add/remove skills and update proficiency levels (0-100):
```typescript
{ name: "SQL", level: 85, icon: "🗄️" }
```

### 3. Experience & Projects
**File:** `client/src/lib/data.ts`
**Sections:** `experience` and project data in `server/storage.ts`

Update your work history and project portfolio.

### 4. Education & Certifications
**File:** `client/src/lib/data.ts`
**Sections:** `education` and `certifications`

Add new qualifications and certificates.

## Key Files to Edit

### Main Content File
`client/src/lib/data.ts` - Contains most of your portfolio content

### Configuration File (Future-Ready)
`client/src/config/portfolio-config.ts` - Centralized configuration for easy updates

## What You Can Easily Change

✅ **Personal Information** - Name, contact details, bio
✅ **Skills & Proficiency Levels** - Add/remove skills, update percentages
✅ **Professional Metrics** - Projects completed, satisfaction rates
✅ **Work Experience** - Job history, responsibilities, achievements
✅ **Education** - Degrees, certifications, courses
✅ **Projects** - Portfolio pieces, descriptions, technologies used
✅ **Blog Posts** - Articles and insights
✅ **Contact Information** - Email, phone, social media links

## Color Theme Customization

**File:** `client/src/index.css`

The portfolio uses a blue and white theme. Key colors:
- Primary Blue: `#1E40AF`
- Secondary Blue: `#3B82F6`
- Light Blue: `#60A5FA`
- Background: `#F8FAFC`

## Adding New Skills

1. Open `client/src/lib/data.ts`
2. Find the `skills` section
3. Add to the appropriate category:

```typescript
skills: {
  coreSkills: [
    { name: "New Tool", level: 80, icon: "🔧" }
  ]
}
```

## Professional Tips

### Skill Levels Guide
- **95-100%**: Expert/Master level
- **85-94%**: Advanced proficiency
- **70-84%**: Intermediate/Good working knowledge
- **50-69%**: Basic/Learning
- **Below 50%**: Avoid listing

### Metrics Guidelines
- Keep numbers realistic and verifiable
- Update regularly as you gain experience
- Focus on impact rather than just activity

### Project Showcase
- Lead with your best work
- Include variety (different tools/techniques)
- Show business impact when possible
- Keep descriptions concise but informative

## Making Updates

1. **Edit the content** in the appropriate file
2. **Save the file** - the portfolio updates automatically
3. **Test locally** by running `npm run dev`
4. **Deploy** when satisfied with changes

## Future Enhancements

The portfolio is designed to be easily expandable:
- Admin panel for content management
- Dynamic skill charts
- Project filtering
- Blog CMS integration
- Contact form analytics

## Need Help?

If you need to make more complex changes:
1. Check this guide first
2. Review the existing code structure
3. Test changes locally before deploying
4. Consider hiring a developer for major modifications

## File Structure Overview

```
client/src/
├── components/          # UI components
├── lib/data.ts         # Main content file ⭐
├── config/             # Configuration files
└── pages/              # Page layouts

server/
└── storage.ts          # Project and blog data
```

⭐ = Most frequently edited files