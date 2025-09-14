import { Button, Badge } from '../ui'
import { useWordPressPage } from '../../hooks/useWordPress'

const ACFTeamSection = ({ pageSlug }) => {
  const { content, loading, error } = useWordPressPage(pageSlug)

  if (loading) return <div>Loading team section...</div>
  if (error) return <div>Error loading team section: {error.message}</div>

  // Extract ACF data
  const acf = content?.acf || {}
  const {
    team_section_badge_icon = 'fa-solid fa-users',
    team_section_badge_text = 'TEAM COMMAND STRUCTURE',
    team_section_title_line1 = 'ELITE',
    team_section_title_line2 = 'OPERATORS',
    team_section_description = 'Our command structure consists of battle-tested professionals with specialized expertise in cutting-edge technologies and tactical mission execution',
    join_team_title = 'Join the Elite Force',
    join_team_description = "We're always seeking exceptional talent to join our tactical operations team. Do you have what it takes to operate at the highest level?",
    join_team_button_1_text = 'View Open Positions',
    join_team_button_2_text = 'Submit Application'
  } = acf

  // Process Team Members from ACF flat structure
  const processTeamMembers = (acfData) => {
    const members = []
    let memberIndex = 0
    
    while (acfData[`team_members_${memberIndex}_name`]) {
      // Process achievements array
      const achievements = []
      let achievementIndex = 0
      while (acfData[`team_members_${memberIndex}_achievements_${achievementIndex}_achievement`]) {
        achievements.push(acfData[`team_members_${memberIndex}_achievements_${achievementIndex}_achievement`])
        achievementIndex++
      }

      // Process skills array
      const skills = []
      let skillIndex = 0
      while (acfData[`team_members_${memberIndex}_skills_${skillIndex}_skill`]) {
        skills.push(acfData[`team_members_${memberIndex}_skills_${skillIndex}_skill`])
        skillIndex++
      }

      const member = {
        id: memberIndex + 1,
        name: acfData[`team_members_${memberIndex}_name`],
        rank: acfData[`team_members_${memberIndex}_rank`],
        specialization: acfData[`team_members_${memberIndex}_specialization`],
        avatar: acfData[`team_members_${memberIndex}_avatar`],
        experience: acfData[`team_members_${memberIndex}_experience`],
        achievements,
        skills,
        statusColor: acfData[`team_members_${memberIndex}_status_color`],
        borderColor: acfData[`team_members_${memberIndex}_border_color`]
      }

      members.push(member)
      memberIndex++
    }

    return members
  }

  // Process Join Team Benefits from ACF flat structure
  const processJoinTeamBenefits = (acfData) => {
    const benefits = []
    let benefitIndex = 0
    
    while (acfData[`join_team_benefits_${benefitIndex}_title`]) {
      const benefit = {
        icon: acfData[`join_team_benefits_${benefitIndex}_icon`],
        icon_color: acfData[`join_team_benefits_${benefitIndex}_icon_color`],
        icon_bg: acfData[`join_team_benefits_${benefitIndex}_icon_bg`],
        title: acfData[`join_team_benefits_${benefitIndex}_title`],
        description: acfData[`join_team_benefits_${benefitIndex}_description`]
      }
      
      benefits.push(benefit)
      benefitIndex++
    }
    
    return benefits
  }

  // Default team members (fallback)
  const defaultTeamMembers = [
    {
      id: 1,
      name: 'Marcus Steel',
      rank: 'Operations Commander',
      specialization: 'Strategic Leadership & AI Systems',
      avatar: '/src/assets/images/team/marcus-steel.jpg',
      experience: '15+ Years',
      achievements: ['Fortune 500 Transformations', 'AI Strategy Expert', 'Combat Systems Veteran'],
      skills: ['Strategic Planning', 'AI Architecture', 'Team Leadership'],
      statusColor: 'fire-orange',
      borderColor: 'hover:border-fire-orange'
    },
    {
      id: 2,
      name: 'Sarah Phoenix',
      rank: 'AI Division Chief',
      specialization: 'Machine Learning & Neural Networks',
      avatar: '/src/assets/images/team/sarah-phoenix.jpg',
      experience: '12+ Years',
      achievements: ['PhD Machine Learning', '50+ AI Models Deployed', 'Research Publications'],
      skills: ['Deep Learning', 'Computer Vision', 'NLP Systems'],
      statusColor: 'steel-blue',
      borderColor: 'hover:border-steel-blue'
    },
    {
      id: 3,
      name: 'Jake Hunter',
      rank: 'Security Director',
      specialization: 'Cybersecurity & Threat Intelligence',
      avatar: '/src/assets/images/team/jake-hunter.jpg',
      experience: '14+ Years',
      achievements: ['CISSP Certified', 'Zero-Breach Record', 'Government Security Clearance'],
      skills: ['Penetration Testing', 'Security Architecture', 'Incident Response'],
      statusColor: 'warning-amber',
      borderColor: 'hover:border-warning-amber'
    },
    {
      id: 4,
      name: 'Alex Rivera',
      rank: 'Cloud Operations Lead',
      specialization: 'Infrastructure & DevOps Engineering',
      avatar: '/src/assets/images/team/alex-rivera.jpg',
      experience: '10+ Years',
      achievements: ['AWS Solutions Architect', 'Kubernetes Expert', 'Cost Optimization Specialist'],
      skills: ['Cloud Architecture', 'Container Orchestration', 'Infrastructure as Code'],
      statusColor: 'tactical-green',
      borderColor: 'hover:border-tactical-green'
    },
    {
      id: 5,
      name: 'Diana Cross',
      rank: 'Data Engineering Chief',
      specialization: 'Big Data & Analytics Platforms',
      avatar: '/src/assets/images/team/diana-cross.jpg',
      experience: '11+ Years',
      achievements: ['Data Architecture Expert', 'Real-time Analytics', 'Petabyte-scale Systems'],
      skills: ['Data Pipelines', 'Real-time Processing', 'Analytics Platforms'],
      statusColor: 'purple-500',
      borderColor: 'hover:border-purple-500'
    },
    {
      id: 6,
      name: 'Ryan Torres',
      rank: 'Mobile Operations Lead',
      specialization: 'Mobile Development & User Experience',
      avatar: '/src/assets/images/team/ryan-torres.jpg',
      experience: '9+ Years',
      achievements: ['Cross-platform Expert', 'App Store Featured', 'UX Design Award'],
      skills: ['React Native', 'Flutter', 'Mobile Security'],
      statusColor: 'fire-orange',
      borderColor: 'hover:border-fire-orange'
    }
  ]

  // Default join team benefits (fallback)
  const defaultJoinTeamBenefits = [
    {
      icon: 'fa-solid fa-brain',
      icon_color: 'text-fire-orange',
      icon_bg: 'bg-fire-orange/20',
      title: 'Elite Expertise',
      description: 'Top 1% technical talent with proven track records'
    },
    {
      icon: 'fa-solid fa-rocket',
      icon_color: 'text-steel-blue', 
      icon_bg: 'bg-steel-blue/20',
      title: 'Mission Critical',
      description: 'Work on high-impact projects that shape the future'
    },
    {
      icon: 'fa-solid fa-trophy',
      icon_color: 'text-tactical-green',
      icon_bg: 'bg-tactical-green/20', 
      title: 'Victory Rewards',
      description: 'Competitive compensation and equity opportunities'
    }
  ]

  const acfTeamMembers = processTeamMembers(acf)
  const acfJoinTeamBenefits = processJoinTeamBenefits(acf)
  const displayTeamMembers = acfTeamMembers.length > 0 ? acfTeamMembers : defaultTeamMembers
  const displayJoinTeamBenefits = acfJoinTeamBenefits.length > 0 ? acfJoinTeamBenefits : defaultJoinTeamBenefits

  return (
    <section className="py-20 bg-tactical-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-tactical-gray rounded-full px-6 py-3 mb-6">
            <i className={`${team_section_badge_icon} text-tactical-green`}></i>
            <span className="font-display text-sm tracking-wider text-white">{team_section_badge_text}</span>
          </div>
          <h2 className="font-display font-black text-5xl lg:text-6xl mb-6">
            <span className="text-white">{team_section_title_line1}</span>
            <span className="text-tactical-green"> {team_section_title_line2}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            {team_section_description}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayTeamMembers.map((member) => (
            <div 
              key={member.id}
              className={`bg-tactical-gray border border-tactical-light rounded-xl overflow-hidden ${member.borderColor} transition-all group cursor-pointer`}
            >
              {/* Member Avatar */}
              <div className="relative">
                <div className={`h-64 bg-gradient-to-br from-${member.statusColor}/20 to-tactical-dark flex items-center justify-center`}>
                  <img 
                    className="w-32 h-32 rounded-full border-4 border-tactical-light object-cover" 
                    src={member.avatar}
                    alt={member.name}
                  />
                </div>
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`w-4 h-4 bg-${member.statusColor} rounded-full border-2 border-tactical-gray`}></div>
                </div>
              </div>
              
              {/* Member Content */}
              <div className="p-6">
                {/* Rank Badge */}
                <div className="mb-4">
                  <Badge className={`bg-${member.statusColor}/20 text-${member.statusColor}`}>
                    {member.rank}
                  </Badge>
                </div>
                
                {/* Name & Specialization */}
                <h3 className="font-display font-bold text-xl mb-2 text-white">
                  {member.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {member.specialization}
                </p>
                
                {/* Experience */}
                <div className="flex items-center space-x-2 mb-4">
                  <i className="fa-solid fa-medal text-warning-amber text-sm"></i>
                  <span className="text-warning-amber font-bold text-sm">{member.experience}</span>
                  <span className="text-gray-400 text-sm">Combat Experience</span>
                </div>
                
                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-white font-bold text-sm mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {member.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <i className={`fa-solid fa-star text-${member.statusColor} text-xs`}></i>
                        <span className="text-gray-300 text-xs">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Skills */}
                <div>
                  <h4 className="text-white font-bold text-sm mb-2">Core Skills:</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-tactical-dark text-gray-300 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="bg-gradient-to-br from-tactical-green/20 to-tactical-dark border border-tactical-green rounded-xl p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-tactical-green/20 rounded-lg flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-plus text-tactical-green text-2xl"></i>
            </div>
            
            <h3 className="font-display font-bold text-3xl mb-4 text-white">
              {join_team_title}
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              {join_team_description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {displayJoinTeamBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className={`w-12 h-12 ${benefit.icon_bg || 'bg-fire-orange/20'} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <i className={`${benefit.icon || 'fa-solid fa-star'} ${benefit.icon_color || 'text-fire-orange'}`}></i>
                  </div>
                  <h4 className="font-bold text-white mb-2">{benefit.title}</h4>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="border-tactical-green text-tactical-green hover:bg-tactical-green hover:text-tactical-dark">
                {join_team_button_1_text}
              </Button>
              <Button variant="secondary" size="lg">
                {join_team_button_2_text}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ACFTeamSection