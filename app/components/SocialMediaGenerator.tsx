'use client'

import { useState } from 'react'
import { Share2, Copy, CheckCircle, X, Sparkles } from 'lucide-react'

interface SocialMediaGeneratorProps {
  onClose: () => void
}

export default function SocialMediaGenerator({ onClose }: SocialMediaGeneratorProps) {
  const [selectedPlatform, setSelectedPlatform] = useState('')
  const [topic, setTopic] = useState('')
  const [contentType, setContentType] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedPrompts, setGeneratedPrompts] = useState<string[]>([])

  const platforms = [
    { id: 'facebook', name: 'Facebook', icon: '📘', color: 'blue' },
    { id: 'instagram', name: 'Instagram', icon: '📷', color: 'pink' },
    { id: 'tiktok', name: 'TikTok', icon: '🎵', color: 'red' },
    { id: 'linkedin', name: 'LinkedIn', icon: '💼', color: 'blue' },
    { id: 'twitter', name: 'X (Twitter)', icon: '🐦', color: 'gray' },
    { id: 'reddit', name: 'Reddit', icon: '🤖', color: 'orange' },
    { id: 'quora', name: 'Quora', icon: '❓', color: 'red' }
  ]

  const contentTypes = {
    facebook: ['Educational Post', 'Story/Personal', 'Behind the Scenes', 'User Generated Content', 'Live Video', 'Event Promotion'],
    instagram: ['Photo Post', 'Carousel Post', 'Story Content', 'Reel Script', 'IGTV Video', 'User Generated Content'],
    tiktok: ['Trending Challenge', 'Educational Content', 'Behind the Scenes', 'Duet/Stitch', 'Trending Audio', 'How-To Video'],
    linkedin: ['Industry Insights', 'Professional Story', 'Company Update', 'Thought Leadership', 'Career Advice', 'Industry News'],
    twitter: ['Thread Series', 'Quick Tips', 'Industry Commentary', 'Personal Insights', 'News Response', 'Poll/Question'],
    reddit: ['Discussion Starter', 'Ask Me Anything', 'Tutorial/Guide', 'Community Question', 'Resource Share', 'Experience Share'],
    quora: ['Expert Answer', 'Detailed Explanation', 'Personal Experience', 'Step-by-Step Guide', 'Comparison Analysis', 'Industry Insights']
  }

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

Use storytelling techniques and emotional connection. Length: 150-300 words.`,

      'Behind the Scenes': `Create a behind-the-scenes Facebook post about [TOPIC/PROCESS]. Format:

🎭 INTRO: "Ever wondered what goes on behind the scenes when [PROCESS]?"

🔍 REVEAL THE PROCESS:
- Step-by-step breakdown
- Challenges most people don't see
- Time/effort involved
- Tools or resources used

😅 HONEST MOMENTS:
- What doesn't always go as planned
- Learning moments or mistakes
- The reality vs. expectation

✨ WHY IT MATTERS:
- Why you're sharing this
- What value it provides
- How it helps your audience

📸 VISUAL ELEMENTS:
- Suggest photo/video opportunities
- Multiple image carousel ideas

Make it authentic and relatable. Show the human side of your work.`
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

      'Carousel Post': `Design an Instagram carousel post about [TOPIC]. Plan:

🎠 SLIDE STRUCTURE (5-10 slides):

SLIDE 1 - HOOK:
- Eye-catching title
- Clear benefit statement
- Visual that stops scrolling

SLIDE 2-8 - CONTENT:
- One key point per slide
- Mix of text and visuals
- Keep text minimal per slide
- Use consistent design theme

SLIDE 9/10 - CALL TO ACTION:
- Summarize key points
- Clear next step
- Follow/save/share request

📝 CAPTION:
- Tease the carousel content
- "Swipe to learn [specific benefit]"
- Include relevant hashtags
- Ask engagement question

🎨 DESIGN CONSISTENCY:
- Color scheme suggestions
- Font recommendations
- Visual style guide
- Template ideas

Carousel posts get 3x more engagement than single posts!`,

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
  }

  const generateSocialPrompts = async () => {
    if (!selectedPlatform || !topic || !contentType) {
      alert('Please fill in all fields')
      return
    }

    setIsGenerating(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const platformData = platformPrompts[selectedPlatform as keyof typeof platformPrompts]
    const promptTemplate = platformData[contentType as keyof typeof platformData]
    
    if (promptTemplate) {
      const customizedPrompt = promptTemplate.replace(/\[TOPIC\]/g, topic)
      setGeneratedPrompts([customizedPrompt])
    }
    
    setIsGenerating(false)
  }

  const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content)
    alert('Prompt copied to clipboard!')
  }

  const resetGenerator = () => {
    setGeneratedPrompts([])
    setSelectedPlatform('')
    setTopic('')
    setContentType('')
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-xl">
                <Share2 className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">📱 Social Media Prompt Generator</h2>
                <p className="text-blue-100">Create platform-specific content prompts for maximum engagement</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {!generatedPrompts.length ? (
            <div className="space-y-6">
              {/* Platform Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Platform
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {platforms.map((platform) => (
                    <button
                      key={platform.id}
                      onClick={() => {
                        setSelectedPlatform(platform.id)
                        setContentType('')
                      }}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        selectedPlatform === platform.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-2xl mb-2">{platform.icon}</div>
                      <div className="font-medium text-sm">{platform.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Content Type Selection */}
              {selectedPlatform && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Content Type
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {contentTypes[selectedPlatform as keyof typeof contentTypes]?.map((type) => (
                      <button
                        key={type}
                        onClick={() => setContentType(type)}
                        className={`p-3 rounded-lg border-2 transition-all duration-200 text-sm ${
                          contentType === type
                            ? 'border-purple-500 bg-purple-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Topic Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Topic or Subject
                </label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g., digital marketing, productivity tips, healthy recipes..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2">What You'll Get:</h3>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Platform-optimized content structure</li>
                  <li>• Engagement-focused formatting</li>
                  <li>• Hashtag and timing recommendations</li>
                  <li>• Visual content suggestions</li>
                  <li>• Best practices for maximum reach</li>
                </ul>
              </div>

              <button
                onClick={generateSocialPrompts}
                disabled={isGenerating || !selectedPlatform || !topic || !contentType}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <Sparkles className="w-5 h-5 animate-spin" />
                    Generating Social Media Prompt...
                  </>
                ) : (
                  <>
                    <Share2 className="w-5 h-5" />
                    Generate Social Media Prompt
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-2 text-green-700 mb-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Social Media Prompt Generated Successfully!</span>
                </div>
                <p className="text-green-600 text-sm">
                  Your {platforms.find(p => p.id === selectedPlatform)?.name} {contentType} prompt is ready to use.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {platforms.find(p => p.id === selectedPlatform)?.icon} {platforms.find(p => p.id === selectedPlatform)?.name} - {contentType}
                    </h3>
                    <p className="text-gray-600">Topic: {topic}</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(generatedPrompts[0])}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 shrink-0"
                  >
                    <Copy className="w-4 h-4" />
                    Copy Prompt
                  </button>
                </div>
                
                <div className="bg-white rounded-lg p-4 border">
                  <div className="max-h-96 overflow-y-auto">
                    <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono">
                      {generatedPrompts[0]}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={resetGenerator}
                  className="flex-1 bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                >
                  Generate New Prompt
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
