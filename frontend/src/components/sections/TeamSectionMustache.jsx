import { useContent } from '../../hooks/useContent'
import { Button, Badge } from '../ui'

const TeamSectionMustache = () => {
  const content = useContent()

  if (!content) {
    return (
      <section className="py-20 bg-tactical-dark">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-fire-orange"></div>
          <p className="text-gray-300 mt-4">Loading team...</p>
        </div>
      </section>
    )
  }

  const team = content.team

  return (
    <section className="py-20 bg-tactical-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-tactical-gray rounded-full px-6 py-3 mb-6">
            <i className={`${team.badgeIcon} text-tactical-green`}></i>
            <span className="font-display text-sm tracking-wider text-white">{team.badgeText}</span>
          </div>
          <h2 className="font-display font-black text-5xl lg:text-6xl mb-6">
            <span className="text-white">{team.titleLine1}</span>
            <span className="text-tactical-green"> {team.titleLine2}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            {team.description}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {team.teamMembers.map((member, index) => (
            <div
              key={index}
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
                    {member.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-center space-x-2">
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
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
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
              {team.joinTeamTitle}
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              {team.joinTeamDescription}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {team.joinTeamBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className={`w-12 h-12 ${benefit.iconBg} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <i className={`${benefit.icon} ${benefit.iconColor}`}></i>
                  </div>
                  <h4 className="font-bold text-white mb-2">{benefit.title}</h4>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="border-tactical-green text-tactical-green hover:bg-tactical-green hover:text-tactical-dark">
                {team.joinTeamButton1Text}
              </Button>
              <Button variant="secondary" size="lg">
                {team.joinTeamButton2Text}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSectionMustache