export function convertUserSkillsData(serverResponse) {
  return serverResponse.results.map((item) => {
    return {
      groupId: item.skill.group.id,
      groupName: item.skill.group.name,
      skillId: item.skill.id,
      userSkillId: item.userskill_id,
      clicked: false,
      title: item.skill.name,
      shortTitle: item.skill.group.name,
      descriptionShort: `${item.skill.description.split('.')[0]}.`,
      descriptionFull: item.skill.description,
      status: item.skill.level,
      type: item.skill.type,
      resources: item.skill.resource_library.map((i) => {
        return {
          id: i.id,
          title: i.description,
          source: i.url,
          duration: i.learning_time,
          completed: i.learning_status,
        }
      })
    }
  })
}

export function convertNewSkillsData(serverResponse) {
  return serverResponse.results.map((item) => {
    return {
      groupId: item.group.id,
      groupName: item.group.name,
      skillId: item.id,
      clicked: false,
      title: item.name,
      shortTitle: item.group.name,
      descriptionShort: `${item.description.split('.')[0]}.`,
      descriptionFull: item.description,
      status: item.level,
      type: item.type,
      resources: item.resource_library.map((i) => {
        return {
          id: i.id,
          title: i.description,
          source: i.url,
          duration: i.learning_time,
          completed: i.learning_status,
        }
      })
    }
  })
}