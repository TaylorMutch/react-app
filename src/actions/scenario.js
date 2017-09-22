import { get } from '../io'
import { handleJSON } from '../utils'

export const REQUEST_PROJECT = 'REQUEST_PROJECT'
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT'
export const REQUEST_DEFINITIONS = 'REQUEST_DEFINITIONS'
export const RECEIVE_DEFINITIONS = 'RECEIVE_DEFINITIONS'
export const REQUEST_SCENARIO = 'REQUEST_SCENARIO'
export const RECEIVE_SCENARIO = 'RECEIVE_SCENARIO'
export const REQUEST_CONFIGURATION = 'REQUEST_CONFIGURATION'
export const RECEIVE_CONFIGURATION = 'RECEIVE_CONFIGURATION'

export const requestProject = () => {
    return {
        type: REQUEST_PROJECT
    }
}

export const receiveProject = project => {
    return {
        type: RECEIVE_PROJECT,
        project
    }
}

export const requestDefinitions = () => {
    return {
        type: REQUEST_DEFINITIONS
    }
}

export const receiveDefinitions = definitions => {
    return {
        type: RECEIVE_DEFINITIONS,
        definitions
    }
}

export const requestScenario = () => {
    return {
        type: REQUEST_SCENARIO
    }
}

export const receiveScenario = scenario => {
    return {
        type: RECEIVE_SCENARIO,
        scenario
    }
}

export const requestConfiguration = () => {
    return {
        type: REQUEST_CONFIGURATION
    }
}

export const receiveConfiguration = configuration => {
    return {
        type: RECEIVE_CONFIGURATION,
        configuration
    }
}

export const fetchScenarios = () => {
    return (dispatch, getState) => {

        // get the current library and the first project

        let { library } = getState();
        let current = library.availableLibraries.find(x => x.name === library.name);
        let projectUrl = current.projects[0];

        // Get Project from API
        dispatch(requestProject());
        get(projectUrl).then(handleJSON).then(project => {

            dispatch(receiveProject(project));

            // Get project definitions
            dispatch(requestDefinitions());
            let defsUrl = projectUrl + 'definitions/';
            get(defsUrl).then(handleJSON)
            .then(definitions => dispatch(receiveDefinitions(definitions))).catch(err => {
                console.log(err);
                dispatch(receiveDefinitions(null));
            })
            console.log(project);
            let scenarioUrl = project.scenarios[0];
            get(scenarioUrl).then(handleJSON).then(scenario => {
                dispatch(receiveScenario(scenario));

                let scenarioConfigUrl = scenarioUrl + 'config/';
                get(scenarioConfigUrl).then(handleJSON)
                .then(configuration => dispatch(receiveConfiguration(configuration)))
                .catch(err => {
                    console.log(err);
                    dispatch(receiveConfiguration(null));
                })

            }).catch(err => {
                console.log(err);
                dispatch(receiveScenario(null));
            })

        }).catch(err => {
            console.log(err)
            dispatch(receiveProject(null))
        })
    }
}
