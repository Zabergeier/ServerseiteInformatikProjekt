import mqttTokenController from './mqttTokenController'
import robotController from './robotController'
import Settings from './Settings'
const Controllers = {
    mqttTokenController: Object.assign(mqttTokenController, mqttTokenController),
robotController: Object.assign(robotController, robotController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers