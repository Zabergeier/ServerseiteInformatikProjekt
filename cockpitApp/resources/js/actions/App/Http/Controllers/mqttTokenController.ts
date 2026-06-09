import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\mqttTokenController::issueTokenForRobotClient
 * @see app/Http/Controllers/mqttTokenController.php:49
 * @route '/api/mqtt/token'
 */
export const issueTokenForRobotClient = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: issueTokenForRobotClient.url(options),
    method: 'post',
})

issueTokenForRobotClient.definition = {
    methods: ["post"],
    url: '/api/mqtt/token',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\mqttTokenController::issueTokenForRobotClient
 * @see app/Http/Controllers/mqttTokenController.php:49
 * @route '/api/mqtt/token'
 */
issueTokenForRobotClient.url = (options?: RouteQueryOptions) => {
    return issueTokenForRobotClient.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\mqttTokenController::issueTokenForRobotClient
 * @see app/Http/Controllers/mqttTokenController.php:49
 * @route '/api/mqtt/token'
 */
issueTokenForRobotClient.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: issueTokenForRobotClient.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\mqttTokenController::issueTokenForRobotClient
 * @see app/Http/Controllers/mqttTokenController.php:49
 * @route '/api/mqtt/token'
 */
    const issueTokenForRobotClientForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: issueTokenForRobotClient.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\mqttTokenController::issueTokenForRobotClient
 * @see app/Http/Controllers/mqttTokenController.php:49
 * @route '/api/mqtt/token'
 */
        issueTokenForRobotClientForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: issueTokenForRobotClient.url(options),
            method: 'post',
        })
    
    issueTokenForRobotClient.form = issueTokenForRobotClientForm
/**
* @see \App\Http\Controllers\mqttTokenController::issueTokenForBrowserClient
 * @see app/Http/Controllers/mqttTokenController.php:14
 * @route '/mqtt/token'
 */
export const issueTokenForBrowserClient = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: issueTokenForBrowserClient.url(options),
    method: 'post',
})

issueTokenForBrowserClient.definition = {
    methods: ["post"],
    url: '/mqtt/token',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\mqttTokenController::issueTokenForBrowserClient
 * @see app/Http/Controllers/mqttTokenController.php:14
 * @route '/mqtt/token'
 */
issueTokenForBrowserClient.url = (options?: RouteQueryOptions) => {
    return issueTokenForBrowserClient.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\mqttTokenController::issueTokenForBrowserClient
 * @see app/Http/Controllers/mqttTokenController.php:14
 * @route '/mqtt/token'
 */
issueTokenForBrowserClient.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: issueTokenForBrowserClient.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\mqttTokenController::issueTokenForBrowserClient
 * @see app/Http/Controllers/mqttTokenController.php:14
 * @route '/mqtt/token'
 */
    const issueTokenForBrowserClientForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: issueTokenForBrowserClient.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\mqttTokenController::issueTokenForBrowserClient
 * @see app/Http/Controllers/mqttTokenController.php:14
 * @route '/mqtt/token'
 */
        issueTokenForBrowserClientForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: issueTokenForBrowserClient.url(options),
            method: 'post',
        })
    
    issueTokenForBrowserClient.form = issueTokenForBrowserClientForm
const mqttTokenController = { issueTokenForRobotClient, issueTokenForBrowserClient }

export default mqttTokenController