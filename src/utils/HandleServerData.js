export function convertUserSkillsData(serverResponse) {
  return serverResponse.results.map((item) => {
    return {
      groupId: item.skill.group.id,
      groupName: item.skill.group.name,
      skillId: item.skill.id,
      title: item.skill.name,
      shortTitle: item.skill.group.name,
      descriptionShort: `${item.skill.description.split('.')[0]}.`,
      descriptionFull: item.skill.description,
      status: item.skill.level,
      type: item.skill.type,
      resources: item.skill.resource_library.map((i) => {
        return {
          title: i.description,
          source: i.url,
          duration: i.learning_time,
          completed: i.completed,
        }
      })
    }
  })
}