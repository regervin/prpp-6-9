'use client'

import { useState } from 'react'
import { Gift, Sparkles, Copy, CheckCircle, X } from 'lucide-react'

interface BonusProductGeneratorProps {
  onClose: () => void
}

export default function BonusProductGenerator({ onClose }: BonusProductGeneratorProps) {
  const [productUrl, setProductUrl] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedPrompts, setGeneratedPrompts] = useState<string[]>([])

  const bonusProductPrompts = [
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
  ]

  const generateBonusPrompts = async () => {
    if (!productUrl.trim()) {
      alert('Please enter a product URL first')
      return
    }

    setIsGenerating(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Select 3 random bonus products
    const shuffled = [...bonusProductPrompts].sort(() => 0.5 - Math.random())
    const selected = shuffled.slice(0, 3)
    
    const prompts = selected.map(bonus => 
      bonus.prompt.replace(/\[MAIN PRODUCT\]/g, productUrl)
    )
    
    setGeneratedPrompts(prompts)
    setIsGenerating(false)
  }

  const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content)
    alert('Prompt copied to clipboard!')
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-xl">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">🎁 Bonus Product Generator</h2>
                <p className="text-purple-100">Create valuable bonus products to increase your offer value</p>
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
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product URL or Name
                </label>
                <input
                  type="text"
                  value={productUrl}
                  onChange={(e) => setProductUrl(e.target.value)}
                  placeholder="Enter the main product URL or name..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h3 className="font-semibold text-purple-900 mb-2">What You'll Get:</h3>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• 3 high-value bonus product ideas</li>
                  <li>• Complete creation prompts for each bonus</li>
                  <li>• Estimated value for each bonus product</li>
                  <li>• Ready-to-use content outlines</li>
                </ul>
              </div>

              <button
                onClick={generateBonusPrompts}
                disabled={isGenerating || !productUrl.trim()}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <Sparkles className="w-5 h-5 animate-spin" />
                    Generating Bonus Products...
                  </>
                ) : (
                  <>
                    <Gift className="w-5 h-5" />
                    Generate Bonus Products
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-2 text-green-700 mb-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Bonus Products Generated Successfully!</span>
                </div>
                <p className="text-green-600 text-sm">
                  Here are 3 high-value bonus products you can create to complement your main offer.
                </p>
              </div>

              {bonusProductPrompts.slice(0, 3).map((bonus, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 border">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{bonus.title}</h3>
                      <p className="text-green-600 font-semibold text-lg mb-2">Value: {bonus.value}</p>
                      <p className="text-gray-600">{bonus.description}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(generatedPrompts[index])}
                      className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2 shrink-0"
                    >
                      <Copy className="w-4 h-4" />
                      Copy Prompt
                    </button>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border">
                    <h4 className="font-semibold text-gray-900 mb-2">Creation Prompt:</h4>
                    <div className="max-h-32 overflow-y-auto">
                      <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono">
                        {generatedPrompts[index]}
                      </pre>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setGeneratedPrompts([])
                    setProductUrl('')
                  }}
                  className="flex-1 bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                >
                  Generate New Bonuses
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
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
