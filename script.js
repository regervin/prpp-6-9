// Modal Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
}

// Scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// SCROLL TO TOP FUNCTIONALITY
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide scroll to top button based on scroll position
window.addEventListener('scroll', function() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

// Generate Review Function
function generateReview() {
    const productUrl = document.getElementById('productUrl').value;
    if (!productUrl.trim()) {
        alert('Please enter a product URL first');
        return;
    }

    // Show loading state
    const button = event.target;
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Generating...';
    button.disabled = true;

    // Simulate API call
    setTimeout(() => {
        const reviewContent = `# Comprehensive Product Review: Premium Wireless Headphones

## Overall Rating: ⭐⭐⭐⭐⭐ (4.8/5)

### What I Loved About These Headphones

After testing these Premium Wireless Headphones for over two weeks, I can confidently say they've exceeded my expectations in almost every category. Here's my honest, detailed review.

### **Sound Quality: Exceptional (5/5)**

The audio quality is simply outstanding. The 40mm drivers deliver crisp highs, rich mids, and deep, punchy bass that doesn't overpower the other frequencies. Whether I'm listening to classical music, podcasts, or bass-heavy electronic tracks, every detail comes through crystal clear.

**Key Sound Features:**
- Hi-Res Audio certification
- Custom-tuned 40mm drivers  
- Wide soundstage that creates an immersive experience
- Excellent instrument separation

### **Noise Cancellation: Industry-Leading (5/5)**

The active noise cancellation (ANC) is where these headphones truly shine. I tested them in various environments:

- **Coffee shops**: Completely blocked out chatter and background noise
- **Airplane**: Made a 6-hour flight peaceful and quiet
- **Busy streets**: Traffic noise virtually disappeared
- **Home office**: Perfect for focused work sessions

The ANC doesn't create that "pressure" feeling that some competitors do, making them comfortable for extended use.

### **Comfort & Build Quality: Outstanding (4.5/5)**

**Comfort:**
- Memory foam ear cushions that don't cause fatigue
- Adjustable headband fits various head sizes
- Lightweight design (only 250g)
- Can wear for 4+ hours without discomfort

**Build Quality:**
- Premium aluminum frame feels solid and durable
- Genuine leather ear cups age beautifully
- Sturdy hinges that fold flat for travel
- Comes with a premium carrying case

### **Battery Life: Exceptional (5/5)**

The 30-hour battery life claim is accurate. In my testing:
- **With ANC on**: 28-30 hours of playback
- **ANC off**: 35+ hours of playback
- **Quick charge**: 15 minutes = 3 hours of playback
- **Full charge time**: 2 hours via USB-C

This means you can use them for an entire work week without charging.

### **Connectivity & Features: Excellent (4.5/5)**

**Bluetooth Performance:**
- Bluetooth 5.0 with excellent range (30+ feet)
- Connects instantly to paired devices
- Stable connection with no dropouts
- Can connect to two devices simultaneously

**Smart Features:**
- Touch controls are responsive and intuitive
- Auto-pause when removed from ears
- Voice assistant integration (Siri, Google Assistant)
- Companion app for EQ customization

### **Value for Money: Great (4/5)**

At $299, these headphones compete directly with Sony WH-1000XM4 and Bose QuietComfort 45. Here's how they stack up:

**Pros vs Competitors:**
- Better battery life than most competitors
- Superior build quality and materials
- More comfortable for long sessions
- Excellent customer support

**Cons:**
- Slightly more expensive than some alternatives
- No wireless charging case
- App could use more features

### **Who Should Buy These?**

**Perfect for:**
- Frequent travelers who need excellent ANC
- Audiophiles who want premium sound quality
- Remote workers needing focus
- Anyone who values comfort and build quality

**Maybe not for:**
- Budget-conscious buyers (under $200)
- Those who prefer on-ear vs over-ear
- Users who need waterproofing for workouts

### **Final Verdict**

These Premium Wireless Headphones deliver on their promises. The combination of exceptional sound quality, industry-leading noise cancellation, and premium build quality justifies the $299 price point.

**Bottom Line:** If you're looking for headphones that excel in every category and will last for years, these are an excellent investment. The 30-hour battery life alone makes them worth considering.

**My Rating: 4.8/5 stars**

**Recommendation:** Highly recommended for anyone serious about audio quality and comfort.

---

*Disclaimer: I purchased these headphones with my own money and this review reflects my honest experience after two weeks of daily use.*`;

        document.getElementById('reviewContent').innerHTML = reviewContent.replace(/\n/g, '<br>');
        document.getElementById('reviewOutput').classList.remove('hidden');
        
        // Reset button
        button.innerHTML = originalText;
        button.disabled = false;
    }, 2000);
}

// Copy Review Function
function copyReview() {
    const reviewContent = document.getElementById('reviewContent').innerText;
    navigator.clipboard.writeText(reviewContent).then(() => {
        alert('Review copied to clipboard!');
    });
}

// Copy Email Sequence Function
function copyEmailSequence() {
    const emailContent = document.getElementById('emailSequenceContent').innerText;
    navigator.clipboard.writeText(emailContent).then(() => {
        alert('Email sequence copied to clipboard!');
    });
}

// Social Media Generator Variables
let selectedPlatform = '';
let selectedContentType = '';

const contentTypes = {
    facebook: ['Educational Post', 'Story/Personal', 'Behind the Scenes', 'User Generated Content', 'Live Video', 'Event Promotion'],
    instagram: ['Photo Post', 'Carousel Post', 'Story Content', 'Reel Script', 'IGTV Video', 'User Generated Content'],
    tiktok: ['Trending Challenge', 'Educational Content', 'Behind the Scenes', 'Duet/Stitch', 'Trending Audio', 'How-To Video'],
    linkedin: ['Industry Insights', 'Professional Story', 'Company Update', 'Thought Leadership', 'Career Advice', 'Industry News'],
    twitter: ['Thread Series', 'Quick Tips', 'Industry Commentary', 'Personal Insights', 'News Response', 'Poll/Question'],
    reddit: ['Discussion Starter', 'Ask Me Anything', 'Tutorial/Guide', 'Community Question', 'Resource Share', 'Experience Share'],
    quora: ['Expert Answer', 'Detailed Explanation', 'Personal Experience', 'Step-by-Step Guide', 'Comparison Analysis', 'Industry Insights']
};

const platformPrompts = {
    facebook: {
        'Educational Post': `Create an educational Facebook post about [TOPIC]. Structure:

📚 HOOK: Start with a surprising fact or question about [TOPIC]

📝 MAIN CONTENT:
- 3-5 key points or tips
- Use bullet points or numbered lists
- Include personal experience or story
- Add relevant emojis for visual appeal

🎯 ENGAGEMENT:
- Ask a question to encourage comments
- Include a call-to-action
- Use 2-3 relevant hashtags (not too many for Facebook)

📊 VISUAL SUGGESTION:
- Recommend image or video type
- Suggest graphic elements

Keep it conversational and valuable. Optimal length: 100-200 words.`,

        'Story/Personal': `Write a personal story Facebook post about [TOPIC]. Include:

🎬 OPENING: Hook with emotion or intrigue
"Last week, something happened that completely changed my perspective on [TOPIC]..."

📖 STORY STRUCTURE:
- Set the scene (when/where)
- The challenge or situation
- What you learned or discovered
- The outcome or transformation

💡 LESSON/VALUE:
- What others can learn from this
- Actionable takeaway
- Relatable message

🤝 ENGAGEMENT:
- "Have you ever experienced something similar?"
- "What's your take on this?"
- Encourage sharing their stories

Use storytelling techniques and emotional connection. Length: 150-300 words.`
    },

    instagram: {
        'Photo Post': `Create an Instagram photo post about [TOPIC]. Structure:

📸 CAPTION HOOK (First Line):
Start with something that stops the scroll - question, bold statement, or emoji

📝 MAIN CONTENT:
- Share valuable insight about [TOPIC]
- Use line breaks for readability
- Include personal touch or story
- 3-5 key points maximum

💫 ENGAGEMENT TACTICS:
- Ask specific questions
- Use "double tap if you agree"
- "Save this post for later"
- "Tag someone who needs to see this"

🏷️ HASHTAG STRATEGY:
- 20-30 relevant hashtags
- Mix of popular and niche tags
- Include branded hashtags
- Research trending tags in your niche

📷 PHOTO SUGGESTIONS:
- Flat lay ideas
- Behind-the-scenes shots
- Quote graphics
- Before/after images

Optimal caption length: 125-150 words for maximum engagement.`,

        'Reel Script': `Write an Instagram Reel script about [TOPIC]. Format:

⏰ TIMING: 15-30 seconds

🎬 HOOK (0-3 seconds):
"POV: You finally understand [TOPIC]" or
"3 things about [TOPIC] that will blow your mind"

📱 VISUAL SEQUENCE:
Second 1-3: [Visual action/text overlay]
Second 4-8: [Transition to next point]
Second 9-15: [Main content delivery]
Second 16-20: [Conclusion/CTA]

🎵 AUDIO SUGGESTIONS:
- Trending audio options
- Original audio script
- Voiceover vs. music choice

📝 TEXT OVERLAYS:
- Key points as text
- Easy to read fonts
- Contrasting colors

🎯 ENGAGEMENT:
- "Follow for more [topic] tips"
- "Save this for later"
- "Which tip surprised you most?"

Include trending hashtags and post at optimal times (6-9 PM).`
    },

    tiktok: {
        'Educational Content': `Create a TikTok educational video about [TOPIC]. Script:

⚡ HOOK (First 3 seconds):
"If you don't know this about [TOPIC], you're missing out"
"This [TOPIC] hack will change your life"
"POV: You just learned the truth about [TOPIC]"

🎯 CONTENT STRUCTURE (15-60 seconds):
- Start with the most surprising fact
- Use quick cuts and transitions
- 3-5 key points maximum
- Visual demonstrations when possible

📱 VISUAL ELEMENTS:
- Text overlays for key points
- Quick transitions between scenes
- Props or visual aids
- Before/after demonstrations

🎵 AUDIO STRATEGY:
- Use trending sounds when relevant
- Original audio for unique content
- Clear voiceover with good audio quality

📝 CAPTIONS:
- Hook viewers in first line
- Use relevant hashtags (#LearnOnTikTok #EducationalContent)
- Ask questions to boost engagement
- Include call-to-action

🔥 ENGAGEMENT BOOSTERS:
- "Part 1 of 3" for series content
- "Duet this with your experience"
- "Stitch this if you disagree"

Post during peak hours: 6-10 PM and 7-9 AM.`,

        'Trending Challenge': `Create a TikTok challenge video about [TOPIC]. Format:

🎪 CHALLENGE CONCEPT:
"The [TOPIC] Challenge - Show us your [specific action]"

📋 CHALLENGE RULES:
1. [Specific action or demonstration]
2. [Creative element or twist]
3. [Use specific hashtag]
4. [Tag friends to participate]

🎬 VIDEO STRUCTURE:
0-2 seconds: Quick intro/explanation
3-10 seconds: Demonstration
11-15 seconds: Results/reaction
16-20 seconds: Challenge others

🎵 AUDIO SELECTION:
- Use trending audio that fits the challenge
- Create original sound if unique
- Ensure audio matches video pace

📱 VISUAL STYLE:
- Good lighting and clear shots
- Multiple angles if needed
- Fun transitions and effects
- Text overlays for instructions

🏷️ HASHTAG STRATEGY:
- Create unique challenge hashtag
- Use trending hashtags
- Include niche-specific tags
- Add location tags if relevant

🎯 VIRALITY FACTORS:
- Easy to replicate
- Entertaining to watch
- Shareable content
- Clear instructions

Encourage duets and stitches for maximum reach!`
    },

    linkedin: {
        'Industry Insights': `Write a LinkedIn industry insights post about [TOPIC]. Structure:

💼 PROFESSIONAL HOOK:
"After [X years] in [industry], here's what I've learned about [TOPIC]..."
"The [industry] landscape is changing. Here's what you need to know about [TOPIC]..."

📊 DATA-DRIVEN CONTENT:
- Include relevant statistics
- Reference industry reports
- Share market trends
- Cite credible sources

🎯 KEY INSIGHTS (3-5 points):
1. [Insight with supporting data]
2. [Trend analysis with implications]
3. [Future predictions with reasoning]
4. [Actionable recommendations]

💡 PROFESSIONAL VALUE:
- What this means for professionals
- How to adapt or prepare
- Skills or knowledge needed
- Opportunities to watch

🤝 ENGAGEMENT:
- "What's your experience with [TOPIC]?"
- "How is your company handling this?"
- "What trends are you seeing?"

📈 CALL TO ACTION:
- Connect for more insights
- Share your perspective
- Follow for industry updates

Use professional tone, credible sources, and valuable insights. Optimal length: 150-300 words.`,

        'Thought Leadership': `Create a LinkedIn thought leadership post about [TOPIC]. Format:

🧠 THOUGHT-PROVOKING OPENER:
"Everyone talks about [TOPIC], but here's what they're missing..."
"Unpopular opinion: [TOPIC] isn't what you think it is..."

🔍 UNIQUE PERSPECTIVE:
- Challenge conventional wisdom
- Share contrarian viewpoint
- Provide fresh angle on common topic
- Back up with experience or data

📚 SUPPORTING EVIDENCE:
- Personal experience examples
- Case studies or client stories
- Industry research or trends
- Historical context or parallels

💭 DEEPER ANALYSIS:
- Why this perspective matters
- Implications for the industry
- What others are overlooking
- Future considerations

🎯 ACTIONABLE INSIGHTS:
- What professionals should do differently
- How to implement this thinking
- Questions to ask themselves
- Next steps to consider

🗣️ CONVERSATION STARTERS:
- "Do you agree or disagree?"
- "What's been your experience?"
- "How do you see this evolving?"

Position yourself as an industry expert with unique insights and valuable perspectives.`
    },

    twitter: {
        'Thread Series': `Create a Twitter thread about [TOPIC]. Structure:

🧵 THREAD OPENER (Tweet 1):
"🧵 THREAD: Everything you need to know about [TOPIC] (bookmark this)"
"🧵 Why [TOPIC] is more important than you think (7 tweets)"

📝 THREAD STRUCTURE:
Tweet 1: Hook + thread preview
Tweet 2: Context/background
Tweet 3-6: Main points (one per tweet)
Tweet 7: Key takeaway
Tweet 8: Call to action

💡 INDIVIDUAL TWEET FORMAT:
- Start with number (2/8)
- One clear point per tweet
- Use emojis for visual appeal
- Keep under 280 characters
- End with transition to next tweet

🎯 ENGAGEMENT TACTICS:
- Ask for retweets on valuable tweets
- Include relevant mentions
- Use trending hashtags
- Add polls in relevant tweets

📊 THREAD TIPS:
- Write in conversational tone
- Use bullet points and line breaks
- Include relevant links
- End with "Follow me for more [topic] insights"

🔄 AMPLIFICATION:
- Quote tweet your own thread
- Pin the thread to profile
- Share in relevant communities
- Cross-post key points as individual tweets

Threads get 3x more engagement than single tweets!`,

        'Industry Commentary': `Write Twitter commentary about [TOPIC/NEWS]. Format:

🔥 IMMEDIATE REACTION:
"Hot take on [recent news/trend about TOPIC]:"
"Everyone's talking about [TOPIC], but here's what they're missing:"

📰 CONTEXT SETTING:
- Brief background for those unfamiliar
- Why this matters now
- Key stakeholders involved

💭 YOUR ANALYSIS:
- Unique perspective or angle
- What others aren't saying
- Implications and consequences
- Historical parallels if relevant

🎯 PREDICTION/OUTLOOK:
- What happens next
- Who wins/loses
- Timeline expectations
- Factors to watch

🗣️ ENGAGEMENT:
- "What's your take?"
- "Am I missing something?"
- "Who else sees this differently?"

📱 TWITTER BEST PRACTICES:
- Use relevant hashtags
- Tag relevant accounts (sparingly)
- Keep it concise and punchy
- Use line breaks for readability
- Include relevant emojis

Be timely, authentic, and add genuine value to the conversation.`
    },

    reddit: {
        'Discussion Starter': `Create a Reddit discussion post for r/[SUBREDDIT] about [TOPIC]. Format:

📝 TITLE: "[Discussion] What's your experience with [TOPIC]?"

🎯 POST BODY:

CONTEXT:
Brief background about why you're asking
Personal experience or observation
Why this topic matters to the community

MAIN QUESTION:
Clear, specific question that invites discussion
Multiple angles to consider
Examples to help others understand

DISCUSSION PROMPTS:
- "For those who have experience with [TOPIC]..."
- "What would you do differently?"
- "Has anyone else noticed [specific aspect]?"
- "What are the pros and cons you've found?"

COMMUNITY VALUE:
- How responses will help others
- Why this discussion is timely
- What insights you're hoping to gain

REDDIT ETIQUETTE:
- Follow subreddit rules
- Use proper flair
- Be respectful and open-minded
- Engage with commenters
- Update post with key insights

🏷️ FORMATTING:
- Use bullet points and headers
- Include TL;DR if post is long
- Add relevant links if helpful
- Use proper Reddit markdown

Encourage genuine discussion and be prepared to actively participate in comments.`,

        'Tutorial/Guide': `Write a Reddit tutorial post about [TOPIC] for r/[SUBREDDIT]. Structure:

📚 TITLE: "[Guide] Complete beginner's guide to [TOPIC]"

🎯 POST INTRODUCTION:
- Who this guide is for
- What they'll learn
- Time/resources needed
- Your credentials/experience

📋 STEP-BY-STEP GUIDE:

**Step 1: [Action]**
- Detailed explanation
- Why this step matters
- Common mistakes to avoid
- Expected outcome

**Step 2: [Action]**
[Same format as Step 1]

[Continue for 5-8 steps]

🛠️ TOOLS/RESOURCES NEEDED:
- List all required items
- Free vs. paid options
- Where to find them
- Alternatives if applicable

⚠️ COMMON PITFALLS:
- Mistakes beginners make
- How to avoid them
- What to do if things go wrong
- When to seek help

💡 PRO TIPS:
- Advanced techniques
- Time-saving shortcuts
- Quality improvements
- Next-level strategies

🤝 COMMUNITY ENGAGEMENT:
- "Questions? Ask in comments"
- "Share your results"
- "What would you add to this guide?"

Include relevant links, images, and be prepared to answer questions in comments.`
    },

    quora: {
        'Expert Answer': `Write a comprehensive Quora answer about [TOPIC]. Structure:

❓ QUESTION RESTATEMENT:
Briefly restate the question to ensure clarity

🎯 DIRECT ANSWER:
Lead with the most important answer
Be clear and concise upfront

📚 DETAILED EXPLANATION:

**Background Context:**
- Why this question matters
- Common misconceptions
- Industry context

**Comprehensive Answer:**
- Multiple perspectives or approaches
- Step-by-step breakdown if applicable
- Real-world examples
- Supporting data or research

**Personal Experience:**
- Your relevant background
- Specific examples from your experience
- Lessons learned
- Results achieved

💡 ADDITIONAL INSIGHTS:
- Related considerations
- Advanced tips
- What most people miss
- Future trends or changes

🔗 HELPFUL RESOURCES:
- Relevant books, articles, or tools
- Where to learn more
- Communities or experts to follow

👤 AUTHOR CREDENTIALS:
Brief bio establishing your expertise
Relevant experience or qualifications
Why readers should trust your answer

📝 QUORA BEST PRACTICES:
- Use proper formatting and headers
- Include relevant images if helpful
- Be thorough but readable
- Cite sources when making claims
- Update answer if information changes

Aim for 500-1500 words depending on question complexity.`,

        'Personal Experience': `Share a personal experience answer on Quora about [TOPIC]. Format:

🎬 ENGAGING OPENER:
"I never thought [TOPIC] would [impact/change/teach] me [specific outcome], but here's what happened..."

📖 STORY SETUP:
- When and where this happened
- Your situation at the time
- What led to this experience
- Initial expectations or concerns

🎯 THE EXPERIENCE:
- Detailed account of what happened
- Challenges you faced
- Decisions you made
- Turning points or revelations

📈 RESULTS/OUTCOMES:
- What you achieved or learned
- How it changed your perspective
- Unexpected benefits or consequences
- Measurable results if applicable

💡 KEY LESSONS:
- What you'd do differently
- Advice for others in similar situations
- Warning signs to watch for
- Success factors that mattered most

🎁 VALUE FOR READERS:
- How others can apply these lessons
- What to expect if they try similar approach
- Resources that helped you
- Next steps they should consider

🤝 ENGAGEMENT:
- "Have you had similar experiences?"
- "What questions do you have?"
- "I'm happy to elaborate on any part"

Make it personal, authentic, and valuable to others facing similar situations.`
    }
};

// Social Media Platform Selection
function selectPlatform(platform) {
    selectedPlatform = platform;
    selectedContentType = '';
    
    // Update platform button styles
    document.querySelectorAll('.platform-btn').forEach(btn => {
        btn.classList.remove('border-blue-500', 'bg-blue-50');
        btn.classList.add('border-gray-200');
    });
    
    const selectedBtn = document.querySelector(`[data-platform="${platform}"]`);
    selectedBtn.classList.remove('border-gray-200');
    selectedBtn.classList.add('border-blue-500', 'bg-blue-50');
    
    // Show content type section
    const contentTypeSection = document.getElementById('contentTypeSection');
    contentTypeSection.classList.remove('hidden');
    
    // Populate content type buttons
    const contentTypeButtons = document.getElementById('contentTypeButtons');
    contentTypeButtons.innerHTML = '';
    
    contentTypes[platform].forEach(type => {
        const button = document.createElement('button');
        button.className = 'content-type-btn p-3 rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-200 text-sm';
        button.textContent = type;
        button.onclick = () => selectContentType(type);
        contentTypeButtons.appendChild(button);
    });
}

function selectContentType(contentType) {
    selectedContentType = contentType;
    
    // Update content type button styles
    document.querySelectorAll('.content-type-btn').forEach(btn => {
        btn.classList.remove('border-purple-500', 'bg-purple-50');
        btn.classList.add('border-gray-200');
    });
    
    event.target.classList.remove('border-gray-200');
    event.target.classList.add('border-purple-500', 'bg-purple-50');
}

function generateSocialPrompt() {
    const topic = document.getElementById('socialTopic').value;
    
    if (!selectedPlatform || !selectedContentType || !topic.trim()) {
        alert('Please select platform, content type, and enter a topic');
        return;
    }
    
    // Show loading state
    const button = event.target;
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Generating...';
    button.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        const platformData = platformPrompts[selectedPlatform];
        const promptTemplate = platformData[selectedContentType];
        
        if (promptTemplate) {
            const customizedPrompt = promptTemplate.replace(/\[TOPIC\]/g, topic);
            
            // Update UI
            const platformNames = {
                facebook: '📘 Facebook',
                instagram: '📷 Instagram', 
                tiktok: '🎵 TikTok',
                linkedin: '💼 LinkedIn',
                twitter: '🐦 X (Twitter)',
                reddit: '🤖 Reddit',
                quora: '❓ Quora'
            };
            
            document.getElementById('socialPromptTitle').textContent = `${platformNames[selectedPlatform]} - ${selectedContentType}`;
            document.getElementById('socialPromptSubtitle').textContent = `Topic: ${topic}`;
            document.getElementById('socialPromptContent').textContent = customizedPrompt;
            document.getElementById('socialSuccessMessage').textContent = `Your ${platformNames[selectedPlatform]} ${selectedContentType} prompt is ready to use.`;
            
            // Show output, hide input
            document.getElementById('socialMediaInput').classList.add('hidden');
            document.getElementById('socialMediaOutput').classList.remove('hidden');
        }
        
        // Reset button
        button.innerHTML = originalText;
        button.disabled = false;
    }, 2000);
}

function copySocialPrompt() {
    const promptContent = document.getElementById('socialPromptContent').textContent;
    navigator.clipboard.writeText(promptContent).then(() => {
        alert('Social media prompt copied to clipboard!');
    });
}

function resetSocialGenerator() {
    selectedPlatform = '';
    selectedContentType = '';
    document.getElementById('socialTopic').value = '';
    document.getElementById('contentTypeSection').classList.add('hidden');
    
    // Reset button styles
    document.querySelectorAll('.platform-btn').forEach(btn => {
        btn.classList.remove('border-blue-500', 'bg-blue-50');
        btn.classList.add('border-gray-200');
    });
    
    // Show input, hide output
    document.getElementById('socialMediaInput').classList.remove('hidden');
    document.getElementById('socialMediaOutput').classList.add('hidden');
}

// Bonus Product Generator
const bonusProducts = [
    {
        title: "Email Marketing Mastery Course",
        value: "$497",
        description: "Complete email marketing course with templates, sequences, and automation strategies",
        prompt: `Create a comprehensive email marketing course that complements [MAIN PRODUCT]. Include:

MODULE 1: Email List Building Fundamentals
- Lead magnet creation strategies
- Opt-in form optimization
- Landing page best practices
- Traffic generation for list building

MODULE 2: Email Sequence Mastery  
- Welcome sequence templates
- Nurture campaign strategies
- Sales sequence frameworks
- Re-engagement campaigns

MODULE 3: Advanced Email Marketing
- Segmentation strategies
- Personalization techniques
- A/B testing methodologies
- Analytics and optimization

MODULE 4: Automation & Workflows
- Drip campaign setup
- Behavioral triggers
- Customer journey mapping
- Advanced automation strategies

BONUS MATERIALS:
- 50+ email templates
- Subject line swipe file
- Email design templates
- Campaign planning worksheets

This course should position perfectly as a bonus for [MAIN PRODUCT] customers who want to maximize their marketing results.`
    },
    {
        title: "Social Media Content Calendar",
        value: "$297",
        description: "12-month content calendar with posts, hashtags, and engagement strategies",
        prompt: `Design a complete 12-month social media content calendar for [MAIN PRODUCT] users:

CALENDAR STRUCTURE:
- 365 days of content ideas
- Platform-specific adaptations (Instagram, Facebook, Twitter, LinkedIn, TikTok)
- Seasonal and holiday tie-ins
- Product promotion integration

CONTENT TYPES INCLUDED:
- Educational posts (40%)
- Behind-the-scenes content (20%)
- User-generated content ideas (15%)
- Product showcases (15%)
- Inspirational/motivational posts (10%)

MONTHLY THEMES:
January: New Year, Fresh Starts
February: Love & Relationships
March: Spring Renewal
April: Growth & Progress
May: Celebration & Achievement
June: Summer Preparation
July: Freedom & Independence
August: Back-to-School Energy
September: Autumn Transformation
October: Halloween & Spooky Fun
November: Gratitude & Thanksgiving
December: Holidays & Year-End Reflection

BONUS FEATURES:
- Hashtag research for each post
- Optimal posting times by platform
- Engagement strategies
- Content creation templates
- Analytics tracking sheets

Perfect complement to [MAIN PRODUCT] for users wanting consistent social media presence.`
    },
    {
        title: "Conversion Optimization Toolkit",
        value: "$397",
        description: "Complete toolkit for optimizing sales pages, landing pages, and conversion funnels",
        prompt: `Create a comprehensive conversion optimization toolkit for [MAIN PRODUCT] users:

TOOLKIT COMPONENTS:

1. LANDING PAGE OPTIMIZER
- 25+ high-converting landing page templates
- A/B testing frameworks
- Headline formulas that convert
- Call-to-action optimization guide

2. SALES PAGE BLUEPRINT
- Psychology-driven sales page structure
- Objection handling frameworks
- Social proof integration strategies
- Urgency and scarcity techniques

3. FUNNEL ANALYSIS TOOLS
- Conversion tracking templates
- Funnel performance calculators
- Customer journey mapping tools
- Revenue optimization strategies

4. COPYWRITING RESOURCES
- Power word libraries
- Emotional trigger frameworks
- Benefit-focused writing templates
- Testimonial collection systems

5. DESIGN ELEMENTS
- High-converting button designs
- Trust badge collections
- Progress indicator templates
- Mobile optimization checklists

BONUS MATERIALS:
- Video tutorials for each tool
- Case study examples
- Implementation checklists
- ROI calculation templates

This toolkit perfectly complements [MAIN PRODUCT] by helping users maximize their conversion rates and revenue.`
    },
    {
        title: "AI Prompt Library Pro",
        value: "$197",
        description: "1000+ AI prompts for marketing, content creation, and business growth",
        prompt: `Develop a comprehensive AI prompt library for [MAIN PRODUCT] users:

PROMPT CATEGORIES:

1. CONTENT CREATION (200+ prompts)
- Blog post ideas and outlines
- Social media content
- Video script templates
- Podcast episode structures

2. MARKETING COPY (200+ prompts)
- Sales page copy
- Email marketing
- Ad copy creation
- Product descriptions

3. BUSINESS STRATEGY (150+ prompts)
- Market research
- Competitor analysis
- Business planning
- Growth strategies

4. CUSTOMER ENGAGEMENT (150+ prompts)
- Customer service responses
- Community building
- Feedback collection
- Relationship nurturing

5. PRODUCTIVITY & AUTOMATION (150+ prompts)
- Workflow optimization
- Task automation
- Time management
- Process improvement

6. CREATIVE BRAINSTORMING (150+ prompts)
- Innovation techniques
- Problem-solving frameworks
- Idea generation
- Creative thinking

ORGANIZATION FEATURES:
- Searchable database
- Category filtering
- Favorite prompts system
- Custom prompt creation templates

BONUS CONTENT:
- AI tool recommendations
- Prompt optimization guide
- Best practices documentation
- Video training series

Perfect addition to [MAIN PRODUCT] for users wanting to leverage AI across their entire business.`
    },
    {
        title: "Traffic Generation Masterclass",
        value: "$697",
        description: "Complete training on driving targeted traffic to your offers and content",
        prompt: `Create a comprehensive traffic generation masterclass for [MAIN PRODUCT] users:

MASTERCLASS MODULES:

MODULE 1: ORGANIC TRAFFIC FOUNDATIONS
- SEO fundamentals and keyword research
- Content marketing strategies
- Blog traffic optimization
- Long-tail keyword targeting

MODULE 2: SOCIAL MEDIA TRAFFIC
- Platform-specific strategies
- Viral content creation
- Community building techniques
- Influencer collaboration methods

MODULE 3: PAID ADVERTISING MASTERY
- Facebook/Instagram ads
- Google Ads optimization
- YouTube advertising
- LinkedIn marketing

MODULE 4: EMAIL TRAFFIC GENERATION
- List building strategies
- Newsletter optimization
- Cross-promotion techniques
- Referral systems

MODULE 5: PARTNERSHIP TRAFFIC
- Joint venture strategies
- Guest posting systems
- Podcast appearances
- Collaboration frameworks

MODULE 6: ADVANCED TRAFFIC TACTICS
- Retargeting campaigns
- Lookalike audiences
- Traffic arbitrage
- Conversion optimization

BONUS MATERIALS:
- Traffic tracking templates
- Campaign planning worksheets
- Budget allocation guides
- ROI calculation tools
- Case study examples

This masterclass perfectly complements [MAIN PRODUCT] by ensuring users can drive quality traffic to their content and offers.`
    }
];

function generateBonusProducts() {
    const productUrl = document.getElementById('bonusProductUrl').value;
    if (!productUrl.trim()) {
        alert('Please enter a product URL or name first');
        return;
    }

    // Show loading state
    const button = event.target;
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Generating...';
    button.disabled = true;

    // Simulate API call
    setTimeout(() => {
        // Select 3 random bonus products
        const shuffled = [...bonusProducts].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 3);
        
        // Generate HTML for bonus products
        let bonusHtml = '';
        selected.forEach((bonus, index) => {
            const prompt = bonus.prompt.replace(/\[MAIN PRODUCT\]/g, productUrl);
            bonusHtml += `
                <div class="bg-gray-50 rounded-lg p-6 border">
                    <div class="flex items-start justify-between mb-4">
                        <div>
                            <h3 class="text-xl font-bold text-gray-900 mb-1">${bonus.title}</h3>
                            <p class="text-green-600 font-semibold text-lg mb-2">Value: ${bonus.value}</p>
                            <p class="text-gray-600">${bonus.description}</p>
                        </div>
                        <button onclick="copyBonusPrompt(${index})" class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2 shrink-0">
                            <i class="fas fa-copy"></i>
                            Copy Prompt
                        </button>
                    </div>
                    
                    <div class="bg-white rounded-lg p-4 border">
                        <h4 class="font-semibold text-gray-900 mb-2">Creation Prompt:</h4>
                        <div class="max-h-32 overflow-y-auto">
                            <pre class="whitespace-pre-wrap text-sm text-gray-700 font-mono" id="bonusPrompt${index}">${prompt}</pre>
                        </div>
                    </div>
                </div>
            `;
        });

        document.getElementById('bonusProductsList').innerHTML = bonusHtml;
        document.getElementById('bonusGeneratorInput').classList.add('hidden');
        document.getElementById('bonusGeneratorOutput').classList.remove('hidden');
        
        // Reset button
        button.innerHTML = originalText;
        button.disabled = false;
    }, 2000);
}

function copyBonusPrompt(index) {
    const promptContent = document.getElementById(`bonusPrompt${index}`).innerText;
    navigator.clipboard.writeText(promptContent).then(() => {
        alert('Bonus prompt copied to clipboard!');
    });
}

function resetBonusGenerator() {
    document.getElementById('bonusGeneratorInput').classList.remove('hidden');
    document.getElementById('bonusGeneratorOutput').classList.add('hidden');
    document.getElementById('bonusProductUrl').value = '';
}

// Prompt Library Functions - EXPANDED WITH LEAD MAGNETS
const prompts = {
    'blog-post': `Write a comprehensive blog post about [TOPIC]. Structure it with:

1. Attention-grabbing headline
2. Compelling introduction that hooks the reader
3. 5-7 main points with subheadings
4. Real examples and case studies
5. Actionable tips readers can implement
6. Strong conclusion with call-to-action

Make it SEO-optimized with relevant keywords and ensure it provides genuine value to readers. Target length: 1500-2000 words.`,

    'social-media': `Create 10 engaging social media posts about [TOPIC] for [PLATFORM]. Include:

- Mix of educational, entertaining, and promotional content
- Platform-appropriate hashtags
- Call-to-action for engagement
- Visual content suggestions
- Optimal posting times
- Engagement strategies

Make each post unique and valuable to your audience while maintaining brand consistency.`,

    'video-script': `Write a compelling video script for [VIDEO TOPIC] that is [DURATION] long. Include:

HOOK (First 15 seconds):
- Attention-grabbing opening
- Clear value proposition
- Reason to keep watching

MAIN CONTENT:
- 3-5 key points
- Stories and examples
- Visual cues and transitions
- Engagement elements

CALL-TO-ACTION:
- Clear next step
- Compelling reason to act
- Multiple ways to engage

Format with timestamps and visual directions.`,

    'sales-page': `Create high-converting sales page copy for [PRODUCT/SERVICE]. Structure:

HEADLINE: Benefit-driven and attention-grabbing
SUBHEADLINE: Clarifies the main benefit
PROBLEM: Identify customer pain points
SOLUTION: Present your product as the answer
BENEFITS: List key benefits (not features)
SOCIAL PROOF: Testimonials and case studies
OBJECTION HANDLING: Address common concerns
GUARANTEE: Risk reversal offer
CALL-TO-ACTION: Clear and compelling
URGENCY: Scarcity or time-sensitive elements

Use persuasive copywriting techniques and psychological triggers.`,

    'email-marketing': `Create a 5-email welcome sequence for [BUSINESS/PRODUCT]:

EMAIL 1: Welcome & Set Expectations
- Warm welcome message
- What they can expect
- First valuable tip/resource

EMAIL 2: Your Story/Origin
- Personal background
- Why you started
- Build connection and trust

EMAIL 3: Valuable Content/Training
- Actionable tips
- Free resource
- Demonstrate expertise

EMAIL 4: Social Proof & Case Studies
- Success stories
- Testimonials
- Build credibility

EMAIL 5: Soft Pitch & Next Steps
- Introduce paid offering
- Clear value proposition
- Strong call-to-action

Each email should be 200-300 words with engaging subject lines.`,

    'ad-copy': `Write compelling ad copy for [PRODUCT/SERVICE] targeting [AUDIENCE]:

HEADLINE: Attention-grabbing and benefit-focused
BODY TEXT: 
- Hook with pain point or desire
- Present solution
- Key benefits (2-3 maximum)
- Social proof element
- Clear call-to-action

Create 3 variations:
1. Problem-focused approach
2. Benefit-focused approach  
3. Social proof-focused approach

Include suggested visuals and targeting recommendations. Keep copy concise and action-oriented.`,

    // NEW LEAD MAGNET PROMPTS
    'ebook-lead-magnet': `Create a comprehensive eBook lead magnet for [NICHE/TOPIC]. Structure:

TITLE: "The Ultimate Guide to [TOPIC]: [SPECIFIC BENEFIT]"

OUTLINE:
Chapter 1: Introduction & Problem Overview
- Define the main problem your audience faces
- Statistics and research to support the problem
- Promise of what they'll learn

Chapter 2: Foundation Knowledge
- Essential concepts they need to understand
- Common myths and misconceptions
- Framework or methodology overview

Chapter 3: Step-by-Step Solution
- Detailed action steps (5-7 steps)
- Real examples and case studies
- Common mistakes to avoid

Chapter 4: Advanced Strategies
- Pro tips and insider secrets
- Tools and resources recommendations
- Optimization techniques

Chapter 5: Implementation & Next Steps
- Action plan template
- Success metrics to track
- How to get continued support

BONUS SECTIONS:
- Quick reference checklist
- Resource links and tools
- FAQ section

TARGET: 15-25 pages, highly actionable content that positions you as the expert while solving a specific problem.`,

    'checklist-lead-magnet': `Create a comprehensive checklist lead magnet for [PROCESS/GOAL]. Format:

TITLE: "The Complete [PROCESS] Checklist: Never Miss a Critical Step Again"

INTRODUCTION:
- Why this checklist is essential
- How to use it effectively
- What results to expect

MAIN CHECKLIST SECTIONS:

PRE-[PROCESS] PREPARATION:
□ [Step 1 with brief explanation]
□ [Step 2 with brief explanation]
□ [Step 3 with brief explanation]
□ [Continue with 5-7 preparation steps]

DURING [PROCESS]:
□ [Action step 1]
□ [Action step 2]
□ [Action step 3]
□ [Continue with 8-12 action steps]

POST-[PROCESS] OPTIMIZATION:
□ [Follow-up step 1]
□ [Follow-up step 2]
□ [Follow-up step 3]
□ [Continue with 3-5 optimization steps]

BONUS SECTION:
□ Pro tips for advanced users
□ Common pitfalls to avoid
□ Resources and tools needed

Make each item actionable with clear success criteria. Include space for notes and completion dates.`,

    'template-lead-magnet': `Create a valuable template lead magnet for [SPECIFIC USE CASE]. Include:

TITLE: "[SPECIFIC OUTCOME] Template: Copy, Customize & Get Results"

TEMPLATE COMPONENTS:

1. MAIN TEMPLATE:
- Pre-filled sections with placeholder text
- Clear instructions for customization
- Professional formatting and design
- Multiple format options (Word, PDF, Google Doc)

2. INSTRUCTION GUIDE:
- Step-by-step customization process
- Best practices for each section
- Examples of successful implementations
- Common mistakes to avoid

3. BONUS VARIATIONS:
- 3 different template styles/approaches
- Industry-specific adaptations
- Beginner vs. advanced versions

4. RESOURCE SECTION:
- Related tools and software
- Additional templates that complement this one
- Links to helpful articles and guides

CUSTOMIZATION AREAS:
- [Specific field 1] with guidance
- [Specific field 2] with examples
- [Specific field 3] with best practices
- [Continue with 5-8 customizable sections]

Ensure the template saves significant time while delivering professional results.`,

    'video-series-lead-magnet': `Create a multi-part video training series lead magnet for [TOPIC]. Structure:

SERIES TITLE: "[SPECIFIC OUTCOME] Video Masterclass: [TIME FRAME] to [RESULT]"

VIDEO 1: Foundation & Mindset (8-10 minutes)
- Welcome and series overview
- Common misconceptions about [TOPIC]
- Success mindset and expectations
- What they'll achieve by the end

VIDEO 2: Strategy & Planning (10-12 minutes)
- Core strategy framework
- Planning template walkthrough
- Goal setting and metrics
- Action step assignment

VIDEO 3: Implementation Tactics (12-15 minutes)
- Step-by-step implementation
- Live demonstration or case study
- Tools and resources needed
- Troubleshooting common issues

VIDEO 4: Optimization & Scaling (10-12 minutes)
- How to improve results
- Advanced techniques
- Scaling strategies
- Measuring success

VIDEO 5: Next Steps & Resources (8-10 minutes)
- Recap of key learnings
- Implementation timeline
- Additional resources
- How to get continued support

BONUS MATERIALS:
- PDF workbook with exercises
- Template downloads
- Resource links document
- Private Facebook group access

Each video should be highly actionable with clear takeaways and next steps.`,

    'quiz-lead-magnet': `Create an engaging quiz lead magnet for [NICHE/TOPIC]. Structure:

QUIZ TITLE: "What's Your [SPECIFIC AREA] Style? Discover Your Personalized Path to [DESIRED OUTCOME]"

QUIZ STRUCTURE:

INTRODUCTION:
- Hook: Why this quiz matters
- What they'll discover
- How long it takes (2-3 minutes)
- Privacy assurance

QUESTIONS (8-12 questions):

Question 1: [Situation-based question]
A) [Option A - represents personality type 1]
B) [Option B - represents personality type 2]
C) [Option C - represents personality type 3]
D) [Option D - represents personality type 4]

[Continue with 7-11 more questions covering different aspects]

RESULT TYPES (4 distinct personalities):

TYPE 1: "The [Personality Name]"
- Description of this type
- Strengths and challenges
- Personalized recommendations
- Specific action steps
- Recommended resources

TYPE 2: "The [Personality Name]"
[Same structure as Type 1]

TYPE 3: "The [Personality Name]"
[Same structure as Type 1]

TYPE 4: "The [Personality Name]"
[Same structure as Type 1]

FOLLOW-UP SEQUENCE:
- Immediate result delivery
- Detailed PDF report
- Personalized email series (5 emails)
- Product recommendations based on type

Make questions engaging and results highly personalized with specific action steps.`,

    'toolkit-lead-magnet': `Create a comprehensive toolkit lead magnet for [SPECIFIC GOAL/PROCESS]. Include:

TOOLKIT TITLE: "The Complete [GOAL] Toolkit: Everything You Need to [SPECIFIC OUTCOME]"

TOOLKIT COMPONENTS:

1. PLANNING TOOLS:
- Goal setting worksheet
- Project timeline template
- Budget planning spreadsheet
- Resource allocation guide

2. IMPLEMENTATION TOOLS:
- Step-by-step checklists
- Progress tracking sheets
- Quality control templates
- Troubleshooting guide

3. OPTIMIZATION TOOLS:
- Performance metrics dashboard
- A/B testing templates
- Improvement tracking sheets
- ROI calculation tools

4. REFERENCE MATERIALS:
- Quick reference guides
- Best practices cheat sheet
- Common mistakes to avoid
- Industry benchmarks

5. BONUS RESOURCES:
- Recommended tools and software
- Expert interview transcripts
- Case study examples
- Community access information

ORGANIZATION:
- Clear folder structure
- Numbered files for sequence
- Master index document
- Video walkthrough of toolkit

Each tool should be immediately usable and save significant time while improving results.`,

    'swipe-file-lead-magnet': `Create a high-value swipe file lead magnet for [MARKETING/COPY TYPE]. Structure:

SWIPE FILE TITLE: "[NUMBER]+ Proven [COPY TYPE] Templates That Convert Like Crazy"

ORGANIZATION:

SECTION 1: HIGH-CONVERTING HEADLINES (15-20 examples)
- Problem/solution headlines
- Benefit-driven headlines
- Curiosity-gap headlines
- Social proof headlines
- Urgency/scarcity headlines

SECTION 2: OPENING HOOKS (10-15 examples)
- Story-based openings
- Question-based hooks
- Statistic/fact hooks
- Controversial statements
- Personal revelation hooks

SECTION 3: BODY COPY FRAMEWORKS (8-10 templates)
- AIDA framework examples
- PAS (Problem-Agitate-Solution) templates
- Before/After/Bridge structures
- Features to benefits conversions
- Objection handling scripts

SECTION 4: CALL-TO-ACTION TEMPLATES (12-15 examples)
- Urgency-based CTAs
- Benefit-focused CTAs
- Risk-reversal CTAs
- Social proof CTAs
- Curiosity-driven CTAs

SECTION 5: CLOSING TECHNIQUES (8-10 examples)
- Scarcity closers
- Guarantee closers
- Bonus stack closers
- Story-based closers
- Question-based closers

BONUS SECTION:
- Industry-specific adaptations
- A/B testing variations
- Performance notes for each template
- Customization guidelines

Include conversion rates and context for each example where possible.`,

    'resource-guide-lead-magnet': `Create a comprehensive resource guide lead magnet for [NICHE/TOPIC]. Format:

GUIDE TITLE: "The Ultimate [NICHE] Resource Guide: [NUMBER]+ Tools, Tips & Strategies for [SPECIFIC OUTCOME]"

GUIDE STRUCTURE:

INTRODUCTION:
- How to use this guide effectively
- Categories overview
- Rating system explanation
- Update schedule information

SECTION 1: ESSENTIAL TOOLS (10-15 tools)
For each tool include:
- Tool name and website
- What it does (2-3 sentences)
- Best use cases
- Pricing information
- Pros and cons
- Rating (1-5 stars)
- Alternative options

SECTION 2: LEARNING RESOURCES (8-12 resources)
- Books (top 3-5)
- Courses (top 3-5)
- Podcasts (top 3-5)
- YouTube channels (top 3-5)
- Blogs/websites (top 5-8)

SECTION 3: COMMUNITIES & NETWORKING (5-8 communities)
- Facebook groups
- LinkedIn groups
- Discord servers
- Forums
- Local meetups
- Conferences and events

SECTION 4: FREE RESOURCES (10-15 resources)
- Free tools and software
- Free courses and training
- Free templates and downloads
- Free calculators and assessments

SECTION 5: ADVANCED RESOURCES (5-8 resources)
- Premium tools for scaling
- Advanced training programs
- Certification programs
- Done-for-you services

BONUS SECTION:
- Quick start guide
- Resource comparison charts
- Budget-friendly alternatives
- Mobile apps and extensions

Include personal recommendations and why each resource made the list.`
};

function copyPrompt(promptKey) {
    const promptText = prompts[promptKey];
    if (promptText) {
        navigator.clipboard.writeText(promptText).then(() => {
            alert('Prompt copied to clipboard!');
        });
    }
}

// Close modals when clicking outside
document.addEventListener('click', function(event) {
    const modals = ['demoModal', 'emailModal', 'bonusGeneratorModal', 'promptLibraryModal', 'socialMediaModal'];
    
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (event.target === modal) {
            closeModal(modalId);
        }
    });
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
});

// Add floating animation to hero elements
document.addEventListener('DOMContentLoaded', function() {
    const floatingElements = document.querySelectorAll('.animate-float');
    
    floatingElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.5}s`;
    });
});
